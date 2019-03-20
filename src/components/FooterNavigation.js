import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterNavigation extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <ul className="footer-navigation">
        <li><Link to="/" className="footer-navigation__link">Home</Link></li>
        <li><Link to="/affiche" className="footer-navigation__link">Affiche</Link></li>
        <li><Link to="/" className="footer-navigation__link">Food and Drinks</Link></li>
        <li><Link to="/" className="footer-navigation__link">Cinemas</Link></li>
        <li><Link to="/" className="footer-navigation__link">Info</Link></li>
        <li><Link to="/" className="footer-navigation__link--sign-in" onClick={ onHandleTriggerModal }>Sign in</Link></li>
      </ul>
    );
  }
}

FooterNavigation.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default FooterNavigation;