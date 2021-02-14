import React, {Component} from 'react'
import axios from 'axios';
import s from './Cast.module.css'


class Cast extends Component {
    state = {
        cast: []
    }

    async componentDidMount() {
        const KEY = '?api_key=2ccd84c67d10b6a7d8c73e635219b9b0';
        const {match} = this.props

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.movieId}/credits${KEY}&language=en-US`)
        this.setState({cast: response.data.cast})
    }

    render() {
        const { cast } = this.state;

        return ( 
            <ul>
                {cast.map(({ id, profile_path, name, character }) => (
                    <li key={id}>
                        {profile_path && <img src={`https://image.tmdb.org/t/p/w200${profile_path}?api_key=2ccd84c67d10b6a7d8c73e635219b9b0`} alt={name} className={s.ActorImg}/>}
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
            );
    }
}
 
export default Cast;