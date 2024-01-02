import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        "id": 1,
        "image": "dl-engineer_thumb.webp",
        "title": 'Deep Learning Engineer',
        "projectedJobs": '58,900.00',
        "medianSalary": "88,900.00",
        "educationNeeded": "Bachelor's",
        "description": "As a Deep Learning Engineer, you'll design, build, and optimize deep neural networks to solve complex problems in various domains, such as computer vision, natural language processing, and speech recognition. You'll be at the forefront of AI innovation, working on cutting-edge projects and developing advanced AI models.",
        "link": "/courses/deep-learning/potential-jobs/deep-learning-engineer",
        "externalLink": "https://lmi.technationcanada.ca/en-ca/job-descriptions/Deep%20Learning%20Engineer",
    },
    {
        "id": 2,
        "image": "data-scientist_thumb.webp",
        "title": 'Data Scientist (AI/ML Focus)',
        "projectedJobs": '50,776.00',
        "medianSalary": "124,102.00",
        "educationNeeded": "Bachelor's",
        "description": "With deep learning skills, you'll be a sought-after candidate for Data Scientist roles that involve leveraging machine learning and AI techniques to derive insights from complex datasets, helping organizations make data-driven decisions.",
        "link": "/courses/deep-learning/potential-jobs/data-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227147/ca",
    },
    {
        "id": 3,
        "image": "ai-programmer_thumb.webp",
        "title": 'AI Consultant',
        "projectedJobs": '55,000.00',
        "medianSalary": "135,388.00",
        "educationNeeded": "Bachelor's",
        "description": "As an AI Consultant, you'll work with diverse clients to assess their needs, recommend AI solutions, and implement deep learning models tailored to their specific requirements. Your expertise will drive business transformation through AI adoption.",
        "link": "/courses/deep-learning/potential-jobs/ai-consultant",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/24508/ca",
    },
    // {
    //     "id": 2,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Computer Vision Specialist',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "As a Computer Vision Specialist, you'll apply your expertise in deep learning and convolutional neural networks (CNNs) to analyze and interpret visual data, enabling machines to \"see\" and understand images and videos. Your work will find applications in industries like autonomous vehicles, healthcare, and robotics.",
    //     "link": "/courses/deep-learning/potential-jobs/computer-vision-specialist",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 3,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'NLP Engineer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "As an NLP Engineer, you'll work on Natural Language Processing (NLP) projects, using recurrent neural networks (RNNs) and transformer-based models to process, interpret, and generate human language. Your skills will be sought after in fields like sentiment analysis, chatbots, and language translation.",
    //     "link": "/courses/deep-learning/potential-jobs/nlp-engineer",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 4,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'AI Research Scientist',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "AI Research Scientists contribute to the advancement of deep learning by conducting cutting-edge research and developing novel algorithms. They work on pushing the boundaries of AI capabilities, leading to groundbreaking discoveries and innovations.",
    //     "link": "/courses/deep-learning/potential-jobs/ai-research-scientist",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 7,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'AI Product Manager',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "AI Product Managers oversee the development and deployment of AI-powered products and solutions. With your deep learning background, you'll be well-positioned to lead teams and drive the successful launch of AI products.",
    //     "link": "/courses/deep-learning/potential-jobs/ai-product-manager",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 8,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'AI Research Assistant',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "Joining research institutions or academia, you can contribute as an AI Research Assistant, supporting ongoing deep learning research projects and collaborating with leading AI researchers.",
    //     "link": "/courses/deep-learning/potential-jobs/ai-research-assistant",
    //     "externalLink": "https",
    // },
];

const CoursesDeepLearningPotentialJobs = () => {
    return (
        <Element
            name="what-we-do-one"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="col-lg-12 pre-section-title text-center">
                    <span className="color-primary pretitle">Job Profiles</span>
                    <h3 className="title">Current Job Opportunities</h3>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <div className="inner">
                            <p className="job-oppotunities-description">
                                By enrolling in our Deep Learning Course, you'll unlock a world of exciting job opportunities in Canada's fast-growing AI landscape. As businesses and industries increasingly adopt deep learning technologies, the demand for skilled professionals in this domain is soaring. Upon completion of the course, you'll be equipped with job-ready skills that can open doors to the following rewarding career paths:
                            </p>
                            { items && items.length > 0 &&
                                <>
                                <div className="job-profile-list-mobile">
                                    { items.map( ( data , i ) => (
                                        <div key={i} className="row job-profile-wrapper service-card-1">
                                            <div className="col-4 overflow-hidden image-wrapper">
                                                <img src={`${process.env.PUBLIC_URL}/images/deep-learning/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
                                            </div>
                                            <div className="col-8 job-profile-content">
                                                <h6 className="feature-title">{ data.title }</h6>
                                                <p className="d-flex justify-content-between">Salary Low: <strong>${data.projectedJobs}</strong></p>
                                                <p className="d-flex justify-content-between">Salary High: <strong>${data.medianSalary}</strong></p>
                                                <p className="d-flex justify-content-between">Education Needed: <strong>{data.educationNeeded}</strong></p>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap mt-3 mb-3">
                                                <Link className="edu-btn btn-secondary mt-3" to={ data.link }>Know More</Link>
                                                <a className="edu-btn btn-bg-alt mt-3" href={ data.externalLink }>Current Jobs</a>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                                <div className="job-profile-list-desktop">
                                    { items.map( ( data , i ) => (
                                        <div key={i} className="row job-profile-wrapper service-card-1">
                                            <div className="col-lg-2 p-0 overflow-hidden image-wrapper">
                                                <img src={`${process.env.PUBLIC_URL}/images/deep-learning/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
                                            </div>
                                            <div className="col-lg-8 job-profile-content p-4">
                                                <h6 className="feature-title">{ data.title }</h6>
                                                <p className="feature-description">{ data.description }</p>
                                                <div className="d-flex justify-content-between flex-wrap mt-3">
                                                    <Link className="edu-btn btn-secondary mt-3" to={ data.link }>Know More<i className="icon-Double-arrow"></i></Link>
                                                    <a className="edu-btn btn-bg-alt mt-3" href={ data.externalLink }>Current Jobs<i className="icon-arrow-right-line-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 p-4">
                                                <p>Salary Low:<br></br><strong>${data.projectedJobs}</strong></p>
                                                <p>Salary High:<br></br><strong>${data.medianSalary}</strong></p>
                                                <p>Education Needed:<br></br><strong>{data.educationNeeded}</strong></p>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                                </>
                            }
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

export default CoursesDeepLearningPotentialJobs;