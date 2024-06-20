import Header from './components/Header';
import Main from './components/Main';
import { useToken } from './hooks/useToken';

function App() {
  const [token, delToken, checkResponse] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} checkResponse={checkResponse} />
      <Main />
    </>
  );
}

export default App;
