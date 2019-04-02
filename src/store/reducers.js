import { ACTION_OPEN_AUTHORIZATION_MODAL, ACTION_OPEN_REGISTRATION_MODAL, ACTION_CLOSE_MODAL, ACTION_OPEN_MINIMENU, ACTION_CLOSE_MINIMENU, ACTION_OPEN_MOVIE, ACTION_CLOSE_MOVIE, ACTION_REMOVE_SPINNER } from '../index';

const initialState = {
  isOpenRegistrationModal: false,
  isOpenAuthorizationModal: false,
  isOpenMiniMenu: false,
  isOpenMovie: false,
  isShownSpinner: true
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_OPEN_AUTHORIZATION_MODAL: 
        return {...state, isOpenAuthorizationModal: true, isOpenRegistrationModal: false };
    case ACTION_OPEN_REGISTRATION_MODAL: 
        return {...state, isOpenRegistrationModal: true, isOpenAuthorizationModal: false };
    case ACTION_CLOSE_MODAL:
        return {...state, isOpenRegistrationModal: false, isOpenAuthorizationModal: false };
    case ACTION_OPEN_MINIMENU:
        return {...state, isOpenMiniMenu: true };
    case ACTION_CLOSE_MINIMENU: 
        return {...state, isOpenMiniMenu: false };
    case ACTION_OPEN_MOVIE:
        return {...state, isOpenMovie: true };
    case ACTION_CLOSE_MOVIE:
        return {...state, isOpenMovie: false };
    case ACTION_REMOVE_SPINNER:
        return {...state, isShownSpinner: false};    
  }
  
  return state;
}