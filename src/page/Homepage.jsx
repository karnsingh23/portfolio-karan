import React from 'react'
import Hero from '../components/hero/Hero'
import SmokeEffect from '../components/smokeeffect/SmokeEffect'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Work from '../components/work/Work'
import Contact from '../components/contact/Contact'

function Homepage() {
  return (
    <>
    <SmokeEffect/>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    
    </>
  )
}

export default Homepage