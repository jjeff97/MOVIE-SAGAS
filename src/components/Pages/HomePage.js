import React, {Component} from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../modules/mapStoreToProps';
import MovieList from '../MovieList/MovieList'
class HomePage extends Component {
    


    render() {
    return (
        <div>
            <MovieList/>        
        </div>
    )

}

}
export default connect(mapStoreToProps) (HomePage);