import React, {Component} from 'react';
import logo from '../img/logomin.png';
import FooterNavigation from './FooterNavigation';
import PropTypes from 'prop-types';

class FooterTop extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;
    
    return (
      <div className="footer">
        <div className="logo">
          <a href="#"> <img src={logo} alt="logo" /> </a>
        </div>
        <div className="footer-menu">
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