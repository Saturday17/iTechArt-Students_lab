const initialState = {
  isOpenRegistrationModal: false,
  isOpenAuthorizationModal: false
}

export default function toggleModals(state = initialState, action) {
  if (action.type === 'SHOW_MODAL_AUTHORIZATION') {
    state = {
      isOpenAuthorizationModal: true,
      isOpenRegistrationModal: false
    }
  } else if (action.type === 'SHOW_MODAL_REGISTRATION') {
    state = {
      isOpenRegistrationModal: true,
      isOpenAuthorizationModal: false
    }
  } else if (action.type === 'CLOSE_MODALS') {
      state = {
        isOpenRegistrationModal: false,
        isOpenAuthorizationModal: false
    }
  }
  return state;
}