import React, {Component} from 'react';
import logo from '../img/logomin.png';
import FooterNavigation from './FooterNavigation';
import PropTypes from 'prop-types';

class FooterTop extends Component {
  render() {
    const { openAuthorizationModal } = this.props;
    
    return (
      <div className="footer-top">
        <div className="logo">
          <a href="#"> <img className="logo__img" src={logo} alt="logo" /> </a>
        </div>
        <div className="footer-top__menu">
          <FooterNavigation openAuthorizationModal={ openAuthorizationModal }/>
        </div>
      </div>
    );
  }
}


FooterTop.propTypes = {
  openAuthorizationModal: PropTypes.func
}

export default FooterTop;