import React from 'react'
import './header.css'
import CTA from './CTA'
import EU from '../../assets/penny_dread.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Oi, eu sou</h5>
        <h1>Henrique Jacquier</h1>
        <h5 className="text-light" > Analista de Web Analytics</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={EU} alt="eu" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header