import React, { useState } from 'react'
import './Profile.css'

const Profile = ({ user, onSubmit, onChange /* onLogOut */ }) => {
  /*   function handleChange(e) {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  } */
  //TODO: test element
  let activeError = true
  const [showButton, setBtnState] = useState(false)
  const editProfile = () => {
    setBtnState(!showButton)
  }
  const logoutProfile = (e) => {
    e.preventDefault()
    console.log('выйти из профиля')
    /* onLogOut() */
  }
  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${user.person}!`}</h2>
      <form className="profile__form" onSubmit={onSubmit}>
        <fieldset className="profile__input-area">
          <label for="user-name" className="profile__field-label">
            Имя
          </label>
          <input
            type="text"
            id="user-name"
            name="user"
            required
            autoComplete="off"
            minLength="2"
            maxLength="60"
            className="profile__field"
            onChange={onChange}
            value={user.person}></input>
        </fieldset>
        <fieldset className="profile__input-area">
          <label for="user-email" className="profile__field-label">
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
            className="profile__field"
            onChange={onChange}
            value={user.email}></input>
        </fieldset>
        {!showButton && (
          <button className="profile__edit" type="button" onClick={editProfile}>
            Редактировать
          </button>
        )}
        {!showButton && (
          <button className="profile__logout" type="button" onClick={logoutProfile}>
            Выйти из аккаунта
          </button>
        )}

        {showButton && activeError && (
          <span className="profile__submit-error"> При обновлении профиля произошла ошибка.</span>
        )}

        {showButton && (
          <button
            className={!activeError ? 'profile__submit' : 'profile__submit profile__submit_disable'}
            type="submit">
            Сохранить
          </button>
        )}
      </form>
    </div>
  )
}
export default Profile
