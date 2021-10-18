import React, { useMemo, useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

const Movies = ({ movies, onCardLike, searchMovie, fromBeatfilmApi, savedMovies /* switchToShort */ }) => {
  const searchFormText = (text) => {
    searchMovie(text)
  }
  const [mov, setMov] = useState([])

  useMemo(() => {
    setMov(movies)
  }, [movies])

  const switchToShort = (short) => setMov(() => (short ? movies.filter((mov) => mov.duration <= 40) : movies))

  return (
    <section className='movies'>
      <SearchForm formSubmit={searchFormText} switchToShort={switchToShort} />
      <MoviesCardList
        movies={mov}
        onCardLike={onCardLike}
        fromBeatfilmApi={fromBeatfilmApi}
        savedMovies={savedMovies}
      />
    </section>
  )
}
export default Movies
