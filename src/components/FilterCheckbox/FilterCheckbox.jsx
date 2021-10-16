import React, { useState } from 'react'
import './FilterCheckbox.css'

const FilterCheckbox = ({ handleToggle }) => {
  const [value, setValue] = useState(false)
  const onHandleChangeFilter = () => {
    setValue(!value)
    handleToggle(!value)
  }

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__text'>Короткометражки</p>
      <input
        checked={value}
        onChange={onHandleChangeFilter}
        className='filter-checkbox__checkbox'
        id={`filter-checkbox__new`}
        type='checkbox'
      />
      <label className='filter-checkbox__label' htmlFor={`filter-checkbox__new`}>
        <span className={`filter-checkbox__button`} />
      </label>
    </div>
  )
}
export default FilterCheckbox
