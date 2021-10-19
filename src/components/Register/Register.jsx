import React from 'react'
import AuthForm from '../AuthForm/AuthForm'
import { Link } from 'react-router-dom'

const Register = ({ onRegister, err }) => {
  function handleSubmit(values) {
    const { name, email, password } = values
    onRegister({ name, email, password })
  }
  return (
    <AuthForm title='Добро пожаловать!' btnText='Зарегистрироваться' onSubmit={handleSubmit} err={err}>
      <span className='auth__caption'>
        Уже зарегистрированы?<>&nbsp;</>
        <Link className='auth__caption-link' to='/signin'>
          Войти
        </Link>
      </span>
    </AuthForm>
  )
}

export default Register
