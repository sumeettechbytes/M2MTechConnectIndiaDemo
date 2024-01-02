import React from 'react';
import HeaderTwo from './header/HeaderTwo';
import FooterOne from './footer/FooterOne';

const Layout = ( { children } ) => {
    return (
        <>
            <main className="main-wrapper">
                <HeaderTwo styles="header-transparent header-style-2" searchDisable />
                { children }
                <FooterOne />
            </main>
        </>
    )
}
export default Layout;