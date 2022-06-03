import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom'

const Finance = () => {
    const [users, setUsers] = useState([]);
    const [logedUser] = useAuthState(auth);
    const email = logedUser?.email;
    const navigate = useNavigate();

    useEffect(() => {
        const getFinance = async () => {
            const { data } = await axios.get(`http://localhost:5000/finance?email=${email}`, {
                headers: { authorization: `${localStorage.getItem('accessToken')}` }
            })
            setUsers(data)
            // fetch(`http://localhost:5000/finance?email=${email}`, {
            //     headers: {
            //         authorization: `${localStorage.getItem('accessToken')}`
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => setUsers(data))
        }
        getFinance()
    }, [email])

    return (
        <div>
            {Array.isArray(users) ? users.map(user => <h3 key={user?._id}>{user?.name}</h3>) : navigate('/login')}
        </div>
    );
};

export default Finance;