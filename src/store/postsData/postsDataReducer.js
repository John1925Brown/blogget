import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR,
} from './action';

const inititalState = {
  loading: false,
  data: {},
  error: '',
};

export const postsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { ...state, error: '', loading: true };

    case POSTS_REQUEST_SUCCESS:
      return { ...state, data: action.data, error: '', loading: false };

    case POSTS_REQUEST_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};
