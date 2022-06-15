import React from 'react';
import {Link} from "react-router-dom";

import SocialLinks from "../../assets/static/socialLinks";
import Menu from "../../assets/static/menu";
import Logo from '../../assets/images/logo.svg';
import {navigation, alignment} from "../../utils/tailwind/navigation";
const Navbar = () => {
    return (
        <nav className={`${alignment}`}>
            <Link to="/">
                <img src={Logo} alt="logo" width={64} height={64} className="xl:w-[92px] lg:w-[92px]"/>
            </Link>
            <ul className="flex flex-row">
                {
                    Menu.map((item, index) => {
                        return (
                            <li key={index} className={`${navigation} hidden xl:block lg:block`}>
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        );
                    })
                }
                {
                    SocialLinks.map(({id,name,icon,url}) => {
                        return (
                            <li key={id} className="mr-5 last:mr-0">
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    <img src={icon} alt={name} width="24px" height="24px" className="xl:w-8"/>
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
