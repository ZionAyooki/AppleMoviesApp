import './App.css';
import NavBar from "./components/navbar/NavBar";
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
