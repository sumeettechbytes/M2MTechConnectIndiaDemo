import React from 'react';
import { Element } from 'react-scroll';
import AimindsSectionTitle from './AimindsSectionTitle';

const AimindsWhyChooseUs = ({
  setShowAimindsSignUpForm
}) => {
  return (
    <>
      <Element
        name="WhyChooseUs"
        className="home-one-programs service-wrapper-1 about-style-1 edu-section-gap"
      >
        <div className="edu-about-area container about-feature-list eduvibe-animated-shape">
          <div className="row align-items-center mt--40">
            <div className="col-lg-12">
              <AimindsSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Mentorship Engagement"
              />
            </div>
          </div>
          <div className="row g-5 mt--25">
            <div className="col-lg-5 align-self-center">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/aiminds/undraw_instant_support_re_s7un.svg`} alt="decoration" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 about-feature-list">
              <div className="inner">
                <h5 className="text-left mb-0 mt-4">Regular Interaction</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Engage with your mentee through regular one-on-one meetings, virtual discussions, or collaborative projects within the realm of Data Science, Machine Learning, or AI. Share insights, strategies, and real-world applications to foster professional growth in the rapidly evolving tech landscape.</p>
                  </div>
                </div>                
                <h5 className="text-left mb-0 mt-4">Compensation</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">As a token of appreciation, mentors receive compensation for their time and specialized expertise. Transparent compensation models ensure a fair and rewarding experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt--80 col-lg-12">
              <AimindsSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Guest Lectures"
              />
            </div>
            <div className="col-lg-5 order-lg-2 align-self-center">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/aiminds/undraw_professor_re_mj1s.svg`} alt="decoration" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1 about-feature-list">
              <div className="inner">
                <h5 className="text-left mb-0 mt-4">Topic Selection</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Choose a topic of expertise within Data Science, Machine Learning, or AI that you'd like to share with our community. Topics can range from industry trends and best practices to hands-on demonstrations of innovative technologies.</p>
                  </div>
                </div>                
                <h5 className="text-left mb-0 mt-4">Interactive Sessions</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Deliver engaging guest lectures through virtual platforms. Participants have the opportunity to interact, ask questions, and gain valuable insights directly from industry experts.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Recognition</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Guest lecturers receive compensation for their contributions to the program. Showcase your expertise to a diverse audience and leave a lasting impact on aspiring professionals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 order-3">
              <div className="data-talent-riipen mt--60">
                {/* <div className="data-talent-image-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/images/sponsors/riipen+m2m_logo.svg`} alt="riipen logo" />
                </div> */}
                <h4 className="text-center">Register for Emerging Tech Collaborations!</h4>
                <p>
                  Ready to make a difference in the emerging tech landscape? Join our community of mentors and guest lecturers. Contribute your expertise, whether you hold a doctorate or industry certifications like Microsoft Azure AI, AWS, or Google, and inspire the next wave of tech innovators in Data Science, Machine Learning, and AI.
                </p>
                <div className="data-talent-cta mt--40">
                  <a className="edu-btn" href="https://form.jotform.com/m2mtech/aiminds">Register Now</a>
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
      </Element>
    </>
  )
}

export default AimindsWhyChooseUs;