import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const items = [
    {
        title: 'Data Science - Data Analysis & Data Visualization courses',
        info: 'In this course bundle we will introduce Data Science concepts with simple hands on projects. We cover Data Analysis and Data Visualization concepts with simple hands on projects.',
        numberOfCourses: '12 Courses',
        modeOfCourses: 'Virtual Self-paced',
        image: 'data-science-data-analysis-and-data-visualization-courses.webp',
        bundleLink: 'https://courses.m2mtechconnect.com/bundles/data-science-group-courses'
    },
    {
        title: 'Machine Learning & AI - Supervised Learning',
        info: "In this course bundle we will go through Supervised Machine Learning and it's types Regression and Classification related concepts with simple hands on projects.",
        numberOfCourses: '11',
        modeOfCourses: 'Virtual Self-paced',
        image: 'data-science-data-analysis-and-data-visualization-courses.webp',
        bundleLink: 'https://courses.m2mtechconnect.com/bundles/machine-learning-ai-part-2'
    },
    {
        title: 'ML & AI - Neural Networks',
        info: "In this course bundle we will go through Neural Network concepts and it's applications with simple hands on projects.",
        numberOfCourses: '10',
        modeOfCourses: 'Virtual Self-paced',
        image: 'ml-and-ai-neural-networks.webp',
        bundleLink: 'https://courses.m2mtechconnect.com/bundles/ml-ai-neural-networks'
    },
];

const CategoryOne = ( { wrapperClass, styleClass, buttonStatus } ) => {
    return (
        <>
            <div className={ `row ${ wrapperClass || 'g-5 mt--25' }` }>
                { items.map( ( data , i ) => (
                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className={ `col-lg-4 col-md-6 col-sm-6 col-12 ${ styleClass ? styleClass : '' }` }
                        animateOnce={ true }
                        key={ i }
                    >
                        {/* <div className="service-card service-card-1 radius-small">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href={ data.link }>
                                        <img src={`${process.env.PUBLIC_URL}/images/category/category-01/${ data.image }`} alt="Category Thumb" loading="lazy" />
                                    </a>
                                </div>
                                <div className="content">
                                    <span className="course-total">{ data.numberOfCourses }</span>
                                    <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                    <p className="description">{ data.info }</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="service-card program-service-card service-card-1 radius-small">
                            <div className="inner">
                                <div className="thumbnail">
                                <a href={ data.bundleLink }>
                                    <img src={`${process.env.PUBLIC_URL}/images/category/category-01/${ data.image }`} alt="Category Thumb" loading="lazy" />
                                </a>
                                </div>
                                <div className="content program-info">
                                <div className="program-info-content d-flex justify-content-between">
                                    <span className="course-total"><i className="icon-Bag"></i> { data.numberOfCourses } courses</span>
                                    <span className="course-total"><i className="icon-map-pin-line"></i> { data.modeOfCourses }</span>
                                </div>
                                <h6 className="title mt-3"><a href={ data.bundleLink }>{ data.title }</a></h6>
                                <p className="description">{ data.info }</p>
                                <div className="d-flex justify-content-center flex-wrap mt-3">
                                    <a className="edu-btn btn-secondary mt-3" href={data.bundleLink}>Get Bundle<i className="icon-arrow-right-line-right"></i></a>
                                    {/* <Link className="edu-btn btn-bg-alt mt-3" to={ data.link }>Find Out More<i className="icon-arrow-right-line-right"></i></Link> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ) ) }
            </div>
            { buttonStatus !== 'disable' &&
                <div className="row text-center mt--60">
                    <div className="col-lg-12">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            className="load-more-btn"
                            animateOnce={ true }
                        >
                            <Link className="edu-btn" to="/courses">View All Bundles<i
                            className="icon-arrow-right-line-right"></i></Link>
                        </ScrollAnimation>
                    </div>
                </div>
            }
    
        </>
    )
}

export default CategoryOne;