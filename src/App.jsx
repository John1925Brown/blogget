import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { BestPostsContextProvider } from './context/bestPostContext';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <BestPostsContextProvider>
            <Header />
            <Main />
          </BestPostsContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
