import React, {Component} from 'react';
import logo from '../img/logomin.png';
import MiniMenu from './MiniMenu';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends Component {


  render(){
    const { openAuthorizationModal, openMiniMenu, closeMiniMenu, isOpenMiniMenu } = this.props;

    return (
      <>
        { isOpenMiniMenu && ( <MiniMenu openAuthorizationModal={ openAuthorizationModal } closeMiniMenu={ closeMiniMenu } /> )}
        <div className="header">
          <div className="logo">
            <a href="#"><img className="logo__img" src={logo} alt="logo" /> </a>
          </div>
          <a href="#" className="m-menu-link" onClick={ openMiniMenu }>
            <i className="fa fa-bars"></i>	
          </a>
          <div className="menu visible-lg">
            <ul className="menu-navigation">
              <li><Link to="/" className="menu-navigation__menu-link">Home</Link></li>
              <li><Link to="/affiche" className="menu-navigation__menu-link">Affiche</Link></li>
              <li><Link to="/" className="menu-navigation__menu-link--sign-in-btn" onClick={ openAuthorizationModal }>Sign in</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

Menu.propTypes = {
  onHandleTriggerModal: PropTypes.func,
  openMiniMenu: PropTypes.func,
  isOpenMiniMenu: PropTypes.bool
}

export default Menu;