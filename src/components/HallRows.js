import React from 'react';
import Chair from './Chair';
import uniqueId from 'lodash/uniqueId';

function HallRows() {
  const chairs = new Array(50);
  chairs.fill(0);
  chairs.forEach( chair => {
    chairs.shift(chair)
    chairs.push(<Chair key={ uniqueId('chair_') }/>);
  });
  console.log(chairs)
  return (
    <div className="hall__rows">
      <div className="rows__row">{ chairs.slice(0, 10) }</div>
      <div className="rows__row">{ chairs.slice(10, 20) }</div>
      <div className="rows__row">{ chairs.slice(20, 30) }</div>
      <div className="rows__row">{ chairs.slice(30, 40) }</div>
      <div className="rows__row">{ chairs.slice(40) }</div>
    </div>
  );
}

export default HallRows;