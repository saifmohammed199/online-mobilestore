import React, { Component } from 'react'
import './App.css'
import Navbar from './components/nav'
import 'tachyons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Cart from './components/cart'
import Home from './components/home'
import Purchase from './components/purchase'
import Signin from './components/signin'
import Response from './components/responce'

const data = [
  {
    id: 1,
    name: 'lenovo',
    description:
      'lenovo vibe k5+ has latest features, 2gb ram with 32gb internal memory',
    amount: 7999
  },
  {
    id: 2,
    name: 'MI',
    description:
      'note 4 has latest features, 2gb ram with 32gb internal memory',
    amount: 10499
  },
  {
    id: 3,
    name: 'Samsung',
    description: 'A20 has latest features, 2gb ram with 32gb internal memory',
    amount: 12499
  },
  {
    id: 4,
    name: 'Moto',
    description:
      'Moto G has latest features, 2gb ram with 32gb internal memory',
    amount: 25999
  },
  {
    id: 5,
    name: 'Nokia',
    description:
      'Nokia 7 has latest features, 2gb ram with 32gb internal memory',
    amount: 14999
  }
]
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data,
      purchaseItems: [],
      signin: false
    }
  }
  handler = purchaseItem => {
    this.setState({
      purchaseItems: [...this.state.purchaseItems, purchaseItem]
    })
  }
  render () {
    const { data, purchaseItems } = this.state
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/home'
              render={props => (
                <Home
                  data={data}
                  action={this.handler}
                  signin={this.state.signin}
                />
              )}
            />
            <Route
              path='/cart'
              render={props => (
                <Cart purchaseItems={purchaseItems} action={this.handler} />
              )}
            />
            <Route
              path='/purchase'
              render={props => <Purchase purchaseItems={purchaseItems} />}
            />
            <Route path='/signin' component={Signin} />
            <Route path='/responce' component={Response} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
