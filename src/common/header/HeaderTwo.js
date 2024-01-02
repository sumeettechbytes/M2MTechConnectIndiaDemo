import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HeaderSticky from './HeaderSticky';
import ResponsiveMenu from './ResponsiveMenu';

const HeaderTwo = ( { styles, disableSticky, searchDisable, buttonStyle } ) => {
    const [offcanvasShow, setOffcanvasShow] = useState( false );
    const [searchPopup, setSearchPopup] = useState( false );
    const onCanvasHandler = () => {
        setOffcanvasShow( prevState => ! prevState );
    }

    const onSearchHandler = () => {
        setSearchPopup( prevState => ! prevState );
    }

    if ( searchPopup ) {
        document.body.classList.add( 'search-popup-active' );
    } else {
        document.body.classList.remove( 'search-popup-active' );
    }

    const sticky = HeaderSticky( 200 );
    // const classes = `header-default ${ sticky ? 'sticky' : '' }`;
    const classes = `header-default sticky`;
    const stickyStatus = disableSticky ? '' : ' header-sticky';
    return (
        <>
            <header className={`edu-header ${ stickyStatus } ${ styles || '' } ${ classes || '' }`}>
                <div className="row align-items-center header-wrapper">
                    <div className="col-lg-4 col-xl-1 col-md-6 col-6 justify-content-start">
                        <div className="logo">
                            <Link to="/">
                                <img className="logo-light" src={`${process.env.PUBLIC_URL}/M2M_Logo_v2.png`} alt="Main Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-10 d-none d-xl-block">
                        <nav className="mainmenu-nav d-none d-lg-block">
                            <Nav />
                        </nav>
                    </div>

                    <div className="col-lg-8 col-xl-1 col-md-6 col-6">
                        <div className="header-right d-flex justify-content-end">
                            <div className="header-menu-bar">
                                { ! searchDisable && 
                                    <div className="quote-icon quote-search">
                                        <button className="white-box-icon search-trigger header-search" onClick={ onSearchHandler }>
                                            <i className="ri-search-line"></i>
                                        </button>
                                    </div>
                                }
                                <div className="quote-icon">
                                    <Link to="/contact-us" className="white-box-icon btn-contact"><i className="ri ri-phone-line"></i></Link>
                                {/* <Link to="/contact-us"><a className={`edu-btn btn-white btn-medium left-icon header-button ${ buttonStyle || '' }`}><img src="/images1/icons/whatsapp.png" width="24px" alt="contact" /></a></Link> */}
                                </div>
                                <div className="quote-icon d-none d-md-block ml--15 ml_sm--5">
                                    <a href="https://courses.m2mtechconnect.com/users/sign_in" className="edu-btn btn-medium"><i className="ri-user-line"></i></a>
                                </div>
                                <div className="quote-icon d-block d-md-none ml--15 ml_sm--5">
                                    <a href="https://courses.m2mtechconnect.com/users/sign_in" className="white-box-icon btn-contact"><i className="ri-user-line"></i></a>
                                </div>
                                {/* <div className="quote-icon quote-user d-none d-md-block ml--15 ml_sm--5">
                                    <a className={`edu-btn btn-medium left-icon header-button ${ buttonStyle || '' }`} href="https://courses.m2mtechconnect.com/users/sign_in">
                                        <i className="ri-user-line"></i>Login / Register
                                    </a>
                                </div>
                                <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a href="https://courses.m2mtechconnect.com/users/sign_in" className="white-box-icon"><i className="ri-user-line"></i></a>
                                </div> */}
                            </div>
                            <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                <div className="hamberger">
                                    <button className="white-box-icon hamberger-button header-menu" onClick={ onCanvasHandler }>
                                        <i className="ri-menu-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <ResponsiveMenu 
                show={ offcanvasShow } 
                onClose={ onCanvasHandler }  
                showSearch={ searchPopup }  
                onSearch={ onSearchHandler }  
            />
        </>
    )
}

export default HeaderTwo;