import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

const Movies = ({ movies, onCardLike, searchMovie, fromBeatfilmApi, savedMovies }) => {
  const searchFormText = (text, isShort) => {
    searchMovie(text, isShort)
  }
  return (
    <section className='movies'>
      <SearchForm formSubmit={searchFormText} />
      <MoviesCardList
        movies={movies}
        onCardLike={onCardLike}
        fromBeatfilmApi={fromBeatfilmApi}
        savedMovies={savedMovies}
      />
    </section>
  )
}
export default Movies
