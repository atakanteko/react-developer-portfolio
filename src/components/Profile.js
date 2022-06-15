import React from 'react';
import ProfilePhoto from '../assets/images/profile-photo.png';
const Profile = () => {
    return (
        <div className="h-max flex flex-col items-center justify-center h-full xl:flex-row xl:justify-evenly lg:flex-row lg:justify-evenly">
            <div className="text-left leading-8 mb-8 xl:leading-[60px] lg:leading-[50px]">
                <span className="text-[#41446e] text-[28px] font-extrabold xl:text-[58px] lg:text-[48px]">
                    Hi <div className="inline-flex"><span className="animate-waving-hand">👋</span></div>, <br/>
                    My name is <br/>
                    Pavan MG<br/>
                    I build things for web
                </span>
            </div>
            <div>
                <img src={ProfilePhoto} alt="profile" width={196} height={196} className="xl:w-[300px] lg:w-[240px]"/>
            </div>
        </div>
    );
};

export default Profile;
