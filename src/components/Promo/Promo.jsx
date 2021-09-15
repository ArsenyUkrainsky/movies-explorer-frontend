import './Promo.css'
import React from 'react'
import logo from '../../images/logo.svg'
import NavButton from '../NavButton/NavButton'

const Promo = ({ scrollTo, aboutProjectRef }) => {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__content-title">Учебный проект студента факультета Веб‑разработки.</h1>
        <p className="promo__content-subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavButton scrollTo={scrollTo} aboutProjectRef={aboutProjectRef} />
      </div>
      <img className="promo__logo" src={logo} alt="web logo" />
    </section>
  )
}

export default Promo
