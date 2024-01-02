import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    title: 'Promotion of Clean Energy Adoption',
    info: 'Encourage the adoption of renewable energy sources such as solar, wind, hydro, and geothermal, while phasing out reliance on fossil fuels.',
    icon: 'icon-award-line'
  },
  {
    title: 'Energy Efficiency Enhancement',
    info: 'Implement initiatives to improve energy efficiency in industries, commercial buildings, and households, reducing energy consumption and associated carbon emissions.',
    icon: 'icon-user-2'
  },
  {
    title: 'Waste Management and Recycling',
    info: 'Establish efficient waste management systems, including recycling and waste-to-energy technologies, to minimize waste and its environmental impact.',
    icon: 'icon-eye-line'
  },
  {
    title: 'Green Transportation',
    info: 'Support the development and adoption of electric vehicles, public transportation systems, and infrastructure for non-motorized transportation options.',
    icon: 'icon-award-line'
  },
  {
    title: 'Sustainable Agriculture',
    info: 'Promote sustainable farming practices, reduced chemical usage, and innovative technologies for efficient crop production and waste reduction.',
    icon: 'icon-user-2'
  },
  {
    title: 'Water Conservation',
    info: 'Implement strategies to conserve water through improved irrigation techniques, wastewater treatment, and public awareness campaigns.',
    icon: 'icon-eye-line'
  }
];

const CleanTechnologyHowWeDoIt = () => {
  return (
    <>
      <Element
        name="what-we-do-two"
        className="edu-about-area about-style-1 edu-section-gap bg-color-white home-one-cat"
      >
        <div className="container">
          <div className="row g-5 align-items-center flex-column-reverse flex-sm-row">
            <div className="col-lg-6">
              <div className="inner">
                <ProgramsSectionTitle
                  slogan = "How It Helps"
                  title = "What Problems Clean Technology Solves?"
                />
                <ScrollAnimation 
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={ true }
                >
                  {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
                  null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p> */}
                </ScrollAnimation>
                { items && items.length > 0 &&
                  <div className="about-feature-list mt-4">
                    { items.map( ( data , i ) => (
                      <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="our-feature"
                        animateOnce={ true }
                        key={i}
                      >
                        <div className="our-feature">
                          <div className="icon">
                            <i className={ data.icon }></i>
                          </div>
                          <div className="feature-content">
                            <h6 className="feature-title">{ data.title }</h6>
                            <p className="feature-description">{ data.info }</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    ) ) }
                  </div>
                }
                <ScrollAnimation 
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  className="read-more-btn"
                  animateOnce={ true }
                >
                <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-07.png`} alt="Shape Thumb" loading="lazy" />
                </div>
                  {/* <a className="edu-btn" href="#">CTA<i className="icon-arrow-right-line-right"></i></a> */}
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/research/undraw_solution_mindset_re_57bf.svg`} alt="illustration" loading="lazy" />
                {/* <div className="image-2">
                  <img src="/images/about/about-09/what_we_do_two.png" alt="About Parallax Thumb" />
                </div> */}
                {/* <div className="badge-inner">
                  <img className="image-3" src="/images/about/about-09/badge_1.png" alt="About Circle Thumb" />
                </div> */}
                <div className="shape-image shape-image-1">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default CleanTechnologyHowWeDoIt;