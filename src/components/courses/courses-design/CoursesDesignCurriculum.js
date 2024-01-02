import React from 'react';
import { Element } from 'react-scroll';

const CoursesDesignCurriculum = ({
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
                                Our creative Design Course covers:
                            </h5>
                            <ul className="mt-4">
                                <li>
                                    Introduction to design principles, visual composition, color theory, and typography.
                                </li>
                                <li>
                                    3D Printing design using TinkerCAD for creating 3D models and printable objects.
                                </li>
                                <li>
                                    VR design with CoSpaces for building immersive virtual environments.
                                </li>
                                <li>
                                    AR design using SparkAR to create interactive experiences for social media.
                                </li>
                                <li>
                                    Infographic design using Canva for visually appealing data visualization.
                                </li>
                                <li>
                                    Animation video creation with Canva/Animaker for engaging marketing or educational videos.
                                </li>
                                <li>
                                    Website creation for business using website builders and UX principles to showcase products and services.
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

export default CoursesDesignCurriculum;