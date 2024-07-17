import { useContext, useEffect, useRef, useState } from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { authContext } from '../../../context/authContext';

export const FormComment = () => {
  const formCommentRef = useRef(null);
  const { auth } = useContext(authContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const changeFromText = (e) => {
    e.preventDefault();
    if (formCommentRef.current) {
      console.log(formCommentRef.current.value);
    }
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
      <textarea className={style.textarea} ref={formCommentRef}></textarea>
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
