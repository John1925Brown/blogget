import style from './Logout.module.css';
import PropTypes from 'prop-types';

export const Logout = ({ logOut }) => {
  return (
    <button
      className={style.logout}
      onClick={() => {
        logOut();
      }}
    >
      Выйти
    </button>
  );
};

Logout.propTypes = {
  logOut: PropTypes.func,
};
