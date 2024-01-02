import React from 'react';
import { Link as ScrollTo } from 'react-scroll';

const StudentsSpotlightBanner = ({
    setShowUserInterestForm,
    download
    }) => {
    return (
        <div className="slider-area banner-style-1 banner-style-students-spotlight bg-image height-640 d-flex align-items-center">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 row--40 align-items-center">
                    <div className="order-1 order-xl-1 col-lg-12 col-xl-6">
                        <div className="banner-left-content">
                            <div className="inner">
                                <div className="content">
                                    {/* <span className="pre-title">&nbsp;Learn #code #design skills</span> */}
                                    <h1 className="title">STEM Student Spotlight</h1>
                                    <p className="description">Our mission is to connect with STEM student clubs across Canada and highlight the amazing student lead initiatives and the positive impact they make!</p>
                                    <div className="read-more-btn">
                                        <a className="edu-btn" href="https://form.jotform.com/m2mtech/wil-programs-sign-up">JOIN HERE</a>
                                        {/* <a className="edu-btn ml--20" href={download}>Download<i className="icon-book-line"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-flex align-items-start justify-content-center banner-right-content">

                        <div className="video-thumbnail eduvibe-hero-one-video">
                            <div className="thumbnail">
                                <img className="large-screen" src={`${process.env.PUBLIC_URL}/images/students-spotlight/engage_empower_educate_graphic_v3.png`} alt="illustration" />
                                <img className="mobile-screen" src={`${process.env.PUBLIC_URL}/images/students-spotlight/engage_empower_educate_graphic_v3.png`} alt="illustration" />
                            </div>
                        </div>
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

            <div className="scroll-down-btn">
                <ScrollTo
                    className="round-btn"
                    to="achievements"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    <i className="icon-arrow-down-s-line"></i>
                </ScrollTo>
            </div>
            
        </div>

    )
}
export default StudentsSpotlightBanner;