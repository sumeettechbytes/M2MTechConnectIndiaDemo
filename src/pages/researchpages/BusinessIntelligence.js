import React from 'react';
import SEO from '../../common/SEO';
// import BusinessIntelligenceBanner from '../../components/programs-section/business-intelligence/BusinessIntelligenceBanner';
import BusinessIntelligenceDescription from '../../components/programs-section/business-intelligence/BusinessIntelligenceDescription';
import BusinessIntelligencePrograms from '../../components/programs-section/business-intelligence/BusinessIntelligencePrograms';
import BusinessIntelligenceEmployers from '../../components/programs-section/business-intelligence/BusinessIntelligenceEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import BusinessIntelligenceHowItHelps from '../../components/programs-section/business-intelligence/BusinessIntelligenceHowItHelps';
import BusinessIntelligenceWhatItIncludes from '../../components/programs-section/business-intelligence/BusinessIntelligenceWhatItIncludes';
// import BusinessIntelligenceSponsors from '../../components/programs-section/business-intelligence/BusinessIntelligenceSponsors';

const BusinessIntelligence = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="Business Intelligence" />
      <Layout>
        <BreadcrumbOne 
          title="Business Intelligence"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="Business Intelligence"
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
        {/* <BusinessIntelligenceBanner /> */}
        <BusinessIntelligenceDescription />
        <BusinessIntelligenceHowItHelps />
        <BusinessIntelligenceWhatItIncludes />
        {/* <BusinessIntelligenceSponsors /> */}
        <BusinessIntelligencePrograms setShowRegisterForm={setShowRegisterForm} />
        <BusinessIntelligenceEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default BusinessIntelligence;