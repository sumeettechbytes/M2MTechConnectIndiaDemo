import React from 'react';
import { Element } from 'react-scroll';

const DataAnalyticsCurriculum = ({
    setShowDownloadCurriculumForm
    }) => {
    return (
        <Element
            name="what-we-do-one"
            className="edu-about-area about-style-1 edu-section-gap home-one-cat"
        >
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12 pre-section-title text-center">
                        <span className="color-primary pretitle">Curriculum</span>
                        <h3 className="title">What Learners Will Learn Here?</h3>
                    </div>
                    <div className="col-12 col-md-7 order-2 order-md-1">
                        <div className="row g-5">
                            <ul className="mt-4">
                                <li>
                                    Our Data Analysis & Data Visualization Course provides a comprehensive introduction to the significance of Data Analysis.
                                </li>
                                <li>
                                    Participants will learn essential skills in Python libraries like NumPy and Pandas for Data Manipulation and cleaning.
                                </li>
                                <li>
                                    Participants will explore and discover the principles of Data Visualization, creating basic plots, charts, and dashboards.
                                </li>
                                <li>
                                    Advanced Visualization techniques using Bokeh empower participants to build interactive visualizations and dynamic dashboards, enabling effective data representation and gaining deeper insights.
                                </li>
                            </ul>
                        </div>
                        <div className="read-more-btn">
                            <button className="edu-btn" onClick={() => setShowDownloadCurriculumForm(true)}>Detailed Curriculum</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <img src="/images/courses/undraw_note_list_re_r4u9.svg" alt="curriculum" />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default DataAnalyticsCurriculum;