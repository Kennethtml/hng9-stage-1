
import "./App.css";

import Footer from "./component/Footer";

import React from "react";

import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
