import './App.css';
import React, { useReducer } from 'react';
import { Login } from './Login';
import { Profile } from './Profile';
import { StateContext, DispatchContext, reducer, initialState } from './Context/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [username, setUsername] = useState('');
  // const [showProfile, setShowProfile] = useState(false);
  // const [darkTheme, setDarkTheme] = useState(true);

//all the states you want to share to components should be in the parent most component
//the value you are passing below an object containing all of the different things that we want to access inside components the provider wraps around
//now to access it within the components we use the usecontext hook inside said component

  return (
    <div className="App">
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {state.showProfile ? <Profile /> : <Login />}
      </DispatchContext.Provider>
    </StateContext.Provider>
    </div>
  );
}

//wrap the components you want to share the state/data with in the context.provider tag

export default App;