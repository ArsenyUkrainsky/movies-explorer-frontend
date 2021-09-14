import React, { useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import { Link } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [data, setData] = useState({ email: '', password: '' })
  function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = data
    onLogin({ email, password })
  }

  return (
    <AuthForm
      title="Рады видеть!"
      btnText="Войти"
      onSubmit={handleSubmit}
      onChange={handleChange}
      data={data}>
      <span className="auth__caption">
        Ещё не зарегистрированы?<>&nbsp;</>
        <Link className="auth__caption-link" to="/signup">
          Регистрация
        </Link>
      </span>
    </AuthForm>
  )
}

export default Login
