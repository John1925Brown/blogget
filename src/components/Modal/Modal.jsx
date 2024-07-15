import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';

export const Modal = ({ author, markdown, title, closeModal }) => {
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEscapeClose = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

        <div className={style.content}>
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        </div>

        <p className={style.author}>{author}</p>

        <button
          className={style.close}
          onClick={() => {
            closeModal();
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
