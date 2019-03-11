import React, {Component} from 'react';
import TableOfFilmsHeader from './TableOfFilmsHeader';
import AfficheList from './AfficheList';
import articles from './AfficheList';

class TableOfFilms extends Component {
  render() {
    return (
      <div className="table" id="table">
        <TableOfFilmsHeader />
        <AfficheList articles = {articles} />
      </div>
    );
  }
}

export default TableOfFilms;