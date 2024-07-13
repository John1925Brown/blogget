import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { generateRandomId } from '../../../utils/generateRandomId';
import { bestPostsContext } from '../../../context/bestPostContext';

export const List = () => {
  const { bestPosts } = useContext(bestPostsContext);

  const postsData = [];

  bestPosts.map((elem) => {
    const newPost = {
      thumbnail: elem.data.thumbnail,
      title: elem.data.title,
      author: elem.data.author,
      ups: elem.data.ups,
      date: elem.data.created_utc,
      id: generateRandomId(),
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
