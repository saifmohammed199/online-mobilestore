import React, { Component } from 'react'
import './App.css'
import Navbar from './components/nav'
import 'tachyons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Cart from './components/cart'
import Home from './components/home'
import Purchase from './components/purchase'

const data = [
  {
    id: 1,
    name: 'lenovo',
    description:
      'lenovo vibe k5+ has latest features, 2gb ram with 32gb internal memory'
  },
  {
    id: 2,
    name: 'MI',
    description:
      'note 4 has latest features, 2gb ram with 32gb internal memory'
  },
  {
    id: 3,
    name: 'Samsung',
    description: 'A20 has latest features, 2gb ram with 32gb internal memory'
  },
  {
    id: 4,
    name: 'Moto',
    description:
      'Moto G has latest features, 2gb ram with 32gb internal memory'
  },
  {
    id: 5,
    name: 'Nokia',
    description:
      'Nokia 7 has latest features, 2gb ram with 32gb internal memory'
  }
]
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data,
      purchaseItems: []
    }
  }
  handler = (purchaseItem) => {
    this.setState({
      purchaseItems: [
        ...this.state.purchaseItems,
        purchaseItem
      ]
    })
  }
  render () {
    const { data, purchaseItems } = this.state
    return (
      <div className='App'>
        <Router>
         <Navbar/>
          <Switch>
            <Route exact path='/home' render={(props) => <Home data={data} action={this.handler}  />}/>
            <Route path='/cart' render={(props)=><Cart purchaseItems={purchaseItems}/>} /> 
            <Route path='/purchase' render={(props)=><Purchase purchaseItems={purchaseItems}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
