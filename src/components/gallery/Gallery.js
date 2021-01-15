import React from "react";
import MovieCard from "../movies/MovieCard";


class Gallery extends React.Component {
  render() {
    const moviesList = this.props.moviesList.map(
      (movie) => <MovieCard movie={movie} key={movie.id} />
    );
    return (
      <div className="actor-list">
        <h2>Gallery</h2>
        <p className="text-muted">Total: {this.props.moviesList.length} movies.</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {moviesList}
        </div>
      </div>
    );
  }
}

export default Gallery;