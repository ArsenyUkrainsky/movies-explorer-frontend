import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'

import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import ProtectedRoute from './hoc/ProtectedRoute'
import { filter } from '../../utils/filter'
import { fetchData } from '../../utils/MoviesApi'
import * as mApi from '../../utils/MainApi'

const App = () => {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '' })
  const [authorizeUser, setUserAuthorize] = useState(false)
  const [movies, setMovies] = useState([])
  const [sMovies, setSavedMovies] = useState([])
  const [err, setErr] = useState('')
  let history = useHistory()
  let location = useLocation()

  const onCardLike = (props) => {
    const JWT = localStorage.getItem('jwt')
    const movieLiked = sMovies.some((movie) => movie.movieId === props.movieId)
    /* const { _id } = sMovies.find((movie) => movie.movieId === props.movieId && movie._id) */
    let _id = null
    sMovies.forEach((movie) => (movie.movieId === props.movieId ? (_id = movie._id) : null))
    // eslint-disable-next-line no-unused-expressions
    movieLiked
      ? mApi
          .deleteMovie(_id, JWT)
          .then((resMovie) => {
            setSavedMovies((state) => state.filter((movie) => movie._id !== _id))
          })
          .catch((err) => {
            console.log(`Ошибка при получении данных карточки во время лайка: ${err}`)
          })
      : mApi
          .addMovie(props, JWT)
          .then((resMovie) => {
            setSavedMovies((state) => state.concat(resMovie.movie))
          })
          .catch((err) => {
            console.log(`Ошибка при получении данных карточки во время лайка: ${err}`)
          })
  }
  // При рендере страницы отрисовать сохраненные на моем сервере фильмы
  useMemo(() => {
    const JWT = localStorage.getItem('jwt')
    if (JWT !== null)
      mApi
        .getMovies(JWT)
        .then(({ movies }) => {
          setSavedMovies(movies)
          return movies
        })
        .then((movies) => {
          const moviesFromLocalSt = JSON.parse(localStorage.getItem('MOV'))
          if (moviesFromLocalSt !== null) {
            /*  let movie = moviesFromLocalSt.map((el) => ({
              ...el,
              liked: movies.some((m) => m.movieId == el.id),
            })) */
            setMovies(/* movies */ moviesFromLocalSt)
          }
        })
        .catch((err) => {
          console.log(`Ошибка при получении данных сохраненных фильмов: ${err}`)
        })
  }, [location.pathname])

  useEffect(() => {
    setErr('')
  }, [location.pathname])

  //
  const searchMovie = (text, isShort) => {
    fetchData()
      .then((m) => {
        return filter(m, text, isShort)
      })
      .then((m) => {
        localStorage.setItem('MOV', JSON.stringify(m))
        setMovies(m)
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных фильмов во время сабмита формы по запросу: ${err}`)
      })
  }
  // Поиск по сохраненным фильмам
  const searchMovieSaved = (text, isShort) => {
    setSavedMovies((m) => filter(m, text, isShort))
  }

  const handleRegister = ({ name, email, password }) => {
    mApi
      .register({ name, email, password })
      .then((data) => {
        const JWT = data._id //вытащить _id
        JWT && localStorage.setItem('jwt', JWT)
        mApi
          .login({ password, email })
          .then((res) => {
            const JWT = res.token
            JWT && localStorage.setItem('jwt', JWT)
            setUserAuthorize(true)
            history.push('/movies')
          })
          .catch((err) => {
            setUserAuthorize(false)
            console.log(`Ошибка при регистрации нового пользователя.register: ${err}`)
          })
      })
      .catch((err) => {
        setUserAuthorize(false)
        setErr(err)
        console.log(`Ошибка при регистрации нового пользователя.register: ${err}`)
      })
  }
  const handleLogin = ({ password, email }) => {
    mApi
      .login({ password, email })
      .then((res) => {
        const JWT = res.token
        JWT && localStorage.setItem('jwt', JWT)
        setUserAuthorize(true)
        history.push('/movies')
      })
      .catch((err) => {
        setUserAuthorize(false)
        setErr(err)
        console.log(`Ошибка при авторизации пользователя.login: ${err}`)
      })
  }
  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    localStorage.removeItem('MOV')
    setUserAuthorize(false)
    history.push('/')
  }

  const checkToken = useCallback(() => {
    const JWT = localStorage.getItem('jwt')
    if (JWT !== null)
      mApi
        .checkToken(JWT)
        .then((values) => {
          setUserAuthorize(true)
          setCurrentUser(values)
          history.push(location.pathname)
        })
        .catch((err) => {
          console.log(`Ошибка при проверке токена пользователя.checkToken: ${err}`)
        })
  }, [history])

  useEffect(() => {
    checkToken()
  }, [checkToken])

  const handleUpdateUser = (values) => {
    const JWT = localStorage.getItem('jwt')
    const { name, email } = values
    mApi
      .editUserProfile({ name, email }, JWT)
      .then((values) => {
        setErr('')
        setCurrentUser(values)
      })
      .catch((err) => {
        setErr(err)
        console.log(`Ошибка при редактировании профиля: ${err}`)
      })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='app'>
          <Header authorizeUser={authorizeUser} />
          <Switch>
            <Route exact path='/signup'>
              <Register onRegister={handleRegister} err={err} />
            </Route>
            <Route exact path='/signin'>
              <Login onLogin={handleLogin} err={err} />
            </Route>

            <Route exact path='/'>
              <Main />
            </Route>

            <ProtectedRoute
              exact
              path='/movies'
              authorizeUser={authorizeUser}
              component={Movies}
              movies={movies}
              savedMovies={sMovies}
              searchMovie={searchMovie}
              fromBeatfilmApi={true}
              onCardLike={onCardLike}
            />

            <ProtectedRoute
              exact
              path='/saved-movies'
              authorizeUser={authorizeUser}
              component={SavedMovies}
              savedMovies={sMovies}
              searchMovie={searchMovieSaved}
              fromBeatfilmApi={false}
              onCardLike={onCardLike}
            />

            <ProtectedRoute
              exact
              path='/profile'
              authorizeUser={authorizeUser}
              component={Profile}
              logoutProfile={handleLogOut}
              onSubmit={handleUpdateUser}
              err={err}
            />
            <Route path='*'>
              <NotFound />
            </Route>

            <Route path='/'>
              {authorizeUser ? <Redirect to={location.pathname} /> : <Redirect to='/' />}
            </Route>
          </Switch>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
