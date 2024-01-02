import React from 'react';
import { Element } from 'react-scroll';
import AimindsSectionTitle from './AimindsSectionTitle';

const AimindsDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="home-one-programs data-talent-eligibility-section service-wrapper-1 style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container about-feature-list eduvibe-animated-shape">
          <div className="row g-5">
            <div className="col-lg-12">
              <AimindsSectionTitle
                classes = "text-center"
                title = "Overview"
              />
            </div>
            <blockquote className="skillsboost-description blockquote-style-1 mt--30">“ Our program is designed to foster collaboration in the fields of Data Science, Machine Learning, and AI. By participating in our Emerging Tech Collaborations, you can contribute as a mentor, share your insights through guest lectures, or both. ”
              <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
            </blockquote>
          </div>
          
          <div className="row g-5 mt--40">
            <div className="col-lg-12">
              <AimindsSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "How It Works?"
              />
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-12 our-feature">
              <div className="icon">
                <i className="icon-file-text-line"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Registration</em></h6>
                <p className="feature-description">Aspiring mentors and guest lecturers can register through our online platform. Provide details about your specialization, industry experience, and preferences for mentorship or guest lectures. Doctoral credentials or those who have done relevant Industry certifications (e.g., Microsoft Azure AI, AWS, Google) or proven relevant Project experience will be given preference.</p>
              </div>
            </div>
            <div className="col-12 our-feature mt--20">
              <div className="icon">
                <i className="icon-share-fill"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Matching Process</em></h6>
                <p className="feature-description">We will make sure to connect Industry Professionals with individuals seeking guidance. Factors such as expertise, project experience, and career aspirations ensure meaningful pairings.</p>
              </div>
            </div>
            <div className="col-12 our-feature mt--20">
              <div className="icon">
                <i className="icon-presentation"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title"><em>Orientation Session</em></h6>
                <p className="feature-description">Once matched, Industry Professionals participate in an orientation session to understand Program guidelines. Learn about the Program benefits, communication tools, and expectations specific to the emerging tech landscape.</p>
              </div>
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
              <AimindsSectionTitle
                classes = "text-center"
                // slogan = "Eligibility"
                title = "Why Guest Lectures And Mentorship?"
              />
            </div>
            <div className="row mt--40">
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Knowledge Sharing</em></h6>
                  <p className="feature-description">Sharing expertise allows professionals to contribute to the development of the next generation of AI practitioners. It provides an opportunity to share insights, industry knowledge, and practical experiences with enthusiastic learners.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Networking Opportunities</em></h6>
                  <p className="feature-description">Engaging with an academic program exposes professionals to a network of talented individuals, including both students and faculty. Networking can lead to potential collaborations, partnerships, or even identify talented individuals for future recruitment.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Staying Current</em></h6>
                  <p className="feature-description">Involvement with an academic program ensures that professionals stay updated on the latest trends, technologies, and research in the field. It provides an avenue for continuous learning and staying ahead in a rapidly evolving technological landscape.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Building Personal Brand</em></h6>
                  <p className="feature-description">Contributing as a guest lecturer or mentor enhances a professional's personal brand within the industry and academia. It establishes them as thought leaders and experts in their field, contributing to their professional reputation.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Giving Back to the Community</em></h6>
                  <p className="feature-description">Serving as a mentor or guest lecturer is a way for professionals to give back to the community and support the development of the next generation of talent. It is a fulfilling way to contribute to the growth and success of others.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Professional Development</em></h6>
                  <p className="feature-description">Engaging with a program as a mentor or guest lecturer provides an opportunity for professionals to develop their leadership and communication skills. It allows them to refine their ability to convey complex concepts to a diverse audience.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Recruitment Opportunities</em></h6>
                  <p className="feature-description">Professionals may identify potential talents among the program participants for future recruitment. It serves as a platform to connect with skilled individuals who may bring value to their organizations.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Influence Future Innovations</em></h6>
                  <p className="feature-description">Professionals can play a role in shaping the future of AI by influencing the education and skill development of aspiring professionals. Their insights can guide the direction of research and innovation in the field.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Exposure to New Perspectives</em></h6>
                  <p className="feature-description">Engaging with students and faculty exposes professionals to fresh perspectives and innovative ideas. It can stimulate creativity and provide alternative viewpoints that may be beneficial in their own work.</p>
                </div>
              </div>
              <div className="col-lg-6 our-feature mt--20">
                <div className="icon">
                  <i className="icon-checkbox-circle-fill-solid"></i>
                </div>
                <div className="feature-content">
                  <h6 className="feature-title"><em>Personal Fulfillment</em></h6>
                  <p className="feature-description">Contributing to the education and growth of aspiring AI professionals can be personally fulfilling. It provides a sense of accomplishment and satisfaction in making a positive impact on the next generation of talent.</p>
                </div>
              </div>
              {/* <button className="edu-btn mt--20" onClick={() => setShowEmployerRegisterForm(true)}>Count Me In</button> */}
              {/* <a className="edu-btn mt--20" href="https://form.jotform.com/m2mtech/employer-register">Count Me In</a> */}
            </div>
            <div>              
              <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  )
}

export default AimindsDescription;