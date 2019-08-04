import React, { Component } from 'react';

class Purchase extends Component {
    render() {
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
         <tbody>{this.props.purchaseItems.map((items)=>(
           <tr>
              <td>{items.name}</td>
              <td>{items.description}</td>
              <td>{items.amount}</td>
              <td>{this.amount.reduce(items.amount)}</td>
            </tr>
            ))}
           <tr>
             <td>Total</td>
             
            </tr>
          </tbody>
        </table>
        <div className="pa4 black-80">
                <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(mandatary)</span></label>
                    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                    <label htmlFor="name" className="f6 b db mb2">Address <span className="normal black-60">(mandatary)</span></label>
                    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                </div>
                </div>
                <button>Next</button>
            </div>
        );
    }
}



export default Purchase;