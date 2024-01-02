import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        title: 'Work Integrated Learning:',
        info: "Our program will facilitate Employer led Work Integrated Learning opportunities where participants will get the opportunity to work directly in Data Science roles. This hands-on experience will expose participants to the day-to-day responsibilities of a Data Analyst/Scientist, provide exposure to industry practices and enhance their job readiness.",
        icon: 'icon-Hand---Book'
    },
    {
        title: 'Industry Collaborations:',
        info: "Collaborations with Industry professionals for providing guest lectures, workshops and mentorship programs will further integrate participants into the industry and provide valuable insights and networking opportunities.",
        icon: 'icon-artboard-line'
    },
    {
        title: 'Data Challenges and Hackathons:',
        info: "Participants will be provided relevant pointers to participate in Data challenges and hackathons hosted by Data Science Employers and Canadian Universities. These events will involve working on time-bound projects or problem-solving competitions, where participants will collaborate in teams to analyze and interpret data. By actively participating in such activities, participants will enhance their analytical skills, teamwork and ability to work under pressure - which are essential for job readiness.",
        icon: 'icon-user-2'
    }
];

const DataAnalyticsEmployerLedWIL = () => {
    return (
        <Element
            name="what-we-do-one"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white home-one-cat courses-eligibility-section"
        >
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12">
                        <div className="inner mt-md-16">
                            <div className="col-lg-12 pre-section-title text-center">
                                <span className="color-primary pretitle">Experiential Learning</span>
                                <h3 className="title">Do Employer Led Work Integrated Learning</h3>
                            </div>
                            { items && items.length > 0 &&
                                <div className="about-feature-list">
                                    { items.map( ( data , i ) => (
                                        <div className="our-feature" key={i}>
                                            <div className="our-feature">
                                                <div className="icon">
                                                    <i className={ data.icon }></i>
                                                </div>
                                                <div className="feature-content">
                                                    <h6 className="feature-title">{ data.title }</h6>
                                                    <p className="feature-description">{ data.info }</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            }
                            <div className="read-more-btn text-center">
                                <Link to="/work-integrated-learning" className="edu-btn mt-4">
                                    Explore WIL<i className="icon-arrow-right-line-right"></i>
                                </Link>
                            </div>
                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Element>
    )
}

export default DataAnalyticsEmployerLedWIL;