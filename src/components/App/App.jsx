import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ColorsPage from "../../pages/Colors/ColorsPage";
import Library from "../../pages/Library/Library";
import NotFound from "../../pages/NotFound/NotFound";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import { getCurrentUser, login, register } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    getCurrentUser(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setCurrentUser(null);
        setIsLoggedIn(false);
      });
  }, []);

  const handleRegister = ({ email, password, name }) => {
    return register({ email, password, name });
  };

  const handleLogin = ({ email, password }) => {
    return login({ email, password }).then((data) => {
      localStorage.setItem("jwt", data.token);

      return getCurrentUser(data.token).then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      });
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                onRegister={handleRegister}
                onLogout={handleLogout}
              />
            }
          />

          <Route path="/colors" element={<ColorsPage />} />

          <Route
            path="/login"
            element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
          />

          <Route
            path="/library"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Library />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
