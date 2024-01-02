import React from 'react';
import { Element } from 'react-scroll';
import DataTalentSectionTitle from './DataTalentSectionTitle';
import { Link } from 'react-router-dom';

const DataTalentDescription = ({
  setShowEmployerRegisterForm,
  setShowUserInterestForm
}) => {
  return (
    <>
      <Element
        name="introduction"
        className="home-one-programs data-talent-description-content service-wrapper-1 style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container eduvibe-animated-shape">
          <div className="row g-5">
            <div className="col-lg-12">
              <DataTalentSectionTitle
                classes = "text-center"
                title = "Expand your Talent Pipeline with Skilled Data Professionals"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <img src={`${process.env.PUBLIC_URL}/images/sponsors/riipen+m2m_logo.svg`} alt="Riipen and M2M logo" />
            </div>
            <div className="col-lg-7 mt--40 data-talent-description">
              <p>The DataTalent program offers Canadian employers the opportunity to connect with outstanding data professionals through fully subsidized internships and projects. This engagement not only benefits employers but also plays a role in fostering a resilient workforce. This collaborative model, delivered in partnership with Riipen, has demonstrated its effectiveness in helping employers overcome barriers to hiring new talent, tackling immediate business challenges, expanding their capabilities, and enhancing their brand presence.</p>
            </div>
          </div>
          <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-1">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-01.png`} alt="Shape Thumb" loading="lazy" />
            </div>
            <div className="shape-image shape-image-2">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-08.png`} alt="Shape Thumb" loading="lazy" />
            </div>
            <div className="shape-image shape-image-4">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-02.png`} alt="Shape Thumb" loading="lazy" />
            </div>
          </div>
        </div>
        
      </Element>
      <div className="edu-about-area about-style-1 edu-section-gap">
        <div className="container inner about-feature-list">
          <div className="row">
            <div className="col-lg-12">
              <DataTalentSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "How does the Program Work?"
              />
            </div>
          </div>
          <div className="row mt--40 justify-content-center">
            <div className="for-employers col-lg-6 mt--40">
              <h4>For Employers</h4>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-2-line_tie"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Address your data-related needs and challenges</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-2-line_tie"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Post Your Project</em></h6> */}
                  <p className="feature-description">Collaborate with diverse data professionals to gain access to fresh ideas and expertise through fully-subsidized projects and internships</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-2-line_tie"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Access Our Talent Pool</em></h6> */}
                  <p className="feature-description">Develop your talent pipeline with highly skilled professionals</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-2-line_tie"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Immediate Impact</em></h6> */}
                  <p className="feature-description">Grow your capacity while we cover the cost of the project</p>
                </div>
              </div>
              {/* <button className="edu-btn mt--20" onClick={() => setShowEmployerRegisterForm(true)}>Count Me In</button> */}
              <a className="edu-btn mt--20" href="https://form.jotform.com/m2mtech/employer-register">Count Me In</a>
            </div>
            <div className="for-job-seekers col-lg-6 mt--40">
              <h4>For Job-Seekers</h4>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-line"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Participate in a subsidized technical upskilling program with industry-standard</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-line"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Access professional development and career readiness training</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-line"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Strengthen Your Portfolio with a Paid Short-Term Project</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-user-line"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Participate in mentorship and networking activities</p>
                </div>
              </div>
              {/* <button className="edu-btn mt--20" onClick={() => setShowUserInterestForm(true)}>Explore Eligibility</button> */}
              <a className="edu-btn mt--20" href="https://form.jotform.com/m2mtech/cohort-sign-up">Explore Eligibility</a>
            </div>
            <div className="for-job-seekers col-lg-6 mt--40">
              <h4>For Guest Lecturers and Mentors</h4>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-student"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Aspiring mentors and guest lecturers can register through our online platform.</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-student"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">We will make sure to connect Industry Professionals with individuals seeking guidance.</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-student"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">Once matched, Industry Professionals participate in an orientation session to understand Program guidelines.</p>
                </div>
              </div>
              <div className="our-feature mt--20">
                <div className="icon">
                  <i className="icon-student"></i>
                </div>
                <div className="feature-content">
                  {/* <h6 className="feature-title"><em>Identify Your Needs</em></h6> */}
                  <p className="feature-description">To know more check our AiMinds Program</p>
                </div>
              </div>
              {/* <button className="edu-btn mt--20" onClick={() => setShowUserInterestForm(true)}>Explore Eligibility</button> */}
              <Link className="edu-btn mt--20" to="/programs/aiminds">Know More</Link>
            </div>
          </div>
          <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
          </div>
        </div>        
      </div>
    </>
  )
}

export default DataTalentDescription;