import React from 'react';
import Logo from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt="logo" width={64} height={64}/>
            </Link>
        </nav>
    );
};

export default Navbar;
