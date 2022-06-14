import React from 'react';
import Navbar from '../partials/Navbar';

const Layout = ({children}) => {
    return (
        <main className="py-10 px-10">
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;
