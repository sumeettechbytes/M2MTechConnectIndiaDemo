import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const items = [
    {
        "id": 1,
        "image": "graphic-designer_thumb.webp",
        "title": 'Graphic Designer',
        "projectedJobs": '32,025.00',
        "medianSalary": "75,722.50",
        "educationNeeded": "Bachelor's",
        "description": "Graphic Designers with expertise in various design tools and techniques find opportunities in branding, advertising, publishing, and digital media.",
        "link": "/courses/design/potential-jobs/graphic-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/5703/ca",
    },
    {
        "id": 2,
        "image": "animation-artist_thumb.webp",
        "title": 'Animation Artist',
        "projectedJobs": '40,260.00',
        "medianSalary": "95,194.00",
        "educationNeeded": "Diploma",
        "description": "Animation Artists create captivating animated content and explainer videos for marketing campaigns, entertainment, e-learning, and more, using tools like Animaker.",
        "link": "/courses/design/potential-jobs/animation-artist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/5682/ca",
    },
    {
        "id": 3,
        "image": "web-designer_thumb.webp",
        "title": 'Web Designer',
        "projectedJobs": '39,600.00',
        "medianSalary": "110,000.00",
        "educationNeeded": "Bachelor's",
        "description": "Web Designers proficient in website creation and UX/UI design are in high demand across businesses of all sizes and industries.",
        "link": "/courses/design/potential-jobs/web-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17898/ca",
    },
    {
        "id": 4,
        "image": "graphic-designer_thumb.webp",
        "title": 'UX/UI Designer',
        "projectedJobs": '32,025.00',
        "medianSalary": "75,722.50",
        "educationNeeded": "Diploma",
        "description": "UX/UI Designers focus on creating user-friendly and visually appealing digital products, ensuring an enhanced user experience.",
        "link": "/courses/design/potential-jobs/ux-ui-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/26533/ca",
    },
    {
        "id": 5,
        "image": "graphic-designer_thumb.webp",
        "title": 'Visual Content Creator',
        "projectedJobs": '35,892.50',
        "medianSalary": "84,140.00",
        "educationNeeded": "Diploma",
        "description": "Visual Content Creators curate engaging visual content for social media, digital marketing, and brand communication, playing a crucial role in online presence.",
        "link": "/courses/design/potential-jobs/visual-content-creator",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/296542/ca",
    },
    // {
    //     "id": 1,
    //     "image": "data-analyst_thumb.webp",
    //     "title": '3D Printing Designer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "As a 3D Printing Designer, you'll work on creating innovative 3D models, prototypes, and customized designs for various industries, such as manufacturing, architecture, and product design.",
    //     "link": "/courses/design/potential-jobs/3d-printing-designer",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 2,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'VR/AR Developer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "VR/AR Developers craft immersive and interactive virtual and augmented reality experiences for gaming, education, training, marketing, and more, utilizing your skills in CoSpaces and SparkAR.",
    //     "link": "/courses/design/potential-jobs/vr-ar-developer",
    //     "externalLink": "https",
    // },
    // {
    //     "id": 3,
    //     "image": "data-analyst_thumb.webp",
    //     "title": 'Infographic Designer',
    //     "projectedJobs": '--/hr',
    //     "medianSalary": "--/hr",
    //     "educationNeeded": "Bachelor's",
    //     "description": "Infographic Designers visualize complex data and information through compelling visual narratives, catering to industries like marketing, journalism, and data analytics.",
    //     "link": "/courses/design/potential-jobs/infographic-designer",
    //     "externalLink": "https",
    // },
];

const CoursesDesignPotentialJobs = () => {
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
                                Completing our Design Course will unlock a plethora of job opportunities in Canada's creative and tech-driven job market. As a skilled designer with expertise in 3D Printing, VR, AR, Infographics, Animation, and Website Development, you'll be sought after in various industries. Upon graduation, you'll be equipped with a diverse skill set, enabling you to pursue exciting career paths, including:
                            </p>
                            { items && items.length > 0 &&
                                <>
                                <div className="job-profile-list-mobile">
                                    { items.map( ( data , i ) => (
                                        <div key={i} className="row job-profile-wrapper service-card-1">
                                            <div className="col-4 overflow-hidden image-wrapper">
                                                <img src={`${process.env.PUBLIC_URL}/images/design/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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
                                                <img src={`${process.env.PUBLIC_URL}/images/design/potential-jobs-details/${data.image}`} alt={data.title} loading="lazy" />
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

export default CoursesDesignPotentialJobs;