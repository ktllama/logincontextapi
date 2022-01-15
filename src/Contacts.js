import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Contacts = ({theme, toggletheme}) => {
    const [contacts, setContacts] = useState();


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`) //when useeffect runs it will make an axios get request to linked api
        .then(res => { //call back function w variable res for response
          const responseContacts = res.data; //setting response contacts = resonse data from api
          setContacts(responseContacts); //now our contacts state variable should have all the contacts from the api
        });
    }, []);

    return (
        <div className='loginbox' style={theme}>
            <h2>Contacts</h2>
            {contacts && contacts.map(contact => { 
                const{ id, name, email, phone, address, company } = contact;
                return (
                    <div key={id} className='contact'>
                        <h3>{name}</h3>
                        <h5>Email: {email}</h5>
                        <h5>Phone Number: {phone}</h5>
                        <h5>City: {address.city}</h5>
                        <h5>Company: {company.name}</h5>
                    </div>
                ) })}
        </div>
    )
}
