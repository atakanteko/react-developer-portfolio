import React from 'react';

import socialLinks from "../../assets/static/socialLinks";
import SocialLinks from "../../assets/static/socialLinks";

const Contact = () => {
    return (
        <div className="px-small-l xl:px-wide-l h-screen flex flex-col justify-between py-10">
            <div></div>
            <div className="self-center">
                <h2 className="text-center text-[#1E0E62] text-[28px] xl:text-[58px] lg:text-[50px] md:text-[46px] font-bold">For any questions please mail us:
                    <span className="block font-extrabold text-transparent text-[28px] xl:text-[58px] lg:text-[50px] md:text-[46px] bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">hi@pavanmg.in</span>
                </h2>
            </div>
            <div className="self-end">
                <ul className="flex items-center">
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
            </div>
        </div>
    );
};

export default Contact;
