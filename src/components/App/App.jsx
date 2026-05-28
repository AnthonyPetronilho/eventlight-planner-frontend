import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import ColorsPage from "../../pages/Colors/ColorsPage";
import NotFound from "../../pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
