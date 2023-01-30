import React from 'react';
import './footer.css';
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Shruti</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/shrutisoni235/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/shruti-soni-b395501b7/"><AiOutlineLinkedin/></a>
        <a href="https://wa.link/fid4ni"><BsWhatsapp/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; SHRUTI SONI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer