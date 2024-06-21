import { useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { Logout } from './Logout/Logout';
import { useAuth } from '../../../hooks/useAuth';

export const Auth = ({ token, delToken }) => {
  const [auth] = useAuth(token);
  const [isLogoutShow, setIsLogoutShow] = useState(false);

  const logoutToggle = () => {
    setIsLogoutShow(!isLogoutShow);
  };

  // const getOut = () => { ???
  //   clearAuth();
  // };

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
      {isLogoutShow ? <Logout delToken={delToken} /> : null}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
  checkResponse: PropTypes.func,
};
