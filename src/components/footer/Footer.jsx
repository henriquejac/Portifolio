import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#resume">Resumo</a></li>
        <li><a href="#know">Conhecimentos</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contacts">Contato</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/henrique-euclides-615a4b15a/"><BsLinkedin/></a>
        <a href="https://github.com/henriquejac"><BsGithub/></a>
      </div>
    </footer>
  )
}

export default Footer