import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import AppRouting from './components/AppRouting';
import './index.css';
import './media.css';
import './affiche.css';

const history = createBrowserHistory();

class Index extends Component {

    state = {
        isOpenRegistrationModal: false,
        isOpenAuthorizationModal: false,
    }

    componentDidMount(){
        window.addEventListener('keydown', e => {
          if(e.key === 'Escape'){
              this.setState ({
                isOpenAuthorizationModal: false,
                isOpenRegistrationModal: false
             })
          }
        });
    } 

    componentWillUnmount() {
        window.removeEventListener('keydown', e => {
            if(e.key === 'Escape'){
                this.setState ({
                    isOpenAuthorizationModal: false,
                    isOpenRegistrationModal: false
                })
            }
        });
    }

    handleTriggerModal = e => {
        e.preventDefault();
        this.setState ({
            isOpenAuthorizationModal: true
        })
    }

    onTriggerRegistrationModal = e => {
        e.preventDefault();
        this.setState (({ isOpenRegistrationModal }) => ({ isOpenAuthorizationModal: false, isOpenRegistrationModal: !isOpenRegistrationModal }))
    }

    onTriggerAuthorizationModal = e => {
        e.preventDefault();
        this.setState (({ isOpenAuthorizationModal }) => ({ isOpenRegistrationModal: false, isOpenAuthorizationModal: !isOpenAuthorizationModal }))
    }

    render() {
        const { isOpenRegistrationModal, isOpenAuthorizationModal } = this.state;
        return (
            <Router history={history}>
                <>
                    <Menu onHandleTriggerModal={ this.handleTriggerModal }/>
                    <AppRouting />
                    <Footer onHandleTriggerModal={ this.handleTriggerModal }/>
                    { isOpenRegistrationModal && <Registration onTriggerModal={this.onTriggerAuthorizationModal} /> }
                    { isOpenAuthorizationModal && <Authorization onTriggerModal={this.onTriggerRegistrationModal} /> }
                </>
            </Router>
        ); 
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));