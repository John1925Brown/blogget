import { URL_API } from '../../api/const';
import axios from 'axios';
import { deleteToken } from '../../store/tokenReducer';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({ type: AUTH_REQUEST });

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (err) => ({
  type: AUTH_REQUEST_ERROR,
  err,
});

export const authLogout = (err) => ({
  type: AUTH_LOGOUT,
  err: '',
});

export const authRequestAsinc = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(authRequest());

  axios(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { name, icon_img: iconImg } }) => {
      const img = iconImg.replace(/\?.*$/, '');
      const data = { name, img };

      dispatch(authRequestSuccess(data));
    })
    .catch((err) => {
      console.error(err);

      dispatch(deleteToken());
      dispatch(authRequestError(err.toString()));
    });
};
