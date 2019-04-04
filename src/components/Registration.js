import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {

  render(){
    const { openAuthorizationModal, closeModals } = this.props;

    return (
      <div className="registration">
        <form className="registration-form" action="">
          <div className="registration-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="registration-form__title">Registration</h2>
          <div className="registration-form__form-field multi-input">
            <label className="form-field__label" htmlFor="name">Name</label>
            <input className="form-field__input" type="text" name="first-name" placeholder="Your name" required/>
            <input className="form-field__input" type="text" placeholder="Last name"/>
          </div>	
          <div className="registration-form__form-field">
            <label className="form-field__label" htmlFor="email">E-mail</label>
            <input className="form-field__input" type="email" name="email" placeholder="youremail@gamil.com" required/>
          </div>
          <div className="registration-form__form-field">
            <label className="form-field__label" htmlFor="pass">Password</label>
            <input className="form-field__input" type="password" name="pass" placeholder="your password" required/>
          </div>
          <div className="registration-form__submit-field">
            <button className="submit-field__button">Check in</button>
          </div>
          <div className="registration-form__auto-link">
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