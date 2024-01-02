import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    title: 'Remote Monitoring and Control (IoT)',
    info: 'IoT enables remote monitoring and control of devices and systems, addressing issues related to the need for real-time visibility and management of assets and processes. This is crucial in sectors like manufacturing, healthcare, and utilities.',
    icon: 'icon-award-line'
  },
  {
    title: 'Data Insights for Decision-Making (IoT)',
    info: 'IoT generates vast amounts of data that can be analyzed to gain valuable insights, enhancing decision-making across various industries.',
    icon: 'icon-eye-line'
  },
  {
    title: 'High-Speed Connectivity (5G)',
    info: '5G addresses the need for faster and more reliable internet access, enabling seamless streaming, low latency communication, and support for emerging technologies like augmented reality (AR) and virtual reality (VR).',
    icon: 'icon-eye-line'
  },
  {
    title: 'IoT Support (5G)',
    info: '5G networks are designed to handle a massive number of IoT devices simultaneously, providing the necessary infrastructure for IoT\'s growth.',
    icon: 'icon-eye-line'
  },
  {
    title: 'Data Protection (CyberSecurity)',
    info: 'Cybersecurity measures safeguard sensitive data from theft, ensuring privacy and preventing financial losses for individuals and organizations.',
    icon: 'icon-eye-line'
  },
  {
    title: 'Preventing Cyberattacks (CyberSecurity)',
    info: 'Cybersecurity systems protect against various cyber threats, including malware, ransomware, phishing, and denial-of-service (DDoS) attacks, reducing the risk of data breaches and business disruption.',
    icon: 'icon-eye-line'
  }
];

const Iot5gAndCyberSecurityHowItHelps = () => {
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
                  title = "What Problems IoT, 5G & CyberSecurity Solves?"
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

export default Iot5gAndCyberSecurityHowItHelps;