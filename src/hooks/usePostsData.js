import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useSelector } from 'react-redux';

export const usePostsData = () => {
  const token = useSelector((state) => state.token.token);
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Responce not ok');
        }

        return response.json();
      })
      .then(({ data }) => {
        setPostsData(data.children);
      })
      .catch((error) => {
        console.error('Error fetch:', error);
      });
  }, [token]);

  return [postsData];
};
