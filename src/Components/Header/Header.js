import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-5xl mt-4 capitalize'>this is our intro of tailwind with react app</h2>
        </div>
    );
};

export default Header;