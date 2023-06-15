import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {
      useEffect(() => {
        AOS.init()
    }, [])
    
  return (
    <div className="cv-app">
       <Navbar/>

       <Routes>
          <Route path="/" element={ <Home /> } current='home' ></Route>
          <Route path="create" element={ <Main /> } current='create'></Route>
       </Routes>
      
    </div>
  );
}

export default App;
