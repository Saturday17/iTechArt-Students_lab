import React, { Component } from 'react';
import AfficheList from './AfficheList';
import articles from './AfficheList';
import TableHeader from './TableHeader';

class Affiche extends Component {
  render() {
    return(
      <>
        <div className="table" id="table">
          <TableHeader />
          <AfficheList articles = {articles} />
        </div>
      </>
    );
  }
}

export default Affiche;