import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  render() {
    const { onFilterTextChange, filterText } = this.props;
    return (
      <div>
        <input className="table__input" type="text" value={filterText} onChange={onFilterTextChange} placeholder="Search" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextChange: PropTypes.func
}

export default SearchBar;