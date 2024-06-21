export const useFetchAPI = (url, token) => {
  const response = fetch(`${url}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });

  return response;
};
