import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {

  render(){
    const { openAuthorizationModal, closeModals } = this.props;

    return (
      <div className="form-container">
        <form className="form-container__form" action="">
          <div className="form-container__form-cross"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2>Registration</h2>
          <div className="form-field multi-input">
            <label className="form-field__label" htmlFor="name">Name</label>
            <input className="form-container__input form-field__input" type="text" name="first-name" placeholder="Your name"/>
            <input className="form-container__input form-field__input" type="text" placeholder="Last name"/>
          </div>	
          <div className="form-field input-right">
            <label className="form-field__label" htmlFor="email">E-mail</label>
            <input className="form-container__input form-field__input" type="email" name="email" placeholder="youremail@gamil.com"/>
          </div>
          <div className="form-field input-right">
            <label className="form-field__label" htmlFor="pass">Password</label>
            <input className="form-container__input form-field__input" type="password" name="pass" placeholder="your password"/>
          </div>
          <div className="submit-field input-right" value="Регистрация">
            <button className="form-container__button">Check in</button>
          </div>
          <div className="auto-link">
            <a className="auto-link__auto-btn" href="#" onClick={ openAuthorizationModal }>Authorization</a>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  openAuthorizationModal: PropTypes.func,
  closeModals: PropTypes.func
}

export default Registration;