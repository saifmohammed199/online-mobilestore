import React,{Component} from 'react'

class Cart extends Component{
    
    render(){
        return(
            <div>
            {/* <p>your in cart {this.props.purchaseItems.length > 0 && this.props.purchaseItems[0].name}</p> */}
            <p>{this.props.purchaseItems.map((items)=><p>{items.name}</p>)}</p>
            </div>
        )
    }
}

export default Cart
