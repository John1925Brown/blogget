import Header from './components/Header';
import Main from './components/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { BestPostsContextProvider } from './context/bestPostContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <BestPostsContextProvider>
          <Header />
          <Main />
        </BestPostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
