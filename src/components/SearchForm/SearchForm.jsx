import React, { useState, useEffect } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

const SearchForm = ({ formSubmit, switchToShort }) => {
  const [text, setInputText] = useState('')
  const [textError, setError] = useState('')

  useEffect(() => {
    setError('Введите ключевое слово для поиска')
  }, [])
  const handleChange = (e) => {
    setInputText(e.target.value)
    if (!e.target.value) {
      setError('Нужно ввести ключевое слово')
    } else setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmit(text)
    setInputText('')
  }

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          className='search-form__field'
          type='text'
          placeholder='Фильм'
          value={text}
          onChange={handleChange}></input>
        <button className='search-form__submit' type='submit' disabled={!text}></button>
        {textError ? <span className='serch-form-error'>{textError}</span> : <></>}
      </form>

      <FilterCheckbox handleToggle={switchToShort} />
    </section>
  )
}
export default SearchForm
