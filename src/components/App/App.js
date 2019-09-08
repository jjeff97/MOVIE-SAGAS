import React, { Component } from 'react';


import { HashRouter as Router, Route } from 'react-router-dom';


import HomePage from '../Pages/HomePage.js';
import DetailsPage from '../Pages/DetailsPage.js';
import EditPage from '../Pages/EditPage.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Movies</h2>
        </header>
        <br/>

        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/edit" component={EditPage} />
        </Router>
      </div>



    );
  }
}

export default App;
