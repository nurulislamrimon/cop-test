import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center'>
            &copy; All rights reserved {year}
        </footer>
    );
};

export default Footer;