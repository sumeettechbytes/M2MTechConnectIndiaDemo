import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const CleanTechnologyDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/clean-technology/clean-technology.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is Clean Technology?"
              />
              <p className="mt--40">Cleantech, which encompasses various technologies and processes aimed at reducing environmental impact and promoting sustainable practices, has gained significant importance in recent years due to growing concerns about climate change and resource depletion. To address these challenges, we propose the implementation of comprehensive cleantech programs that will focus on promoting the adoption and development of clean technologies across various sectors.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default CleanTechnologyDescription;