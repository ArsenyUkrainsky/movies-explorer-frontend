import React from 'react'
import './AuthForm.css'
import { useLocation } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'
import { useFormWithValidation } from '../hooks/formValid'

const AuthForm = ({ title, btnText, children, onSubmit, err }) => {
  const location = useLocation()

  //тут определим текущее положение на сайте
  //при регистрации нужно поле Имя
  const isRegister = location.pathname === '/signup'

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(values)
    resetForm()
  }

  return (
    <div className='auth'>
      <HomeButton />
      <h2 className='auth__title'>{title}</h2>
      <form className='auth__form' onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <label htmlFor='user-name' className='auth__field-label'>
              Имя
            </label>
            <input
              type='text'
              id='user-name'
              name='name'
              required
              autoComplete='off'
              minLength='2'
              maxLength='60'
              className='auth__field'
              onChange={handleChange}
              value={values.name || ''}></input>
            {!values.name || errors.name ? <span className='auth__error'>{errors.name}</span> : <></>}
          </>
        )}
        <label htmlFor='user-email' className='auth__field-label'>
          E-mail
        </label>
        <input
          pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
          type='email'
          id='user-email'
          name='email'
          required
          autoComplete='off'
          minLength='3'
          maxLength='30'
          className='auth__field'
          onChange={handleChange}
          value={values.email || ''}></input>
        {!values.email || errors.email ? <span className='auth__error'>{errors.email}</span> : <></>}
        <label htmlFor='user-password' className='auth__field-label'>
          Пароль
        </label>
        <input
          type='password'
          id='user-password'
          name='password'
          required
          autoComplete='off'
          minLength='6'
          maxLength='60'
          className='auth__field'
          onChange={handleChange}
          value={values.password || ''}></input>
        {!values.password || errors.password ? <span className='auth__error'>{errors.password}</span> : <></>}
        {err ? <span className='auth__error-from-server'>{`Произошла ${err}`}</span> : <></>}
        <button
          className={!isValid ? 'auth__submit_disabled auth__submit' : 'auth__submit'}
          type='submit'
          disabled={!isValid}>
          {btnText}
        </button>
      </form>
      {children}
    </div>
  )
}
export default AuthForm
