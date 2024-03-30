import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolorem repellendus hic ratione, aut animi inventore quae. Atque laborum magni laboriosam corporis, esse est nihil aperiam enim ipsa modi assumenda.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7894</li>
                        <li>comapny89@company.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
        The copyright symbol © or the word "copyright"
        The name of the owner of copyright in the work
        </p>
    </div>
  )
}

export default Footer