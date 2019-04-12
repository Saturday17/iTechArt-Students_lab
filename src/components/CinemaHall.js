import React, {Component} from 'react';
import HallRows from './HallRows';
import PropTypes from 'prop-types';

class CinemaHall extends Component {
  render() {
    const { closeHall } = this.props;
    return (
      <div className="hall-page">
        <div className="hall-page__hall">
          <div className="hall__close-btn"><h1 onClick={ closeHall }>&times;</h1></div>
          <div className="hall__screen">Screen</div>
          <HallRows />
        </div>
      </div>
    );
  }
}

CinemaHall.propTypes = {
  closeHall: PropTypes.func
}

export default CinemaHall;