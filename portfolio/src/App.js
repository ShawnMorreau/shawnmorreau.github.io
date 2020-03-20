import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage/Homepage.js";
import NavBar from "./NavBar/NavBar.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
