import React, {Component} from 'react'
import axios from 'axios';

class Reviews extends Component {
    state = {
        reviews: []
    }

    async componentDidMount() {
        const KEY = '?api_key=2ccd84c67d10b6a7d8c73e635219b9b0';
        const { match } = this.props;

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.movieId}/reviews${KEY}&language=en-US&page=1`)
        this.setState({ reviews: response.data.results })
    }

    render() {
        const { reviews } = this.state;

        return ( 
            <ul>
                {reviews.length > 0
                    ? reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>
                        ))
                    : 'We don`t have any reviews for this movie'}
            </ul>
            
            );
    }
}
 
export default Reviews;