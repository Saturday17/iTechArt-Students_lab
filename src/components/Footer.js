import React, {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

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

export default Footer;