import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import Slider from 'react-slick';

const BannerOne = ({
  setShowSkillsboostSignUpForm,
  GoogleReviews
}) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    // centerMode: true,
  };
  return (
    <div className="banner-slider">
      <Slider {...settings} className="testimonial-activation edu-slick-button slick-button-center d-none d-md-block">
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <span className="pre-title px-3">Your Path to Data Excellence!</span>
                      <h1 className="title">Cohort based<br></br>E-Learning</h1>
                      <p className="description">Join a cohort and revolutionize your learning experience where collaboration, community and personalization meet!</p>
                      <div className="read-more-btn banner-btns">
                        <Link to="/careers/work-integrated-learning" className="edu-btn btn-secondary">Know More<i className="icon-arrow-right-line-right"></i></Link>
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/collections">Get Started Today<i className="icon-arrow-right-line-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-6 banner-right-content-left-section">
                      <div className="edu-card card-type-6 radius-small">
                        <div className="inner">
                          <div className="thumbnail">
                            <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts">
                              <img className="w-100" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/banner-course_M2M_v2.webp`} alt="Course Meta" />
                            </a>
                            <div className="top-position status-group left-top">
                              <span className="eduvibe-status status-01 bg-primary-color">Data Science, ML & AI</span>
                            </div>
                          </div>
                          <div className="content">
                            <ul className="edu-meta meta-04">
                              <li><i className="icon-file-list-3-line"></i>27 Lessons</li>
                              <li><i className="icon-time-line"></i>1 hour</li>
                            </ul>
                            <h6 className="title">
                              <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts">Introduction to ML & AI concepts</a>
                            </h6>
                            <div className="card-bottom">
                              <p>Have you ever thought about understanding the basic concepts of Machine Learning & AI by doing some simple hands-on activities. In this course, we will focus on explaining the underlying core concepts which is essential to understand ML and AI.</p>
                            </div>
                          </div>
                          <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts" className="edu-btn btn-secondary btn-small">Enroll Now<i className="icon-arrow-right-line-right"></i></a>
                        </div>
                      </div>
                      <div className="work-shop">
                        <div className="inner">
                          <div className="thumbnail">
                            <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/workshop.webp`} alt="Workshop Images" />
                          </div>
                          <div className="content">
                            <div className='content-description'>
                              <h6 className="title">Unlocking Data-Driven Careers!</h6>
                              <p className="time">Join our next info session!</p>
                            </div>
                          </div>
                        </div>
                        <div className='edu-button d-flex flex-row'>
                          {/* <Link to="/datatalent" className="edu-btn btn-secondary btn-small">Know More<i className="icon-arrow-right-line-right"></i></Link> */}
                          <a className="edu-btn btn-secondary btn-small" href="https://m2mtechconnect.eventbrite.com/">Know More</a>
                          {/* <button className="edu-btn btn-secondary-alt btn-small" onClick={() => setShowUserInterestForm(true)}>Join Now<i className="icon-arrow-right-line-right"></i></button> */}
                          <a className="edu-btn btn-secondary-alt btn-small" href="https://form.jotform.com/m2mtech/cohort-sign-up">Join Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-6 d-flex align-items-center google-reviews-container-wrapper">
                      {/* <div className="video-thumbnail eduvibe-hero-one-video">
                        <div className="thumbnail">
                          <img className="large-screen cursor-pointer" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/google_reviews6.webp`} alt="google reviews" onClick={() => GoogleReviews.current.scrollIntoView()} />
                          <img className="mobile-screen cursor-pointer" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/google_reviews7.webp`} alt="google reviews" onClick={() => GoogleReviews.current.scrollIntoView()} />
                        </div>
                      </div> */}
                      <div className="edu-card card-type-6 radius-small google-reviews-container">
                        <div className="inner">
                          <div className="content">
                            <div className='content-description'>
                              <a href="https://www.google.com/maps/place/M2M+Tech+Inc/@49.1857496,-122.8029652,17z/data=!4m8!3m7!1s0x5485d1e799400d07:0x1200c49bbec93847!8m2!3d49.1857461!4d-122.8003903!9m1!1b1!16s%2Fg%2F11j2yf6p7b?entry=ttu">
                                <h6 className="title"><span className="google-reviews-1">G</span><span className="google-reviews-2">o</span><span className="google-reviews-3">o</span><span className="google-reviews-4">g</span><span className="google-reviews-5">l</span><span className="google-reviews-6">e</span> Reviews &nbsp;4.8&nbsp;&nbsp;
                                  <span className="google-reviews-stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M5.4,5.1l2.2-4.3C7.6,0.6,7.8,0.5,8,0.5c0.2,0,0.4,0.1,0.5,0.3l2.2,4.3l4.9,0.7c0.3,0,0.4,0.3,0.5,0.5c0,0.2,0,0.3-0.2,0.4
                                        l-3.5,3.4l0.8,4.7c0.1,0.4-0.4,0.8-0.7,0.6L8,13.2l-4.4,2.3c0,0-0.1,0-0.1,0.1c-0.3,0.1-0.7-0.3-0.6-0.6l0.8-4.7L0.2,6.8
                                        C0.1,6.7,0,6.5,0,6.4c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.4-0.2C0.5,5.8,5.4,5.1,5.4,5.1z M11.8,9.1l2.5-2.4l-3.4-0.5"/>
                                    </svg>
                                  </span>
                                </h6>
                              </a>
                              <a href="https://g.co/kgs/DJiv77">
                                <div className="google-reviews-review-wrapper">
                                  <p className="google-reviews-reviewer"><strong>Adam Elmongy</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>M2M Tech offers great courses on data science and machine learning that are up to date and relevant. I really enjoyed the courses I took and the support from them was great along the way.</p>
                                </div>
                              </a>
                              <a href="https://g.co/kgs/yK9SQZ">
                                <div className="google-reviews-review-wrapper mt--10">
                                  <p className="google-reviews-reviewer"><strong>Kimih Yan</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>One of the best programs I have ever taken! Extremely supportive and encouraging community! Highly Recommend.</p>
                                </div>
                              </a>
                              <a href="https://g.co/kgs/xcKjqu">
                                <div className="google-reviews-review-wrapper mt--10">
                                  <p className="google-reviews-reviewer"><strong>Daniel You</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>I'm so glad I joined this CS program! 🌟 The amount of course material was just right, providing a thorough learning experience. The teaching was crystal clear, and the well-structured modules made learning enjoyable. Communication was on point too - timely and super helpful. Overall, a fantastic program that I'm happy to recommend! 👍👍</p>
                                </div>
                              </a>
                            </div>
                            <button className="edu-btn btn-small mt--10" onClick={() => GoogleReviews.current.scrollIntoView()}>Read More Reviews</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875 banner-two">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content">
                  <div className="inner">
                    <div className="content">
                      {/* <span className="pre-title px-3">Your Path to Data Excellence!</span> */}
                      <h1 className="title">DataTalent</h1>
                      <p className="description">Empowering job-seekers for a data-driven future. Our DataTalent program, developed in collaboration with employers and workforce development experts, empowers job-seekers to swiftly transition into data-driven roles. It's tailored to meet the evolving needs of both employers and job-seekers.</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/programs/datatalent">Know More<i className="icon-arrow-right-line-right"></i></Link>
                        <a className="edu-btn" href="https://form.jotform.com/m2mtech/cohort-sign-up">Jobseekers Login<i className="icon-arrow-right-line-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/datatalent_bullets_v4.png`} alt="illustration" />
                  </div>
                  {/* <div className="col-xl-2 order-xl-3"></div>
                  <div className="order-2 order-xl-3 col-lg-12 col-xl-4 d-flex flex-column align-items-start justify-content-center home-banner banner-right-content">
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Upskilled Professionals</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Workforce Readiness</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Less Hiring Effort</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Networking Events</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Mentorship Opportunities</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Diverse Talent Pipeline</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Fully subsidized</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875 banner-three">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <h1 className="title">SkillsBoost</h1>
                      <p className="description">Accelerate your Data Science career! Unlock industry-aligned certifications with us. Gain practical skills from Certified Experts, propelling you towards excellence in the dynamic world of data. Elevate your expertise and open doors to exciting opportunities. Your journey to success starts here!</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/programs/skillsboost">Know More<i className="icon-arrow-right-line-right"></i></Link>
                        <a className="edu-btn" href="https://form.jotform.com/m2mtech/skillsboost-sign-up">Enroll Now<i className="icon-arrow-right-line-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/skillsboost_bullets_v5.png`} alt="illustration" />
                  </div>
                  {/* <div className="col-xl-2 order-xl-3"></div>
                  <div className="order-2 order-xl-3 col-lg-12 col-xl-4 d-flex flex-column align-items-start justify-content-center home-banner banner-right-content">
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Expert Guidance</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Cloud Subscription</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Get Certified</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Workforce Readiness</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Networking Events</p>
                      </div>
                    </div>
                    <div className="banner-feature mt-4">
                      <div className="icon">
                        <i className="icon-checkbox-circle-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">WIL Opportunities</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 join-our-growing-team-banner bg-imageheight-875">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="col-lg-12 col-xl-6 banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <h2 className="title" style={{"fontSize" : "61px"}}>Join Our Growing Research Programs</h2>
                      <p className="description">Embark on a transformative journey with us! Join our rapidly growing research programs and become part of a vibrant community committed to personal and professional development in Data Science, ML and AI. Unlock new opportunities, gain valuable skills, and thrive in an environment that fosters growth!</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/research">Know More<i className="icon-arrow-right-line-right"></i></Link>
                        <Link className="edu-btn" to="/careers/jobs">Join Now<i className="icon-arrow-right-line-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="col-lg-12 d-none d-md-flex banner-right-content">
                    {/* <div>
                      <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/undraw_sharing_knowledge_03vp.svg`} alt="illustration" />
                    </div> */}
                    <div className="col-xl-2 order-xl-3"></div>
                    <div className="order-2 order-xl-3 col-lg-12 col-xl-4 d-flex flex-column align-items-start justify-content-center home-banner banner-right-content">
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Cutting Edge Research</p>
                        </div>
                      </div>
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Flexible Hours</p>
                        </div>
                      </div>
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Remote Work Opportunities</p>
                        </div>
                      </div>
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Long-Term Career Potential</p>
                        </div>
                      </div>
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Motivated Vibrant Community</p>
                        </div>
                      </div>
                      <div className="banner-feature mt-4">
                        <div className="icon">
                          <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-description">Competitive Compensation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
      </Slider>
      <Slider {...settings} className="testimonial-activation edu-slick-button slick-button-center d-block d-md-none">
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content slider-banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <span className="pre-title px-3">Your Path to Data Excellence!</span>
                      <h1 className="title">Cohort based<br></br>E-Learning</h1>
                      <p className="description">Join a cohort and revolutionize your learning experience where collaboration, community and personalization meet!</p>
                      <div className="read-more-btn banner-btns">
                        <Link to="/careers/work-integrated-learning" className="edu-btn btn-secondary">Know More</Link>
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/collections">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="edu-card card-type-6 radius-small">
                        <div className="inner">
                          <div className="thumbnail">
                            <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts">
                              <img className="w-100" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/banner-course_M2M_v2.webp`} alt="Course Meta" />
                            </a>
                            <div className="top-position status-group left-top">
                              <span className="eduvibe-status status-01 bg-primary-color">Data Science, ML & AI</span>
                            </div>
                          </div>
                          <div className="content">
                            <ul className="edu-meta meta-04">
                              <li><i className="icon-file-list-3-line"></i>27 Lessons</li>
                              <li><i className="icon-time-line"></i>1 hour</li>
                            </ul>
                            <h6 className="title">
                              <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts">Introduction to ML & AI concepts</a>
                            </h6>
                            <div className="card-bottom">
                              <p>Have you ever thought about understanding the basic concepts of Machine Learning & AI by doing some simple hands-on activities. In this course, we will focus on explaining the underlying core concepts which is essential to understand ML and AI.</p>
                            </div>
                          </div>
                          <a href="https://courses.m2mtechconnect.com/courses/introduction-to-ml-ai-concepts" className="edu-btn btn-secondary btn-small">Enroll Now<i className="icon-arrow-right-line-right"></i></a>
                        </div>
                      </div>
                      <div className="work-shop">
                        <div className="inner">
                          <div className="thumbnail">
                            <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/workshop.webp`} alt="Workshop Images" />
                          </div>
                          <div className="content">
                            <div className='content-description'>
                              <h6 className="title">Unlocking Data-Driven Careers For You!</h6>
                            </div>
                          </div>
                        </div>
                        <p className="time">Join our next info session!</p>
                        <div className='edu-button d-flex flex-row'>
                          {/* <Link to="/datatalent" className="edu-btn btn-secondary btn-small">Know More<i className="icon-arrow-right-line-right"></i></Link> */}
                          <a className="edu-btn btn-secondary btn-small" href="https://m2mtechconnect.eventbrite.com/">Know More</a>
                          {/* <button className="edu-btn btn-secondary-alt btn-small" onClick={() => setShowUserInterestForm(true)}>Join Now<i className="icon-arrow-right-line-right"></i></button> */}
                          <a className="edu-btn btn-secondary-alt btn-small" href="https://form.jotform.com/m2mtech/cohort-sign-up">Join Now</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-6 d-flex align-items-center google-reviews-container-wrapper">
                      {/* <div className="video-thumbnail eduvibe-hero-one-video">
                        <div className="thumbnail">
                          <img className="large-screen cursor-pointer" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/google_reviews6.webp`} alt="google reviews" onClick={() => GoogleReviews.current.scrollIntoView()} />
                          <img className="mobile-screen cursor-pointer" src={`${process.env.PUBLIC_URL}/images/banner/banner-01/google_reviews7.webp`} alt="google reviews" onClick={() => GoogleReviews.current.scrollIntoView()} />
                        </div>
                      </div> */}
                      <div className="edu-card card-type-6 radius-small google-reviews-container">
                        <div className="inner">
                          <div className="content">
                            <div className='content-description'>
                              <a href="https://www.google.com/maps/place/M2M+Tech+Inc/@49.1857496,-122.8029652,17z/data=!4m8!3m7!1s0x5485d1e799400d07:0x1200c49bbec93847!8m2!3d49.1857461!4d-122.8003903!9m1!1b1!16s%2Fg%2F11j2yf6p7b?entry=ttu">
                                <h6 className="title"><span className="google-reviews-1">G</span><span className="google-reviews-2">o</span><span className="google-reviews-3">o</span><span className="google-reviews-4">g</span><span className="google-reviews-5">l</span><span className="google-reviews-6">e</span> Reviews &nbsp;4.8&nbsp;&nbsp;
                                  <span className="google-reviews-stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M5.4,5.1l2.2-4.3C7.6,0.6,7.8,0.5,8,0.5c0.2,0,0.4,0.1,0.5,0.3l2.2,4.3l4.9,0.7c0.3,0,0.4,0.3,0.5,0.5c0,0.2,0,0.3-0.2,0.4
                                        l-3.5,3.4l0.8,4.7c0.1,0.4-0.4,0.8-0.7,0.6L8,13.2l-4.4,2.3c0,0-0.1,0-0.1,0.1c-0.3,0.1-0.7-0.3-0.6-0.6l0.8-4.7L0.2,6.8
                                        C0.1,6.7,0,6.5,0,6.4c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.4-0.2C0.5,5.8,5.4,5.1,5.4,5.1z M11.8,9.1l2.5-2.4l-3.4-0.5"/>
                                    </svg>
                                  </span>
                                </h6>
                              </a>
                              <a href="https://g.co/kgs/DJiv77">
                                <div className="google-reviews-review-wrapper">
                                  <p className="google-reviews-reviewer"><strong>Adam Elmongy</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>M2M Tech offers great courses on data science and machine learning that are up to date and relevant. I really enjoyed the courses I took and the support from them was great along the way.</p>
                                </div>
                              </a>
                              <a href="https://g.co/kgs/yK9SQZ">
                                <div className="google-reviews-review-wrapper mt--10">
                                  <p className="google-reviews-reviewer"><strong>Kimih Yan</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>One of the best programs I have ever taken! Extremely supportive and encouraging community! Highly Recommend.</p>
                                </div>
                              </a>
                              <a href="https://g.co/kgs/xcKjqu">
                                <div className="google-reviews-review-wrapper mt--10">
                                  <p className="google-reviews-reviewer"><strong>Daniel You</strong>&nbsp;
                                    <span className="google-reviews-stars">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                    </span>
                                  </p>
                                  <p>I'm so glad I joined this CS program! 🌟 The amount of course material was just right, providing a thorough learning experience. The teaching was crystal clear, and the well-structured modules made learning enjoyable. Communication was on point too - timely and super helpful. Overall, a fantastic program that I'm happy to recommend! 👍👍</p>
                                </div>
                              </a>
                            </div>
                            <button className="edu-btn btn-small mt--10" onClick={() => GoogleReviews.current.scrollIntoView()}>Read More Reviews</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875 banner-two-mobile">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content slider-banner-left-content">
                  <div className="inner">
                    <div className="content">
                      {/* <span className="pre-title px-3">Your Path to Data Excellence!</span> */}
                      <h1 className="title">DataTalent</h1>
                      <p className="description">Empowering job-seekers for a data-driven future. Our DataTalent program, developed in collaboration with employers and workforce development experts, empowers job-seekers to swiftly transition into data-driven roles. It's tailored to meet the evolving needs of both employers and job-seekers.</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/programs/datatalent">Know More</Link>
                      <a className="edu-btn" href="https://form.jotform.com/m2mtech/cohort-sign-up">Jobseekers Login</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div className="banner-right-content-wrapper">
                    <h4 className="text-center">Funded By</h4>
                    <div className="row align-items-center">
                      <a className="d-flex justify-content-center col-lg-6" href="https://paletteskills.org/upskill-canada"><img src={`${process.env.PUBLIC_URL}/images/logo/upskill_canada_logo_v3.png`} width="75%" alt="logo" loading="lazy" /></a>
                      <a className="d-flex justify-content-center col-lg-6 py-4" href="https://www.canada.ca/en.html"><img src={`${process.env.PUBLIC_URL}/images/logo/govt_of_canada.svg`} width="50%" alt="logo" loading="lazy" /></a>
                    </div>
                    <h4 className="text-center mt--40">In Partnership With</h4>
                    <div className="row align-items-center">
                      <a className="d-flex justify-content-center col-lg-6 py-3" href="https://www.riipen.com"><img src={`${process.env.PUBLIC_URL}/images/logo/Riipen_logo.svg`} width="50%" height="auto" alt="logo" loading="lazy" /></a>
                      <a className="d-flex justify-content-center col-lg-6" href="https://hearherstories.com/diwo-lumen-datatalent"><img src={`${process.env.PUBLIC_URL}/images/logo/Diwo_logo_v2.png`} width="50%" alt="logo" loading="lazy" /></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875 banner-three-mobile">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content slider-banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <h1 className="title">SkillsBoost</h1>
                      <p className="description">Accelerate your Data Science career! Unlock industry-aligned certifications with us. Gain practical skills from Certified Experts, propelling you towards excellence in the dynamic world of data. Elevate your expertise and open doors to exciting opportunities. Your journey to success starts here!</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/programs/skillsboost">Know More</Link>
                        <a className="edu-btn" href="https://form.jotform.com/m2mtech/skillsboost-sign-up">Enroll Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2 order-xl-2 col-lg-12 col-xl-6 d-none d-md-flex banner-right-content">
                  <div className="banner-right-content-wrapper">
                    <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/skillsboost_banner_right_v2.png`} alt="illustration" />
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 join-our-growing-team-banner bg-imageheight-875">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content slider-banner-left-content">
                  <div className="inner">
                    <div className="content">
                      <h1 className="title">Join Our Growing Research Program</h1>
                      <p className="description">Embark on a transformative journey with us! Join our rapidly growing research programs and become part of a vibrant community committed to personal and professional development in Data Science, ML and AI. Unlock new opportunities, gain valuable skills, and thrive in an environment that fosters growth!</p>
                      <div className="read-more-btn banner-btns">
                        <Link className="edu-btn btn-secondary" to="/research">Know More</Link>
                        <Link className="edu-btn" to="/careers/jobs">Join Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider-area carousel-area banner-style-1 bg-imageheight-875">
            <div className="container eduvibe-animated-shape d-flex align-items-center h-100">
              <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6 banner-left-content slider-banner-left-content">
                  <div className="inner">
                    <div className="content google-review-content-wrapper">
                      <div className='google-review-content-description'>
                        <a href="https://www.google.com/maps/place/M2M+Tech+Inc/@49.1857496,-122.8029652,17z/data=!4m8!3m7!1s0x5485d1e799400d07:0x1200c49bbec93847!8m2!3d49.1857461!4d-122.8003903!9m1!1b1!16s%2Fg%2F11j2yf6p7b?entry=ttu">
                          <h6 className="title"><span className="google-reviews-1">G</span><span className="google-reviews-2">o</span><span className="google-reviews-3">o</span><span className="google-reviews-4">g</span><span className="google-reviews-5">l</span><span className="google-reviews-6">e</span> Reviews &nbsp;4.8&nbsp;&nbsp;
                            <span className="google-reviews-stars">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.4,5.1l2.2-4.3C7.6,0.6,7.8,0.5,8,0.5c0.2,0,0.4,0.1,0.5,0.3l2.2,4.3l4.9,0.7c0.3,0,0.4,0.3,0.5,0.5c0,0.2,0,0.3-0.2,0.4
                                  l-3.5,3.4l0.8,4.7c0.1,0.4-0.4,0.8-0.7,0.6L8,13.2l-4.4,2.3c0,0-0.1,0-0.1,0.1c-0.3,0.1-0.7-0.3-0.6-0.6l0.8-4.7L0.2,6.8
                                  C0.1,6.7,0,6.5,0,6.4c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.4-0.2C0.5,5.8,5.4,5.1,5.4,5.1z M11.8,9.1l2.5-2.4l-3.4-0.5"/>
                              </svg>
                            </span>
                          </h6>
                        </a>
                        <a href="https://g.co/kgs/DJiv77">
                          <div className="google-reviews-review-wrapper">
                            <p className="google-reviews-reviewer"><strong>Adam Elmongy</strong>&nbsp;
                              <span className="google-reviews-stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                              </span>
                            </p>
                            <p>M2M Tech offers great courses on data science and machine learning that are up to date and relevant. I really enjoyed the courses I took and the support from them was great along the way.</p>
                          </div>
                        </a>
                        <a href="https://g.co/kgs/yK9SQZ">
                          <div className="google-reviews-review-wrapper mt--10">
                            <p className="google-reviews-reviewer"><strong>Kimih Yan</strong>&nbsp;
                              <span className="google-reviews-stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                              </span>
                            </p>
                            <p>One of the best programs I have ever taken! Extremely supportive and encouraging community! Highly Recommend.</p>
                          </div>
                        </a>
                        <a href="https://g.co/kgs/xcKjqu">
                          <div className="google-reviews-review-wrapper mt--10">
                            <p className="google-reviews-reviewer"><strong>Daniel You</strong>&nbsp;
                              <span className="google-reviews-stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                              </span>
                            </p>
                            <p>I'm so glad I joined this CS program! 🌟 The amount of course material was just right, providing a thorough learning experience. The teaching was crystal clear, and the well-structured modules made learning enjoyable. Communication was on point too - timely and super helpful. Overall, a fantastic program that I'm happy to recommend! 👍👍</p>
                          </div>
                        </a>
                        <button className="edu-btn btn-small mt--10" onClick={() => GoogleReviews.current.scrollIntoView()}>Read More Reviews</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape shape-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-01.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-2">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-02.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-3">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-4">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-5">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05.png`} alt="Shape Thumb" />
                </div>
                <div className="shape shape-6">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-05-05.png`} alt="Shape Thumb" />
                </div>
              </div>

              <div className="shape-round d-none d-xl-block">
                <img src={`${process.env.PUBLIC_URL}/images/banner/banner-01/shape-27.png`} alt="Shape Images" />
              </div>

            </div>
          </div>
        </div>
      </Slider>

      <div className="scroll-down-btn d-flex justify-content-center">
        <ScrollTo
          className="round-btn"
          to="programs"
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
export default BannerOne;