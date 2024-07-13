import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';

export const Modal = ({ author, markdown, title }) => {
  console.log(markdown);
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

        <div className={style.content}>{markdown}</div>

        <p className={style.author}>{author}</p>

        <button className={style.close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
