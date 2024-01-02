import React from 'react';
import ProgramsSectionTitle from '../ProgramsSectionTitle';
import { Element } from 'react-scroll';

const FinTechDescription = () => {
  return (
    <>
      <Element
        name="introduction"
        className="style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/images/research/fintech/fintech.webp" alt="CleanTechImg" />
            </div>
            <div className="col-lg-6">
              <ProgramsSectionTitle 
                classes = "text-left"
                slogan = "Why our research program"
                title = "What Is FinTech?"
              />
              <p className="mt--40">FinTech, short for Financial Technology, is a broad term that refers to the innovative use of technology in the design and delivery of financial services. It encompasses a wide range of financial activities, products, and services that leverage technology to make financial transactions more efficient, accessible, and convenient. FinTech has disrupted traditional financial services by making them more accessible, cost-effective, and user-friendly. It has also spurred innovation in the financial industry and continues to evolve rapidly, shaping the future of finance.</p>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default FinTechDescription;