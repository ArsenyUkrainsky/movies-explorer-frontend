import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

const SearchForm = () =>  {
  const [value, setValue] = useState(true);
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__field" type="text" required placeholder="Фильм"></input>
        <button className="search-form__submit" type="submit"></button>
      </form>
      <FilterCheckbox 
        isOn={value}
        handleToggle={() => setValue(!value)}/>
    </section>
  )
}
export default SearchForm
