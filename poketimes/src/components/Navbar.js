import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom'
import Rainbow from '../hoc/Rainbow';

const Navbar = (props) => {

    return (
        <nav className="navbar darken-1 red ">
            <div className="container" >
              <a href="/" className="brand-logo">Poke'Times</a>
              <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/About">About</NavLink></li>
                   <li><a href="/Contact">Contact</a></li>
            </ul>
            </div>
            
        </nav>
    )
}

export default Rainbow(withRouter((Navbar)));