import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { useEffect, useState } from 'react'
import { throttle } from '../../utils/throttle'
import Preloader from '../Preloader/Preloader'

const MoviesCardList = ({ movies, onCardLike }) => {
  const [loadMovies, setLoadMovies] = useState([])
  const [buttonState, setButtonState] = useState(false)
  const [loading, showLoading] = useState(true)
  useEffect(() => {
    if (loadMovies.length >= 16) {
      setButtonState(true)
    }
    if (loadMovies.length >= 8) {
      setButtonState(true)
    }
    if (loadMovies.length >= 5) {
      setButtonState(true)
    }
  }, [loadMovies.length])
  useEffect(() => {
    setLoadMovies(movies.slice(0, 16))
    setTimeout(() => showLoading(false), 1000)
  }, [movies])
  useEffect(() => {
    const callback = throttle(() => {
      setLoadMovies(movies.slice(0, 16))
      if (window.innerWidth >= 1280) {
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
      ) : (
        <ul className="movies-card-list">
          {loadMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                id={movie.id}
                trailerLink={movie.trailerLink}
                image={movie.image.url}
                alt={movie.nameEN}
                title={movie.nameRU}
                duration={movie.duration}
                onCardLike={onCardLike}
              />
            )
          })}
        </ul>
      )}
      {buttonState && <button className="movies-card-list__button">Ещё</button>}
    </>
  )
}
export default MoviesCardList
