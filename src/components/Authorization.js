import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Authorization extends Component {

  render() {
    const { onTriggerModal, onHandleCloseModal } = this.props;

    return (
      <div className="form-container">
        <form action="">
          <div className="form-container__formc-cross"><h1 onClick={ onHandleCloseModal }>&times;</h1></div>
          <h2>Authorization</h2>
          <div className="form-field input-right">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="youremail@gamil.com"/>
          </div>
          <div className="form-field input-right">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" placeholder="your password"/>
          </div>
          <div className="submit-field input-right" value="Регистрация">
            <button>Sign in</button>
          </div>
          <div className="reg-link reg-btn">
            <a href="#" onClick={ onTriggerModal }>Registration</a>
          </div>
        </form>
      </div>
    );
  }
}

Authorization.propTypes = {
  onTriggerModal: PropTypes.func.isRequired,
  onHandleCloseModal: PropTypes.func
}

export default Authorization;
