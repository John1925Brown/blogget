import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL_API } from '../api/const';

export const useBestPosts = () => {
  const { token } = useContext(tokenContext);
  const [bestPosts, setBestPosts] = useState([]);

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
        setBestPosts(data.children);
      })
      .catch((error) => {
        console.error('Error fetch:', error);
      });
  }, [token]);

  return [bestPosts];
};
