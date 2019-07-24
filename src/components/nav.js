import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="dt w-100 border-box bg-green pa3 ph5-ns">
                    <Link to='/home'className="dtc v-mid mid-gray link dim w-25"  title="Home">
                    <img src={logo} className="dib w2 h2 br-100" alt="Site Name"/></Link>
                 <div className="dtc v-mid w-75 tr">
                    <Link to='/cart' className="link dim dark-gray f6 f5-ns dib"title="Contact">Cart</Link>
                 </div>
                </nav>
            </div>
        )
    }
}
