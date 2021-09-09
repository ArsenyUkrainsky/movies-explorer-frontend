import React from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import testData from '../../utils/fetchMoviesJSON'

function App  () {
const [movies, setMovies] = React.useState([])
React.useEffect(() => {
  testData().then(data => console.log(data))
}, [])


  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies movies={movies}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
