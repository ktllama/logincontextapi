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
        <div className='loginbox'>
        <h1>LOGIN</h1>

            <label htmlFor='username'>username: </label>
            <input
                id="username"
                name="username"
                type="text"
                placeholder='Username'
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />

        <br />
       
            <label htmlFor='password'>Password:</label>
            <input id="password" name="password" type="password" placeholder='password' />
        
        <br />
        <button onClick={() => {setShowProfile(true)}}> LOGIN </button>
            
        </div>
    )
}
