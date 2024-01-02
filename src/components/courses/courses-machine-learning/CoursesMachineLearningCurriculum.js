import React from 'react';
import { Element } from 'react-scroll';

const CoursesMachineLearningCurriculum = ({
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
                                Our comprehensive Machine Learning course covers:
                            </h5>
                            <ul className="mt-4">
                                <li>
                                    Introduction to ML: Basics and applications, supervised, unsupervised, and reinforcement learning, and setting up the ML environment.
                                </li>
                                <li>
                                    Reinforcement Learning: Applications, Markov Decision Process (MDP), Q-learning, and optimization for processes and resource allocation.
                                </li>
                                <li>
                                    Supervised Learning: Regression and classification techniques for predictive analysis and decision support.
                                </li>
                                <li>
                                    Unsupervised Learning: Clustering, dimensionality reduction, and outlier detection.
                                </li>
                                <li>
                                    Decision Trees: Understanding, building, and pruning decision trees for effective modeling.
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

export default CoursesMachineLearningCurriculum;