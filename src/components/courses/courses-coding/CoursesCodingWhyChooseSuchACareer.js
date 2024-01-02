import React from 'react';
import { Element } from 'react-scroll';

const items = [
    {
        title: 'Comprehensive Curriculum',
        info: 'Covering the fundamentals of Python, data structures, algorithms, and real-world coding applications.',
        icon: 'icon-research'
    },
    {
        title: 'No Code to IDE Progression',
        info: 'We begin with No Code tools like edublocks.org, ensuring a smooth transition into IDE-based coding as you build confidence.',
        icon: 'icon-Browser'
    },
    {
        title: 'Expert Mentorship and Networking',
        info: 'Receiving guidance from seasoned Python developers with industry experience in the Canadian job market and connecting with industry professionals.',
        icon: 'icon-student'
    },
    {
        title: 'Hands-on Projects',
        info: 'Applying your coding skills to solve real-world problems and build practical projects.',
        icon: 'icon-pentool'
    },
    {
        title: 'Career Support',
        info: 'Accessing comprehensive career services, including resume reviews, interview preparation, and job placement assistance.',
        icon: 'icon-student-read'
    },
    {
        title: 'WIL, Internships',
        info: 'Explore possible Employer-led Work Integrated Learning program and Internship opportunities.',
        icon: 'icon-user-line'
    },
];

const CoursesCodingWhyChooseSuchACareer = () => {
    return (
        <>
        <Element
            name="why-choose-such-a-career"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="col-lg-12 pre-section-title text-center">
                    <span className="color-primary pretitle">Key Features</span>
                    <h3 className="title">Why Choose Our Course?</h3>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <div className="inner">
                            <p className="key-features-description">
                                Our Python Coding Course is tailored to meet the demands of the Canadian job market, providing hands-on projects and mentorship from experienced Python developers. With comprehensive learning and career support, you'll build a portfolio showcasing your coding expertise, making you a highly competitive candidate for tech-related job opportunities in Canada. Whether you're an entry-level professional or a university student, embrace the world of coding with Python and unleash your potential. Enroll in our course today to embark on a successful career journey in Canada's tech-driven industries.
                            </p>
                            { items && items.length > 0 &&
                                <div className="feature-list-wrapper mt--10">
                                { items.map( ( data , i ) => (
                                    <div
                                        className="feature-list mt--35 mt_mobile--15"
                                        key={ i }
                                    >
                                        <div className="icon">
                                            <i className={ data.icon }></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{ data.title }</h6>
                                            <p>{ data.info }</p>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                            }
                            <div className="read-more-btn text-center">
                                <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/coding-fun-with-python-group-courses">Join Now</a>
                            </div>
                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-07.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="shape-image shape-image-1">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
        </>
    )
}

export default CoursesCodingWhyChooseSuchACareer;