import React from 'react';
import { Element } from 'react-scroll';

const items = [
  {
    title: 'Connecting Talent & Opportunity💼',
    info: "Our mission is simple - connect top-tier talent with the job opportunities and projects. We've successfully launched over 300+ Work Integrated Learning Projects focusing on Data Science and ML projects, thanks to invaluable partnerships with Canadian grant providers. Our network is your doorway to real-world experience.",
    // icon: 'icon-Hand---Book'
  },
  {
    title: 'The Numbers Speak📚',
    info: "With 6000+ course enrollments and growing, we're the trusted choice for Canadians across the nation. Our programs are designed by our knowledgeable Canadian team, for our 100% Canadian audience. We take pride in our reach - from the thriving tech hub of Ontario to beautiful British Columbia and bustling Alberta, we're empowering learners all across Canada to chase their dreams.",
    // icon: 'icon-Hand---Book'
  }
];

const CoursesOurStory = () => {
  return (
    <>
      <Element name="achievements" className="edu-about-area about-style-1 edu-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/gallery/gallery-images/undraw_Celebration_re_kc9k.webp`} alt="About Main Thumb" loading="lazy" />
                <div className="shape-image shape-image-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner mt-md-16">
                <div className="col-lg-12 pre-section-title">
                  <span className="color-primary pretitle">Success Stories</span>
                  <h3 className="title">Our Growth</h3>
                </div>
                  { items && items.length > 0 &&
                    <div className="about-feature-list">
                      { items.map( ( data , i ) => (
                        <div className="our-feature" key={i}>
                          <div className="our-feature">
                            <div className="feature-content">
                              <h6 className="feature-title">{ data.title }</h6>
                              <p className="feature-description">{ data.info }</p>
                            </div>
                          </div>
                        </div>
                      ) ) }
                    </div>
                  }
                  <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                    <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default CoursesOurStory;