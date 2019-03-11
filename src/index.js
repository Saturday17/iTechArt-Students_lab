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
import Footer from './components/Footer';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import FooterDown from './components/FooterDown'

const history = createBrowserHistory();

class Index extends Component {

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

    handleTriggerModal = e => {
        e.preventDefault();
        this.setState({
            isOpenAuthorizationModal: true
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
            <Router history={history}>
                <>
                    <Menu onHandleTriggerModal={ this.handleTriggerModal }/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/affiche" component={Affiche}/>
                    <Footer onHandleTriggerModal={ this.handleTriggerModal }/>
                    <FooterDown />
                    { isOpenRegistrationModal && <Registration onTriggerModal={this.onTriggerAuthorizationModal} /> }
                    { isOpenAuthorizationModal && <Authorization onTriggerModal={this.onTriggerRegistrationModal} /> }
                </>
            </Router>
        ); 
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));