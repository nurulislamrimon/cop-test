import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Finance = () => {
    const [users, setUsers] = useState([]);
    const [logedUser] = useAuthState(auth);
    const email = logedUser?.email;
    useEffect(() => {
        const getFinance = async () => {
            const { data } = await axios.get(`https://cop-test.herokuapp.com/finance?email=${email}`)
            setUsers(data);
        }
        getFinance()
    }, [email])
    return (
        <div>
            {users.map(user => <h3 key={user._id}>{user.name}</h3>)}
        </div>
    );
};

export default Finance;