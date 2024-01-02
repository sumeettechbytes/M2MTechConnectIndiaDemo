import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Production Efficiency',
    info: 'Advanced Manufacturing improves production efficiency through automation and optimization.',
    icon: 'icon-award-line'
  },
  {
    id: 2,
    title: 'Quality Control',
    info: 'It enhances quality control by detecting defects early in the production process.',
    icon: 'icon-user-2'
  },
  {
    id: 3,
    title: 'Customization and Personalization',
    info: 'Advanced Manufacturing enables cost-effective customization of products.',
    icon: 'icon-eye-line'
  },
  {
    id: 4,
    title: 'Complex Geometry',
    info: 'It excels at producing complex geometric shapes that are difficult with traditional methods.',
    icon: 'icon-award-line'
  },
  {
    id: 5,
    title: 'Sustainability',
    info: 'Advanced Manufacturing reduces waste and energy consumption, contributing to sustainability.',
    icon: 'icon-user-2'
  },
  {
    id: 6,
    title: 'Supply Chain Resilience',
    info: 'It supports resilient supply chains with local or on-demand production.',
    icon: 'icon-eye-line'
  }
];

const AdvancedManufacturingHowItHelps = () => {
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
                  title = "What Problems Advanced Manufacturing Solves?"
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
                    { items.map( ( data ) => (
                      <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="our-feature"
                        animateOnce={ true }
                        key={data.id}
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
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/research/undraw_solution_mindset_re_57bf.svg`} alt="illustration" loading="lazy" />
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

export default AdvancedManufacturingHowItHelps;