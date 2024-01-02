import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        "id": 1,
        "image": "software-developer_thumb.webp",
        "title": 'Software Developer',
        "projectedJobs": '51,920.00',
        "medianSalary": "129,734.00",
        "educationNeeded": "Bachelor's",
        "description": "As a Python Software Developer, you'll design, build, and maintain software applications using Python. You'll collaborate with cross-functional teams to develop innovative solutions that drive business growth.",
        "link": "/courses/coding/potential-jobs/software-developer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22548/ca",
    },
    {
        "id": 2,
        "image": "web-developer_thumb.webp",
        "title": 'Web Developer',
        "projectedJobs": '31,500.00',
        "medianSalary": "87,500.00",
        "educationNeeded": "Bachelor's",
        "description": "Web Developers proficient in Python use frameworks like Django and Flask to create robust and dynamic web applications. Your skills will be in demand as businesses increasingly shift to online platforms.",
        "link": "/courses/coding/potential-jobs/web-developer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17892/ca",
    },
    {
        "id": 3,
        "image": "data-scientist_thumb.webp",
        "title": 'Data Analyst/Scientist',
        "projectedJobs": '40,390.00',
        "medianSalary": "98,717.50",
        "educationNeeded": "Bachelor's",
        "description": "Python is a staple in the world of data analysis and data science. As a Data Analyst/Scientist, you'll use Python to process and analyze vast datasets, extract insights, and drive data-driven decision-making.",
        "link": "/courses/coding/potential-jobs/data-analyst-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17882/ca",
    },
    {
        "id": 4,
        "image": "it-specialist_thumb.webp",
        "title": 'IT Specialist',
        "projectedJobs": '43,750.00',
        "medianSalary": "107,695.00",
        "educationNeeded": "Bachelor's",
        "description": "IT Specialists with Python skills are valuable assets in managing and automating various IT processes. Your ability to write efficient Python scripts will enhance the productivity of IT operations.",
        "link": "/courses/coding/potential-jobs/it-specialist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/296631/ca",
    },
    {
        "id": 5,
        "image": "it-specialist_thumb.webp",
        "title": 'Business Analyst',
        "projectedJobs": '43,750.00',
        "medianSalary": "107,695.00",
        "educationNeeded": "Bachelor's",
        "description": "Python skills are sought after in the realm of Business Analysis. Your coding expertise will aid in data analysis, modeling, and scenario planning to support business strategies.",
        "link": "/courses/coding/potential-jobs/business-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22507/ca",
    },
    {
        "id": 6,
        "image": "research-assistant_thumb.webp",
        "title": 'Research Assistant',
        "projectedJobs": '22,750.00',
        "medianSalary": "79,082.50",
        "educationNeeded": "Uni Student",
        "description": "Python programming is widely used in research and academia. As a Research Assistant, you can support research projects, analyze data, and develop computational models.",
        "link": "/courses/coding/potential-jobs/research-assistant",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22846/ca",
    },
    // {
    //     "id": 5,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Python Programmer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "As a Python Programmer, you'll work on diverse projects, ranging from automation tasks to developing custom Python solutions for specific business needs.",
    //     "link": "/courses/coding/potential-jobs/python-programmer",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 7,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Application Developer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "Python Application Developers create and maintain applications for desktop and mobile platforms. Your proficiency in Python will enable you to build user-friendly and efficient applications.",
    //     "link": "/courses/coding/potential-jobs/application-developer",
    //     "externalLink": "https",
    // },
];

const CoursesCodingPotentialJobs = () => {
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
                                Completing our Python Coding Course will unlock a plethora of job opportunities in Canada's tech-centric job market. As Python is one of the most popular and versatile programming languages, employers across various industries seek skilled Python developers. Upon graduation, you'll be equipped with the necessary coding expertise to pursue exciting career paths, including:
                            </p>
                            { items && items.length > 0 &&
                                <>
                                <div className="job-profile-list-mobile">
                                    { items.map( ( data , i ) => (
                                        <div key={i} className="row job-profile-wrapper service-card-1">
                                            <div className="col-4 overflow-hidden image-wrapper">
                                                <img src={`${process.env.PUBLIC_URL}/images/coding/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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
                                                <img src={`${process.env.PUBLIC_URL}/images/coding/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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

export default CoursesCodingPotentialJobs;