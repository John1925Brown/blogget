import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL_API } from '../api/const';
export const useCommentsData = (id) => {
  const { token } = useContext(tokenContext);
  const [comments, setCommentsData] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Responce not ok response status ${response.status}`);
        }

        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ]) => {
          const comments = children.map((item) => item.data);

          setPost(post);
          setCommentsData(comments);
        }
      )
      .catch((error) => {
        console.error('Error fetch:', error);
      });
  }, [token]);

  return [post, comments];
};