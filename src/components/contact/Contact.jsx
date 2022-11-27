import React from 'react'
import './contact.css'
import {FaFeatherAlt} from 'react-icons/fa'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import Line from '../../assets/line_crow.png'


const Contact = () => {
  return (
    <section id='contact'>
      <img className="line_header" src={Line}></img>
      <h5>Contatos</h5>
      <h2>Me mande uma mensagem</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <FaFeatherAlt className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>henriquejacquier@gmail.com</h5>
            <a target="_blank" href="mailto:henriquejacquier@gmail.com">Envie um email</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Henrique Euclides</h5>
            <a target="_blank" href="https://www.linkedin.com/in/henrique-euclides-615a4b15a/">Me siga no Linkedin</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>55 (15) 98111-7200</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone+5515981117200">Envie uma mensagem</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact