import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
<<<<<<< HEAD
          <Movies movies={movies}/>
=======
          <Movies />
>>>>>>> origin/level-2
        </Route>
      </Switch>
      <Footer />
    </div>
<<<<<<< HEAD
  )
}

export default App
=======
  );
}

export default App;
>>>>>>> origin/level-2
