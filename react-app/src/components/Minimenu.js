import React, {Component} from 'react';

class Minimenu extends React.Component {
  closeMmenu(event){
    let menu = document.getElementById('m-menu');
    event.preventDefault();
    menu.classList.toggle('m-menu__active');
  }
  searchInput(event){
    event.preventDefault();
    let formSearches = document.querySelectorAll('.input-search');
    [].forEach.call(formSearches, function(item){
        if(item.className == 'input-search'){
            item.classList.add('input-search__active');
        } else if(item.className == 'input-search input-search__active'){
            item.classList.remove('input-search__active');
        }
    });
  }
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
        <ul className="m-menu" id="m-menu">
          <li className="close-menu" onClick={ this.closeMmenu }>&times;</li>
          <li><a href="#" className="menu-link">Affiche</a></li>
          <li><a href="#" className="menu-link">Cinemas</a></li>
          <li><a href="#" className="menu-link">Food and Drinks</a></li>
          <li><a href="#" className="menu-link">Info</a></li>
          <li>
              <form className="form-search">
                  <input type="text" placeholder="Поиск по сайту" className="input-search"/>
              </form>
          </li>
          <li><i className="fa fa-search search-icon" style={{color: 'rgba(255, 255, 255, 1)'}} onClick={ this.searchInput }></i></li>
          <li><a href="#" className="sign-in-btn menu-link" onClick={ this.openAuthorization }>Sign in</a></li>
        </ul>
      </>
    );
  }
}

export default Minimenu