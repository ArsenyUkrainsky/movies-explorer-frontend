import React from 'react'
import './AuthForm.css'
import { useLocation } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'

const AuthForm = ({ title, btnText, children, onSubmit, onChange, data }) => {
  const location = useLocation()
  const isRegister = location.pathname === '/signup'
  return (
    <div className="auth">
      <HomeButton />
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={onSubmit}>
        {isRegister && (
          <>
            <label for="user-name" className="auth__field-label">
              Имя
            </label>
            <input
              type="text"
              id="user-name"
              name="user"
              required
              autoComplete="on"
              minLength="2"
              maxLength="60"
              className="auth__field"
              onChange={onChange}
              value={data.name}></input>
          </>
        )}
        <label for="user-email" className="auth__field-label">
          E-mail
        </label>
        <input
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          type="email"
          id="user-email"
          name="email"
          required
          autoComplete="off"
          minLength="3"
          maxLength="30"
          className="auth__field"
          onChange={onChange}
          value={data.email}></input>
        <label for="user-password" className="auth__field-label">
          Пароль
        </label>
        <input
          type="password"
          id="user-password"
          name="password"
          required
          autoComplete="off"
          minLength="6"
          maxLength="60"
          className="auth__field"
          onChange={onChange}
          value={data.password}></input>
        <button className="auth__submit" type="submit">
          {btnText}
        </button>
      </form>
      {children}
    </div>
  )
}
export default AuthForm
