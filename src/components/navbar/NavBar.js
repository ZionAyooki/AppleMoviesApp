import React from 'react';
import {Link} from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">MoviesApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Actors</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;