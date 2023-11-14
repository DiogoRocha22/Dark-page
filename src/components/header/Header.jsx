import React from 'react'
import logo from  './../../assets/logo.svg'
import './index.scss'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
            <img src={logo} alt="" />

            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign in</li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header