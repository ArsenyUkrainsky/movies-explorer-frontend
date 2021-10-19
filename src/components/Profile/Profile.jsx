import React, { useState, useContext } from 'react'
import './Profile.css'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../hooks/formValid'

const Profile = ({ onSubmit, logoutProfile, err }) => {
  const currentUser = useContext(CurrentUserContext)
  const { values, handleChange, errors, isValid } = useFormWithValidation(currentUser)

  const [isDisabledInput, setInputState] = useState(true)

  const editProfile = () => {
    setInputState(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <div className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
      <form className='profile__form' onSubmit={handleSubmit}>
        <fieldset className='profile__input-area'>
          <label htmlFor='user-name' className='profile__field-label'>
            Имя
          </label>
          <input
            disabled={isDisabledInput}
            type='text'
            id='user-name'
            name='name'
            required
            autoComplete='off'
            minLength='2'
            maxLength='60'
            className='profile__field'
            onChange={handleChange}
            value={values.name || ''}></input>
        </fieldset>
        {!values.name || errors.name ? <span className='profile__error'>{errors.name}</span> : <></>}
        <fieldset className='profile__input-area'>
          <label htmlFor='user-email' className='profile__field-label'>
            E-mail
          </label>
          <input
            disabled={isDisabledInput}
            pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
            type='email'
            id='user-email'
            name='email'
            required
            autoComplete='off'
            minLength='3'
            maxLength='30'
            className='profile__field'
            onChange={handleChange}
            value={values.email || ''}></input>
        </fieldset>
        {!values.email || errors.email ? <span className='profile__error'>{errors.email}</span> : <></>}
        {isDisabledInput && (
          <button className='profile__edit' type='button' onClick={editProfile}>
            Редактировать
          </button>
        )}
        {isDisabledInput && (
          <button className='profile__logout' type='button' onClick={logoutProfile}>
            Выйти из аккаунта
          </button>
        )}

        {err ? (
          <span className='profile__error-from-server'>{`При обновлении профиля произошла ${err}`}</span>
        ) : (
          <></>
        )}
        {!isDisabledInput && (
          <button
            disabled={!isValid}
            className={isValid ? 'profile__submit' : 'profile__submit profile__submit_disable'}
            type='submit'>
            Сохранить
          </button>
        )}
      </form>
    </div>
  )
}
export default Profile
