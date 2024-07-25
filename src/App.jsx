import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { BestPostsContextProvider } from './context/bestPostContext';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <BestPostsContextProvider>
          <Header />
          <Main />
        </BestPostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
