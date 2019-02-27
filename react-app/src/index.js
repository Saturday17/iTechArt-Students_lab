import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import './script.js';



class App extends React.Component {
    openMmenu(event){
        let menu = document.getElementById('m-menu');
        event.preventDefault();
        menu.classList.toggle('m-menu__active');
    }
    closeMmenu(event){
        let menu = document.getElementById('m-menu');
        event.preventDefault();
        menu.classList.toggle('m-menu__active');
    }
    searchInput(event){
        event.preventDefault();
        let formSearches = document.querySelectorAll('.input-search');
        [].forEach.call(formSearches, function(item){
            if(item.opened) {
                item.removeAttribute('opened');
            } else if(!item.opened) {
                item.setAttribute('opened', 'true');
            }
            console.log(item);
        });
    }
    render() {
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
                    <li><a href="#" className="sign-in-btn menu-link">Sign in</a></li>
                </ul>
            </>,
            <>
                <div className="main" id="main">
                    <div className="header">
                        <div className="logo">
                            <a href="#"> <img src="../src/img/logo-min.png" alt="logo" /> </a>
                        </div>
                        <a href="#" className="m-menu-link" onClick={ this.openMmenu }>
                            <i className="fa fa-bars"></i>	
                        </a>
                        <div className="menu visible-lg">
                            <ul><li><a href="#" className="menu-link">Affiche</a></li>
                            <li><a href="#" className="menu-link">Cinemas</a></li>
                            <li><a href="#" className="menu-link">Food and Drinks</a></li>
                            <li><a href="#" className="menu-link">Info</a></li>
                            <li>
                                <form className="form-search">
                                    <input type="text" placeholder="Поиск по сайту" className="input-search" />
                                </form>
                            </li>
                            <li><i className="fa fa-search search-icon" onClick={ this.searchInput }></i></li>
                            <li><a href="#" className="sign-in-btn menu-link">Sign in</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="item item-1"><span>Film 1</span></div>
                        <div className="item item-2"><span>Film 2</span></div>
                        <div className="item item-3"><span>Film 3</span></div>
                        <div className="item item-4"><span>Film 4</span></div>
                    </div>
                    <a href="#table" className="main-arrow">
                        <div className="arrow-down" id="arrow-down">
                            <svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="#fff"></path></svg>
                        </div>
                    </a>
                </div>
            </>
        ); 
    }
}



ReactDOM.render(<App />, document.getElementById('root'));