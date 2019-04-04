import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';


export const ACTION_OPEN_AUTHORIZATION_MODAL = 'ACTION_OPEN_AUTHORIZATION_MODAL';
export const ACTION_OPEN_REGISTRATION_MODAL = 'ACTION_OPEN_REGISTRATION_MODAL';
export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export const ACTION_OPEN_MINIMENU = 'ACTION_OPEN_MINIMENU';
export const ACTION_CLOSE_MINIMENU = 'ACTION_CLOSE_MINIMENU';
export const ACTION_OPEN_MOVIE = 'ACTION_OPEN_MOVIE';
export const ACTION_CLOSE_MOVIE = 'ACTION_CLOSE_MOVIE';
export const ACTION_SHOW_MOVIEROWS = 'ACTION_SHOW_MOVIEROWS';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);