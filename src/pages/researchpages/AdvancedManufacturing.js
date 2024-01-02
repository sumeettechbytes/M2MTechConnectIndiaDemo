import React from 'react';
import SEO from '../../common/SEO';
// import AdvancedManufacturingBanner from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingBanner';
import AdvancedManufacturingDescription from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingDescription';
import AdvancedManufacturingPrograms from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingPrograms';
import AdvancedManufacturingEmployers from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import AdvancedManufacturingHowItHelps from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingHowItHelps';
import AdvancedManufacturingWhatItIncludes from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingWhatItIncludes';
// import AdvancedManufacturingSponsors from '../../components/programs-section/advanced-manufacturing/AdvancedManufacturingSponsors';

const AdvancedManufacturing = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="Advanced Manufacturing" />
      <Layout>
        <BreadcrumbOne 
          title="Advanced Manufacturing"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="Advanced Manufacturing"
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
        {/* <AdvancedManufacturingBanner /> */}
        <AdvancedManufacturingDescription />
        <AdvancedManufacturingHowItHelps />
        <AdvancedManufacturingWhatItIncludes />
        {/* <AdvancedManufacturingSponsors /> */}
        <AdvancedManufacturingPrograms setShowRegisterForm={setShowRegisterForm} />
        <AdvancedManufacturingEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default AdvancedManufacturing;