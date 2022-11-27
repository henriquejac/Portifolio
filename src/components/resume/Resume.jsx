import React from 'react'
import './resume.css'
import ME from '../../assets/coffin.png'
import {GiSandsOfTime} from 'react-icons/gi'
import {MdEmojiEvents} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import Line from '../../assets/line.png'

const Resume = () => {
  return (
    <section id='resume'>
      <img className="line_header" src={Line}></img>
      <h5>Um pouco</h5>
      <h2>Sobre Mim</h2>

      <div className='container resume__container'>
        <div className='resume__me'>
          <div className='resume__me-image'>
            <img src={ME} alt="Imagem de Resumo" />
          </div>
        </div>

        <div className='resume__content'>
          <div className='resume__cards'>
            <article className='resume__card'>
              <GiSandsOfTime className='resume__icon'/>
              <h5>Experiência</h5>
              <small>2+ anos trabalhando</small>
            </article>

            <article className='resume__card'>
              <AiOutlineFundProjectionScreen  className='resume__icon'/>
              <h5>Projetos</h5>
              <small>5+ projetos finalizados</small>
            </article>

            <article className='resume__card'>
              <MdEmojiEvents  className='resume__icon'/>
              <h5>Eventos</h5>
              <small>5+ participações em eventos</small>
            </article>
          </div>

          <p>
          &emsp; Sou um estudante de Analise e Desesenvolvimento de Sistemas pela Faculdade de Tecnologia de Sorocaba. Trabalho atualmente na agência de Marketing Digital Rocky.Monks como Analista de Web Analytics, onde sou responsável pelo tracking do usuário em sites e da análise e estruturação dos dados coletados em dashboards e apresentações para os clientes.
<br />
&emsp; Já tive contato com PHP 7 usando Laravel, NodeJS, React.JS criando RestAPIs e outros tipos mais simples de aplicação. Também já utilizei JAVA em projetos pessoais e estudos, utilizando o NetBeans como IDE. Tenho também certa experiência com SQL e a Google Cloud Plataform, principalmente utilizando o BigQuery.
<br />

&emsp; Participei da Maratona de Programação Interfatecs do ano de 2022, tendo classificado para a Segunda Fase. Participei também da primeira edição do Hackton Acadêmico do curso de ADS da FATEC-SO no ano de 2022.
          </p>

          <a href="#contact" className='btn btn-primary'>Me mande uma mensagem</a>
        </div>
      </div>
    </section>
  )
}

export default Resume