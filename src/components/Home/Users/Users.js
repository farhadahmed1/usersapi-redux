import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/slice/usersSlice';
import Allusers from './../Allusers/Allusers';
const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    console.log(users);
    return (
        <div>
            <h2> Hello All Users {users.length}</h2>
            {users.map(user => <Allusers
                key={user.id}
                user={user}
            >

            </Allusers>)}
        </div>
    );
};

export default Users;