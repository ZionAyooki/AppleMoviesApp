import './App.css';
import NavBar from "./components/navbar/NavBar";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import MoviesPage from "./components/movies/MoviesPage";
import ActorsPage from "./components/actors/ActorsPage";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/movies" component={MoviesPage} />
        <Route path="/actors" component={ActorsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
