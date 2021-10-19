import './Main.css'
import React, { useRef } from 'react'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
const Main = () => {
  const aboutProjectRef = useRef(null)
  const scrollTo = (el) => {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="main">
      <Promo scrollTo={scrollTo} aboutProjectRef={aboutProjectRef} />
      <AboutProject aboutProjectRef={aboutProjectRef} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </section>
  )
}

export default Main
