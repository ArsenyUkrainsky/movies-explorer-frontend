import React, { useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import { Link } from 'react-router-dom'

const Register = ({ onRegister, err }) => {
  /* const [data, setData] = useState({ user: '', password: '', email: '' }) */
  /* function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const { user, password, email } = data
    onRegister(user, password, email)
  } */
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
