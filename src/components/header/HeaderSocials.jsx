import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/henrique-euclides-615a4b15a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/henriquejac" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials