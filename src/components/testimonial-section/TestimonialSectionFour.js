import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import TestimonialOne from '../testimonial/TestimonialOne';

const TestimonialSectionFour = ({ GoogleReviews }) => {
    return (
        <div className="eduvibe-testimonial-one edu-testimonial-area edu-section-gap bg-image" ref={GoogleReviews}>
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Google Reviews"
                            title = "What Others Say About Us"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--25">
                    <div className="col-lg-6 col-12">
                        <div className="satisfied-learner">
                            {/* <div className="thumbnail">
                                <img src={`${process.env.PUBLIC_URL}/images/testimonial-section/testimonial-01.jpg`} alt="Education Images" />
                            </div> */}
                            {/* <div className="trophy-content bounce-slide">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/images/testimonial-section/trophy.png`} alt="Trophy Images" />
                                </div>
                                <div className="content">
                                    <h6 className="text">50K+</h6>
                                    <span>Satisfied Learners</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <TestimonialOne item="10" />
                    </div>
                </div>
                {/* <a className="edu-btn" href="https://www.google.com/search?q=m2m+tech&rlz=1C1CHBF_enCA1045CA1045&oq=m2m+tech&aqs=chrome.0.0i355i512j46i175i199i512j0i512l3j69i60l3.3993j0j7&sourceid=chrome&ie=UTF-8#">Get Started<i className="icon-arrow-right-line-right"></i></a> */}

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-13.png`} alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-13-01.png`} alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02-01.png`} alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSectionFour;