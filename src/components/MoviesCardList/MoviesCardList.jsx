import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'


const MoviesCardList = ({ movies }) => {
     return (<ul className="movies-card-list">
          {movies.map((movie) => { console.log(movie);
               return (
                    <MoviesCard 
                    key={movie.id} />
               )
          })}
     </ul>)
}
export default MoviesCardList