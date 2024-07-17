import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">

            <div className="navbar-title">
                <Link to='/'>Olive Catering<span className='dot'>.</span></Link>
            </div>
            {/* <img src={assets.logo} alt="LOGO" /> */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
            <h2>Contact Us</h2>
            <ul>
                <li>+1(682)234-5631</li>
                <li>olivecatering16@gmail.com</li>
            </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>2024 &copy; Olive Catering - All Rights Reserved.</p>
    </div>
  )
}

export default Footer