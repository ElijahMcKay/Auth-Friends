import React from 'react';

const Friend = (props) => {
    console.log(props); 
    return ( 
        <div>
            <p>{props.state.name}</p>
            <p>{props.state.age}</p>
            <p>{props.state.email}</p>
        </div>
     );
}
 
export default Friend;