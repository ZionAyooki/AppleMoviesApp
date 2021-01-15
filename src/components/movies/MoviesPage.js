import React from 'react';
import SearchBar from "../filter/SearchBar";
import Gallery from "../gallery/Gallery";

class MoviesPage extends React.Component {
  render() {
    return (
      <div className="container pt-3">
        <h1 className="text-center">Movies page</h1>
        <SearchBar
          placeholder="Search new movies"
          apiKey={this.props.apiKey}
          addMovie={this.props.addMovie}
        />
        <Gallery moviesList={this.props.moviesList} />
      </div>
    );
  }
}

export default MoviesPage;