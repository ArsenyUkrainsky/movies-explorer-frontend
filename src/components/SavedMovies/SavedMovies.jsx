import React, { useMemo, useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import { filter } from '../../utils/filter'
import './SavedMovies.css'

const SavedMovies = ({ savedMovies, onCardLike, fromBeatfilmApi }) => {
  const [mov, setMov] = useState([])

  useMemo(() => {
    setMov(savedMovies)
  }, [savedMovies])

  const switchToShort = (short) =>
    setMov(() => (short ? savedMovies.filter((mov) => mov.duration <= 40) : savedMovies))

  // Поиск по сохраненным фильмам
  const searchMovieSaved = (text) => {
    setMov(() => filter(savedMovies, text))
  }
  return (
    <section className='saved-movies'>
      <SearchForm formSubmit={searchMovieSaved} switchToShort={switchToShort} />
      <MoviesCardList movies={mov} fromBeatfilmApi={fromBeatfilmApi} onCardLike={onCardLike} />
    </section>
  )
}
export default SavedMovies
