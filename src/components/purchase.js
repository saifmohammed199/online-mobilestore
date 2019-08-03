import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Purchase extends Component {
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
              <tr key={items.id}>
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
        <form className='pa4 black-80 center'>
          <div className='measure'>
            <label htmlFor='name' className='f6 b db mb2'>
              Name <span className='normal black-60'>(mandatary)</span>
            </label>
            <input
              id='name'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='text'
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Address <span className='normal black-60'>(mandatary)</span>
            </label>
            <input
              id='name'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='text'
            />
            <label htmlFor='number' className='f6 b db mb2'>
              Mobile Number <span className='normal black-60'>(mandatary)</span>
            </label>
            <input
              id='number'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='number'
            />

            <div className='pa4'>
              <fieldset id='favorite_movies' className='bn'>
                <legend className='fw7 mb2'>Select Payment Method</legend>
                  <div className='flex items-center mb2'>
                    <input type="radio" name="indoor-outdoor"/>
                    <label> Cash On Delevery</label>
                  </div>
                  <div className='flex items-center mb2'>
                    <input type="radio" name="indoor-outdoor"/>
                    <label> Online</label>
                  </div>
              </fieldset>
            </div>
          </div>
        </form>
        <Link className='f6 ma1 link dim ph3 pv2 mb2 dib white bg-dark-blue m3'
         to="/responce">Order Now</Link>
      </div>
    )
  }
}

export default Purchase
