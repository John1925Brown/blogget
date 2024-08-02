import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
} from './action';

const inititalState = {
  data: {},
  error: '',
  id: '',
};

export const authReducer = (state = inititalState, action, idPost) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return { ...state, error: '', id: idPost };

    case COMMENTS_REQUEST_SUCCESS:
      return { ...state, data: action.data, error: '' };

    case COMMENTS_REQUEST_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
