import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { PostsDataContextProvider } from './context/postDataContext';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsDataContextProvider>
          <Header />
          <Main />
        </PostsDataContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
