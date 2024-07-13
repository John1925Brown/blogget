import React from 'react';
import PropTypes from 'prop-types';
import { useBestPosts } from '../hooks/useBestPosts';

export const bestPostsContext = React.createContext({});

export const BestPostsContextProvider = ({ children }) => {
  const [bestPosts] = useBestPosts();

  return (
    <bestPostsContext.Provider value={{ bestPosts }}>
      {children}
    </bestPostsContext.Provider>
  );
};

BestPostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
