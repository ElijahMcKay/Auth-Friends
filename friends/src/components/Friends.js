import React, { useState, useEffect, Fragment } from 'react';
import Friend from './Friend';
import { axiosWithAuth } from './axiosWithAuth';

function Friends(props) {
    console.log(props); 
    const [ friendArr, setFriendArr ] = useState([])
    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    useEffect(() => {
        getFriends(); 
        // axiosWithAuth()
        // .get('http://localhost:5000/api/friends')
        // .then(res => {
        //     // localStorage.setItem('token', res.data.payload)
        //     // props.history.push('/friends'); 
        //     setFriendArr(res.data)
        //     console.log(res.data); 
        // })
        // .catch(err => {
        //     console.log(friendArr); 
        //     console.log(err.response);
        // })
    }, []); 

    const handleChange = e => {
        setNewFriend({ 
                ...newFriend,
                [e.target.name]: e.target.value
            })
            console.log(newFriend); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                // localStorage.setItem('token', res.data.payload)
                // props.history.push('/friends'); 
                // console.log(res.data); 
            })
            .catch(err => {
                console.log(friendArr); 
                console.log(err.response);
            })
    }   

    const getFriends = () => {
        
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            // localStorage.setItem('token', res.data.payload)
            // props.history.push('/friends'); 
            setFriendArr(res.data)
            console.log(res.data); 
        })
        .catch(err => {
            console.log(friendArr); 
            console.log(err.response);
        })
    }   
    

    return (
        <>  
            <form onSubmit={handleSubmit}>
                <label> Name
                    <input 
                    name='name'
                    value={friendArr.name}
                    onChange={handleChange}
                    />
                </label>
                <label> Age
                    <input 
                    name='age'
                    value={friendArr.age}
                    onChange={handleChange}
                    />
                </label>
                <label> Email
                    <input 
                    name='email'
                    value={friendArr.email}
                    onChange={handleChange}
                    />
                </label>
                <button>Add New Friend</button>
            </form>
            <button onClick={getFriends}>Refresh List (Do this after adding a Friend)</button>
            {/* <button onClick={getFriends}>Get Your List of Friends</button> */}
            {friendArr.map((friend) => (
                <Friend state={friend} key={friend.id} />
            ))}
        </>
    )
}

export default Friends; 