import React from 'react';
// import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

const EventData = [
    {
        "id": 1,
        "title": "Data Analysis & Data Visualization",
        "image": "data-analysis-and-data-visualization.webp",
        "website": "https://m2mtechconnect.com",
        "industry": "Education, It & computing",
        "rating": "4.8 Google Rating",
        "duration": "12 Weeks",
        "category": "Digital Technologies",
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
                    title="Data Analysis & Data Visualization"
                    rootUrl="/careers/work-integrated-learning"
					parentUrl="Work Integrated Learning"
                    currentUrl="Data Analysis & Data Visualization"
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
                                        We'd like students to help analyze datasets to draw helpful insights.<br></br><br></br>
                                        We would like to enhance our marketing campaigns through re-evaluating our customer segmentation. We would like to implement cutting edge technology to analyze our customer segmentation, relative to each of our products and services. From the analysis, we hope to gain insights that will enhance our strategy and help us refocus our product/service marketing.
                                    </p>
                                    <p>
                                        <strong>What tasks will learners need to complete to achieve the project goal?</strong><br></br>
                                        Analyzed datasets with recommendations from this analysis in the form of a report. Should help with areas like<br></br>
                                    </p>
                                    <ul>
                                        <li>
                                            Improving pricing and risk selection.
                                        </li>
                                        <li>
                                            Identifying trends and potential predictive mitigation strategies.
                                        </li>
                                        <li>
                                            Developing more sophisticated products and pricing models.
                                        </li>
                                        <li>
                                            Submitting recommendations based on the analysis.
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>How will you support learners in completing the project?</strong><br></br>
                                        Students will connect directly with us for mentorship throughout the project. We will be able to provide answers to questions such as:
                                    </p>
                                    <ul>
                                        <li>
                                        Current industry standard approaches to Data Analysis and Data Visualization techniques.
                                        </li>
                                        <li>
                                            Relevant training for ramp up that the students needs.
                                        </li>
                                        <li>
                                            Regular sync up and communication through Collaboration tools for progress tracking.
                                        </li>
                                        <li>
                                            Opportunity to participate in Ideas brainstorming sessions/meeting to pitch your ideas.
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>What skills or technologies will help learners to complete the project?</strong><br></br>
                                        Data analysis, Data visualization, Machine Learning and familiarity with relevant software.
                                    </p>
                                    
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