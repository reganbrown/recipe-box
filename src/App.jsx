import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import OpenRecipe from './pages/OpenRecipe/OpenRecipe';
import SingleRecipe from './pages/SingleRecipe/SingleRecipe';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path="recipes" element={<OpenRecipe/>} />
        <Route path="recipes/:id" element={<SingleRecipe/>} />
        {/* <Route path='CreateReceipe' element={<CreateReceipe/>} /> */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
