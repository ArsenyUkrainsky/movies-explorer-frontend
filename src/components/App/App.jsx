import React, { useState, useEffect } from 'react'
import { Route, Switch /* Redirect, useHistory */ } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import { fetchData, fetchDataLiked } from '../../utils/fetchMoviesJSON'
import Profile from '../Profile/Profile'
import Header from '../Header/Header'
import NotFound from '../NotFound/NotFound'

const App = () => {
  const [user /* setUser */] = useState({ person: 'Виталий', email: 'pochta@yandex.ru' })
  const [movies, setMovies] = useState([])
  const [sMovies, setSavedMovies] = useState([])
  useEffect(() => {
    fetchData().then((m) => setMovies(m)) // test utils
    fetchDataLiked().then((m) => setSavedMovies(m)) // test utils
  }, [])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/movies">
          <Header />
          <Movies movies={movies} />
          <Footer />
        </Route>

        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies savedMovies={sMovies} />
          <Footer />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route exact path="/profile">
          <Header />
          <Profile user={user} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
