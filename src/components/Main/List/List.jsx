import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';
import { AuthLoader } from '../../../UI/AuthLoader/AuthLoader';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postsRequestAsync } from '../../../store/postsData/action';

export const List = () => {
  const [posts, loading] = usePostsData();
  // console.log(posts);
  const endList = useRef(null);
  const postsData = [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.data.children) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );

    observer.observe(endList.current);
  }, [endList.current]);

  if (posts.data.children) {
    posts.data.children.map((elem) => {
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
  }

  return (
    <>
      {loading ? (
        <AuthLoader />
      ) : (
        <ul className={style.list}>
          {postsData.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
          <li ref={endList} className={style.end} />
        </ul>
      )}
    </>
  );
};
