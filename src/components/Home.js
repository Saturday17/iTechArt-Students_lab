import React, { Component } from 'react';
import '../index.css';
import '../media.css';
import Slider from './Slider';
import ArrowDown from './ArrowDown';
import TableOfPremiere from './TableOfPremiere';
import TextInfo from './TextInfo';
import SignInBlock from './SignInBlock';
import Authorization from './Authorization';
import Registration from './Registration';

class Home extends Component {

state = {
  isOpenRegistrationModal: false,
  isOpenAuthorizationModal: false,
}

componentDidMount() {
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

handleOpenAuthorizationModal = e => {
  e.preventDefault();
  this.setState ({
      isOpenAuthorizationModal: true
  })
}
handleOpenRegistrationModal = e => {
  e.preventDefault();
  this.setState ({
      isOpenRegistrationModal: true
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
      <>
        <div className="main" id="main">
          <Slider />
          <ArrowDown />
        </div>
        <TableOfPremiere />
        <TextInfo />
        <SignInBlock onHandleOpenAuthorizationModal={ this.handleOpenAuthorizationModal } onHandleOpenRegistrationModal={ this.handleOpenRegistrationModal }/>
        { isOpenRegistrationModal && <Registration onTriggerModal={this.onTriggerAuthorizationModal} /> }
        { isOpenAuthorizationModal && <Authorization onTriggerModal={this.onTriggerRegistrationModal} /> }
      </>
    );
  }
}

export default Home;