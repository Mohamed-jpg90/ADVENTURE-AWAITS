  

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTypo3 } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from './Button';


         


import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const handleResize = () => {
        if (window.innerWidth <= 960) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    };

    useEffect(() => {
        handleResize(); // Run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='navbar'>
            <div className='navbar_contaier'>
                <Link to='/' className='navbar-logo' onClick={closeMenu}>
                    TRVL <FaTypo3 />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <IoCloseSharp /> : <GiHamburgerMenu />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-link' onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-link' onClick={closeMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>SignUp</Link>
                    </li>
                </ul>
                    {showButton && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </div>
       




    );
}

export default NavBar;







