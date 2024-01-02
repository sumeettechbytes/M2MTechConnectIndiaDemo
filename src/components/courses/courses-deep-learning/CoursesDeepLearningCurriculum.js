import React from 'react';
import { Element } from 'react-scroll';

const CoursesDeepLearningCurriculum = ({
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
                            <h6 className="mb-0 title">
                                Our comprehensive Deep Learning course covers:
                            </h6>
                            <ul className="mt-4">
                                <li>
                                    Fundamentals of Deep Learning and its AI applications.
                                </li>
                                <li>
                                    Introduction to TensorFlow and Keras, popular Python libraries.
                                </li>
                                <li>
                                    Neural Network Basics: Building, activating, and implementing feedforward neural networks.
                                </li>
                                <li>
                                    Multi-Layer Perceptrons (MLPs) for Classification with softmax activation.
                                </li>
                                <li>
                                    Convolutional Neural Networks (CNNs) for Image Classification with feature extraction.
                                </li>
                                <li>
                                    Recurrent Neural Networks (RNNs) for Time Series Regression and forecasting.
                                </li>
                                <li>
                                    Hyperparameter Tuning, Model Evaluation, and Model Deployment.
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

export default CoursesDeepLearningCurriculum;