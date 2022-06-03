import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);

        fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => localStorage.setItem('accessToken', data.accessToken))

        navigate('/home');
    }
    return (
        <form onSubmit={handleFormSubmit} className='w-25 mx-auto'>
            <div className="input-group d-flex flex-column my-3">
                <label htmlFor="">Enter your email:</label>
                <input type="email" name='email' />
            </div>
            <div className="input-group d-flex flex-column my-3">
                <label htmlFor="">Enter Password:</label>
                <input type="password" name='password' />
            </div>
            <button className='d-block w-100'>Login</button>
        </form>
    );
};

export default Login;