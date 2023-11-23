import React from 'react'
import logo from '../../assets/logo.svg'
import './index.scss'
import iconLoc from '../../assets/icon-location.svg'
import iconPhon from '../../assets/icon-phone.svg'
import iconMail from '../../assets/icon-email.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        
      <div className='footer__content'>

        <figure>
          <img src={logo} alt="erro" />
        </figure>
        <div className='footer__contacts'>
          
          <div style={{width:'27%'}} className='flex contacts'>
            <img src={iconLoc} alt="" />
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='flex column contacts'>
            <div className='flex'>
              <img src={iconPhon} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className='flex'>
              <img src={iconMail} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>

          <nav className='flex'>
            <ul className='flex column contacts'>
              <li><a href="">About us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Blog</a></li>
            </ul>

            <ul className='flex column'>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </nav>
           
          
        
          
        </div>
      </div>  
    </footer>
  )
}

export default Footer