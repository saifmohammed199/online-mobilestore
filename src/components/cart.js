import React,{Component} from 'react'
import { Link} from 'react-router-dom'

class Cart extends Component{
    
    render(){
        return(
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            <tbody>{this.props.purchaseItems.map((items)=>(
            <tr>
                <td>{items.name}</td>
                <td>{items.description}</td>
                <td>{items.amount}</td>
            </tr>
            ))}
            <tr>
                <td>Total</td>
                <td>{}</td>
            </tr>
            </tbody>
            </table>
            <Link to='/purchase'>Buy Now</Link>
            </div>
        )
    }
}

export default Cart
