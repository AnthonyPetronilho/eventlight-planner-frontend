import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import ColorsPage from "../../pages/Colors/ColorsPage";
import Library from "../../pages/Library/Library";
import NotFound from "../../pages/NotFound/NotFound";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginModal from "../LoginModal/LoginModal";
import Register from "../Register/Register";
import SuccessModal from "../SuccessModal/SuccessModal";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import { getCurrentUser, login, register } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  const openLoginModal = () => {
    closeAllModals();
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    closeAllModals();
    setIsRegisterModalOpen(true);
  };

  const openSuccessModal = () => {
    closeAllModals();
    setIsSuccessModalOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setIsCheckingToken(false);
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
      })
      .finally(() => {
        setIsCheckingToken(false);
      });
  }, []);

  const handleRegister = ({ email, password, name }) => {
    return register({ email, password, name }).then(() =>
      handleLogin({ email, password }),
    );
  };

  const handleLogin = ({ email, password }) => {
    return login({ email, password }).then((data) => {
      localStorage.setItem("jwt", data.token);

      return getCurrentUser(data.token).then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeAllModals();
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
                onLogout={handleLogout}
                onLoginClick={openLoginModal}
                onRegisterClick={openRegisterModal}
              />
            }
          />

          <Route
            path="/colors"
            element={
              <ColorsPage
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                onLoginClick={openLoginModal}
              />
            }
          />

          <Route
            path="/library"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isCheckingToken={isCheckingToken}
                onUnauthorized={openLoginModal}
              >
                <Library
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  onLoginClick={openLoginModal}
                />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeAllModals}
          onLogin={handleLogin}
          onSwitchToRegister={openRegisterModal}
        />

        <Register
          isOpen={isRegisterModalOpen}
          onClose={closeAllModals}
          onRegister={handleRegister}
          onRegisterSuccess={() => {
            closeAllModals();
          }}
          onSwitchToLogin={openLoginModal}
        />

        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={closeAllModals}
          onLoginClick={openLoginModal}
        />
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
