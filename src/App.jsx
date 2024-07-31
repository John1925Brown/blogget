import Header from './components/Header';
import Main from './components/Main';
import { useDispatch } from 'react-redux';

import { PostsDataContextProvider } from './context/postDataContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <PostsDataContextProvider>
      <Header />
      <Main />
    </PostsDataContextProvider>
  );
};

export default App;
