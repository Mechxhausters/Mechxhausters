import React from 'react'
import './Navbar.css'
// import logo from '../mechx.png'
import logo from '../images/Mechx_WT.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
            <div className="navlogo">
                <img src={logo} id='navlogoimg' alt="" />
            </div>
            <div className="ulitems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car">The Car</Link></li>
                    <li><Link to="/team">The Team</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/sponsers">Sponsors</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </header>
        <div className="space" style={{"height":'15vh',"backgroundColor":"#202124"}}>

        </div>
    </>
  )
}

export default Navbar