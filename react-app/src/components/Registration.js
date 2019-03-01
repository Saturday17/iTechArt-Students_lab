import React, {Component} from 'react';

class Registration extends React.Component {
  openAuthorization(event){
    event.preventDefault();
    let formAuthorization = document.getElementById('form-authorization');
    let formRegistration = document.getElementById('form-registration');
    formAuthorization.setAttribute('opened', 'true');
    formRegistration.removeAttribute('opened');
    formAuthorization.addEventListener('click', function(e){
        if(this === e.target){
            formAuthorization.removeAttribute('opened');
        }
    });
  }
  render(){
    return (
      <>
        <div className="form-container" id="form-registration">
          <form action="">
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
              <a href="#" onClick={ this.openAuthorization }>Authorization</a>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Registration