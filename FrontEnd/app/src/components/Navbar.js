import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg bg-light">
        <div className='container'>
            <NavLink to="/" className="nav-link">
                Create
            </NavLink>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to="/articles" className="nav-link">Posts</NavLink>
                </li>
            </ul>
        </div>

     </nav>
  )
}

export default Navbar