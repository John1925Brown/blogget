import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/action';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const comments = useSelector((state) => state.commentsData.comments);
  const post = useSelector((state) => state.commentsData.post);

  useEffect(() => {
    if (!token) return;

    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [post, comments];
};
