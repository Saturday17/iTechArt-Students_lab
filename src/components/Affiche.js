import React, { Component } from 'react';
import AfficheList from './AfficheList';
import articles from './AfficheList';
import TableOfFilmsHeader from './TableOfFilmsHeader';

class Affiche extends Component {
  render() {
    return(
      <div className="table" id="table">
        <TableOfFilmsHeader />
        <AfficheList articles={articles}/>
      </div>
    );
  }
}

export default Affiche;