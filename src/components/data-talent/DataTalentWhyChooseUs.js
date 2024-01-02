import React from 'react';
import { Element } from 'react-scroll';
import DataTalentSectionTitle from './DataTalentSectionTitle';
import { Link } from 'react-router-dom';

const DataTalentWhyChooseUs = ({
  setShowEmployerRegisterForm,
  setShowUserInterestForm,
  setShowDownloadCurriculumForm,
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
              <DataTalentSectionTitle
                classes = "text-center"
                title = "Why Choose Us?"
              />
            </div>
            <div className="courses-description-content mt--40">
              <p>The DataTalent program is a collaborative effort between M2M, DiWo, and Riipen, offering a comprehensive technical upskilling initiative. It seamlessly combines employer-driven work-integrated learning projects, professional development prospects, and exposure to the industry.</p>
            </div>
            <div>
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
            {/* <img src={`${process.env.PUBLIC_URL}/images/data-talent/Powered-by-all-partners.png`} alt="logos" /> */}
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Unparalleled Talent Pool</em></h6>
                <p className="feature-description">We have a curated talent pool of upskilled Data Science professionals who are not just proficient but exceptional in their field. Our candidates have undergone rigorous training and practical experience, making them ready to tackle complex data-driven challenges.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Tailored to Your Needs</em></h6>
                <p className="feature-description">We understand that every project is unique. Whether you require expertise in Machine Learning, Data Analysis, Predictive Modeling, or any other Data Science domain, we have the talent that fits your precise requirements.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Fully Subsidized Work Integrated Learning</em></h6>
                <p className="feature-description">We offer a unique opportunity for Canadian employers to post 80-hour-long Work Integrated Learning projects. What's more, these projects are fully subsidized, meaning you get access to and evaluate top talent at free of cost.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Seamless Integration</em></h6>
                <p className="feature-description">Our candidates are not just experts in Data Science, they're also trained on Professional Skills to seamlessly integrate into your projects and teams. Their ability to communicate complex ideas clearly and work collaboratively ensures easier onboarding.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Immediate Impact</em></h6>
                <p className="feature-description">You don't have to wait for months for your projects to gain momentum. Our candidates are ready to hit the ground running, delivering immediate value to your organization.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Cost-Effective Solutions</em></h6>
                <p className="feature-description">Hiring top Data Science talent can be expensive - but with our subsidized projects, you get access to try our exceptional talent pool at no cost.</p>
              </div>
            </div>
            <div className="our-feature mt--40">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Diverse Skill Sets</em></h6>
                <p className="feature-description">Whether you need skills in Python, R, Machine Learning, Deep Learning, Data Visualization, or any other Data Science domain, we have Diverse talent to meet your needs.</p>
              </div>
            </div>
          </div>
          <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-07.png`} alt="Shape Thumb" loading="lazy" />
          </div>
        </div>
      </Element>
      <Element
        name="Curriculum"
        className="edu-about-area about-style-1 edu-section-gap"
      >
        <div className="container inner about-feature-list">
          <div className="row">
            <div className="col-lg-12">
              <DataTalentSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Curriculum"
              />
            </div>
          </div>
          <div className="row g-5 align-items-center mt--40">
            <div className="col-lg-12 courses-description-content">
              <p className="employer-description">Our upskilling program focusses on gaining hands-on Emerging Tech skills in Artificial Intelligence that will support developing skills related to Big Data and Algorithm Design which is requested by Employers in Digital Technology sectors. Participants will develop proficiency in utilizing popular Data Science libraries and frameworks including NumPy, Pandas, scikit-learn, TensorFlow and Keras.</p>
            </div>
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="inner">
                <h5 className="text-left mb-0 mt-4">Data Analysis and Manipulation</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-book-mark-fill"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Participants will gain proficiency in working with large datasets, cleaning and preprocessing data, handling missing values and transforming data into suitable formats for analysis.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Data Visualization</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-book-mark-fill"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Participants will learn how to effectively visualize and communicate data insights using various data visualization libraries and tools. They will gain proficiency in creating visually appealing and informative charts, graphs and dashboards to convey data-driven narratives.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Machine Learning Algorithms</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-book-mark-fill"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Participants will learn various Machine Learning algorithms, including both supervised and unsupervised techniques. They will understand the concepts behind algorithms such as linear regression, logistic regression, decision trees, random forests and clustering algorithms.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Deep Learning and Neural Networks</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-book-mark-fill"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Participants will delve into the field of deep learning, specifically focusing on neural networks. They will learn about different types of neural networks, such as feedforward neural networks, convolutional neural networks (CNNs) and recurrent neural networks (RNNs). Participants will also gain hands-on experience in building and training neural network models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/data-talent/undraw_engineering_team_a7n2.svg`} alt="decoration" loading="lazy" />
            </div>
          </div>
          <div className="read-more-btn mt--40">
            <button className="edu-btn" onClick={() => setShowDownloadCurriculumForm(true)}>Detailed Curriculum</button>
          </div>
          <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
          </div>
        </div>
      </Element>
      <Element
        name="WhyChooseUs"
        className="home-one-programs about-style-1 edu-section-gap service-wrapper-1"
      >
        <div className="container about-feature-list eduvibe-animated-shape">
          <div className="row">
            <div className="col-lg-12">
              <DataTalentSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Contribute to DataTalent pool creation"
              />
            </div>
          </div>
          <div className="row g-5 align-items-center mt-60">
            <div className="col-lg-5">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/data-talent/data-talent-description.jpg`} alt="decoration" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 about-feature-list">
              <div className="inner">
                <h5 className="text-left mb-0 mt-4">Data Challenges and Hackathons</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Host your own Data challenges and hackathons and create awareness about your Company and the work you are doing. These events gives our participants an opportunity to work on time-bound projects or problem-solving competitions, where they will collaborate in teams to analyze and interpret data.</p>
                  </div>
                </div>                
                <h5 className="text-left mb-0 mt-4">Industry Partnerships, Internships, Placements</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Partner with us to provide Upskilling participants with guest lectures, workshops, industry projects including Employer Led Work Integrated Learning and internship opportunities. These collaborations enhance job placement prospects and offer valuable mentorship for participants.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Employer Engagement Events</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Join us in Networking events and job fairs will be organized, enabling Digital Tech employers like you to interact with participants. These events serve as platforms for participants to demonstrate their skills, learn about job opportunities, establish Industry connections.</p>
                  </div>
                </div>
                <h5 className="text-left mb-0 mt-4">Employer Feedback</h5>
                <div className="our-feature mt-4">
                  <div className="icon">
                    <i className="icon-award-fill-solid"></i>
                  </div>
                  <div className="feature-content">
                    <p className="feature-description">Provide us feedback regarding our program effectiveness, participant preparedness. This feedback will drive continuous improvement and ensure program relevance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="data-talent-riipen mt--60">
                {/* <div className="data-talent-image-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/images/sponsors/riipen+m2m_logo.svg`} alt="riipen logo" />
                </div> */}
                <h4 className="text-center">Don't Miss Out on Exceptional DataTalent!</h4>
                <p>
                  Get in touch with us today to explore how our exceptional Data Science talent can make a difference in your projects. We're here to help you achieve your Data-driven goals efficiently and cost-effectively.
                </p>
                <div className="data-talent-cta mt--40">
                  {/* <button className="edu-btn" onClick={() => setShowEmployerRegisterForm(true)}>Employer Login</button>
                  <button className="edu-btn btn-secondary" onClick={() => setShowUserInterestForm(true)}>Jobseekers Login</button> */}
                  <a className="edu-btn" href="https://form.jotform.com/m2mtech/employer-register">Employer Login</a>
                  <a className="edu-btn btn-secondary" href="https://form.jotform.com/m2mtech/cohort-sign-up">Jobseekers Login</a>
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

export default DataTalentWhyChooseUs;