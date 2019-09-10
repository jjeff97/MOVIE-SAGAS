import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import  { withRouter } from 'react-router-dom';

class DetailsPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: this.props.match.params.id
        });
    }
    clickEdit = (event) => {
        this.props.history.push(`/edit/${this.props.store.movie.movies_id}`);
    }

    render() {
        const {
            movie
        } = this.props.store;
        let displayGenres = [];
        
        if (movie.allGenres != null){
            displayGenres = movie.allGenres.map((genre, index) => {
                return <li key={index}>{genre.genreName}</li>
            })
        }
        return(
            <div>
                <h1>DETAILS</h1>
                <h2>{movie.title}</h2>
                <img scr={movie.poster} alt="movie poster" />
                <p>{movie.description}</p>
                <h3>Genres: </h3>
                <ul>
                    {displayGenres}
                </ul>
                <button onClick={this.clickEdit}>Edit Info</button>
            </div>
        )
    }



}
export default connect(mapStoreToProps)(withRouter(DetailsPage));
