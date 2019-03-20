import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {

  render(){
    const { onTriggerModal, onHandleCloseModal } = this.props;

    return (
      <div className="form-container">
        <form className="form-container__form" action="">
          <div className="form-container__formc-cross"><h1 onClick={ onHandleCloseModal }>&times;</h1></div>
          <h2>Registration</h2>
          <div className="form-field multi-input">
            <label htmlFor="name">Name</label>
            <input type="text" name="first-name" id="name" placeholder="Your name"/>
            <input type="text" placeholder="Last name"/>
          </div>	
          <div className="form-field input-right">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="youremail@gamil.com"/>
          </div>
          <div className="form-field input-right">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" placeholder="your password"/>
          </div>
          <div className="submit-field input-right" value="Регистрация">
            <button>Check in</button>
          </div>
          <div className="auto-link">
            <a href="#" onClick={ onTriggerModal }>Authorization</a>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  onTriggerModal: PropTypes.func.isRequired,
  onHandleCloseModal: PropTypes.func
}

export default Registration;