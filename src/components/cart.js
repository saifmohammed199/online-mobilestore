import React,{Component} from 'react'


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
            </div>
        )
    }
}

export default Cart
