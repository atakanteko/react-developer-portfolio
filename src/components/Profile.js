import React from 'react';
import ProfilePhoto from '../assets/images/profile-photo.png';
const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-left leading-8 mb-8">
                <span className="text-[#41446e] text-[28px] font-extrabold">
                    Hi <div className="inline-flex"><span className="animate-waving-hand">👋</span></div>, <br/>
                    My name is <br/>
                    Pavan MG<br/>
                    I build things for web
                </span>
            </div>
            <div>
                <img src={ProfilePhoto} alt="profile" width={196} height={196}/>
            </div>
        </div>
    );
};

export default Profile;
