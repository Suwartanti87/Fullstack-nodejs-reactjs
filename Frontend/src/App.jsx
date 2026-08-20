//INI ADALAH FRONTEND UNTUK MOVIES 
// export default Navbar;
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"


// INI MENGAMBIL FUNCTION DARI DB MOVIES
import Category from "./pages/Category";
import TambahCategory from "./pages/TambahCategory";
import EditCategory from "./pages/EditCategory";
import Movies from "./pages/Movies";
import TambahMovie from "./pages/TambahMovies";
import EditMovies from "./pages/EditMovies";


function App(){
  return (
    <BrowserRouter>
    <Navbar />
        
        <div className="container">
        <Routes>
        <Route path="/category" element ={<Category/>} />
        <Route path="/tambah-category" element={<TambahCategory/>}/>
        <Route path="/edit-category/:id" element={<EditCategory/>}/>

        <Route path="/movies" element ={<Movies/>} />
        <Route path="/tambah-movie" element={<TambahMovie/>}/>
        <Route path="/edit-movies/:id" element={<EditMovies/>}/>

        </Routes>
        </div>
        </BrowserRouter>
)}

export default App;