import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from './Slider';
import ArrowDown from './ArrowDown';
import TableOfPremiere from './TableOfPremiere';
import InformationColumn from './InformationColumn';
import SignInBlock from './SignInBlock';
import Authorization from './Authorization';
import Registration from './Registration';
import { openAuthorizationModal, openRegistrationModal, closeModals } from '../store/actions';
import PropTypes from 'prop-types';

class Home extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.closeModals);
  } 

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModals);
  }
  
  render() {
    const { isOpenRegistrationModal, isOpenAuthorizationModal, openAuthorizationModal, openRegistrationModal, closeModals } = this.props;
    return (
      <>
        <div className="main" id="main">
          <Slider />
          <ArrowDown />
        </div>
        <TableOfPremiere />
        <InformationColumn />
        <SignInBlock openAuthorizationModal={ openAuthorizationModal } openRegistrationModal={ openRegistrationModal} />
        { isOpenRegistrationModal && <Registration openAuthorizationModal={ openAuthorizationModal } closeModals={ closeModals } /> }
        { isOpenAuthorizationModal && <Authorization openRegistrationModal={ openRegistrationModal } closeModals={ closeModals } /> }
      </>
    );
  }
}

Home.propTypes = {
  isOpenRegistrationModal: PropTypes.bool,
  isOpenAuthorizationModal: PropTypes.bool,
  openAuthorizationModal: PropTypes.func,
  openRegistrationModal: PropTypes.func,
  closeModals: PropTypes.func
}

const putStateToProps = state => {
  return {
      isOpenRegistrationModal: state.isOpenRegistrationModal,
      isOpenAuthorizationModal: state.isOpenAuthorizationModal
  };
}

const putActionsToProps = dispatch => {
  return {
      openAuthorizationModal: bindActionCreators(openAuthorizationModal, dispatch),
      openRegistrationModal: bindActionCreators(openRegistrationModal, dispatch),
      closeModals:  bindActionCreators(closeModals, dispatch)
  };
}

export default connect(putStateToProps, putActionsToProps)(Home);