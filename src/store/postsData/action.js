import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({ type: POSTS_REQUEST });

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
  after: data.after,
});

export const postsRequestError = (err) => ({
  type: POSTS_REQUEST_ERROR,
  err,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().posts.after;
  if (!token) return;

  dispatch(postsRequest());

  axios(`${URL_API}/best?limit=10${after ? `&after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      console.log(data);
      dispatch(postsRequestSuccess(data.data));
    })
    .catch((err) => {
      console.error('Error fetch:', err);

      dispatch(postsRequestError(err.toString()));
    });
};
