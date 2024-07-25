import { useContext, useEffect, useRef, useState } from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { authContext } from '../../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReducer.js';

export const FormComment = () => {
  const { auth } = useContext(authContext);
  const value = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const formCommentRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  const changeFromText = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isFormOpen && formCommentRef.current) {
      formCommentRef.current.focus();
    }
  });

  return isFormOpen ? (
    <form className={style.form} onSubmit={changeFromText}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
        ref={formCommentRef}
      ></textarea>
      <button className={style.btn} type="submit">
        Отправить
      </button>
    </form>
  ) : (
    <button
      className={style.btn}
      onClick={() => {
        handleFormOpen();
      }}
    >
      Написать комментарий
    </button>
  );
};
