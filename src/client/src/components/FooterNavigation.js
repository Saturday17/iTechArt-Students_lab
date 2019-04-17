import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterNavigation extends Component {
  render() {
    const { openAuthorizationModal } = this.props;
    
    return (
      <ul className="footer-navigation">
        <li><Link to="/" className="footer-navigation__link">Home</Link></li>
        <li><Link to="/affiche" className="footer-navigation__link">Affiche</Link></li>
        <li><Link to="/" className="footer-navigation__link footer-navigation__link--sign-in" onClick={ openAuthorizationModal }>Sign in</Link></li>
      </ul>
    );
  }
}

FooterNavigation.propTypes = {
  openAuthorizationModal: PropTypes.func
}

export default FooterNavigation;