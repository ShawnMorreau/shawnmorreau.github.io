import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar.js";
import Footer from "./Footer/Footer.js";
import Routing from "./Routing/Routing.js";

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
