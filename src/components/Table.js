import React, {Component} from 'react';
import TableHeader from './TableHeader';
import AfficheList from './AfficheList';
import articles from './AfficheList';

class Table extends Component {
  render() {
    return (
      <div className="table" id="table">
        <TableHeader />
        <AfficheList articles = {articles} />
      </div>
    );
  }
}

export default Table;