import axios from 'axios';
import { 
  ACTION_OPEN_AUTHORIZATION_MODAL, 
  ACTION_OPEN_REGISTRATION_MODAL, 
  ACTION_CLOSE_MODAL, 
  ACTION_OPEN_MINIMENU, 
  ACTION_CLOSE_MINIMENU, 
  ACTION_OPEN_MOVIE, 
  ACTION_CLOSE_MOVIE, 
  LOAD_MOVIES, 
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE
} from '../index';

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

export function loadMovies() {
  return dispatch => {
    dispatch({ type: LOAD_MOVIES });
    axios.post('https://api.themoviedb.org/3/movie/now_playing?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1')
      .then( res => {
        const movies = res.data.results;
        dispatch({ type: LOAD_MOVIES_SUCCESS, payload: movies});
      })
      .catch( error => {
        dispatch({ type: LOAD_MOVIES_FAILURE, payload: error});
      })
  }
}
