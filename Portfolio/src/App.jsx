import { useState } from 'react'
import "./app.scss"
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Parallax from './Components/Parallax/Parallax'
import Portfolio from './Components/Portfolio/Portfolio'
import AllSkills from './Components/Skills/AllSkills'
import Contact from './Components/Contact/Contact'


function App() {
  

  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section>
      <Parallax type="portfolio" />
    </section>

    <section id='Portfolio' className='section-portfolio'>
      <Portfolio />
    </section>

    <section>
      <Parallax type="services" />
    </section>

    <section id='Skills'>
      <AllSkills />
    </section>

    <section id='Contact'>
      <Contact />
    </section>
  </div>
}

export default App
