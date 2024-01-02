import React from 'react';
import { Element } from 'react-scroll';

const items = [
    {
        title: 'Tailored Curriculum',
        info: 'Our industry-aligned curriculum focuses on the core concepts, tools, and techniques relevant to the Canadian Data Analytics landscape.',
        icon: 'icon-research'
    },
    {
        title: 'Real-world Projects',
        info: 'Apply your learning to hands-on projects based on actual Canadian datasets, allowing you to gain practical experience and solve real-world problems.',
        icon: 'icon-Browser'
    },
    {
        title: 'Personalized Mentorship and Networking',
        info: 'Benefit from one-on-one guidance and support from experienced mentors who have a deep understanding and connect with industry professionals.',
        icon: 'icon-student'
    },
    {
        title: 'Job-ready Skills',
        info: 'Gain the technical expertise, critical thinking abilities, and communication skills necessary to succeed in entry-level Data Analytics roles.',
        icon: 'icon-pentool'
    },
    {
        title: 'Career Support',
        info: 'Receive comprehensive career services, including resume reviews, interview preparation, and access to our job placement assistance program.',
        icon: 'icon-student-read'
    },
    {
        title: 'WIL, Internships',
        info: 'Explore possible Employer-led Work Integrated Learning program and Internship opportunities.',
        icon: 'icon-user-line'
    },
];

const DataAnalyticsWhyChooseSuchACareer = () => {
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
                                Our Data Analytics Course offers a comprehensive curriculum tailored to the Canadian job market, providing you with hands-on projects and mentorship from experienced data professionals. You'll gain job-ready skills and build a portfolio showcasing your data analysis expertise. Whether you're an entry-level professional or a university student, our course empowers you to seize the abundant job opportunities in Canada's data-driven economy. Embrace the power of data analytics and unlock your potential today by enrolling in our course!
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
                                <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/data-science-intro-to-ml-group-courses">Join Now</a>
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

export default DataAnalyticsWhyChooseSuchACareer;