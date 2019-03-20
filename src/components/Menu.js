import React, {Component} from 'react';
import logo from '../img/logomin.png';
import MiniMenu from './MiniMenu';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends Component {

  state = {
    isOpenMiniMenu: false
  }

  handleOpenMiniMenu = e => {
    e.preventDefault();
    this.setState ({
      isOpenMiniMenu: true
    });
  }

  handleRemoveMiniMenu = e => {
    e.preventDefault();
    this.setState ({
      isOpenMiniMenu: false
    });
  }

  render(){
    const { onHandleTriggerModal } = this.props;
    const { isOpenMiniMenu } =  this.state;

    return (
      <>
        { isOpenMiniMenu && ( <MiniMenu onHandleTriggerModal={ onHandleTriggerModal }
          handleRemoveMiniMenu={ this.handleRemoveMiniMenu } /> )}
        <div className="header">
          <div className="logo">
            <a href="#"><img src={logo} alt="logo" /> </a>
          </div>
          <a href="#" className="m-menu-link" onClick={ this.handleOpenMiniMenu }>
            <i className="fa fa-bars"></i>	
          </a>
          <div className="menu visible-lg">
            <ul className="menu-navigation">
              <li><Link to="/" className="menu-navigation__menu-link">Home</Link></li>
              <li><Link to="/affiche" className="menu-navigation__menu-link">Affiche</Link></li>
              <li><Link to="/" className="menu-navigation__menu-link">Cinemas</Link></li>
              <li><Link to="/" className="menu-navigation__menu-link">Food and Drinks</Link></li>
              <li><Link to="/" className="menu-navigation__menu-link">Info</Link></li>
              <li><Link to="/" className="menu-navigation__menu-link--sign-in-btn" onClick={ onHandleTriggerModal }>Sign in</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

Menu.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default Menu;