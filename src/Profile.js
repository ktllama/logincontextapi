import React, { useContext } from 'react';
import { StateContext, DispatchContext } from './Context/reducer';
import { Contacts } from './Contacts';

export const Profile = () => {

    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    //ONLY FOR USECONTEXT WITHOUT USE REDUCER
    // const { username, setShowProfile } = useContext(LoginContext);
    // //we are grabbing username here not set username bc thats the variable that we want for this component
    // const {darkTheme, setDarkTheme} = useContext(ThemeContext)
    // //we are getting these functions using a custom hook from ThemeContext.. dont forget to import!

    function toggleTheme() {
        dispatch({ type: 'toggleTheme' })
    }

    const themeStyles = {
        backgroundColor: state.darkTheme ? '#333' : '#FFF',
        color:state.darkTheme ? '#ccc' : '#333',
    }

    return (
        <>
            <div className='loginbox' style={themeStyles}>
                    <h1>Profile</h1>
                    <h2>Welcome {state.username}! </h2>
                    <button onClick={(() => dispatch({ type: 'toggleShowProfile' }))}> log out</button>
                    <br />
                    <button onClick={toggleTheme}>{state.darkTheme ? 'set to light theme' : 'set to dark theme'} </button>
        
                    
            </div>
            <Contacts theme={themeStyles} toggle={toggleTheme}/>
        </>

    )
}
