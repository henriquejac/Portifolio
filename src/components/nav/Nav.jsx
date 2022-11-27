import React from 'react'
import './nav.css'
import {TbBuildingCastle} from 'react-icons/tb'
import {GiVampireDracula, GiFangs} from 'react-icons/gi'
import {RiContactsLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}><TbBuildingCastle /></a>
      <a href="#resume" onClick={() => setActiveNav('#resume') } className={activeNav === '#resume' ? 'active' : ''}><GiVampireDracula /></a>
      <a href="#know" onClick={() => setActiveNav('#know') } className={activeNav === '#know' ? 'active' : ''}><GiFangs /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects') } className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>

    </nav>
  )
}

export default Nav