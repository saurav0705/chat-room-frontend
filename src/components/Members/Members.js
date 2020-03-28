import React from 'react';

const Members = ({users}) => {
    
    return (
        <div>
         {users ? 
         (users.map(({name})=><div key={name}>{name}</div>)): null}  
        </div>
    )
}

export default Members;