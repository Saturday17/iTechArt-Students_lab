import React, {Component} from 'react';
import logo from '../img/logomin.png';
import FooterNavigation from './FooterNavigation';
import PropTypes from 'prop-types';

class FooterTop extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <div className="footer-top">
        <div className="logo">
          <a href="#"> <img className="logo__img" src={logo} alt="logo" /> </a>
        </div>
        <div className="footer-top__menu">
          <FooterNavigation onHandleTriggerModal={ onHandleTriggerModal }/>
        </div>
      </div>
    );
  }
}


FooterTop.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default FooterTop;