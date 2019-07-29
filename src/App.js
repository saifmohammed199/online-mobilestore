import React, { Component } from 'react'
import './App.css'
import Navbar from './components/nav'
import 'tachyons'
import Root from './components/root'
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
     console.log("handler ", purchaseItem);

    this.setState({
      purchaseItems: [
        ...this.state.purchaseItems,
        purchaseItem
      ]
    })
  }
  render () {
    const { data, purchaseItems } = this.state
    console.log("render ", purchaseItems);
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Home data={data} action={this.handler} />
          <Purchase purchaseItems={purchaseItems} />
          <Cart purchaseItems={purchaseItems} />
          <Switch>
            {/* <Route component={Home}data={data} exact path={'/home'}/> */}
            <Route component={Cart} path={'/cart'} />
            {/* <Route component={Purchase} path={'/purchase'}/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
