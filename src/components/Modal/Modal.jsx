import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { FormComment } from './FormComment/FormComment';
import { Comments } from './Comments/Comments';

export const Modal = ({ closeModal, id }) => {
  const overlayRef = useRef(null);
  const [post, comments] = useCommentsData(id);

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
        <h2 className={style.title}>{post.title}</h2>

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
            {post.selftext}
          </Markdown>
        </div>

        <p className={style.author}>{post.author}</p>

        <FormComment />

        <Comments comments={comments} />

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
  id: PropTypes.string,
};
