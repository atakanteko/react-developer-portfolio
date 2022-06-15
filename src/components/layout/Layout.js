import React from 'react';

const Layout = ({children}) => {
    return (
        <main className="px-10 xl:px-[170px]">
            {children}
        </main>
    );
};

export default Layout;
