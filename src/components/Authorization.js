import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Authorization extends Component {

  render() {
    const { openRegistrationModal, closeModals } = this.props;

    return (
      <div className="authorization">
        <form className="authorization-form" action="">
          <div className="authorization-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="authorization-form__title">Authorization</h2>
          <div className="authorization-form__form-field">
            <label className="form-field__label" htmlFor="email">E-mail</label>
            <input className="form-field__input" type="email" name="email" placeholder="youremail@gamil.com" required/>
          </div>
          <div className="authorization-form__form-field">
            <label className="form-field__label" htmlFor="pass">Password</label>
            <input className="form-field__input" type="password" name="pass" placeholder="your password" required/>
          </div>
          <div className="authorization-form__submit-field">
            <button className="submit-field__button">Sign in</button>
          </div>
          <div className="authorization-form__reg-link">
            <a className="reg-link__reg-btn" href="#" onClick={ openRegistrationModal }>Registration</a>
          </div>
        </form>
      </div>
    );
  }
}

Authorization.propTypes = {
  openRegistrationModal: PropTypes.func,
  closeModals: PropTypes.func
}

export default Authorization;
