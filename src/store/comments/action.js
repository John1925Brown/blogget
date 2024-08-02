import axios from 'axios';
import { URL_API } from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = (id) => ({ type: COMMENTS_REQUEST, id });

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (err) => ({
  type: COMMENTS_REQUEST_ERROR,
  err,
});

export const commentsRequestAsync = () => (dispatch, getState, id) => {
  const token = getState().token.token;
  if (!token) return;

  console.log(id);

  dispatch(commentsRequest(id));

  console.log(id);

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ([
        {
          data: {
            children: [{ data: post }],
          },
        },
        {
          data: { children },
        },
      ]) => {
        const comments = children.map((item) => item.data);
        console.log(children);
        console.log(comments);

        dispatch(commentsRequestSuccess(comments));
      }
    )
    .catch((err) => {
      dispatch(commentsRequestError(err.toString()));
      console.error('Error fetch:', err);
    });
};
