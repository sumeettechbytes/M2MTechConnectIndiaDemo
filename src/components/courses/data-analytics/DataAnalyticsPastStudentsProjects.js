import React from 'react';
import { Element } from 'react-scroll';
import DataAnalyticsPastStudentsProjectsCarousel from './past-students-projects/DataAnalyticsPastStudentsProjectsCarousel';

const DataAnalyticsPastStudentsProjects = () => {
    return (
        <Element
            name="what-we-do-one"
            className="edu-about-area edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12">
                        <div className="inner mt-md-16">
                            <div className="col-lg-12 pre-section-title text-center">
                                <span className="color-primary pretitle">What Our Students Learned</span>
                                <h3 className="title">Past Students Projects</h3>
                            </div>

                            <DataAnalyticsPastStudentsProjectsCarousel />
                            
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

export default DataAnalyticsPastStudentsProjects;