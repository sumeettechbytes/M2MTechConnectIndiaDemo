import React from 'react';
import { Element } from 'react-scroll';

const items = [
    {
        title: 'Comprehensive Curriculum',
        info: 'Covering the fundamentals of Deep Learning, Neural Networks, and Convolutional Neural Networks (CNNs), tailored for Canadian learners.',
        icon: 'icon-research'
    },
    {
        title: 'Real-world Projects',
        info: 'Applying deep learning techniques to solve real-world challenges using industry-relevant datasets.',
        icon: 'icon-Browser'
    },
    {
        title: 'Expert Mentorship and Networking',
        info: 'Receiving guidance and feedback from experienced AI professionals with a deep understanding of the Canadian market and connecting with industry professionals.',
        icon: 'icon-student'
    },
    {
        title: 'Job-ready Skills',
        info: 'Developing practical skills to excel in entry-level AI and deep learning roles in Canada\'s job market.',
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

const CoursesDeepLearningWhyChooseSuchACareer = () => {
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
                                By enrolling in our Deep Learning Course, you'll gain hands-on experience through real-world projects and mentorship from seasoned AI professionals. Our curriculum is tailored to meet the demands of the Canadian job market, providing you with job-ready skills and networking opportunities within the AI community. Whether you're an entry-level professional or a university student, this course will empower you to seize the abundant job opportunities awaiting in Canada's thriving AI ecosystem. Embrace the future of AI and deep learning today!
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
                                <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/ml-ai-neural-networks">Join Now</a>
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

export default CoursesDeepLearningWhyChooseSuchACareer;