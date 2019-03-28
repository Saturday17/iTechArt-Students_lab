import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Authorization extends Component {

  render() {
    const { openRegistrationModal, closeModals } = this.props;

    return (
      <div className="form-container">
        <form className="form-container__form" action="">
          <div className="form-container__form-cross"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2>Authorization</h2>
          <div className="form-field input-right">
            <label className="form-field__label" htmlFor="email">E-mail</label>
            <input className="form-container__input form-field__input" type="email" name="email" placeholder="youremail@gamil.com"/>
          </div>
          <div className="form-field input-right">
            <label className="form-field__label" htmlFor="pass">Password</label>
            <input className="form-container__input form-field__input" type="password" name="pass" placeholder="your password"/>
          </div>
          <div className="submit-field input-right" value="Регистрация">
            <button className="form-container__button">Sign in</button>
          </div>
          <div className="reg-link">
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
