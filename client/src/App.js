import React from 'react';
import Template from './template';
import { UserProvider } from './components/context/userContext';
import './layout/styles/App.css';

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
