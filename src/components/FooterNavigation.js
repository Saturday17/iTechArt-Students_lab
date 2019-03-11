import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FooterNavigation extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <ul>
        <li><Link to="/" className="footer-menu-link">Home</Link></li>
        <li><Link to="/affiche" className="footer-menu-link">Affiche</Link></li>
        <li><a href="#" className="footer-menu-link">Cinemas</a></li>
        <li><a href="#" className="footer-menu-link">Food and Drinks</a></li>
        <li><a href="#" className="footer-menu-link">Info</a></li>
        <li><a href="#" className="footer-sign-in sign-in-btn footer-menu-link" onClick={ onHandleTriggerModal }>Sign in</a></li>
      </ul>
    );
  }
}

export default FooterNavigation;