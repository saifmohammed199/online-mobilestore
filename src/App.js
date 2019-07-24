import React from 'react';
import './App.css';
import Navbar from './components/nav'
import 'tachyons'
import Root from './components/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Cart from './components/cart'
import Home from './components/home'
import Purchase from './components/purchase'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route component={Home} exact path={'/home'}/>
      <Route component={Cart} path={'/cart'}/>
       <Route component={Purchase} path={'/purchase'}/>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
