import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MiniMenu extends Component {

  render(){

    const { openAuthorizationModal, closeMiniMenu } = this.props;

    return (
      <ul className="m-menu" id="m-menu">
        <li className="m-menu__close-menu" onClick={ closeMiniMenu }>&times;</li>
        <li><Link to="/" className="m-menu__menu-link">Home</Link></li>
        <li><Link to="/affiche" className="m-menu__menu-link">Affiche</Link></li>
        <li><Link to="/cinemas" className="m-menu__menu-link">Cinemas</Link></li>
        <li><Link to="/" className="m-menu__menu-link">Food and Drinks</Link></li>
        <li><Link to="/" className="m-menu__menu-link">Info</Link></li>
        <li><Link to="/" className="m-menu__menu-link--sign-in-btn" onClick={ openAuthorizationModal }>Sign in</Link></li>
      </ul>
    );
  }
}

MiniMenu.propTypes = {
  openAuthorizationModal: PropTypes.func, 
  closeMiniMenu: PropTypes.func
}

export default MiniMenu;