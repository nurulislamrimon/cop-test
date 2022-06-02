import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='w-50 mx-auto d-flex justify-content-around'>
            <Link to='/home' className='text-decoration-none  text-black' >Home</Link>
            <Link to='/members' className='text-decoration-none  text-black'>Members</Link>
            <Link to='/committee' className='text-decoration-none  text-black'>Committee</Link>
            <Link to='/finance' className='text-decoration-none  text-black'>Finance</Link>
            {!user?.uid ? <Link to='/login' className='text-decoration-none  text-black'>Log in</Link> :
                <span onClick={() => signOut(auth)} className='text-decoration-none text-black' role='button'>Log Out</span>}
        </nav>
    );
};

export default Header;