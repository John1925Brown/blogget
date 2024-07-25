import React from 'react';
import PropTypes from 'prop-types';
import { usePostsData } from '../hooks/usePostsData';

export const postsDataContext = React.createContext({});

export const PostsDataContextProvider = ({ children }) => {
  const [postData] = usePostsData();

  return (
    <postsDataContext.Provider value={{ postData }}>
      {children}
    </postsDataContext.Provider>
  );
};

PostsDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
