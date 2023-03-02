import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <h1>ecommerce</h1>
        <nav>
            <ul>
                <li><Link to="/">login</Link></li>
                <li><Link to="/">Purcharse</Link></li>
                <li><Link to="/">cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header