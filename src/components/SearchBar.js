import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input className="table__input" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextChange: PropTypes.func
}

export default SearchBar;