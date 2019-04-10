import React from 'react';
import RowOfChairs from './RowOfChairs';
import uniqueId from 'lodash/uniqueId';

function HallRows() {
  const rowsOfChairs = new Array(5);
  rowsOfChairs.fill(<RowOfChairs key={ uniqueId('rowOfChairs_') }/>)
  return (
    <div className="hall__rows">
      { rowsOfChairs }
    </div>
  );
}

export default HallRows;