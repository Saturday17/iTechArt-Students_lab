import React, {Component} from 'react';

class SearchBar extends Component {

  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;