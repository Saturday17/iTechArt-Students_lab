import React, { Component } from 'react';
import cinemas from './CinemasList';
import Cinema from './Cinema';
import uniqueId from 'lodash/uniqueId';

class Cinemas extends Component {
  render() {
    const cinemaRows = cinemas.map(cinema => {
      return <Cinema cinema={cinema} key={uniqueId('cinema_')} />
    });

    return (
      <div className="cinemas">
        { cinemaRows }
      </div>
    );
  }
}

export default Cinemas;