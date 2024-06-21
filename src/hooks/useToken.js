import { useState, useEffect } from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  const delToken = () => {
    localStorage.removeItem('bearer');
    setToken(null);
    location.hash = '';
    location.pathname = '';
  };

  const checkResponse = (response) => {
    if (response.status === 401) {
      console.error(`Error: response status: ${response.status}`);
      delToken();
    }
  };

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get(
        'access_token'
      );
      setToken(token);
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer', token));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token, delToken, checkResponse];
};
