import React, { Component } from 'react';
import '../index.css';
import '../media.css';
import Slider from './Slider';
import ArrowDown from './ArrowDown';
import Table from './Table';
import TextInfo from './TextInfo';
import CallToAction from './CallToAction';
import Authorization from './Authorization';
import Registration from './Registration';

class Home extends Component {

state = {
  isOpenRegistrationModal: false,
  isOpenAuthorizationModal: false,
}

componentDidMount(){
  window.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        this.setState({
        isOpenAuthorizationModal: false,
        isOpenRegistrationModal: false
      })
    }
  });
} 

handleTriggerAuthorizationModal = e => {
  e.preventDefault();
  this.setState({
      isOpenAuthorizationModal: true
  })
}
handleTriggerRegistrationModal = e => {
  e.preventDefault();
  this.setState({
      isOpenRegistrationModal: true
  })
}

onTriggerRegistrationModal = e => {
  e.preventDefault();
  // this.setState({ isOpenAuthorizationModal: !this.state.isOpenAuthorizationModal }); // don't do like this if you need change value in state directlry
  this.setState(({ isOpenRegistrationModal }) => ({ isOpenAuthorizationModal: false, isOpenRegistrationModal: !isOpenRegistrationModal }))

}

onTriggerAuthorizationModal = e => {
  e.preventDefault();
  // this.setState({ isOpenAuthorizationModal: !this.state.isOpenAuthorizationModal }); // don't do like this if you need change value in state directlry
  this.setState(({ isOpenAuthorizationModal }) => ({ isOpenRegistrationModal: false, isOpenAuthorizationModal: !isOpenAuthorizationModal }))

}
  
  render() {
    const { isOpenRegistrationModal, isOpenAuthorizationModal } = this.state;
    return (
      <>
        <div className="main" id="main">
          <Slider />
          <ArrowDown />
        </div>
        <Table />
        <TextInfo />
        <CallToAction onHandleTriggerAuthorizationModal={ this.handleTriggerAuthorizationModal } onHandleTriggerRegistrationModal={ this.handleTriggerRegistrationModal }/>
        { isOpenRegistrationModal && <Registration onTriggerModal={this.onTriggerAuthorizationModal} /> }
        { isOpenAuthorizationModal && <Authorization onTriggerModal={this.onTriggerRegistrationModal} /> }
      </>
    );
  }
}

export default Home;