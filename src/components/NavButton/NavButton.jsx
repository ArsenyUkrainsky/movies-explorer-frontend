import './NavButton.css'
import React from 'react'

const NavButton = ({ scrollTo, aboutProjectRef }) => {
  return (
    <button className="nav-button" onClick={() => scrollTo(aboutProjectRef.current)}>
      Узнать больше
    </button>
  )
}

export default NavButton
