import React, { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';

export const Profile = () => {

    const { username, setShowProfile } = useContext(LoginContext);
    //we are grabbing username here not set username bc thats the variable that we want for this component

    return (
        <div className='loginbox'>
        <h1>Profile</h1>
        <h2>Welcome {username}! </h2>
        <button onClick={() => {setShowProfile(false)}}> log out</button>
            
        </div>
    )
}
