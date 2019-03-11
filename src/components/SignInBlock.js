import React, {Component} from 'react';

class SignInBlock extends Component {
  
  render(){
    const { onHandleOpenAuthorizationModal, onHandleOpenRegistrationModal } = this.props;
    return (
      <div className="call-to-action">
        <span>Are you with us?</span>
        <h4>Go GO !</h4>
        <button className="cta-btn sign-in-btn" onClick={ onHandleOpenAuthorizationModal }>Sign in</button>
        <button className="cta-btn reg-btn" onClick={ onHandleOpenRegistrationModal }>Registration</button>
      </div>
    );
  }
}

export default SignInBlock;