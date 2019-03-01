import React, {Component} from 'react';

class Authorization extends Component {
  openRegistration(event){
    event.preventDefault();
    let formAuthorization = document.getElementById('form-authorization');
    let formRegistration = document.getElementById('form-registration');
    formRegistration.setAttribute('opened', 'true');
    formAuthorization.removeAttribute('opened');
    formRegistration.addEventListener('click', function(e){
      if(this === e.target){
          formRegistration.removeAttribute('opened');
      }
    });
  }
  render(){
    return (
      <div className="form-container" id="form-authorization">
        <form action="">
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
            <a href="#" onClick={ this.openRegistration }>Registration</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Authorization
