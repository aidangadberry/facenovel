import { SHOW_MODAL, HIDE_MODAL } from '../actions/ui_actions';

const initialState = {
  modalType: null,
  modalProps: {}
};

const modalReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType
      }
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default modalReducer;