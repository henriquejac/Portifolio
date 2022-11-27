import React from 'react'
import './knowledges.css'
import {FaBrain} from 'react-icons/fa'

const Knowledges = () => {
  return (
    <section id='know'>
      <h5>Conhecimentos</h5>
      <h2>Minhas experiências</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Desenvolvimento FrontEnd</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                 <h4>HTML</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Avançado</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Básico</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Básico</small>
              </div>
              
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Desenvolvimento BackEnd</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>BigQuery</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBrain/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediário</small>
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledges