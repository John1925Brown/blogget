import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { postsDataContext } from '../../../context/postDataContext';

export const List = () => {
  const { postData } = useContext(postsDataContext);

  const postsData = [];

  postData.map((elem) => {
    const newPost = {
      thumbnail: elem.data.thumbnail,
      title: elem.data.title,
      author: elem.data.author,
      ups: elem.data.ups,
      date: elem.data.created_utc,
      id: elem.data.id,
      selftext: elem.data.selftext,
    };

    postsData.push(newPost);
  });

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
