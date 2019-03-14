import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterNavigation extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <ul className="footer-navigation">
        <li><Link to="/" className="footer-top__menu--link">Home</Link></li>
        <li><Link to="/affiche" className="footer-top__menu--link">Affiche</Link></li>
        <li><Link to="/" className="footer-top__menu--link">Food and Drinks</Link></li>
        <li><Link to="/" className="footer-top__menu--link">Cinemas</Link></li>
        <li><Link to="/" className="footer-top__menu--link">Info</Link></li>
        <li><Link to="/" className="footer-sign-in sign-in-btn footer-top__menu--link" onClick={ onHandleTriggerModal }>Sign in</Link></li>
      </ul>
    );
  }
}

FooterNavigation.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default FooterNavigation;