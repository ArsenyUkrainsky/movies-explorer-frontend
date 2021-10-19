import React, { useState, useEffect } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

const SearchForm = ({ formSubmit, switchToShort }) => {
  const [text, setInputText] = useState('')
  const [textError, setError] = useState('')

  useEffect(() => {
    setError('')
  }, [])

  const handleChange = (e) => setInputText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-unused-expressions
    text.length > 0 ? (setError(''), formSubmit(text)) : setError('Нужно ввести ключевое слово')
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
        <button className='search-form__submit' type='submit' /* disabled={!text} */></button>
        {textError ? <span className='serch-form-error'>{textError}</span> : <></>}
      </form>

      <FilterCheckbox handleToggle={switchToShort} />
    </section>
  )
}
export default SearchForm
