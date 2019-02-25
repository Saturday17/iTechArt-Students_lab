var link = document.getElementById('m-menu-link');
var close = document.getElementById('close-menu');
var menu = document.getElementById('m-menu');
link.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('m-menu__active');
});
close.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('m-menu__active');
});

var searches = document.querySelectorAll('.search-icon');	
var formSearches = document.querySelectorAll('.input-search');
[].forEach.call(searches, function(i){
    i.addEventListener('click', function(){
        event.preventDefault();
        [].forEach.call(formSearches, function(item){
            if(item.style.display == 'flex'){
                item.style.display = 'none';
            } else if(item.style.display = 'none'){
                item.style.display = 'flex';
            }
        });
    })
});

var signInBtns = document.querySelectorAll('.sign-in-btn');
var formAuthorization = document.getElementById('form-authorization');
[].forEach.call(signInBtns, function(e){
    e.addEventListener('click', function(){
        event.preventDefault();
        formAuthorization.setAttribute('opened', 'true');
        formRegistration.removeAttribute('opened');
    });
});
formAuthorization.addEventListener('click', function(e){
    if(this == e.target){
        formAuthorization.removeAttribute('opened');
    }
});
var regBtns = document.querySelectorAll('.reg-btn');
var formRegistration = document.getElementById('form-registration');
var signInLink = document.querySelector('.auto-link');
signInLink.addEventListener('click', function(){
    event.preventDefault();
    formAuthorization.setAttribute('opened', 'true');
    formRegistration.removeAttribute('opened');
});
[].forEach.call(regBtns, function(e){
    e.addEventListener('click', function(){
        event.preventDefault();
        formRegistration.setAttribute('opened', 'true');
        formAuthorization.removeAttribute('opened');
    });
});
formRegistration.addEventListener('click', function(e){
    if(this == e.target){
        formRegistration.removeAttribute('opened');
    }
});

window.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        formAuthorization.removeAttribute('opened');
        formRegistration.removeAttribute('opened');
    }
});   