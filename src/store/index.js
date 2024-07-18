import { createStore } from 'redux';

const UPDATE_COMMENT = 'UPDATE_COMMENT';

const initialState = {
  comment: 'Hello',
};

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
