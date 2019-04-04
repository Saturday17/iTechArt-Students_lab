import React, {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { openAuthorizationModal } = this.props;

    return (
      <div className="footer">
        <FooterTop openAuthorizationModal={ openAuthorizationModal }/>
        <FooterBottom />
      </div>
    );
  }
}

Footer.propTypes = {
  openAuthorizationModal: PropTypes.func
}

export default Footer;