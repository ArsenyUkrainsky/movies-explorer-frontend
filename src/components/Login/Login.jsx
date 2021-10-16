import React from 'react'
import AuthForm from '../AuthForm/AuthForm'
import { Link } from 'react-router-dom'

const Login = ({ onLogin, err }) => {
  function handleSubmit(values) {
    const { email, password } = values
    onLogin({ email, password })
  }

  return (
    <AuthForm title='Рады видеть!' btnText='Войти' onSubmit={handleSubmit} err={err}>
      <span className='auth__caption'>
        Ещё не зарегистрированы?<>&nbsp;</>
        <Link className='auth__caption-link' to='/signup'>
          Регистрация
        </Link>
      </span>
    </AuthForm>
  )
}

export default Login
