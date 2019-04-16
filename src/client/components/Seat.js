import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeSeatSelection } from '../store/actions';

class Seat extends Component {

  state = { 
    selected: false
  }

  handleClick = () => {
    let { seats, status } = this.props;
    // if( seats.length === viewer.length && !this.state.selected) {
    //   return;
    // }

    this.setState( state => {
      return {
        selected: !state.selected
      }
    });

    !this.state.selected && status !== "reserved" ? seats.push(this.props.id) : seats.splice(seats.indexOf(this.props.id), 1);
    this.props.changeSeatSelection(seats);
  }

  render() {
    const { id, status } = this.props;

    const style = classNames({
      "--reserved": status === "reserved",
      "--selected": this.state.selected
    });

    return (
      <div className={ "row__seat"+style } id={ id } onClick={ this.handleClick }></div>
    );
  }
}

Seat.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string,
  seats: PropTypes.array,
  changeSeatSelection: PropTypes.func,
  viewer: PropTypes.object
};

const mapStateToProps = state => {
  return { 
    viewer: state.viewer, 
    seats: state.seats 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSeatSelection: bindActionCreators(changeSeatSelection, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);