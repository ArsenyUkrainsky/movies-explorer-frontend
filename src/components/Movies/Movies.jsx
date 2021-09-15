import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

const Movies = ({ movies, onCardLike }) => {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} onCardLike={onCardLike} />
    </section>
  )
}
export default Movies
