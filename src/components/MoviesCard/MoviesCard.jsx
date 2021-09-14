import { useState } from 'react'
import './MoviesCard.css'

const MoviesCard = ({ id, trailerLink, image, alt, title, duration, onCardLike }) => {
  const [isLiked, setLike] = useState(false)
  function handleLikeClick() {
    setLike(!isLiked)
    /* onCardLike({ likes, cardId }) */
    /* onCardLike(id) */
  }
  return (
    <li className="movies-card">
      <a className="movies-card__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={`https://api.nomoreparties.co${image}`} alt={alt} />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <button
          className={
            isLiked ? 'movies-card__like movies-card__like_active movies-card__like_del' : 'movies-card__like'
          }
          onClick={handleLikeClick}></button>
      </div>
      <p className="movies-card__time">{duration}</p>
    </li>
  )
}

export default MoviesCard
