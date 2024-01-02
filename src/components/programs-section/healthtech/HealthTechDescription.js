import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const HealthTechDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/healthtech/healthtech.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is HealthTech?"
              />
              <p className="mt--40">HealthTech, short for Health Technology, is a broad term that encompasses the use of technology, digital tools, and innovations to improve healthcare delivery, enhance patient outcomes, and streamline healthcare processes. HealthTech spans a wide range of applications and solutions that leverage technology to address various healthcare challenges. HealthTech is at the forefront of transforming the healthcare industry, making healthcare more accessible, efficient, and patient-centric. It has the potential to improve healthcare outcomes, reduce costs, and drive innovation in medical research and treatment.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default HealthTechDescription;