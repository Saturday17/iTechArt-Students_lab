import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import './media.css';
import './affiche.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Affiche from './components/Affiche';
import Foot from './components/Foot';

const history = createBrowserHistory();

class Index extends React.Component {
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
            <Router history={history}>
                <>
                    <Menu />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/affiche" component={Affiche}/>
                    <Foot />
                </>
            </Router>
        ); 
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));