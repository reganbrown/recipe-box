import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import OpenRecipe from './pages/OpenRecipe/OpenRecipe';

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from "axios";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path="recipes" element={<OpenRecipe/>} />
        {/* <Route path='CreateReceipe' element={<CreateReceipe/>} /> */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
