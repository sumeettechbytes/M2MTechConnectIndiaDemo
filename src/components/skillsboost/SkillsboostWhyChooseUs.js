import React from 'react';
import { Element } from 'react-scroll';
import SkillsboostSectionTitle from './SkillsboostSectionTitle';

const SkillsboostWhyChooseUs = ({
  setShowSkillsboostSignUpForm
}) => {
  return (
    <>
      <Element
        name="WhyChooseUs"
        className="home-one-programs about-style-1 data-talent-eligibility-section edu-section-gap"
      >
        <div className="container inner about-feature-list">
          <div className="row g-5">
            <div className="col-lg-12">
              <SkillsboostSectionTitle
                classes = "text-center"
                title = "Why Choose Us?"
              />
            </div>
            <div className="courses-description-content mt--40">
              <p>Unlock the future of technology with our comprehensive program designed to help participants gain industry-aligned certifications that are sought after in Data Science, ML, and AI.</p>
            </div>
            {/* <div>
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
            </div> */}
            {/* <img src={`${process.env.PUBLIC_URL}/images/data-talent/Powered-by-all-partners.png`} alt="logos" /> */}
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-ribbon"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Unlock Data Science, AI Career Certifications</em></h6>
                <p className="feature-description">Comprehensive Courses: Access to video tutorials to help you prepare for the certification exam. Certification Cost Covered: We've got you covered! Upon successfully passing the exam and providing the invoice, we reimburse the certification cost of $100 USD.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-share-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Cloud AI Resource Subscription</em></h6>
                <p className="feature-description"><strong>Hands-On Practice</strong>: Practice makes perfect! Benefit from a Cloud AI resource subscription for exercising your skills with practical exercises. We cover the cost, offering you a dedicated learning environment.<br></br>
                <strong>3-Month Access</strong>: Enjoy access to the resource subscription for a period of three months or upto 150 CAD (whichever comes first), allowing you to deepen your understanding and refine your skills.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-student-read"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Work Integrated Learning Opportunities</em></h6>
                <p className="feature-description"><strong>Continuous Support</strong>: Stay informed about relevant Work Integrated Learning (WIL) opportunities. We provide regular updates on paid opportunities for High School students, University students, Recent Grads, and Professionals.</p>
              </div>
            </div>
          </div>
            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-07.png`} alt="Shape Thumb" loading="lazy" />
            </div>
        </div>
      </Element>
      <Element
        name="HowToGetStarted"
        className="about-style-1 edu-section-gap service-wrapper-1"
      >
        <div className="edu-about-area">
          <div className="container about-feature-list eduvibe-animated-shape">
            <div className="col-lg-12">
              <SkillsboostSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "How To Get Started"
              />
            </div>
            <div className="container">
              <div className="row g-5 align-items-center mt--40">
                {/* <div className="col-lg-12 courses-description-content">
                  <p className="employer-description">Our upskilling program focusses on gaining hands-on Emerging Tech skills in Artificial Intelligence that will support developing skills related to Big Data and Algorithm Design which is requested by Employers in Digital Technology sectors. Participants will develop proficiency in utilizing popular Data Science libraries and frameworks including NumPy, Pandas, scikit-learn, TensorFlow and Keras.</p>
                </div> */}
                <div className="col-lg-7 order-2 order-lg-1">
                  <div className="inner">
                    <h5 className="text-left mb-0 mt-4">Enroll</h5>
                    <div className="our-feature mt-4">
                      <div className="icon">
                        <i className="icon-book-mark-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Sign up for the SkillsBoost program to embark on your journey to becoming a certified Cloud AI professional.</p>
                      </div>
                    </div>
                    <h5 className="text-left mb-0 mt-4">Learn and Practice</h5>
                    <div className="our-feature mt-4">
                      <div className="icon">
                        <i className="icon-book-mark-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Dive into our comprehensive courses and make the most of your Cloud AI resource subscription to gain practical experience.</p>
                      </div>
                    </div>
                    <h5 className="text-left mb-0 mt-4">Certify</h5>
                    <div className="our-feature mt-4">
                      <div className="icon">
                        <i className="icon-book-mark-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Prepare for the certification exam and take the next step in your career by achieving Cloud AI certification.</p>
                      </div>
                    </div>
                    <h5 className="text-left mb-0 mt-4">Explore Opportunities</h5>
                    <div className="our-feature mt-4">
                      <div className="icon">
                        <i className="icon-book-mark-fill"></i>
                      </div>
                      <div className="feature-content">
                        <p className="feature-description">Stay connected with us for updates on paid WIL opportunities tailored to your skill level and career goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                    <img className="image-1" src={`${process.env.PUBLIC_URL}/images/skillsboost/undraw_fill_form_re_cwyf.svg`} alt="decoration" loading="lazy" />
                </div>
              </div>
            </div>
            <p className="skillsboost-cta-note mt--40">Unlock a world of opportunities with SkillsBoost. Enroll now and elevate your career in Information and Communication Technology!</p>
            <div className="read-more-btn mt--40">
              <a className="edu-btn" href="https://form.jotform.com/m2mtech/skillsboost-sign-up">Enroll Now</a>
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
        </div>
      </Element>
    </>
  )
}

export default SkillsboostWhyChooseUs;