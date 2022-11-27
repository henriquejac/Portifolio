import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Resume from './components/resume/Resume'
import Knowledges from './components/knowledges/Knowledges'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'




export const App = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <Nav />
        <Resume />
        <Knowledges />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default App