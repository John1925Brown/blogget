import { useEffect, useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { URL_API } from '../../../api/const';
import { Logout } from './Logout/Logout';

export const Auth = ({ token }) => {
  const [auth, setAuth] = useState({});
  const [isLogoutShow, setIsLogoutShow] = useState(false);

  const logoutToggle = () => {
    setIsLogoutShow(!isLogoutShow);
  };
  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

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
      {isLogoutShow ? <Logout /> : null}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
