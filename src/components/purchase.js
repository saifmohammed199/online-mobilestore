import React, { Component } from 'react';


class Purchase extends Component {
    render() {
        return (
            <div>
                <form className="pa4 black-80">
                <div className="measure">
                    <label for="name" className="f6 b db mb2">Name <span className="normal black-60">(mandatary)</span></label>
                    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                    <label for="name" className="f6 b db mb2">Address <span className="normal black-60">(mandatary)</span></label>
                    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>

                </div>
                </form>
            </div>
        );
    }
}



export default Purchase;