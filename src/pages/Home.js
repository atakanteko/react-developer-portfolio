import React from 'react';
import Navbar from "../components/partials/Navbar";
import Profile from "../components/Profile";

const Home = () => {
    return (
        <div className="h-screen py-10">
            <Navbar />
            <Profile />
        </div>
    );
};

export default Home;
