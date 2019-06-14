import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{
    
    return(
        <div className="container2">
        <nav>
        <ul >
        <li className="navbar-li li"><Link className="anchor anchor-hover" to="/">Home</Link></li>
        <li className="navbar-li li"><Link className="anchor anchor-hover" to="/about">About</Link></li>
        <li className="navbar-li li"><Link className="anchor anchor-hover" to="/articles">Articles</Link></li>
        </ul>
        </nav>
        </div>
        )
    
}

export default Navbar