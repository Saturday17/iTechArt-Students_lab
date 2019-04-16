import React, {Component} from 'react';
import Seat from './Seat';

class HallRows extends Component {
  
  cinema = {
    halls: [
      {
        rows: 5,
        seatsInRow: 10
      }
    ],
    reserved: ['1-1-1', '1-4-3']
  }

  renderHall = halls => {
    let arr = [];
    for (let i in halls) {
      arr[i] = (
        <div className="hall__rows">
          { this.renderRows(halls[i].rows, halls[i].seatsInRow, i) }
        </div>
      );
    }
    return arr;
  };

  renderRows = (rows, seatInRow, hallId) => {
    let arr = [];
    for (let i = 0; i < rows; i++) {
      arr[i] = (
        <div className="rows__row">
          { this.renderSeats(seatInRow, i, hallId) }
        </div>
      );
    }
    return arr;
  }

  renderSeats = (seat, rowId, hallId) => {
    let arr = [];
    for (let j = 0; j < seat; j++) {
      let id = `${Number(hallId)+1}-${rowId+1}-${j+1}`;
      let status = 'available';

      if (this.cinema.reserved.indexOf(id) !== -1) {
        status = 'reserved';
      }
      arr[j] = <Seat key={ id } id={ id } status={ status } />
    }
    return arr;
  }

  render() {
    return (
      <>
        { this.renderHall(this.cinema.halls) }
      </>
    );
  }
}

export default HallRows;