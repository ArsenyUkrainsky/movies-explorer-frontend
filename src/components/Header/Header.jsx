import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'
import './Header.css'

const Header = () => {
  //TODO: test user to see header
  const [authorizeUser, setUser] = useState(true)

  const [burger, setBurger] = useState(false)
  const [mainPage, styleOn] = useState(true)
  const handleBurger = (e) => {
    e.preventDefault()
    setBurger(!burger)
  }

  const location = useLocation()
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        styleOn(true)
        break
      case '/signup':
        styleOn(false)
        break
      case '/signin':
        styleOn(false)
        break
      case '/movies':
        styleOn(false)

        break
      case '/saved-movies':
        styleOn(false)

        break
      case '/profile':
        styleOn(false)

        break
      default:
        styleOn(false)

        break
    }
  }, [location])

  return (
    <header
      className="header"
      style={mainPage ? { backgroundColor: '#073042' } : { backgroundColor: '#fff' }}>
      <HomeButton />
      <ul className="header__items">
        {!authorizeUser ? (
          <>
            <li className="header__item">
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/signin">
                Войти
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="header__item">
              <Link
                className="header__link"
                to="/movies"
                style={location.pathname === '/movies' ? { fontWeight: '500' } : { fontWeight: '400' }}>
                Фильмы
              </Link>
            </li>
            <li className="header__item">
              <Link
                className="header__link"
                to="/saved-movies"
                style={location.pathname === '/saved-movies' ? { fontWeight: '500' } : { fontWeight: '400' }}>
                Сохранённые фильмы
              </Link>
            </li>
            <li className="header__item">
              <Link
                className="header__link"
                to="/profile"
                style={location.pathname === '/profile' ? { fontWeight: '500' } : { fontWeight: '400' }}>
                Аккаунт
              </Link>
            </li>
          </>
        )}
      </ul>
      {false && <button onClick={handleBurger} className="header__burger-button"></button>}
    </header>
  )
}

export default Header
