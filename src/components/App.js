import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';
import Footer from './Footer';
import Authorization from './Authorization';
import Registration from './Registration';
import AppRouting from './AppRouting';
import '../index.css';
import '../media.css';
import '../affiche.css';

const history = createBrowserHistory();

class App extends Component {

  state = {
    isOpenRegistrationModal: false,
    isOpenAuthorizationModal: false
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

  handleCloseModal = e => {
    e.preventDefault();
    this.setState ({
      isOpenAuthorizationModal: false,
      isOpenRegistrationModal: false
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
          { isOpenRegistrationModal && <Registration onTriggerModal={this.onTriggerAuthorizationModal} onHandleCloseModal={this.handleCloseModal} /> }
          { isOpenAuthorizationModal && <Authorization onTriggerModal={this.onTriggerRegistrationModal} onHandleCloseModal={this.handleCloseModal} /> }
        </>
      </Router>
    ); 
  }
}

export default App;