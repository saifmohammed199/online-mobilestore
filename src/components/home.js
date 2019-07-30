import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Home extends Component {
    render(props) {
        let data=this.props.data
        return (
            <div className="flex flex-wrap">
                
                {data.map((dataValue)=>                
                <div key={dataValue.id} className=" br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l pd3 ma4 mw5">
                <h1>{dataValue.name}</h1>
                <p>{dataValue.description}</p>
                <Link to="/cart" 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue m3">Add to Cart</Link>
                <Link to='/purchase' 
                className="f6 ma1 link dim ph3 pv2 mb2 dib white bg-dark-blue m3"
                onClick={(data)=>this.props.action(dataValue)}>Purchase Now</Link>
                </div>
                )}
            </div>
        )
    }
}

export default Home
