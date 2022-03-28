import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa' 
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"target="_blank" ><AiFillInstagram/></a>
        <a href="https://github.com"target="_blank" ><FaGithub/></a>
        <a href="https://web.telegram.org/"target="_blank" ><BsTelegram/></a>

    </div>
  )
}

export default HeaderSocials