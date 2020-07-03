import React, { useState } from 'react';
const UserContext = React.createContext();

const UserProvider = props => {
  const [user, updateUser] = useState();
  const setUser = data => updateUser(data);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
