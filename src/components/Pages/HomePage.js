import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import MovieList from '../MovieList/MovieList'

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    render() {
        console.log('movies: ', this.props.store.movies);
        return (
            <div>
                HOME PAGE
                <MovieList movies={this.props.store.movies} />
            </div>
        );
    }
}


export default connect(mapStoreToProps)(HomePage);