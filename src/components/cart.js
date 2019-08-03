import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cart extends Component {
  render () {
    const total = this.props.purchaseItems.reduce((initialValue, item) => {
      return initialValue + item.amount
    }, 0)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.purchaseItems.map(items => (
              <tr>
                <td>{items.name}</td>
                <td>{items.description}</td>
                <td>{items.amount}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
        <Link to='/purchase'>Buy Now</Link>
      </div>
    )
  }
}

export default Cart
