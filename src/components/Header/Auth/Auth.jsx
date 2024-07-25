import { useContext, useState } from 'react';
import style from './Auth.module.css';

import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { Logout } from './Logout/Logout';
import { authContext } from '../../../context/authContext';
import { deleteToken } from '../../../store/tokenReducer.js';
import { useDispatch } from 'react-redux';

export const Auth = () => {
  const [isLogoutShow, setIsLogoutShow] = useState(false);
  const { auth, clearAuth } = useContext(authContext);
  const dispatch = useDispatch();

  const logoutToggle = () => {
    setIsLogoutShow(!isLogoutShow);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button
          className={style.btn}
          onClick={() => {
            logoutToggle();
          }}
        >
          <img
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
            className={style.img}
          />
        </button>
      ) : (
        <Text As="a" href={urlAuth} className={style.authLink}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      {isLogoutShow ? <Logout logOut={logOut} /> : null}
    </div>
  );
};
