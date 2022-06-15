import React from 'react';
import Navbar from "./Navbar";
import Profile from "./Profile";

const HomeContainer = () => {
    return (
            <div className="h-screen py-10 flex flex-col justify-between px-small-l xl:px-wide-l">
                <Navbar />
                <Profile />
                <div></div>
            </div>
    );
};

export default HomeContainer;
