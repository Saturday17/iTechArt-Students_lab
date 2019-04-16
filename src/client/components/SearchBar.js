import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  render() {
    const { onFilterTextChange, filterText } = this.props;
    return (
      <div className="table__input">
        <input className="input__search" type="text" value={filterText} onChange={onFilterTextChange} placeholder="Search" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextChange: PropTypes.func,
  filterText: PropTypes.string
}

export default SearchBar;