import axios from 'axios';
import { URL_API } from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = (id) => ({ type: COMMENTS_REQUEST, id });

export const commentsRequestSuccess = (comments, post) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  comments,
  post,
});

export const commentsRequestError = (err) => ({
  type: COMMENTS_REQUEST_ERROR,
  err,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(commentsRequest(id));

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({
        data: [
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ],
      }) => {
        const comments = children.map((item) => item.data);

        dispatch(commentsRequestSuccess(comments, post));
      }
    )
    .catch((err) => {
      dispatch(commentsRequestError(err.toString()));
      console.error('Error fetch:', err);
    });
};
