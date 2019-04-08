import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import thunk from 'redux-thunk';

export const ACTION_OPEN_AUTHORIZATION_MODAL = 'ACTION_OPEN_AUTHORIZATION_MODAL';
export const ACTION_OPEN_REGISTRATION_MODAL = 'ACTION_OPEN_REGISTRATION_MODAL';
export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export const ACTION_OPEN_MINIMENU = 'ACTION_OPEN_MINIMENU';
export const ACTION_CLOSE_MINIMENU = 'ACTION_CLOSE_MINIMENU';
export const ACTION_OPEN_MOVIE = 'ACTION_OPEN_MOVIE';
export const ACTION_CLOSE_MOVIE = 'ACTION_CLOSE_MOVIE';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE';


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);