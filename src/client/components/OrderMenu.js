import React, {Component} from 'react';
import cinemas from './CinemasList';
import uniqueId from 'lodash/uniqueId';

class OrderMenu extends Component {
  render() {

    const cinemaList = cinemas.map(cinema => {
      return <option className="cinema-choose__choose" value={ cinema.name } key={ uniqueId('cinema_') }>{ cinema.name }</option>
    });
    const sessionList = cinemas[0].sessions.map(session => {
        return <option className="cinema-choose__choose" value={ session } key={ uniqueId('session_') }>{ session }</option>
    });
    
    const { openHall } = this.props;

    return (
      <>
        <em className="order-menu__text">Choose your enjoyment:</em>
        <select name="cinemas" className="order-menu__cinema-choose">
          { cinemaList }
        </select>
        <select name="sessions" className="order-menu__session-choose">
          { sessionList }
        </select>
        <button className="order-menu__choose-btn" onClick={ openHall }>Choose seat</button>
        <button className="order-menu__submit">Buy ticket</button>
      </>
    );
  }
}

export default OrderMenu;