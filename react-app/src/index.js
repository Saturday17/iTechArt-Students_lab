import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import logo from './img/logomin.png';
import dragon from './img/dragon.jpg';
import alita from './img/alita.jpg';
import green_book from './img/green_book.jpg';

class App extends React.Component {
    openMmenu(event){
        let menu = document.getElementById('m-menu');
        event.preventDefault();
        console.log(menu);
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
    componentDidMount(){
        window.addEventListener('keydown', function(e){
            let formAuthorization = document.getElementById('form-authorization');
            let formRegistration = document.getElementById('form-registration');
            if(e.key === 'Escape'){
                formAuthorization.removeAttribute('opened');
                formRegistration.removeAttribute('opened');
            }
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
                    <li><a href="#" className="sign-in-btn menu-link" onClick={ this.openAuthorization }>Sign in</a></li>
                </ul>
                <div className="main" id="main">
                    <div className="header">
                        <div className="logo">
                            <a href="#"> <img src={logo} alt="logo" /> </a>
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
                            <li><a href="#" className="sign-in-btn menu-link" onClick={ this.openAuthorization }>Sign in</a></li>
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
                <div className="table" id="table">
                    <div className="table-header">
                        <h2>Select a Film</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nobis.</p>
                    </div>
                    <div className="price-tags">
                        <div className="price-tag">
                            <img src={dragon}/>
                            <span>How to Train Your Dragon: The Hidden World</span>
                            <h4>110<sub>minutes</sub></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam, ducimus reiciendis enim mollitia provident nostrum quidem beatae quo hic eaque? Quia voluptatem tempore, illo voluptatibus laborum architecto aperiam sequi.</p>
                            <button className="price-btn">select a film</button>
                        </div>
                        <div className="price-tag">
                            <img src={alita}/>
                            <span>Alita: Battle Angel</span>
                            <h4>130<sub>minutes</sub></h4>
                            <p>Sit inventore exercitationem in facilis unde voluptatibus optio reprehenderit excepturi, deleniti dignissimos id, commodi, nobis omnis numquam rerum aut eaque, consequuntur. Autem possimus, fugit ut voluptatum delectus ab, nihil unde.</p>
                            <button className="price-btn">select a film</button>
                        </div>
                        <div className="price-tag">
                            <img src={green_book}/>
                            <span>Green Book</span>
                            <h4>135<sub>minutes</sub></h4>
                            <p>Dolorem ducimus voluptatum praesentium! Quibusdam doloremque, qui amet nemo ipsam sint distinctio, culpa in magni quo, hic sapiente! Blanditiis dolor quibusdam provident officiis veritatis accusamus sapiente deleniti cupiditate repellat temporibus.</p>
                            <button className="price-btn">select a film</button>
                        </div>
                    </div>
                </div>
                <div className="text-info">
                    <h3>Cinema is cinema</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, dolorem. Numquam facere ratione laborum, nihil magnam id explicabo similique nulla sunt a perferendis magni alias iusto. Vero dolores, officia ratione.</p>
                    <h3>Why SubyScreen ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, tenetur dolorum est nam blanditiis eos. Voluptatem natus repudiandae harum, earum fugit temporibus iste vero deserunt fugiat, quas accusantium similique! Quod delectus, optio distinctio. Libero labore maiores harum, reprehenderit sequi rem.</p>
                    <h3>Our main rules</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rerum, similique iste quisquam dicta, quas quae deleniti voluptatibus vel non!</p>
                </div>
                <div className="call-to-action">
                    <span>Are you with us?</span>
                    <h4>Go GO !</h4>
                    <button className="cta-btn sign-in-btn" onClick={ this.openAuthorization }>Sign in</button>
                    <button className="cta-btn reg-btn" onClick={ this.openRegistration }>Registration</button>
                </div>
                <div className="form-container" id="form-authorization">
                <form action="">
                    <h2>Authorization</h2>
                    <div className="form-field input-right">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="youremail@gamil.com"/>
                    </div>
                    <div className="form-field input-right">
                        <label for="pass">Password</label>
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
            <div className="form-container" id="form-registration">
                <form action="">
                    <h2>Registration</h2>
                    <div className="form-field multi-input">
                        <label for="name">Name</label>
                        <input type="text" name="first-name" id="name" placeholder="Your name"/>
                        <input type="text" placeholder="Last name"/>
                    </div>	
                    <div className="form-field input-right">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="youremail@gamil.com"/>
                    </div>
                    <div className="form-field input-right">
                        <label for="pass">Password</label>
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



ReactDOM.render(<App />, document.getElementById('root'));