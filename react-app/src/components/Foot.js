import React, {Component} from 'react';
import logo from '../img/logomin.png';

class Foot extends Component {
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
        <div className="footer">
          <div className="logo">
            <a href="#"> <img src={logo} alt="logo"/> </a>
          </div>
          <div className="footer-menu">
            <ul>
              <li><a href="#" className="footer-menu-link">Affiche</a></li>
              <li><a href="#" className="footer-menu-link">Cinemas</a></li>
              <li><a href="#" className="footer-menu-link">Food and Drinks</a></li>
              <li><a href="#" className="footer-menu-link">Info</a></li>
              <li><a href="#" className="footer-sign-in sign-in-btn footer-menu-link" onClick={ this.openAuthorization }>Sign in</a></li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="legal">
          <div className="copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, animi!</p>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100006226428790&ref=bookmarks"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/ilyasubota777"><i className="fa fa-twitter"></i></a>
            <a href="https://plus.google.com/107700002477324017756?hl=ru"><i className="fa fa-google-plus"></i></a>
            <a href="https://www.instagram.com/stday17/?hl=ru"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </>
    );
  }
}

export default Foot