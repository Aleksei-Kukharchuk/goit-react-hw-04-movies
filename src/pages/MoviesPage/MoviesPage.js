import React, { Component } from 'react'
import Axios from 'axios'
import MovieList from '../../components/MovieList' 
import getQueryParams from '../../utils/get-query-params'
import s from './MoviesPage.module.css'

class MoviesPage extends Component {
    state = {
        query: '', 
        movies: []
    }

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);

        if (query) {
            this.getMovies(query)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {query: prevQuery} = getQueryParams(prevProps.location.search)
        const { query: nextQuery } = getQueryParams(this.props.location.search)
    
        if (prevQuery !== nextQuery) { 
            this.getMovies(nextQuery)
        }
    }

    handleChange = e => {
        this.setState({ query: e.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { query } = this.state;

        if (query.trim() !== '') {
            this.getMovies(query)
            this.handleChangeQuery(query)
            this.setState({ query: '' });
       }
    };

    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        })
    }

    async getMovies(query) {
        const KEY = '?api_key=2ccd84c67d10b6a7d8c73e635219b9b0';
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        this.setState({ movies: response.data.results })
    }

    render() {
        const { query, movies } = this.state;
        
        return (
            <>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <label>
                        <input type='text' value={query} onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Search</button>
                </form>

                {movies.length > 0 && <MovieList movies={movies}/>}
            </>
        )
    }
}
 
export default MoviesPage;