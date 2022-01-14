import React, { useState, useContext } from 'react';
import { LoginContext } from './Context/LoginContext';

//import the context you want to use from the parent component with useContext and the logincontext we are wanting to pass the info from

export const Login = () => {

    //destructure the variables you got from the loginContext
    //in this case we only want the set username
    const {setUsername, setShowProfile} = useContext(LoginContext)
    //so what this is doing is grabbing the loginContext and the setusername variable we are providing through that context provider
    //now we can use this context api in this application


    return (
        <>
        <input
            type="text"
            placeholder='Username'
            onChange={(e) => {
                setUsername(e.target.value);
            }}
        />

        <input type="password" placeholder='password' />

        <button onClick={() => {setShowProfile(true)}}> LOGIN </button>
            
        </>
    )
}
