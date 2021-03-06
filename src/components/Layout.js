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
import { openAuthorizationModal, openRegistrationModal, closeModals, openMiniMenu, closeMiniMenu, closeModalsByButton } from '../store/actions';
import PropTypes from 'prop-types';

const history = createBrowserHistory();

class Layout extends Component {

  componentDidMount(){
    window.addEventListener('keydown', this.props.closeModalsByButton);
  } 

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModalsByButton);
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
  closeModalsByButton: PropTypes.func,
  isOpenMiniMenu: PropTypes.bool,
  openMiniMenu: PropTypes.func,
  closeMiniMenu: PropTypes.func
}

const mapStateToProps = state => {
  return {
    isOpenRegistrationModal: state.isOpenRegistrationModal,
    isOpenAuthorizationModal: state.isOpenAuthorizationModal,
    isOpenMiniMenu: state.isOpenMiniMenu
  };
}

const mapActionsToProps = dispatch => {
  return {
    openAuthorizationModal: bindActionCreators(openAuthorizationModal, dispatch),
    openRegistrationModal: bindActionCreators(openRegistrationModal, dispatch),
    closeModals:  bindActionCreators(closeModals, dispatch),
    closeModalsByButton: bindActionCreators(closeModalsByButton, dispatch),
    openMiniMenu: bindActionCreators(openMiniMenu, dispatch),
    closeMiniMenu: bindActionCreators(closeMiniMenu, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Layout);
