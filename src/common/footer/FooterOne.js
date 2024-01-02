import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTopButton from './ScrollTopButton';

const FooterOne = () => {
    return (
        <>
            <footer className="eduvibe-footer-one edu-footer footer-style-default">
                <div className="footer-top">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <Link to="/">
                                            <img className="logo-light" src={`${process.env.PUBLIC_URL}/M2M_Logo_v2.png`} alt="Footer Logo" />
                                        </Link>
                                    </div>
                                    <p className="description">Our goal is to upskill Canadians with STEM skills & connect with relevant STEM job opportunities/projects in Emerging Tech (Data Science, ML, AI, VR/AR) skills sought after in CleanTech, Advanced Manufacturing, Business Intelligence, Finance and Healthcare sectors.</p>
                                    <ul className="social-share">
                                        <li><a href="https://twitter.com/m2mtechconnect"><i className="icon-Twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/m2mtechconnect/"><svg viewBox="0,0,256,256" width="24px" height="24px" fillRule="nonzero" style={{marginTop: "-5px"}}><g fillOpacity="1" fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g></svg></a></li>
                                        <li><a href="https://www.linkedin.com/company/m2mtechconnect"><i className="icon-linkedin"></i></a></li>
                                        {/* <li><a href="https://www.facebook.com/m2mtechconnect"><i className="icon-Fb"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">Important Links</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/programs/datatalent"><i className="icon-Double-arrow"></i>DataTalent</Link></li>
                                            <li><Link to="/programs/skillsboost"><i className="icon-Double-arrow"></i>Skillsboost</Link></li>
                                            <li><Link to="/courses"><i className="icon-Double-arrow"></i>Courses</Link></li>
                                            <li><Link to="/research"><i className="icon-Double-arrow"></i>Research</Link></li>
                                            {/* <li><a href="https://courses.m2mtechconnect.com/collections"><i className="icon-Double-arrow"></i>Courses</a></li> */}
                                            <li><Link to="/insights/spotlight"><i className="icon-Double-arrow"></i>Spotlight</Link></li>
                                            <li><a href="https://medium.com/m2mtechconnect"><i className="icon-Double-arrow"></i>Blogs</a></li>
                                            <li><Link to="/contact-us"><i className="icon-Double-arrow"></i>Contact Us</Link></li>            
                                            {/* <li><Link to="/testimonial"><i className="icon-Double-arrow"></i>Testimonial</Link></li> */}
											<li><Link to="/privacy-policy"><i className="icon-Double-arrow"></i>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">Explore Courses</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/courses/data-analytics"><i className="icon-Double-arrow"></i>Data Analytics</Link></li>
                                            <li><Link to="/courses/machine-learning"><i className="icon-Double-arrow"></i>Machine Learning</Link></li>
                                            <li><Link to="/courses/deep-learning"><i className="icon-Double-arrow"></i>Deep Learning</Link></li>
                                            <li><Link to="/courses/coding"><i className="icon-Double-arrow"></i>Coding</Link></li>
                                            <li><Link to="/courses/design"><i className="icon-Double-arrow"></i>Design</Link></li>
                                        </ul>
                                    </div>
                                    <h5 className="widget-title">Careers</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/careers/work-integrated-learning"><i className="icon-Double-arrow"></i>Work Integrated Learning</Link></li>
                                            <li><Link to="/careers/jobs"><i className="icon-Double-arrow"></i>Jobs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">Useful Links</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/contact-us"><i className="icon-Double-arrow"></i>Contact Us</Link></li>
                                            <li><Link to="/pricing"><i className="icon-Double-arrow"></i>Pricing Plan</Link></li>
                                            <li><Link to="/instructor-details/james-carlson"><i className="icon-Double-arrow"></i>Instructor Profile</Link></li>
                                            <li><Link to="/purchase-guide"><i className="icon-Double-arrow"></i>Purchase Guide</Link></li>
                                            <li><Link to="/event-details/1"><i className="icon-Double-arrow"></i>Event Details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">Contact Info</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li><i className="icon-map-pin-line"></i>Greater Vancouver, BC
                                                </li>
                                                <li><i className="icon-phone-fill"></i><a href="tel:+1-604-351-4512">+1-604-351-4512</a></li>
                                                {/* <li><i className="icon-phone-fill"></i><a href="tel: + 1 (237) 382-2840">+ 1 (237) 382-2840</a></li> */}
                                                <li><i className="icon-mail-line-2"></i><a target="_blank" rel="noreferrer" href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-md-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-21-01.png`} alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <p>Copyright 2023 <a href="/">M2M Tech</a> Designed By <a href="https://aireach.page">AiReach</a>. All Rights
                                        Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTopButton />
        </>
    )
}

export default FooterOne;