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
    LOAD_MOVIES_FAILURE,
    ACTION_OPEN_HALL,
    ACTION_CLOSE_HALL,
    CHANGE_SEAT_SELECTION
} from '../index';

const initialState = {
    isOpenRegistrationModal: false,
    isOpenAuthorizationModal: false,
    isOpenMiniMenu: false,
    isOpenMovie: false,
    isShownSpinner: false,
    loaded: false,
    loading: false,
    error: null,
    movies: [],
    isOpenHall: false,
    seats: []
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_OPEN_AUTHORIZATION_MODAL:
            return { ...state, isOpenAuthorizationModal: true, isOpenRegistrationModal: false };
        case ACTION_OPEN_REGISTRATION_MODAL:
            return { ...state, isOpenRegistrationModal: true, isOpenAuthorizationModal: false };
        case ACTION_CLOSE_MODAL:
            return { ...state, isOpenRegistrationModal: false, isOpenAuthorizationModal: false };
        case ACTION_OPEN_MINIMENU:
            return { ...state, isOpenMiniMenu: true };
        case ACTION_CLOSE_MINIMENU:
            return { ...state, isOpenMiniMenu: false };
        case ACTION_OPEN_MOVIE:
            return { ...state, isOpenMovie: true };
        case ACTION_CLOSE_MOVIE:
            return { ...state, isOpenMovie: false };
        case LOAD_MOVIES:
            return { ...state, loading: true, loaded: false, isShownSpinner: true };
        case LOAD_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, loading: false, loaded: true, error: null, isShownSpinner: false };
        case LOAD_MOVIES_FAILURE:
            return { ...state, loading: false, loaded: true, error: action.payload, isShownSpinner: false };
        case ACTION_OPEN_HALL:
            return { ...state, isOpenHall: true };
        case ACTION_CLOSE_HALL:
            return { ...state, isOpenHall: false };
        case CHANGE_SEAT_SELECTION:
            return { ...state, seats: action.payload };
}

    return state;
}
