import React from 'react';
import { Element } from 'react-scroll';
import SkillsboostSectionTitle from './SkillsboostSectionTitle';

const SkillsboostDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="home-one-programs data-talent-description-content service-wrapper-1 style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container eduvibe-animated-shape">
          <div className="row g-5">
            <div className="col-12">
              <SkillsboostSectionTitle
                classes = "text-center"
                title = "Overview"
              />
            </div>
            <blockquote className="col-12 skillsboost-description blockquote-style-1 mt--30">“ Our upskilling programs focusses on gaining hands-on Emerging Tech skills in Data Science (Data Analysis, Data Visualization, Machine Learning, Deep Learning, Artificial Intelligence) which is sought after by Employers in Digital Technology sectors, CleanTech, Advanced Manufacturing, Business Intelligence, Finance and Healthcare sectors. ”
              <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
            </blockquote>
          </div>
          
          <div className="row g-5 mt--40">
            <div className="col-lg-12">
              <SkillsboostSectionTitle
                classes = "text-center"
                title = "Who Should Take This?"
              />
            </div>
            <div className="col-12 col-lg-6">
              {/* <p className="mt--20"><strong>Imp Note</strong>: All our current Programs are focused on Mid-career workers (<strong>minimum 3 years of Work Experience</strong>) who currently live and work in Canada</p> */}
              <ul className=" skillsboost-who-should-take-this">
                <li>Data Enthusiasts</li>
                <li>Aspiring Data Analysts/Scientists, Business Analysts</li>
                <li>IT and Tech Professionals</li>
                <li>Career Changers</li>
                <li>Higher secondary school students</li>
                <li>University students</li>
                <li>Recent graduates</li>
              </ul>
            </div>
              <div className="col-12 col-lg-6">
                <img src={`${process.env.PUBLIC_URL}/images/skillsboost/undraw_proud_coder_re_exuy.svg`} alt="illustration" />
              </div>
          </div>
          <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-1">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-01.png`} alt="Shape Thumb" loading="lazy" />
            </div>
            <div className="shape-image shape-image-2">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-08.png`} alt="Shape Thumb" loading="lazy" />
            </div>
            <div className="shape-image shape-image-3">
              <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
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
              <SkillsboostSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Program Features"
              />
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Explore the World of Data Science and gain insights</em></h6>
                <p className="feature-description">Embark on a journey into the vast and dynamic realm of Data Science, where exploration leads to valuable insights, expanding your understanding of the intricacies within the data-driven world.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Discover the latest trends and industry demands</em></h6>
                <p className="feature-description">Stay ahead of the curve by uncovering the newest trends and meeting industry demands, ensuring you are well-equipped to navigate the ever-evolving Emerging Tech landscape.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Your Path to becoming a Certified AI Professional</em></h6>
                <p className="feature-description">Embark on a transformative journey towards becoming a Certified AI Professional, where comprehensive learning paves the way for mastering the intricacies of artificial intelligence and its applications.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Learn about the certification process and understand the benefits</em></h6>
                <p className="feature-description">Gain insights into the certification process, unraveling its intricacies, and comprehend the myriad benefits that come with acquiring a certified status in your chosen domain.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Learn about the benefits of joining our Upskilling Program</em></h6>
                <p className="feature-description">Explore the advantages of enrolling in our Upskilling Program, where you can enhance your skills, stay competitive, and unlock new opportunities in your professional journey.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Connect with experts in the field</em></h6>
                <p className="feature-description">Forge valuable connections with seasoned experts in the field, opening doors to mentorship, knowledge exchange, and invaluable insights that propel your growth and success.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Get Ahead in Your Career</em></h6>
                <p className="feature-description">Accelerate your career progression by proactively navigating challenges, acquiring new skills, and seizing opportunities to stay ahead in the competitive professional landscape.</p>
              </div>
            </div>
            <div className="col-lg-6 our-feature mt--20">
              <div className="icon">
                <i className="icon-checkbox-circle-fill-solid"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Learn about job opportunities and career prospects</em></h6>
                <p className="feature-description">Discover diverse job opportunities and explore promising career prospects, gaining valuable insights to shape a successful professional journey in your chosen field.</p>
              </div>
            </div>
            {/* <button className="edu-btn mt--20" onClick={() => setShowEmployerRegisterForm(true)}>Count Me In</button> */}
            {/* <a className="edu-btn mt--20" href="https://form.jotform.com/m2mtech/employer-register">Count Me In</a> */}
          </div>
          <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
          </div>
        </div>        
      </div>
    </>
  )
}

export default SkillsboostDescription;