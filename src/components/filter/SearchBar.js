import React from 'react';
import SearchResultItem from "./SearchResultItem";
import moment from "moment";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      results: []
    };
  }

  changeFilter = (e) => {
    const newVal = e.target.value;
    this.setState({
      filter: newVal
    });
    this.updateResults(newVal);
  }

  updateResults = (searchStr) => {
    if (!searchStr) {
      this.setState({
        results: []
      });
      return;
    }
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&query=${searchStr}`)
      .then(res => res.json())
      .then(data => {
        const searchResults = data.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            year: moment(movie.release_date).year()
          }
        });
        this.setState({
          results: searchResults
        });
      });
  }

  addMovie = (newMovie) => {
    this.props.addMovie(newMovie);
    this.setState({
      filter: '',
      results: []
    });
  }

  render() {
    const searchResults = this.state.results.map((movie) => {
      return (
        <SearchResultItem
          key={movie.id} movie={movie}
          handleClick={() => {this.addMovie(movie)}}
        />
      );
    });
    return (
      <div className="search-bar">
        <label htmlFor="search" className="form-label visually-hidden">{this.props.placeholder}</label>
        <input
          id="search" className="form-control" type="search"
          placeholder={this.props.placeholder}
          value={this.state.filter} onChange={this.changeFilter}
        />
        <ul className="list-group search-results">
          {searchResults}
        </ul>
      </div>
    );
  }
}

export default SearchBar;