import React from 'react';
import Template from './template';
import './layout/styles/App.css';
import { UserProvider } from './components/context/userContext';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Template />
      </UserProvider>
    </div>
  );
}

export default App;
