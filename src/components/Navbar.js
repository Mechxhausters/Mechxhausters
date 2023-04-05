import React from 'react'
import './Navbar.css'
// import logo from '../mechx.png'
import logo from '../images/Mechx_WT.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
            <div className="navlogo">
                <img src={logo} id='navlogoimg' alt="" />
            </div>
            <div className="ulitems">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/car">The Car</NavLink></li>
                    <li><NavLink to="/team">The Team</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/sponsers">Sponsors</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </header>
        <div className="space" style={{"height":'15vh',"backgroundColor":"#202124"}}>

        </div>
    </>
  )
}

export default Navbar