import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <h1>ecommerce</h1>
        <nav>
            <ul>
                <li><Link to="/user/login">login</Link></li>
                <li><Link to="/purcharse">Purcharse</Link></li>
                <li><Link to="/cart">cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header