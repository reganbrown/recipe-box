import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OpenReceipe from "./pages/OpenReceipe/OpenReceipe";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receipes/:receipeId" element={<OpenReceipe />} />
          <Route path="/CreateRecipe" element={<CreateRecipe />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
