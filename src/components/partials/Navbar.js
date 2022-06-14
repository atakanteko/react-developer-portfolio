import React from 'react';
import {Link} from "react-router-dom";

import SocialLinks from "../../assets/static/socialLinks";
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center">
            <Link to="/">
                <img src={Logo} alt="logo" width={64} height={64}/>
            </Link>
            <ul className="flex flex-row">
                {
                    SocialLinks.map(({id,name,icon,url}) => {
                        return (
                            <li key={id} className="mr-2 last:mr-0">
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    <img src={icon} alt={name} width={24} height={24}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;
