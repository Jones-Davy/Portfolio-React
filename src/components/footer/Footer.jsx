import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa' 
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DAVY</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://linkedin.com"target="_blank" ><AiFillInstagram/></a>
        <a href="https://github.com"target="_blank" ><FaGithub/></a>
        <a href="https://web.telegram.org/"target="_blank" ><BsTelegram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Davy Jones. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer