import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Arrowdown from './components/Arrowdown';
import Table from './components/Table';
import Textinfo from './components/Textinfo';
import Calltoaction from './components/Calltoaction';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import Foot from './components/Foot';

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
            <>
                <div className="main" id="main">
                    <Menu />
                    <Slider />
                    <Arrowdown />
                </div>
                <Table />
                <Textinfo />
                <Calltoaction />
                <Authorization />
                <Registration />
                <Foot />
            </>
        ); 
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));