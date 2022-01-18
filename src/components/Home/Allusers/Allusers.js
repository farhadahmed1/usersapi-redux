import React from 'react';

const Allusers = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default Allusers;