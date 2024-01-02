import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        id: 1,
        title: 'DataTalent',
        info: 'The DataTalent program offers a comprehensive technical upskilling initiative that combines employer-led work-integrated learning projects, professional development prospects, and industry exposure.',
        numberOfCourses: '16 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Data Science',
        image: 'project-details/data-analyst_thumbnail.webp',
        link: '/programs/datatalent',
        form: 'datatalent'
    },
    {
        id: 2,
        title: 'SkillsBoost',
        info: 'Unlock the future of technology with our comprehensive program designed to help participants gain industry-aligned certifications that are sought after in Data Science, ML, and AI.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Data Science, ML and AI',
        image: 'project-details/skillsboost_v3_thumbnail.webp',
        link: '/programs/skillsboost',
        form: 'skillsboost'
    },
    {
        id: 3,
        title: 'Supply Chain Optimization',
        info: 'The goal of this project is to create an efficient supply chain optimization system using Python libraries such as NumPy and Pandas.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Ecommerce',
        image: 'project-details/supply-chain-optimization_thumbnail.webp',
        link: '/careers/work-integrated-learning/supply-chain-optimization',
        form: 'wil'
    },
    {
        id: 4,
        title: 'Business Intelligence Data Visualization Project',
        info: 'The goal of this project is to identify patterns and trends in the available dataset.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Business Intelligence',
        image: 'project-details/business-intelligence-data-visualization-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/business-intelligence-data-visualization-project',
        form: 'wil'
    },
    {
        id: 5,
        title: 'Clean Energy Management in Smart Grids',
        info: 'The goal of this project is to create a clean energy management system in smart grids using reinforcement learning.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'CleanTech',
        image: 'project-details/clean-energy-management-in-smart-grids_thumbnail.webp',
        link: '/careers/work-integrated-learning/clean-energy-management-in-smart-grids',
        form: 'wil'
    },
    {
        id: 6,
        title: 'AiMinds',
        info: 'Foster collaboration in the fields of Data Science, ML, and AI as a mentor, share your insights through guest lectures, or both.',
        numberOfCourses: 'Flexible',
        modeOfCourses: 'Anywhere',
        category: 'Data Science, ML and AI',
        image: 'project-details/guest-lecture_thumbnail.webp',
        link: '/programs/aiminds',
        form: 'aiminds'
    },
]

const HomeOnePrograms = ({
    setShowUserInterestForm,
    setShowSkillsboostSignUpForm
    }) => {
    return (
        <>
            <div name="programs" className="home-one-programs edu-service-area service-wrapper-1 edu-section-gap bg-image" id="ProgramshowCase">
                <div className="container eduvibe-animated-shape">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                classes = "text-center"
                                slogan = "What We Do"
                                title = "Our Programs"
                            />
                        </div>
                    </div>

                    <div className="row g-5 mt--25">
                        { items.map( ( data , i ) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="col-lg-6 col-md-6 col-sm-6 col-12"
                                animateOnce={ true }
                                key={ i }
                            >
                                <div className="service-card program-service-card service-card-1 radius-small">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href={ data.link }>
                                                <img src={`${process.env.PUBLIC_URL}/images/${ data.image }`} alt="Category Thumb" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="content program-info">
                                            <div className="program-info-content d-flex justify-content-between">
                                                <span className="course-total"><i className="icon-time-line"></i> { data.numberOfCourses }</span>
                                                <span className="course-total"><i className="icon-presentation"></i> { data.category }</span>
                                                {/* <span className="course-total"><i className="icon-map-pin-line"></i> { data.modeOfCourses }</span> */}
                                            </div>
                                            <h6 className="title mt-3"><a href={ data.link }>{ data.title }</a></h6>
                                            <p className="description">{ data.info }</p>
                                            {/* <p className="description">{ data.info.slice(0, 340) + "..." }</p> */}
                                            <div className="d-flex justify-content-between flex-wrap mt-3">
                                                {data.form ==="skillsboost" ? <a className="edu-btn btn-secondary mt-3" href="https://form.jotform.com/m2mtech/skillsboost-sign-up">Register Now<i className="icon-arrow-right-line-right"></i></a> :
                                                data.form === "aiminds" ? <a className="edu-btn btn-secondary mt-3" href="https://form.jotform.com/m2mtech/aiminds">Register Now<i className="icon-arrow-right-line-right"></i></a> :
                                                data.form === "wil" ? <a className="edu-btn btn-secondary mt-3" href="https://form.jotform.com/m2mtech/wil-programs-sign-up">Register Now<i className="icon-arrow-right-line-right"></i></a> :
                                                data.form === "datatalent" ? <a className="edu-btn btn-secondary mt-3" href="https://form.jotform.com/m2mtech/cohort-sign-up">Jobseekers login<i className="icon-arrow-right-line-right"></i></a> :
                                                <span></span>}
                                                <Link className="edu-btn btn-bg-alt mt-3" to={ data.link }>Find Out More<i className="icon-arrow-right-line-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ) ) }
                    </div>
                    
                    <div className="row text-center mt--60">
                        <div className="col-lg-12">
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="load-more-btn"
                                animateOnce={ true }
                            >
                                <Link className="edu-btn" to="/careers/work-integrated-learning">All Programs<i
                                className="icon-arrow-right-line-right"></i></Link>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-02.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-01.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-08.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeOnePrograms;