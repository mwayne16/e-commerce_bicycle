import React, { useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../custom_hooks/useLocalStorage';
import useDataFetching from '../custom_hooks/useDataFetching';
const UserContext = React.createContext();

const UserProvider = props => {
  const authToken = JSON.parse(localStorage.getItem('user-token'));
  const [token, setToken] = useLocalStorage('user-token', []);
  const { makeRequest, loading, error } = useDataFetching(
    '/api/users/validate_stored_token',
    true
  );
  const [user, updateUser] = useState(false);

  const setUser = data => {
    data && updateUser({ user: data.user.user, accessToken: data.accessToken });
    data && setToken(data.accessToken);
  };

  const payload = useCallback(
    async token => {
      const res = await makeRequest('GET', null, {
        Authorization: `bearer ${token}`,
      });
      if (error) return;
      return updateUser(res && res.data);
    },
    [token, error]
  );

  useEffect(() => {
    if (!authToken) return;
    payload(authToken);
  }, [authToken, loading]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
