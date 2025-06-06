import './App.css';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componantes/NavBar';
import Home2 from './componantes/pages/Home2';
import Services from './componantes/pages/Services';
import Products from './componantes/pages/Products';
import SignUp from './componantes/pages/SignUp';
import Footer from './componantes/Footer';
import { Hatch } from 'ldrs/react'
import 'ldrs/react/Hatch.css'



function App() {
  const [loading,setloading]= useState (true) 
  useEffect (()=>{
  const handelLeLoad=()=>{
    setloading(false)
  }
  if(document.readyState==='complete'){
    setloading(false)
  }else{
    window.addEventListener('load',handelLeLoad)
    return ()=>window.removeEventListener('load',handelLeLoad)
  }
      window.addEventListener('load',handelLeLoad)
    return ()=>window.removeEventListener('load',handelLeLoad)


  },[])


  if (loading) {
    return (
    
   <div className={`main-content ${!loading ? '' : 'slide-down'}`}>

        <Hatch size="60" stroke="4" speed="3.5" color="white" />
      </div>
    );
  }



  return (
    <Router>


      <NavBar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
