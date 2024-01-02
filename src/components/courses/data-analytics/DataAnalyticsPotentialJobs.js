import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        "id": 1,
        "image": "data-scientist_thumb.webp",
        "title": 'Data Scientist',
        "projectedJobs": '50,776.00',
        "medianSalary": "124,102.00",
        "educationNeeded": "Bachelor's",
        "description": "Data Scientists use advanced analytics technologies, including machine learning and predictive modelling, to support the identification of trends, scrape information from unstructured data sources and provide automated recommendations. They are employed by consulting firms, universities, banks and information technology departments in the private and public sectors.",
        "link": "/courses/data-analytics/potential-jobs/data-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227147/ca",
    },
    {
        "id": 2,
        "image": "data-analyst_thumb.webp",
        "title": 'Data Analyst',
        "projectedJobs": '50,776.00',
        "medianSalary": "124,102.00",
        "educationNeeded": "Bachelor's",
        "description": 'Database analysts design, develop and administer data management solutions. Data administrators develop and implement data administration policy, standards and models. They are employed in information technology consulting firms and in information technology units throughout the private and public sectors.',
        "link": "/courses/data-analytics/potential-jobs/data-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17882/ca",
    },
    {
        "id": 3,
        "image": "data-analyst_thumb.webp",
        "title": 'Business Analyst',
        "projectedJobs": '55,000.00',
        "medianSalary": "135,388.00",
        "educationNeeded": "Bachelor's",
        "description": 'Business Analysts leverage data analytics to understand market trends, customer behavior, and business performance. Your ability to derive meaningful insights from data will aid in making informed decisions and driving growth.',
        "link": "/courses/data-analytics/potential-jobs/business-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/296425/ca",
    },
    {
        "id": 4,
        "image": "data-analyst_thumb.webp",
        "title": 'Market Research Analyst',
        "projectedJobs": '48,400.00',
        "medianSalary": "136,158.00",
        "educationNeeded": "Bachelor's",
        "description": 'Market Research Analysts use data analytics to study market trends, consumer preferences, and competitor analysis. Your insights will help organizations identify opportunities, assess product viability, and shape marketing strategies.',
        "link": "/courses/data-analytics/potential-jobs/market-research-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/3869/ca",
    },
    {
        "id": 5,
        "image": "data-analyst_thumb.webp",
        "title": 'Financial Analyst',
        "projectedJobs": '52,888.00',
        "medianSalary": "126,918.00",
        "educationNeeded": "Bachelor's",
        "description": 'Financial Analysts utilize data analytics to analyze financial data, assess investment opportunities, and create financial models. Your skills will be instrumental in aiding financial planning and guiding investment decisions.',
        "link": "/courses/data-analytics/potential-jobs/financial-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/12417/ca",
    },
    {
        "id": 6,
        "image": "data-analyst_thumb.webp",
        "title": 'Operations Analyst',
        "projectedJobs": '66,946.00',
        "medianSalary": "161,326.00",
        "educationNeeded": "Graduate",
        "description": 'Operations Analysts optimize processes and efficiency using data analysis. Your ability to identify bottlenecks and areas for improvement will enhance business operations and reduce costs.',
        "link": "/courses/data-analytics/potential-jobs/operation-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/5455/ca",
    },
    {
        "id": 7,
        "image": "data-analyst_thumb.webp",
        "title": 'Marketing Analyst',
        "projectedJobs": '48,400.00',
        "medianSalary": "144,958.00",
        "educationNeeded": "Bachelor's",
        "description": 'Marketing Analysts use data analytics to measure marketing campaign performance, track customer engagement, and identify opportunities to enhance marketing strategies.',
        "link": "/courses/data-analytics/potential-jobs/marketing-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/3871/ca",
    },     
    // {
    //     "id": 8,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Healthcare Data Analyst',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": 'In the healthcare sector, you can work as a Healthcare Data Analyst, interpreting medical data, tracking patient outcomes, and contributing to medical research.',
    //     "link": "/courses/data-analytics/potential-jobs/healthcare-data-analyst",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 9,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Data Visualization Specialist',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": 'Data Visualization Specialists focus on creating visually compelling dashboards and reports that effectively communicate data insights. Your skills in data visualization tools will play a vital role in data storytelling.',
    //     "link": "/courses/data-analytics/potential-jobs/data-visualization-specialist",
    //     "externalLink": "https",
    // },
];

const DataAnalyticsPotentialJobs = () => {
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
                                                <img src={`${process.env.PUBLIC_URL}/images/data-analytics/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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
                                                <img src={`${process.env.PUBLIC_URL}/images/data-analytics/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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

export default DataAnalyticsPotentialJobs;