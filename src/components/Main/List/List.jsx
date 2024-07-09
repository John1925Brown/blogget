import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { generateRandomId } from '../../../utils/generateRandomId';
import { bestPostsContext } from '../../../context/bestPostContext';

export const List = () => {
  const { bestPosts } = useContext(bestPostsContext);
  console.log(bestPosts[0]);

  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 54,
      date: '2024-06-13T09:45:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 22,
      date: '2023-05-11T12:22:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 11,
      date: '2022-11-14T09:24:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 24,
      date: '2021-01-11T11:56:00.000Z',
      id: generateRandomId(),
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
