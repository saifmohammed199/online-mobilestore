import React,{Component} from 'react'

class Cart extends Component{
//    constructor(props){
//        super(props);
//        this.state={
//            counter:0
//        }
//    }
    
    render(){
        return(
            <div>
            <p>your in cart{console.log(this.props.purchaseItems)}</p>
            </div>
        )
        
    }
}

export default Cart
