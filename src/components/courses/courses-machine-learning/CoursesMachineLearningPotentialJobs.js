import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        "id": 1,
        "image": "ai-programmer_thumb.webp",
        "title": 'Artificial Intelligence Programmer',
        "projectedJobs": '51,920.00',
        "medianSalary": "129,734.00",
        "educationNeeded": "Bachelor's",
        "description": "An AI programmer is a specialized software developer who designs, develops, and implements algorithms and models for artificial intelligence systems, enabling machines to exhibit intelligent behaviors and perform tasks that typically require human intelligence.",
        "link": "/courses/machine-learning/potential-jobs/ai-programmer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227159/ca",
    },
    {
        "id": 2,
        "image": "ai-programmer_thumb.webp",
        "title": 'Artificial Intelligence Consultant',
        "projectedJobs": '55,000.00',
        "medianSalary": "135,388.00",
        "educationNeeded": "Bachelor's",
        "description": "As an AI Consultant, you'll work with businesses to assess their needs, identify AI opportunities, and implement machine learning solutions. Your expertise will drive organizations towards AI-driven innovation and growth.",
        "link": "/courses/machine-learning/potential-jobs/ai-consultant",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/24508/ca",
    },
    {
        "id": 3,
        "image": "data-scientist_thumb.webp",
        "title": 'Data Scientist',
        "projectedJobs": '50,776.00',
        "medianSalary": "124,102.00",
        "educationNeeded": "Bachelor's",
        "description": "Data Scientists use advanced analytics technologies, including machine learning and predictive modelling, to support the identification of trends, scrape information from unstructured data sources and provide automated recommendations. They are employed by consulting firms, universities, banks and information technology departments in the private and public sectors.",
        "link": "/courses/machine-learning/potential-jobs/data-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227147/ca",
    },
    {
        "id": 4,
        "image": "data-engineer_thumb.webp",
        "title": 'Data Engineer (ML Focus)',
        "projectedJobs": '64,988.00',
        "medianSalary": "158,664.00",
        "educationNeeded": "Bachelor's",
        "description": 'Data Engineers with machine learning knowledge play a crucial role in designing and optimizing data pipelines to support machine learning workflows. Your work ensures efficient data handling and model deployment.',
        "link": "/courses/machine-learning/potential-jobs/data-engineer-ml-focus",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/24510/ca",
    },
    {
        "id": 5,
        "image": "data-engineer_thumb.webp",
        "title": 'Machine Learning Engineer',
        "projectedJobs": '65,600.00',
        "medianSalary": "130,200.00",
        "educationNeeded": "Bachelor's",
        "description": "As a Machine Learning Engineer, you'll design and deploy machine learning models, algorithms, and systems to solve complex business problems. Your skills will find applications in diverse domains like finance, healthcare, e-commerce, and more.",
        "link": "/courses/machine-learning/potential-jobs/machine-learning-engineer",
        "externalLink": "https://lmi.technationcanada.ca/en-ca/job-title-heatmap?categoryId=5a24fce23d3bd3547a2eda85&jobId=609f70e90d90ea5802d0aa32",
    },
    // {
    //     "id": 5,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'AI Research Scientist',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": 'AI Research Scientists are at the forefront of developing innovative machine learning algorithms and pushing the boundaries of AI capabilities. With your deep understanding of machine learning, you can contribute to cutting-edge research projects.',
    //     "link": "/courses/machine-learning/potential-jobs/ai-research-scientist",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 6,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Computer Vision Specialist',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": 'Computer Vision Specialists utilize machine learning techniques to enable computers to interpret and analyze visual information, paving the way for applications in autonomous vehicles, medical imaging, and augmented reality.',
    //     "link": "/courses/machine-learning/potential-jobs/computer-vision-specialist",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 7,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Natural Language Processing (NLP) Engineer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": 'NLP Engineers work on developing algorithms and models to process and understand human language. Your skills will be sought after in building chatbots, sentiment analysis systems, and language translation tools.',
    //     "link": "/courses/machine-learning/potential-jobs/nlp-engineer",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 10,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'AI Product Manager',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "AI Product Managers lead the development and launch of AI-powered products and solutions. With your machine learning background, you'll bridge the gap between technical teams and business stakeholders to drive successful product outcomes.",
    //     "link": "/courses/machine-learning/potential-jobs/ai-product-manager",
    //     "externalLink": "https",
    // },     
];

const CoursesMachineLearningPotentialJobs = () => {
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
                                Completing our Data Analytics Course will open up exciting job opportunities in Canada's data-driven job market. With the increasing reliance on data to inform decision-making, businesses across industries seek skilled data analysts. Upon graduation, you'll possess the in-demand skills to pursue various rewarding career paths, including:
                            </p>
                            { items && items.length > 0 &&
                                <>
                                <div className="job-profile-list-mobile">
                                    { items.map( ( data , i ) => (
                                        <div key={i} className="row job-profile-wrapper service-card-1">
                                            <div className="col-4 overflow-hidden image-wrapper">
                                                <img src={`${process.env.PUBLIC_URL}/images/machine-learning/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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
                                                <img src={`${process.env.PUBLIC_URL}/images/machine-learning/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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

export default CoursesMachineLearningPotentialJobs;