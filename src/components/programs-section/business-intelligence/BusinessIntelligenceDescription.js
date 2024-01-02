import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const BusinessIntelligenceDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/business-intelligence/business-intelligence.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is Business Intelligence?"
              />
              <p className="mt--40">Business Intelligence (BI) refers to the technology-driven process of collecting, analyzing, and presenting business data to support informed decision-making within organizations. It involves a set of tools, techniques, and strategies aimed at transforming raw data into meaningful insights and actionable information. Business Intelligence is a comprehensive approach to data analysis and reporting that empowers organizations to harness their data for better decision-making, improved performance, and competitive advantage. It plays a vital role in modern business operations across various industries.</p>
            </div>
          </div>
        </div>
      </Element>      
    </>
  )
}

export default BusinessIntelligenceDescription;