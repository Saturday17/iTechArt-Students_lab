import React, {Component} from 'react';
import TableOfFilmsHeader from './TableOfFilmsHeader';
import PremiereList from './PremiereList';
import articles from './PremiereList';

class TableOfPremiere extends Component {
  render() {
    return (
      <div className="table" id="table">
        <TableOfFilmsHeader />
        <PremiereList articles = {articles} />
      </div>
    );
  }
}

export default TableOfPremiere;