import React, { Component } from 'react'
import Axios from 'axios'
import MovieList from '../../components/MovieList' 

class HomePage extends Component {
    state = {
        movies: []
    }

    async componentDidMount() {
        const KEY = '?api_key=2ccd84c67d10b6a7d8c73e635219b9b0';

        const response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week${KEY}`);
        this.setState({ movies: response.data.results })
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <h1>Trending today</h1>
                <MovieList movies={movies}/>
            </>
        )
    }
}
 
export default HomePage;