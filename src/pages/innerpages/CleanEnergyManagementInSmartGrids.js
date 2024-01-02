import React from 'react';
// import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

const EventData = [
    {
        "id": 1,
        "title": "Clean Energy Management in Smart Grids",
        "image": "clean-energy-management-in-smart-grids.webp",
        "website": "https://m2mtechconnect.com",
        "industry": "Education, It & computing",
        "rating": "4.8 Google Rating",
        "duration": "12 Weeks",
        "category": "CleanTech",
        "location": "Virtual Self-Paced",
        "going": "140+"
    }
]

const DataAnalysisAndDataVisualization = ({
    showRegisterForm,
    setShowRegisterForm
    }) => {
    // const { id } = useParams();
    // const eventId = parseInt(id, 10);
    // const data = EventData.filter(event => event.id === eventId);
    const eventItem = EventData[0];
    return (
        <>
            <SEO
            title={ eventItem.title }
            description=""
            />
            <Layout>
                <BreadcrumbOne 
                    title="Clean Energy Management in Smart Grids"
                    rootUrl="/careers/work-integrated-learning"
					parentUrl="Work Integrated Learning"
                    currentUrl="Clean Energy Management in Smart Grids"
                />
                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/project-details/${ eventItem.image }`} alt="Event Thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h3 className="title">{ eventItem.title }</h3>
                                    <p>
                                        <strong>What is the main goal for this project?</strong><br></br>
                                        The goal of this project is to create a clean energy management system in smart grids using reinforcement learning. This will involve several steps including but not limited to:
                                    </p>
                                    <ul>
                                        <li>
                                            Researching existing Smart Grid Systems and Energy Management Systems.
                                        </li>
                                        <li>
                                            Developing a Reinforcement Learning algorithm to optimize energy management.
                                        </li>
                                        <li>
                                            Testing the developed algorithm and making improvements based on additional data.
                                        </li>
                                        <li>
                                            Optimizing the algorithm runtime performance and assessing areas for improvement.
                                        </li>
                                        <li>
                                            Researching other variables that can improve the quality of energy management.
                                        </li>
                                        <li>
                                            Accounting for additional variables in the Reinforcement Learning algorithm.
                                        </li>                                        
                                    </ul>
                                    <p>
                                        <strong>DUTIES AND RESPONSIBILITIES</strong><br></br>
                                        By the end of the project:
                                    </p>
                                    <ul>
                                        <li>
                                            Understanding of existing smart grid systems and energy management systems.
                                        </li>
                                        <li>
                                            Understanding of variables that affect the quality of energy management.
                                        </li>
                                        <li>
                                            Identification of areas for future improvement of the algorithm.
                                        </li>
                                        <li>
                                            Testing the developed algorithm with users and accounting for additional parameters.
                                        </li>
                                    </ul>
                                    <p>
                                        Final deliverables should include:
                                    </p>
                                    <ul>
                                        <li>
                                            All source code.
                                        </li>
                                        <li>
                                            A written report explaining the design process and outcomes.
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>SKILLS TO BE DEVELOPED</strong><br></br>
                                        As part of doing this project, interns can expect to be upskilled on below:
                                    </p>
                                    <ul>
                                        <li>
                                            Energy Management systems, Reinforcement learning algorithms like Q-learning.
                                        </li>
                                        <li>
                                            Python, Machine learning.
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="eduvibe-sidebar">
                                    <div className="eduvibe-widget eduvibe-widget-details">
                                        <h5 className="title">ABOUT THE PROJECT</h5>
                                        <div className="widget-content">
                                            <ul>
                                                <li><span><i className="icon-time-line"></i> { eventItem.duration }</span></li>
                                                <li><span><i className="icon-presentation"></i> { eventItem.category }</span></li>
                                                <li><span><i className="icon-map-pin-line"></i> { eventItem.location }</span></li>
                                                {/* <li>
                                                    We continuously work towards connecting youths, skills & STEM job opportunities by empowering youths with Emerging Tech (Data Science, ML, AI, VR/AR) skills based projects/opportunities.
                                                </li> */}
                                            </ul>

                                            <div className="read-more-btn mt--45">
                                                <a className="edu-btn btn-secondary text-center" href="https://form.jotform.com/m2mtech/wil-programs-sign-up">Register Now<i className="icon-arrow-right-line-right"></i></a>
                                            </div>

                                            {/* <div className="read-more-btn mt--30 text-center">
                                                <div className="eduvibe-post-share">
                                                    <span>Share: </span>
                                                    <a className="linkedin" href="/"><i className="icon-linkedin"></i></a>
                                                    <a className="facebook" href="/"><i className="icon-Fb"></i></a>
                                                    <a className="twitter" href="/"><i className="icon-Twitter"></i></a>
                                                    <a className="youtube" href="/"><i className="icon-youtube"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* <div className="event-widget event-widget-details mt--40">
                                        <h5 className="title">Map</h5>
                                        <div className="widget-content">
                                            <div className="google-map">
                                                <div className="eduvibe-google-map">
                                                    <iframe className="radius-small w-100" title="Google Map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" height="290" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="read-more-btn text-center">
                                    <a className="edu-btn btn-secondary text-center" href="https://form.jotform.com/m2mtech/wil-programs-sign-up">Register Now<i className="icon-arrow-right-line-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
        </>
    )
}
export default DataAnalysisAndDataVisualization;