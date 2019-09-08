import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, 
        CardContent, 
        CardActionArea, 
        Button, 
        CardActions, 
        CardMedia, 
        Typography } from '@material-ui/core';

import { withRouter } from 'react-router-dom';

class MovieCard extends Component {

   
    //details
    seeDetails = (event) => {
        this.props.history.push("/movies/"+this.props.movie.id);
    };

    render () {
            
        return(
            <Card className="card">
                <CardActionArea>
                    <CardContent color='secondary'>
                        <Typography>
                            {this.props.movie.name} 
                        </Typography>
                    </CardContent>
                    <CardActions>
                            
                            <Button onClick={this.seeDetails}>Details</Button>
                    </CardActions>
                </CardActionArea>
            </Card>



        )
    }
} 

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(MovieCard));