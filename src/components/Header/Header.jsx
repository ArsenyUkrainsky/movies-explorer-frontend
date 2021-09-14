import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'
import './Header.css'

const Header = () => {
  //TODO: test user to  header
  const [authorizeUser, setUser] = useState(true)

  const [burger, setBurger] = useState(false)
  const handleBurger = (e) => {
    e.preventDefault()
    setBurger(!burger)
  }

  const location = useLocation()
  const mainLocation = location.pathname === '/'

  return (
    <header className={mainLocation ? 'header header_main header_mobile' : 'header header_mobile'}>
      <HomeButton />
      <ul className="header__items">
        {!authorizeUser ? (
          <>
            <li className="header__item">
              <NavLink className="header__link" to="/signup">
                Регистрация
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to="/signin">
                Войти
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="header__item">
              <NavLink
                className={mainLocation ? 'header__link header__link_white' : 'header__link'}
                activeClassName="header__link_active"
                to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={mainLocation ? 'header__link header__link_white' : 'header__link'}
                activeClassName="header__link_active"
                to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={mainLocation ? 'header__link header__link_white' : 'header__link'}
                activeClassName="header__link_active"
                to="/profile">
                Аккаунт
              </NavLink>
              <span className="header__icon"></span>
            </li>
          </>
        )}
      </ul>
      {false && <button onClick={handleBurger} className="header__burger-button"></button>}
    </header>
  )
}

export default Header
