import React, {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { onHandleTriggerModal } = this.props;

    return (
      <div className="footer">
        <FooterTop onHandleTriggerModal={ onHandleTriggerModal }/>
        <FooterBottom />
      </div>
    );
  }
}

Footer.propTypes = {
  onHandleTriggerModal: PropTypes.func
}

export default Footer;