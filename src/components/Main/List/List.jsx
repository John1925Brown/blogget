import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';
import { AuthLoader } from '../../../UI/AuthLoader/AuthLoader';

export const List = () => {
  const [posts, loading] = usePostsData();

  const postsData = [];

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
        </ul>
      )}
    </>
  );
};
