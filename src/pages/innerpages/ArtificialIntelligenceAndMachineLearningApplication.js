import React from 'react';
// import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

const EventData = [
    {
        "id": 1,
        "title": "Artificial Intelligence & Machine Learning Application",
        "image": "artificial-intelligence-and-machine-learning-application.webp",
        "website": "https://m2mtechconnect.com",
        "industry": "Education, It & computing",
        "rating": "4.8 Google Rating",
        "duration": "12 Weeks",
        "category": "Digital Technologies",
        "location": "Virtual Self-Paced",
        "going": "140+"
    }
]

const ArtificialIntelligenceAndMachineLearningApplication = ({
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
                    title="Artificial Intelligence & Machine Learning Application"
                    rootUrl="/careers/work-integrated-learning"
					parentUrl="Work Integrated Learning"
                    currentUrl="Artificial Intelligence & Machine Learning Application"
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
                                        We would like to apply the latest AI and machine learning techniques to our dataset to gather new insights that our organization can leverage.<br></br>
                                        This involves:
                                    </p>
                                    <ul>
                                        <li>
                                            Conduct background research on existing products, services, domains & dataset.
                                        </li>
                                        <li>
                                            Conduct research into the latest AI and ML techniques and how they could be applied to our data.
                                        </li>
                                        <li>
                                            Developing a ML / AI model which provides some sort of unique outcomes or insights into our data
                                        </li>
                                        <li>
                                            Devise models and algorithms to develop scalable solutions that can work in real-time with large amounts of data.
                                        </li>
                                        <li>
                                            Develop automation tools to enable machine learning
                                        </li>
                                        <li>
                                            Design, train and improve Machine Learning models
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>What tasks will learners need to complete to achieve the project goal?</strong><br></br>
                                        By the end of the project, students should submit a final report that demonstrates:<br></br>
                                    </p>
                                    <ul>
                                        <li>
                                            Understanding of the available dataset
                                        </li>
                                        <li>
                                            The problem being solved
                                        </li>
                                        <li>
                                            Methodologies and approaches
                                        </li>
                                        <li>
                                            Outcomes and results
                                        </li>
                                        <li>
                                            Recommended next steps for our organization
                                        </li>
                                    </ul>
                                    <p>
                                        Bonus steps in the process would also include:
                                    </p>
                                    <ul>
                                        <li>
                                            Providing multiple versions of any potential solutions
                                        </li>
                                        <li>
                                            Providing source code in a proper software development environment as applicable
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>How will you support learners in completing the project?</strong><br></br>
                                        Students will connect directly with us for mentorship throughout the project. We will be able to provide answers to questions such as:
                                    </p>
                                    <ul>
                                        <li>
                                            Current industry standard approaches to ML and AI.
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
                                        In order to complete this project, students can self-teach, but it is beneficial to be familiar with:
                                    </p>                                    
                                    <ul>
                                        <li>
                                            Modern ML techniques
                                        </li>
                                        <li>
                                            Software development
                                        </li>
                                        <li>
                                            ML ecosystem tools such as Jupyter Notebook/Google Colab
                                        </li>
                                        <li>
                                            Experience in Python and related ML frameworks such as Tensorflow
                                        </li>
                                    </ul>
                                    <p>
                                        Again, students can complete this project without any of the prior knowledge listed here. Students will be expected to research and learn more about this above as the project goes along.
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
export default ArtificialIntelligenceAndMachineLearningApplication;