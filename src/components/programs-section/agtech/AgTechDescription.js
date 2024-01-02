import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const AgTechDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/agtech/agtech.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is AgTech?"
              />
              <p className="mt--40">AgTech, short for Agricultural Technology, refers to the use of advanced technology, digital tools, and innovative solutions to improve and optimize various aspects of agriculture and agribusiness. AgTech encompasses a wide range of applications that aim to enhance agricultural productivity, sustainability, and efficiency. AgTech is essential for addressing the challenges of feeding a growing global population while minimizing the environmental impact of agriculture. It empowers farmers with tools and knowledge to make informed decisions, increase yields, and contribute to sustainable food production.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default AgTechDescription;