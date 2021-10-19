import React from 'react'
import './NotFound.css'
import { useHistory } from 'react-router-dom'

const NotFound = ({ errorCode = 404, errorMessage = 'Страница не найдена' }) => {
  let history = useHistory()
  const handleClick = () => {
    history.goBack()
  }

  return (
    <section className='notfound'>
      <h3 className='notfound__code'>{errorCode.toString()}</h3>
      <p className='notfound__message'>{errorMessage}</p>
      <button className='notfound__go-back' type='button' onClick={handleClick}>
        Назад
      </button>
    </section>
  )
}

export default NotFound
