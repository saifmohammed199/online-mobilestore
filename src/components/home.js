import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {
  onClickPurchase = dataValue => {
    if (this.props.signin === true) {
      console.log('clocled')
      this.props.action(dataValue)
      this.props.history.push('/purchase')
    } else {
      console.log('not working')
      this.props.action(dataValue)
      this.props.history.push('/signin')
    }
  }
  render (props) {
    let data = this.props.data

    return (
      <div className='flex flex-wrap'>
        {data.map(dataValue => (
          <div
            key={dataValue.id}
            className=' br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l pd3 ma4 mw5'
          >
            <h1>{dataValue.name}</h1>
            <p>{dataValue.description}</p>
            <Link
              to='/cart'
              className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue m3'
              onClick={data => this.props.action(dataValue)}
            >
              Add to Cart
            </Link>
            <button
              to='/purchase'
              className='f6 ma1 link dim ph3 pv2 mb2 dib white bg-dark-blue m3'
              onClick={data => this.onClickPurchase(dataValue)}
            >
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Home)
