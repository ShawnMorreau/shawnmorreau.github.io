import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar.js";
import Routing from "./Routing/Routing.js";
import SocialMedia from "./SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <SocialMedia/>
      <Routing/>
    </div>
  );
}

export default App;
