import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
} from './action';

const inititalState = {
  comments: [],
  post: {},
  error: '',
  id: '',
};

export const commentsReducer = (state = inititalState, action, idPost) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return { ...state, error: '', id: idPost };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        error: '',
        post: action.post,
      };

    case COMMENTS_REQUEST_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
