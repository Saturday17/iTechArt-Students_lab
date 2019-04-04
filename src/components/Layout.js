import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from './Menu';
import Footer from './Footer';
import Authorization from './Authorization';
import Registration from './Registration';
import AppRouting from './AppRouting';
import { openAuthorizationModal, openRegistrationModal, closeModals, openMiniMenu, closeMiniMenu } from '../store/actions';
import PropTypes from 'prop-types';

const history = createBrowserHistory();

class Layout extends Component {

  componentDidMount(){
    window.addEventListener('keydown', this.props.closeModals);
  } 

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModals);
  }


  render() {
    const { isOpenRegistrationModal, isOpenAuthorizationModal, openAuthorizationModal, openRegistrationModal, closeModals, openMiniMenu, closeMiniMenu, isOpenMiniMenu } = this.props;
    return (
      <Router history={history}>
        <>
          <Menu openAuthorizationModal={ openAuthorizationModal } openMiniMenu={ openMiniMenu } closeMiniMenu={ closeMiniMenu } isOpenMiniMenu={ isOpenMiniMenu }/>
          <AppRouting />
          <Footer openAuthorizationModal={ openAuthorizationModal }/>
          { isOpenRegistrationModal && <Registration openAuthorizationModal={ openAuthorizationModal } closeModals={ closeModals } /> }
          { isOpenAuthorizationModal && <Authorization openRegistrationModal={ openRegistrationModal } closeModals={ closeModals } /> }
        </>
      </Router>
    ); 
  }
}

Layout.propTypes = {
  isOpenRegistrationModal: PropTypes.bool,
  isOpenAuthorizationModal: PropTypes.bool,
  openAuthorizationModal: PropTypes.func,
  openRegistrationModal: PropTypes.func,
  closeModals: PropTypes.func,
  isOpenMiniMenu: PropTypes.bool,
  openMiniMenu: PropTypes.func,
  closeMiniMenu: PropTypes.func
}

const putStateToProps = state => {
  return {
      isOpenRegistrationModal: state.isOpenRegistrationModal,
      isOpenAuthorizationModal: state.isOpenAuthorizationModal,
      isOpenMiniMenu: state.isOpenMiniMenu
  };
}

const putActionsToProps = dispatch => {
  return {
      openAuthorizationModal: bindActionCreators(openAuthorizationModal, dispatch),
      openRegistrationModal: bindActionCreators(openRegistrationModal, dispatch),
      closeModals:  bindActionCreators(closeModals, dispatch),
      openMiniMenu: bindActionCreators(openMiniMenu, dispatch),
      closeMiniMenu: bindActionCreators(closeMiniMenu, dispatch)
  };
}

export default connect(putStateToProps, putActionsToProps)(Layout);
