import React, { useState } from 'react';
import  { axiosWithAuth } from './axiosWithAuth'; 
import axios from 'axios'; 

function Login(props) {

    const [ credentials, setCredentials ] = useState({
             username: '', 
             password: '', 
        }
    )

    const handleChange = e => {
        setCredentials({ 
                ...credentials,
                [e.target.name]: e.target.value
            })
            console.log(credentials); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends'); 
                console.log(res.data.payload); 
            })
            .catch(err => {
                console.log(credentials); 
                console.log(err.response);
            })
    }   

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name='username'
                value={credentials.username}
                onChange={handleChange}/>
                <input 
                type="password"
                name='password'
                value={credentials.password}
                onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login; 