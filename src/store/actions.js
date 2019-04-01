import { ACTION_OPEN_AUTHORIZATION_MODAL, ACTION_OPEN_REGISTRATION_MODAL, ACTION_CLOSE_MODAL, ACTION_OPEN_MINIMENU, ACTION_CLOSE_MINIMENU, ACTION_OPEN_MOVIE, ACTION_CLOSE_MOVIE } from '../index';

export const openAuthorizationModal = newStateModal => {
  newStateModal.preventDefault();
  return {
      type: ACTION_OPEN_AUTHORIZATION_MODAL
  }
}

export const openRegistrationModal = newStateModal => {
  newStateModal.preventDefault();
  return {
      type: ACTION_OPEN_REGISTRATION_MODAL
  }
}

export const closeModals = () => {
  return {
    type: ACTION_CLOSE_MODAL
  }
}

export const closeModalsByButton = e => {
  return dispatch => {
    if(e.key === 'Escape') {
      dispatch(closeModals(e))
    }
  }
}

export const openMiniMenu = e => {
  e.preventDefault();
  return {
    type: ACTION_OPEN_MINIMENU
  }
}

export const closeMiniMenu = e => {
  e.preventDefault();
  return {
    type: ACTION_CLOSE_MINIMENU
  }
}

export const openMovie = () => {
  return {
    type: ACTION_OPEN_MOVIE
  }
}

export const closeMovie = () => {
  return {
    type: ACTION_CLOSE_MOVIE
  }
}