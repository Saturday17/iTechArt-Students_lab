import React from 'react';
import Chair from './Chair';
import uniqueId from 'lodash/uniqueId';

function RowOfChairs() {
  const chairs = new Array(10);
  chairs.fill(<Chair key={ uniqueId('chair_') }/>);
  return (
    <div className="rows__row">
      { chairs }
    </div>
  );
}

export default RowOfChairs;