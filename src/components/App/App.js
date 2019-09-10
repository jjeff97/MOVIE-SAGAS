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
      <Router>
        <div className="App">

          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={DetailsPage} />
          <Route path="/edit/:id" component={EditPage} />
        </div>
      </Router>
    );
  }
}




export default App;
