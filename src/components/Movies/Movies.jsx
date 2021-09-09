import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'




function Movies  ({movies})  {
     console.log(movies);

return (
          <section className="movies">
               <SearchForm />
               <MoviesCardList movies={movies}/>
          </section>
     )


     

}
export default Movies