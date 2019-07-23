import React from 'react';
import './App.css';
import Navbar from './components/nav'
import 'tachyons'
import Home from './components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Purchase from './components/purchase'
function App() {
  return (
    <div className="App">
      <Router>
      <Route component={Navbar}/>
      <Route component={Home} />
       <Route component={Purchase} path='/purchase'/>
      </Router>
    </div>
  );
}

export default App;
