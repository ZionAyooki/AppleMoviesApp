import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import ActorsPage from "./components/actors/ActorsPage";
import MovieDetailsPage from "./components/movies/MovieDetailsPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.tmdbApiKey = 'ac83d758014c8755ad90d90f6da3379c';

    this.state = {
      movies: []
    };
  }

  addMovie = (newMovie) => {
    this.setState({
      movies: [...this.state.movies, newMovie]
    });
  };

  render() {
    return (
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path="/movies/:id">
            <MovieDetailsPage apiKey={this.tmdbApiKey} />
          </Route>
          <Route path="/movies">
            <MoviesPage
              moviesList={this.state.movies}
              addMovie={this.addMovie}
              apiKey={this.tmdbApiKey}
            />
          </Route>
          <Route path="/actors">
            <ActorsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
