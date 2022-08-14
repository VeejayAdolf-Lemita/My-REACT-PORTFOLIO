import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <Footer>
      

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Veejay Adolf. All rights reserved</small>
      </div>
    </Footer>
  )
}

export default Footer