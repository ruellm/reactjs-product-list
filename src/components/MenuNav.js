import React from 'react';
import { Link } from 'react-router-dom';

const MenuNav = () => {
    const navStyle = {
        color : 'white'
    };

    return(
        <nav>
            <ul className='nav-links'>
                <Link style={navStyle} to='/list'>
                    <li>List Product</li>
                </Link>
                <Link style={navStyle} to='/add'>
                    <li>Add Product</li>
                </Link>
            </ul>
        </nav>
    );
};

export default MenuNav;