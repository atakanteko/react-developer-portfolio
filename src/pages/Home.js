import React from 'react';
import Navbar from "../components/partials/Navbar";
import Profile from "../components/Profile";

const Home = () => {
    return (
        <div className="h-screen py-10 flex flex-col justify-between">
                <Navbar />
                <Profile />
                <div></div>
        </div>
    );
};

export default Home;
