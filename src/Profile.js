import React, { useContext } from 'react';
import { LoginContext, ThemeContext } from './Context/LoginContext';
import { Contacts } from './Contacts';

export const Profile = () => {

    const { username, setShowProfile } = useContext(LoginContext);
    //we are grabbing username here not set username bc thats the variable that we want for this component
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)
    //we are getting these functions using a custom hook from ThemeContext.. dont forget to import!

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#FFF',
        color:darkTheme ? '#ccc' : '#333',
    }

    return (
        <>
            <div className='loginbox' style={themeStyles}>
                    <h1>Profile</h1>
                    <h2>Welcome {username}! </h2>
                    <button onClick={() => {setShowProfile(false)}}> log out</button>
                    <br />
                    <button onClick={toggleTheme}>{darkTheme ? 'set to light theme' : 'set to dark theme'} </button>
        
                    
            </div>
            <Contacts theme={themeStyles} toggle={toggleTheme}/>
        </>

    )
}
