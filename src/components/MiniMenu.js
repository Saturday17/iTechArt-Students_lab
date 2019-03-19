import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MiniMenu extends Component {

  render(){

    const { onHandleTriggerModal, handleRemoveMiniMenu } = this.props;

    return (
      <ul className="m-menu" id="m-menu">
        <li className="close-menu" onClick={ handleRemoveMiniMenu }>&times;</li>
        <li><Link to="/" className="menu-link">Home</Link></li>
        <li><Link to="/affiche" className="menu-link">Affiche</Link></li>
        <li><Link to="/" className="menu-link">Cinemas</Link></li>
        <li><Link to="/" className="menu-link">Food and Drinks</Link></li>
        <li><Link to="/" className="menu-link">Info</Link></li>
        <li><Link to="/" className="sign-in-btn menu-link" onClick={ onHandleTriggerModal }>Sign in</Link></li>
      </ul>
    );
  }
}

MiniMenu.propTypes = {
  onHandleTriggerModal: PropTypes.func,
  handleRemoveMiniMenu: PropTypes.func
}

export default MiniMenu;