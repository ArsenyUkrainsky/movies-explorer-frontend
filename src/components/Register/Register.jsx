import React, { useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import { Link } from 'react-router-dom'

const Register = ({ onRegister }) => {
  const [data, setData] = useState({ user: '', password: '', email: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const { user, password, email } = data
    onRegister(user, password, email)
  }
  return (
    <AuthForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      onSubmit={handleSubmit}
      onChange={handleChange}
      data={data}>
      <span className="auth__caption">
        Уже зарегистрированы?<>&nbsp;</>
        <Link className="auth__caption-link" to="/signin">
          Войти
        </Link>
      </span>
    </AuthForm>
  )
}

export default Register
