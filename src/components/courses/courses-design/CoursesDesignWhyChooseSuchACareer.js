import React from 'react';
import { Element } from 'react-scroll';

const items = [
    {
        title: 'Comprehensive Curriculum',
        info: 'Covering 3D Printing design, VR and AR creation, Infographics, Animation, and Website Development.',
        icon: 'icon-research'
    },
    {
        title: 'Real-world Projects',
        info: 'Engaging in hands-on design projects using industry-leading tools.',
        icon: 'icon-Browser'
    },
    {
        title: 'Expert Mentorship and Networking',
        info: 'Receiving personalized guidance from experienced design professionals and connecting with industry professionals.',
        icon: 'icon-student'
    },
    {
        title: 'Job-ready Skills',
        info: 'Developing design skills for creativity, technical proficiency, and attention to detail.',
        icon: 'icon-pentool'
    },
    {
        title: 'Career Support',
        info: 'Accessing comprehensive career services, including portfolio reviews and job placement assistance.',
        icon: 'icon-student-read'
    },
    {
        title: 'WIL, Internships',
        info: 'Explore possible Employer-led Work Integrated Learning program and Internship opportunities.',
        icon: 'icon-user-line'
    },
];

const CoursesDesignWhyChooseSuchACareer = () => {
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
                                Our Design Course empowers you to become a versatile and in-demand designer with hands-on projects and expert mentorship. The diverse curriculum ensures you're prepared to meet the demands of Canada's creative industries, where visual storytelling and immersive experiences drive innovation. Whether you're an entry-level professional or a university student, embrace the world of design and unlock your creative potential. Enroll in our course today and embark on a successful career journey in Canada's vibrant and ever-evolving design landscape.
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
                                <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/design-thinking-group-courses">Join Now</a>
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

export default CoursesDesignWhyChooseSuchACareer;