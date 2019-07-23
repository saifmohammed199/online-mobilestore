import React, { Component } from 'react'
import Cart from './cart'
//import PropTypes from 'prop-types'
//import Data from '../data/data'

const data =  [  {
    id:1,
    name:"lenovo",
    description:"lenovo vibe k5+ has latest features, 2gb ram with 32gb internal memory"
    },
    {
        id:2,
        name:"MI",
        description:"note 4 has latest features, 2gb ram with 32gb internal memory"
    },
    {
        id:3,
        name:"Samsung",
        description:"A20 has latest features, 2gb ram with 32gb internal memory"
    },
    {
        id:4,
        name:"Moto",
        description:"Moto G has latest features, 2gb ram with 32gb internal memory"
    },
    {
        id:5,
        name:"Nokia",
        description:"Nokia 7 has latest features, 2gb ram with 32gb internal memory"
    }
]
let purchaicedId=[

]//const data =Data.items;
class Home extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             items:[],
//             loading:false
//         }
//     }
// componentDidMount(){
//     this.setState({
//         items:Data.items
//     })
// }
addToCart=(id)=>{
purchaicedId.push(id)
}

    render() {
       // const {items,loading}=this.state
        return (
            <div className="flex flex-wrap">
                {data.map((dataValue)=>                
                <div className=" br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l pd3 ma4 mw5">
                <h1>{dataValue.name}</h1>
                <p>{dataValue.description}</p>
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue m3" href="#0" onClick={()=>{this.addToCart(dataValue.id)}}>Add to Cart</a>
                </div>
                )}
                <Cart items={purchaicedId}/>
                
            </div>
        )
    }
}

export default Home
