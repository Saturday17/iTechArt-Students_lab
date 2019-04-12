import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Registration extends Component {

  signUp = e => {
    e.preventDefault();

    const data = {
      name: this.refs.userName.value,
      login: this.refs.userLogin.value,
      password: this.refs.userPassword.value
    }

    axios.post('http://localhost:4000/api/auth/register')
      .then(JSON.stringify(data))
      .catch(error => {
        console.error(error);
      })
  }

  render(){
    const { openAuthorizationModal, closeModals } = this.props;

    return (
      <div className="registration">
        <form className="registration-form" action="">
          <div className="registration-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="registration-form__title">Registration</h2>
          <div className="registration-form__form-field multi-input">
            <label className="form-field__label" htmlFor="name">Name</label>
            <input className="form-field__input" ref="userName" type="text" name="name" placeholder="Your name" required/>
          </div>	
          <div className="registration-form__form-field">
            <label className="form-field__label" htmlFor="login">Login</label>
            <input className="form-field__input" ref="userLogin" type="login" name="login" placeholder="your login" required/>
          </div>
          <div className="registration-form__form-field">
            <label className="form-field__label" htmlFor="pass">Password</label>
            <input className="form-field__input" ref="userPassword" type="password" name="pass" placeholder="your password" required/>
          </div>
          <div className="registration-form__submit-field">
            <button className="submit-field__button" onClick={ this.signUp }>Sign up</button>
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