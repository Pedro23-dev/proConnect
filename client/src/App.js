import {BrowserRouter, Routes, Route} from "react-router-dom"
import Connexions from './Components/Pages/Connexions';
import Login from './Components/Pages/Login';
import React from 'react';
import Accueil from "./Components/Pages/Acceuil";

function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Connexions/>}/>
    <Route path="/acceuil" element={<Accueil/>}/>

   </Routes>
  </BrowserRouter>
  )  ;

}

export default App;
