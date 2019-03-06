import React, {Component} from 'react';

class CallToAction extends Component {
  
  render(){
    const { onHandleTriggerAuthorizationModal, onHandleTriggerRegistrationModal } = this.props;
    return (
      <div className="call-to-action">
        <span>Are you with us?</span>
        <h4>Go GO !</h4>
        <button className="cta-btn sign-in-btn" onClick={ onHandleTriggerAuthorizationModal }>Sign in</button>
        <button className="cta-btn reg-btn" onClick={ onHandleTriggerRegistrationModal }>Registration</button>
      </div>
    );
  }
}

export default CallToAction;