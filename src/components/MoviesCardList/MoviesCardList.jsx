import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'


function MoviesCardList  ({movies})  { 
<ul className="movies-card-list">
{movies.map((card) => {
     return (
          <MoviesCard key={card.id}/>
     )
})}
</ul>
}
export default MoviesCardList