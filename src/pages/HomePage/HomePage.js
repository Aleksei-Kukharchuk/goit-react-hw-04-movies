import React, { Component } from "react";
import Axios from "axios";
import MovieList from "../../components/MovieList";
import s from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const KEY = "?api_key=2ccd84c67d10b6a7d8c73e635219b9b0";

    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week${KEY}`
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={s.container}>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
