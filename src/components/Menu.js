import React, {Component} from 'react';
import logo from '../img/logomin.png';
import MiniMenu from './MiniMenu';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

class Menu extends Component {

  state = {
    isOpenMiniMenu: false,
    isOpenSearchInput: false
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

  handleTriggerSearch = e => {
    e.preventDefault();
    this.setState ({
      isOpenSearchInput: !this.state.isOpenSearchInput
    })
  }

  render(){
    const { onHandleTriggerModal } = this.props;
    const { isOpenMiniMenu, isOpenSearchInput } =  this.state;

    return (
      <>
        { isOpenMiniMenu && ( <MiniMenu onHandleTriggerModal={ onHandleTriggerModal }
          handleRemoveMiniMenu={ this.handleRemoveMiniMenu }
          handleTriggerSearch={ this.handleTriggerSearch } 
          isOpenSearchInput={ isOpenSearchInput } /> )}
        <div className="header">
          <div className="logo">
            <a href="#"><img src={logo} alt="logo" /> </a>
          </div>
          <a href="#" className="m-menu-link" onClick={ this.handleOpenMiniMenu }>
            <i className="fa fa-bars"></i>	
          </a>
          <div className="menu visible-lg">
            <ul className="menu-navigation">
              <li><Link to="/" className="menu-link">Home</Link></li>
              <li><Link to="/affiche" className="menu-link">Affiche</Link></li>
              <li><Link to="/" className="menu-link">Cinemas</Link></li>
              <li><Link to="/" className="menu-link">Food and Drinks</Link></li>
              <li><Link to="/" className="menu-link">Info</Link></li>
              <li>
                { isOpenSearchInput && <SearchInput />}
              </li>
              <li><i className="fa fa-search search-icon" onClick={ this.handleTriggerSearch }></i></li>
              <li><a href="#" className="sign-in-btn menu-link" onClick={ onHandleTriggerModal }>Sign in</a></li>
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