
import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPage extends Component {
    state = {
        movieTitle: ''
    }
    
    handleChange = (event) =>  {
        this.setState({
    
            movieTitle: event.target.value
        })
        console.log(this.state.movieTitle);
    }

    render() {
        
        return (
        <div className="EditTitleForm">
            <h1>Edit Your Title</h1>
            <input onChange={this.handleChange} type="text" placeholder="enter artist" />
        <button onClick={this}>submit</button>
        </div>
        );
    }
}
export default connect() (EditPage);