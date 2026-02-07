import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ServicesPage from "./Pages/Service";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/contact" element={<ContactPage/> }/>
        
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
