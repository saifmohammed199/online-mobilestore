import React from 'react';
import './App.css';
import Navbar from './components/nav'
import 'tachyons'
import Home from './components/home'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
