import React from 'react'
import './projects.css'
import IMG1 from '../../assets/C_sharp_project.png'
import IMG2 from '../../assets/C_sharp_project.png'
import IMG3 from '../../assets/PWEB_project.png'
import IMG4 from '../../assets/animazone_project.png'




const Projects = () => {
  return (
    <section id='projects'>
      <h5>Meus Projetos Recentes</h5>
      <h2>Portifolio</h2>
      <div className='container portifolio__container'>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt="Projeto Portifólio" />
          </div>
          <h3>Site Portifólio</h3>
          <div className="portifolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG2} alt="Projeto C#" />
          </div>
          <h3>Projetos de Faculdade em C#</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/henriquejac/LP2" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG3} alt="Projeto Programação para Web" />
          </div>
          <h3>Projetos de Faculdade para disciplina de Programação para WEB</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/henriquejac/PWEB" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG4} alt="Projeto Animazone" />
          </div>
          <h3>Animezone API (Em progresso)</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/henriquejac/animezone-api" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects