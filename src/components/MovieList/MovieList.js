import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import mapStateToProps from '../../modules/mapStoreToProps';
import MovieCard from '../MovieCard/MovieCard';



class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES'})
        this.props.dispatch({ type: 'GET_GENRES'})
    }

    render() {

       
        return (
            <div>
                <Grid container spacing={3}>
                    {this.props.reduxState.movieList.map((movie, index) => {
                        {console.log(movie.name)}
                        return (
                            <Grid key={index} item>
                                <MovieCard movie={movie}></MovieCard>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
        
    }
}

export default connect(mapStateToProps)(MovieList);
