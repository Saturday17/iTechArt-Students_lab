import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';

class MiniMenu extends Component {

  render(){

    const { onHandleTriggerModal, onAnimatedClass, handleRemoveMiniMenu, handleTriggerSearch, isOpenSearchInput } = this.props;

    return (
      <ul className={`m-menu ${onAnimatedClass}`} id="m-menu">
        <li className="close-menu" onClick={ handleRemoveMiniMenu }>&times;</li>
        <li><Link to="/" className="menu-link">Home</Link></li>
        <li><Link to="/affiche" className="menu-link">Affiche</Link></li>
        <li><a href="#" className="menu-link">Cinemas</a></li>
        <li><a href="#" className="menu-link">Food and Drinks</a></li>
        <li><a href="#" className="menu-link">Info</a></li>
        <li>
          { isOpenSearchInput && <SearchInput />}
        </li>
        <li><i className="fa fa-search search-icon" style={{color: 'rgba(255, 255, 255, 1)'}} onClick={ handleTriggerSearch }></i></li>
        <li><a href="#" className="sign-in-btn menu-link" onClick={ onHandleTriggerModal }>Sign in</a></li>
      </ul>
    );
  }
}

export default MiniMenu;