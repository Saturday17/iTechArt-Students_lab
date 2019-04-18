import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '70%'
  },
  input: {
    color: 'white'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  notchedOutline: {
    borderWidth: '0.2rem',
    borderColor: '#000000 !important'
  }
});

class SearchBar extends Component {

  render() {
    const { onFilterTextChange, filterText, classes } = this.props;
    return (
      <div className="table__input">
        <TextField 
        value={filterText} 
        onChange={onFilterTextChange} 
        label="Search" 
        style={{ width: '70%' }} 
        InputLabelProps={{style: { color: '#000000', fontSize: '2rem' }}} 
        InputProps={{style: { color: '#000000', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} 
        margin="normal" 
        variant="outlined" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextChange: PropTypes.func,
  filterText: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchBar);