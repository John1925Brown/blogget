import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/postsData/action';

export const usePostsData = () => {
  const token = useSelector((state) => state.token.token);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts, loading];
};
