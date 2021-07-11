import { Route, Link, withRouter } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import Cast from "../Cast";
import Reviews from "../Reviews";
import routes from "../../routes";
import s from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    title: "",
    release_date: "",
    vote_average: "",
    overview: "",
    poster_path: "",
    genres: [],
    id: "",
  };

  async componentDidMount() {
    const KEY = "?api_key=2ccd84c67d10b6a7d8c73e635219b9b0";

    const { movieId } = this.props.match.params;

    const responseMovieData = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}${KEY}&language=en-US`
    );
    this.setState({ ...responseMovieData.data });
  }

  handleGoBack = () => {
    const { location, history, match } = this.props;

    if (location.pathname === `${match.url}/reviews`) {
      history.push(location?.state?.from?.state?.from || routes.home);
    } else if (location.pathname === `${match.url}/cast`) {
      history.push(location?.state?.from?.state?.from || routes.home);
    } else {
      history.push(location?.state?.from || routes.home);
    }
  };

  render() {
    const { title, release_date, vote_average, overview, poster_path } =
      this.state;

    return (
      <>
        <button type="button" onClick={this.handleGoBack} className={s.Button}>
          Go back
        </button>
        <div className={s.MovieCard}>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=2ccd84c67d10b6a7d8c73e635219b9b0`}
              alt={title}
              className={s.MovieImg}
            />
          )}
          <div>
            <h1>{title}</h1>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            <h1>Overview</h1>
            <p>{overview}</p>
            <h1>Genres</h1>
            <ul className={s.GenreList}>
              {this.state.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.AddInfoList}>
          <h1>Additional information</h1>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>

          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
