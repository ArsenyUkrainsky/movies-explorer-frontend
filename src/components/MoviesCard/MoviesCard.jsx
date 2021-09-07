import './MoviesCard.css'

function MoviesCard  (props)  {
     return (
          <li className="movies-card">
               <a className="movies-card__link">
                    <img className="movies-card__image"/>
               </a>
               <div className="movies-card__info">
                    <h2 className="movies-card__title"></h2>
                    <p className="movies-card__time"></p>
                    <button className="movies-card__like"></button>
               </div>
          </li>
     )
}

export default MoviesCard