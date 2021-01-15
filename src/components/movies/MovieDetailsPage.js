import React from 'react';
import {withRouter} from 'react-router';

class MovieDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movie: null
    }
  }

  async componentDidMount() {
    const movieId = this.props.match.params.id;
    const movie = await this.getMovieDetails(movieId);
    this.setState({
      isLoading: false,
      movie: movie
    })
  }

  getMovieDetails = async (movieId) => {
    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.props.apiKey}`)
      .then(res => res.json());
    const movieCastAndCrew = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.props.apiKey}`)
      .then(res => res.json());

    return {
      id: movieDetails.id,
      title: movieDetails.title,
      runtime: movieDetails.runtime,
      poster: movieDetails.poster_path,
      description: movieDetails.overview,
      actors: movieCastAndCrew.cast.slice(0,3).map((actor) => actor.name),
      directors: movieCastAndCrew.crew.filter((member) => member.known_for_department === "Directing").map((director) => director.name)
    };
  }

  render() {
    return (
      <div>
        { this.state.isLoading && <div>Loading... Please wait</div> }
        { !this.state.isLoading && (
          <div className="container">
            <h2 className="text-center">{this.state.movie.title}</h2>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster}`} alt={`${this.state.movie.title} poster`} />
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-9">
                <p>
                  <strong>Directed by: </strong>
                  {this.state.movie.directors.join(', ')}
                </p>
                <p>
                  <strong>Starring: </strong>
                  {this.state.movie.actors.join(', ')}
                </p>
                <p>
                  <strong>Runtime: </strong>
                  {this.state.movie.runtime} Minutes.
                </p>
                <p>
                  <strong>Description: </strong>
                  {this.state.movie.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);