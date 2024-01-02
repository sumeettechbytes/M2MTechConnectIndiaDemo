import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ResearchProjectsFilter from '../../components/research-projects/ResearchProjectsFilter';

const ResearchOne = () => {
  return (
    <>
      <SEO
        title="Research"
        description="We provide a vast variety of research programs for you to choose from."
      />
      <Layout>
        <BreadcrumbOne 
          title="Research"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Research"
        />
        <div className="eduvibe-contact-us edu-contact-us-area bg-color-white">
          <div className="container eduvibe-animated-shape">
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-04-01.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-02-08.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-15.png"} alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>
        <ResearchProjectsFilter />
      </Layout>
    </>
  )
}

export default ResearchOne;