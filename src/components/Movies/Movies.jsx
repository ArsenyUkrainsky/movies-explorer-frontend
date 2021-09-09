import React, { useEffect, useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'
import fetchData from '../../utils/fetchMoviesJSON'

const Movies = () => {
     const [movies, setMovies] = useState([])
     useEffect(() => {
          fetchData()
          .then(m => setMovies(m))
     },[])


     return (
          <section className="movies">
               <SearchForm />
               <MoviesCardList movies={movies} />
          </section>
     )


<<<<<<< HEAD
     
=======

>>>>>>> origin/level-2

}
export default Movies