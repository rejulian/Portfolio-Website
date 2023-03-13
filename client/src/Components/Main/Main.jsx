import React from 'react'
import AboutMe from './About Me/AboutMe'
import Contact from './Contact/Contact'
import Projects from './Projects/ProjectsContainer'
import Skills from './Skills/Skills'

const Main = () => {
  return (
    <main>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
    </main>
  )
}

export default Main