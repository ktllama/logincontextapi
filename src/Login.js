import React, { useContext } from 'react';
import { DispatchContext } from './Context/reducer';
//import the context you want to use from the parent component with useContext and the logincontext we are wanting to pass the info from

export const Login = () => {


    const dispatch = useContext(DispatchContext);

    //THIS IS FOR USE CONTEXT ONLY
    //destructure the variables you got from the loginContext
    //in this case we only want the set username
    // const {setUsername, setShowProfile} = useContext(LoginContext)
    //so what this is doing is grabbing the loginContext and the setusername variable we are providing through that context provider
    //now we can use this context api in this application


    return (
      <>
            <div className='loginbox'>
            <h1>LOGIN</h1>
    
                <label htmlFor='username'>username: </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder='Username'
                    onChange={(e) => {
                        dispatch({type: 'setUsername', payload: e.target.value });
                    }}
                    //when passing input data or change data need to set type and payload
                />
    
            <br />
           
                <label htmlFor='password'>Password:</label>
                <input id="password" name="password" type="password" placeholder='password' />
            
            <br />
            <button onClick={() => {dispatch({ type: 'toggleShowProfile'})}}> LOGIN </button>
                
            </div>
    
      </>
    )
}
