import React from 'react'
import CV from '../../assets/Henrique_jacquier_VisualCV_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar CV</a>
        <a href="#contact" className='btn btn-primary'>Contato</a>
    </div>
  )
}

export default CTA