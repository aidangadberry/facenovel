export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (modalType, modalProps) => dispatch => (
  dispatch({
    type: SHOW_MODAL,
    modalType,
    modalProps
  })
);

export const hideModal = () => dispatch => (
  dispatch({
    type: HIDE_MODAL
  })
);