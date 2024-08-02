import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/action';

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.token.token);
  const [comments, setCommentsData] = useState([]);
  const [post, setPost] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    console.log(id);

    dispatch(commentsRequestAsync(id));

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
