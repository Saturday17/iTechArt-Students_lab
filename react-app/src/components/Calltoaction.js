import React, {Component} from 'react';

class Calltoaction extends React.Component {

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
      <>
        <div className="call-to-action">
          <span>Are you with us?</span>
          <h4>Go GO !</h4>
          <button className="cta-btn sign-in-btn" onClick={ this.openAuthorization }>Sign in</button>
          <button className="cta-btn reg-btn" onClick={ this.openRegistration }>Registration</button>
        </div>
      </>
    );
  }
}

export default Calltoaction