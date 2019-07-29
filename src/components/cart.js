import React,{Component} from 'react'

class Cart extends Component{
    
    render(){
        console.log(this.props);
        return(
            <div>
            <p>your in cart {this.props.purchaseItems.length > 0 && this.props.purchaseItems[0].name}</p>
            </div>
        )
    }
}

export default Cart
