import React, { useEffect, useState } from 'react'
import { throttle } from '../../utils/throttle'
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = ({ movies, onCardLike, fromBeatfilmApi, savedMovies, err }) => {
  const [loadMovies, setLoadMovies] = useState([])
  const [buttonState, setButtonState] = useState(false)
  const [loading, showLoading] = useState(true)
  //
  const getNewArr = (loadMovies, movies, l) =>
    loadMovies.concat(movies.slice(loadMovies.length, loadMovies.length + l))

  // Функция для кнопки еще. Добавляет в массив необходимое количество карточек.
  const handleClick = () => {
    if (movies.length > loadMovies.length) {
      if (window.innerWidth >= 881) {
        let l = 4
        setLoadMovies(getNewArr(loadMovies, movies, l))
      }
      if (window.innerWidth <= 880) {
        let l = 2
        setLoadMovies(getNewArr(loadMovies, movies, l))
      }
      if (window.innerWidth <= 426) {
        let l = 2
        setLoadMovies(getNewArr(loadMovies, movies, l))
      }
    }
  }
  // Отображать кнопку еще до тех пор пока есть что показать
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    movies.length > loadMovies.length ? setButtonState(true) : setButtonState(false)
  }, [loadMovies.length])

  // Первичная отрисовка
  useEffect(() => {
    if (window.innerWidth >= 881) setLoadMovies(movies.slice(0, 16))
    if (window.innerWidth <= 880) setLoadMovies(movies.slice(0, 8))
    if (window.innerWidth <= 426) setLoadMovies(movies.slice(0, 5))
    // Без кнопки еще отрисовать все карточки
    if (!fromBeatfilmApi) setLoadMovies(movies)
    setTimeout(() => showLoading(false), 1000)
  }, [movies])

  // Разное количество карточек в от разрешения слушаем resize
  if (fromBeatfilmApi)
    useEffect(() => {
      const callback = throttle(() => {
        setLoadMovies(movies.slice(0, 16))
        if (window.innerWidth >= 881) {
          setLoadMovies(movies.slice(0, 16))
        }
        if (window.innerWidth <= 880) {
          setLoadMovies(movies.slice(0, 8))
        }
        if (window.innerWidth <= 426) {
          setLoadMovies(movies.slice(0, 5))
        }
        /* switch (window.innerWidth) {
        case 1280:
          setLoadMovies(movies.slice(0, 16))
          break
        case 768:
          setLoadMovies(movies.slice(0, 8))
          break
        case 320:
          setLoadMovies(movies.slice(0, 5))
          break
        default:
          setLoadMovies(movies)
          break
      } */
      }, 1000)

      window.addEventListener('resize', callback)
      return () => {
        window.removeEventListener('resize', callback)
      }
    }, [movies, loadMovies])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : movies.length ? (
        <ul className='movies-card-list'>
          {loadMovies.map((movie) => {
            // Данные из БД немного различаются -> смотрим откуда
            return fromBeatfilmApi ? (
              <MoviesCard
                key={movie.id}
                country={movie.country == null ? 'Страна не указана' : movie.country}
                description={movie.description}
                director={movie.director}
                duration={movie.duration}
                movieId={movie.id}
                image={`https://api.nomoreparties.co${movie.image.url}`}
                nameRU={movie.nameRU}
                nameEN={movie.nameEN == null || movie.nameEN.length == 0 ? movie.nameRU : movie.nameEN}
                trailer={
                  movie.trailerLink && movie.trailerLink.startsWith('https')
                    ? movie.trailerLink
                    : 'https://www.youtube.com/'
                }
                thumbnail={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
                year={movie.year}
                onCardLike={onCardLike}
                /* liked={movie.liked} */
                savedMovies={savedMovies}
              />
            ) : (
              <MoviesCard
                key={movie._id}
                country={movie.country}
                description={movie.description}
                director={movie.director}
                duration={movie.duration}
                movieId={movie.movieId}
                image={movie.image}
                nameRU={movie.nameRU}
                nameEN={movie.nameEN}
                trailer={movie.trailer}
                thumbnail={movie.thumbnail}
                year={movie.year}
                onCardLike={onCardLike}
                _id={movie._id}
              />
            )
          })}
        </ul>
      ) : (
        <span className='movies-card-list__err'>Ничего не найдено</span>
      )}
      {err ? <span className='movies-card-list__err'>{err}</span> : <></>}
      {fromBeatfilmApi && buttonState && (
        <button className='movies-card-list__button' onClick={handleClick}>
          Ещё
        </button>
      )}
    </>
  )
}
export default MoviesCardList
