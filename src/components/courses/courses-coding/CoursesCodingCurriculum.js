import React from 'react';
import { Element } from 'react-scroll';

const CoursesCodingCurriculum = ({
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
                            <h5 className="mb-0">
                                Our comprehensive Python-based Coding Course covers:
                            </h5>
                            <ul className="mt-4">
                                <li>
                                    Introduction to programming and No Code tools for easy coding exploration.
                                </li>
                                <li>
                                    Basic Python programming, including syntax, data types, loops, and conditional statements.
                                </li>
                                <li>
                                    Introduction to Integrated Development Environments (IDEs) like Visual Studio Code (VSCode) for professional coding.
                                </li>
                                <li>
                                    Functions, modules, and packages in Python, along with data structures, algorithms, and Object-Oriented Programming (OOP) principles for building versatile and efficient Python programs.
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

export default CoursesCodingCurriculum;