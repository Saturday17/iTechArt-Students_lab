import React, {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import PropTypes from 'prop-types';

class Footer extends Component {
  render(){
    const { onHandleTriggerModal } = this.props;

    return (
      <>
        <FooterTop onHandleTriggerModal={ onHandleTriggerModal }/>
        <FooterBottom />
      </>
    );
  }
}

Footer.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default Footer;