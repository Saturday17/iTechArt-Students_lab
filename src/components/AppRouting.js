import React, { Component } from 'react';
import Home from './Home';
import Affiche from './Affiche';
import Cinemas from './Cinemas';
import MoviePage from './MoviePage';
import {Route} from 'react-router-dom';

class AppRouting extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/affiche" component={Affiche}/>
        <Route exact path="/cinemas" component={Cinemas}/>
        <Route exact path="/affiche/moviepage/:movie" component={MoviePage}/>
      </>
    );
  }
}

export default AppRouting;