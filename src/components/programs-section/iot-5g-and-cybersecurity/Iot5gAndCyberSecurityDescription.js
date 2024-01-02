import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const Iot5gAndCyberSecurityDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/iot-5g-and-cybersecurity/iot-5g-and-cybersecurity.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is IoT, 5G & CyberSecurity?"
              />
              <p className="mt--40">IoT connects everyday objects to the internet for data exchange, 5G is a high-speed wireless technology enabling faster connectivity, and cybersecurity is essential for safeguarding digital systems and data from threats and attacks. These technologies intersect in various ways, as IoT and 5G networks require robust cybersecurity measures to ensure the integrity and security of data transmitted and received by IoT devices over 5G networks.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default Iot5gAndCyberSecurityDescription;