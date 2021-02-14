import React from 'react'
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

function MovieList({movies, location}) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: {
                            from: location,
                        }
                    }}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default withRouter(MovieList);

MovieList.propTypes = {
    movies:  PropTypes.array,
    location: PropTypes.object,
}