import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

const SavedMovies = ({ savedMovies, onCardLike, searchMovie, fromBeatfilmApi }) => {
  const searchFormText = (text, isShort) => {
    searchMovie(text, isShort)
  }
  return (
    <section className='saved-movies'>
      <SearchForm formSubmit={searchFormText} />
      <MoviesCardList movies={savedMovies} fromBeatfilmApi={fromBeatfilmApi} onCardLike={onCardLike} />
    </section>
  )
}
export default SavedMovies
