import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

function MovieList({ movies, location }) {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
            className="moviesLink"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=2ccd84c67d10b6a7d8c73e635219b9b0`}
              alt={movie.title}
              className={s.poster}
            />
            <h2 className={s.moviesTitle}>{movie.title}</h2>
            <p className={s.moviesOverview}>{movie.overview}</p>
            <p className={s.moviesAverage}>Vote: {movie.vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(MovieList);

MovieList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
