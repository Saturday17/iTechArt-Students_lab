import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterNavigation extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <ul>
        <li><Link to="/" className="footer-top__menu__link">Home</Link></li>
        <li><Link to="/affiche" className="footer-top__menu__link">Affiche</Link></li>
        <li><a href="#" className="footer-top__menu__link">Cinemas</a></li>
        <li><a href="#" className="footer-top__menu__link">Food and Drinks</a></li>
        <li><a href="#" className="footer-top__menu__link">Info</a></li>
        <li><a href="#" className="footer-sign-in sign-in-btn footer-top__menu__link" onClick={ onHandleTriggerModal }>Sign in</a></li>
      </ul>
    );
  }
}

FooterNavigation.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default FooterNavigation;