import React from 'react';
import { Element } from 'react-scroll';

const items = [
  {
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam consequuntur incidunt similique sequi facere, repudiandae, veniam earum non modi ab eos ad dolorum asperiores itaque alias aspernatur ex nam",
  },
  {
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam consequuntur incidunt similique sequi facere, repudiandae, veniam earum non modi ab eos ad dolorum asperiores itaque alias aspernatur ex nam",
  }
];

const ProgramsAchievements = () => {
  return (
    <>
      <Element name="achievements" className="edu-about-area about-style-1 edu-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/gallery/gallery-images/achievements.webp`} alt="About Main Thumb" loading="lazy" />
                <div className="shape-image shape-image-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner mt-md-16">
              <div className="col-lg-12 pre-section-title">
                <span className="color-primary pretitle">What We Succeeded On</span>
                <h3 className="title">Our Achievements</h3>
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

export default ProgramsAchievements;