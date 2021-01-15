import React from "react";
import {Link} from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    const { id, title, poster, year } = this.props.movie;
    return (
      <div className="col mb-3">
        <div className="card text-center h-100">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="card-img-top" alt={`${title} poster`} />
          <div className="card-body">
            <h3 className="card-title">
              {title}
            </h3>
            <Link className="btn btn-info" to={`/movies/${id}`}>Show full details</Link>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <strong>Year:</strong>
              <span className="text-primary"> {year}</span>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;