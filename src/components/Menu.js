import React, {Component} from 'react';
import logo from '../img/logomin.png';
import MiniMenu from './MiniMenu';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';

class Menu extends Component {

  state = {
    isOpenMiniMenu: false,
    animatedClass: '',
    isOpenSearchInput: false
  }

  handleOpenMiniMenu = e => {
    e.preventDefault();
    this.setState({
      isOpenMiniMenu: true
    });
    setTimeout(() => this.setState({
      animatedClass: 'animated'
    }), 0);
  }

  handleRemoveMiniMenu = e => {
    e.preventDefault();
    this.setState({
      isOpenMiniMenu: false,
      animatedClass: ''
    });
  }

  handleTriggerSearch = e => {
    e.preventDefault();
    this.setState({
      isOpenSearchInput: !this.state.isOpenSearchInput
    })
  }

  render(){
    const { onHandleTriggerModal } = this.props;
    const { isOpenMiniMenu, animatedClass, isOpenSearchInput } =  this.state;

    return (
      <>
        { isOpenMiniMenu && <MiniMenu onHandleTriggerModal={ onHandleTriggerModal } handleRemoveMiniMenu={ this.handleRemoveMiniMenu } onAnimatedClass={ animatedClass } handleTriggerSearch={ this.handleTriggerSearch } isOpenSearchInput={ isOpenSearchInput } /> }
        <div className="header">
          <div className="logo">
            <a href="#"><img src={logo} alt="logo" /> </a>
          </div>
          <a href="#" className="m-menu-link" onClick={ this.handleOpenMiniMenu }>
            <i className="fa fa-bars"></i>	
          </a>
          <div className="menu visible-lg">
            <ul>
              <li><Link to="/" className="menu-link">Home</Link></li>
              <li><Link to="/affiche" className="menu-link">Affiche</Link></li>
              <li><a href="#" className="menu-link">Cinemas</a></li>
              <li><a href="#" className="menu-link">Food and Drinks</a></li>
              <li><a href="#" className="menu-link">Info</a></li>
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

export default Menu;