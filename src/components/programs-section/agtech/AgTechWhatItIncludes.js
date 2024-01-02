import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    title: 'Research and Development (R&D) Support',
    info: 'Allocate funding for research and development of innovative cleantech solutions, fostering technological advancements in energy, waste management, and more.',
    icon: 'icon-award-line'
  },
  {
    title: 'Financial Incentives',
    info: 'Provide tax incentives, grants, and subsidies to businesses and individuals adopting cleantech solutions, making them more economically viable.',
    icon: 'icon-user-2'
  },
  {
    title: 'Education and Awareness Campaigns',
    info: 'Conduct public awareness campaigns to educate citizens about the benefits of cleantech adoption and sustainable practices.',
    icon: 'icon-eye-line'
  },
  {
    title: 'Regulatory Framework Enhancement',
    info: 'Develop and update regulations that encourage the use of cleantech solutions and set emission reduction targets for industries.',
    icon: 'icon-award-line'
  },
  {
    title: 'Collaboration with Private Sector',
    info: 'Forge partnerships with private companies to accelerate the deployment of cleantech solutions and leverage their expertise.',
    icon: 'icon-user-2'
  },
  {
    title: 'Capacity Building',
    info: 'Offer training programs, workshops, and certifications to develop a skilled workforce capable of designing, implementing, and maintaining cleantech systems.',
    icon: 'icon-eye-line'
  }
];

const AgTechWhatItIncludes = () => {
  return (
    <>
      <Element
        name="what-we-do-two"
        className="edu-about-area about-style-1 edu-section-gap bg-color-white"
      >
        <div className="container">
          <div className="row g-5 align-items-center flex-column-reverse flex-sm-row">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img className="image-1" src={`${process.env.PUBLIC_URL}/images/research/undraw_product_iteration_kjok.svg`} alt="illustration" loading="lazy" />
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
            <div className="col-lg-6">
              <div className="inner">
                <ProgramsSectionTitle
                  slogan = "What It Includes"
                  title = "Program Components"
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
                  {/* <a className="edu-btn" href="#">CTA<i className="icon-arrow-right-line-right"></i></a> */}
                </ScrollAnimation>
                <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                  <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-07.png`} alt="Shape Thumb" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default AgTechWhatItIncludes;