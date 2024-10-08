import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OpenRecipe from "./pages/OpenRecipe/OpenRecipe";
import SingleRecipe from "./pages/SingleRecipe/SingleRecipe";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpenRecipe />} />
        <Route path="recipes/:id" element={<SingleRecipe />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
