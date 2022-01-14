import './App.css';
import { Login } from './Login';
import React, { useState } from 'react';
import { Profile } from './Profile';
import { LoginContext } from './Context/LoginContext';

function App() {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);
//all the states you want to share to components should be in the parent most component
//the value you are passing below an object containing all of the different things that we want to access inside components the provider wraps around
//now to access it within the components we use the usecontext hook inside said component
  return (
    <div className="App">
    <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
      {showProfile ? <Profile /> : <Login />}
    </LoginContext.Provider>
    </div>
  );
}

//wrap the components you want to share the state/data with in the context.provider tag

export default App;
