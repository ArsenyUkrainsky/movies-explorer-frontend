import React, { useState, useEffect } from 'react'
import './MoviesCard.css'

const MoviesCard = ({ onCardLike, ...props }) => {
  const [isLiked, setLike] = useState(false)
  const { trailer, image, nameRU, duration, savedMovies, movieId } = props
  const [time, setTime] = useState('')

  function handleLikeClick() {
    setLike(!isLiked)
    /* onCardLike({ likes, cardId }) */
    onCardLike(props)
  }
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    savedMovies && setLike(savedMovies.some((m) => m.movieId == movieId))
  }, [])

  useEffect(() => {
    const getTimeFromMins = (duration) => {
      let hours = Math.trunc(duration / 60)
      let minutes = duration % 60
      return minutes > 0 ? `${hours}ч ${minutes}м` : `${hours}ч`
    }
    setTime(getTimeFromMins(duration))
  }, [duration])

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={trailer} target='_blank' rel='noreferrer'>
        <img className='movies-card__image' src={image} alt={nameRU} />
      </a>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <button
          className={
            props._id
              ? 'movies-card__like movies-card__like_del'
              : isLiked
              ? 'movies-card__like movies-card__like_active movies-card__like_del'
              : 'movies-card__like'
          }
          onClick={handleLikeClick}></button>
      </div>
      <p className='movies-card__time'>{time}</p>
    </li>
  )
}

export default MoviesCard
