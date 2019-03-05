import React, {Component} from 'react';
import logo from '../img/logomin.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
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
    const { onHandleTriggerModal } = this.props;

    return (
      <>
        <div className="footer">
          <div className="logo">
            <a href="#"> <img src={logo} alt="logo" /> </a>
          </div>
          <div className="footer-menu">
            <ul>
              <li><Link to="/" className="footer-menu-link">Home</Link></li>
              <li><Link to="/affiche" className="footer-menu-link">Affiche</Link></li>
              <li><a href="#" className="footer-menu-link">Cinemas</a></li>
              <li><a href="#" className="footer-menu-link">Food and Drinks</a></li>
              <li><a href="#" className="footer-menu-link">Info</a></li>
              <li><a href="#" className="footer-sign-in sign-in-btn footer-menu-link" onClick={ onHandleTriggerModal }>Sign in</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default Footer;