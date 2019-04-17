import React, {Component} from 'react';

class OrderMenu extends Component {
  render() {
    
    const { openHall } = this.props;

    return (
      <>
        <em className="order-menu__text">Choose your enjoyment:</em>
        <select name="cinemas" className="order-menu__cinema-choose">
          
        </select>
        <select name="sessions" className="order-menu__session-choose">
          
        </select>
        <button className="order-menu__choose-btn" onClick={ openHall }>Choose seat</button>
        <button className="order-menu__submit">Buy ticket</button>
      </>
    );
  }
}

export default OrderMenu;