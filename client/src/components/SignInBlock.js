import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignInBlock extends Component {
  
  render(){
    const { openAuthorizationModal, openRegistrationModal } = this.props;
    return (
      <div className="call-to-action">
        <span>Are you with us?</span>
        <h4>Go GO !</h4>
        <button className="cta-btn sign-in-btn" onClick={ openAuthorizationModal }>Sign in</button>
        <button className="cta-btn reg-btn" onClick={ openRegistrationModal }>Registration</button>
      </div>
    );
  }
}

SignInBlock.propTypes = {
  openAuthorizationModal: PropTypes.func,
  openRegistrationModal: PropTypes.func
}

export default SignInBlock;