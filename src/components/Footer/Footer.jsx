import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './Footer.css'

const Footer = () => {
  let location = useLocation()
  const [loc, setLocation] = useState('')

  useEffect(() => {
    setLocation(location.pathname)
  }, [location])

  return loc === '/' || loc === '/movies' || loc === '/saved-movies' ? (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className='footer__elements'>
        <p className='footer__element'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className='footer__list'>
            <a className='footer__link' target='_blank' rel='noreferrer' href='https://practicum.yandex.ru/'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list'>
            <a
              className='footer__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/ArsenyUkrainsky'>
              Github
            </a>
          </li>
          <li className='footer__list'>
            <a className='footer__link' target='_blank' rel='noreferrer' href='https://t.me/uArseny'>
              Telegram
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  ) : (
    <></>
  )
}
export default Footer
