import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const AdvancedManufacturingDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/advanced-manufacturing/advanced-manufacturing.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is Advanced Manufacturing?"
              />
              <p className="mt--40">Advanced manufacturing refers to the use of innovative technologies and methods to improve products or processes in the manufacturing sector. It encompasses the integration of cutting-edge technologies into both the production of existing products and the creation of new ones. Advanced manufacturing relies on various elements, including information technology, automation, computation, software, sensing, and networking, to optimize all aspects of the manufacturing value chain, from the initial concept to end-of-life considerations.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default AdvancedManufacturingDescription;