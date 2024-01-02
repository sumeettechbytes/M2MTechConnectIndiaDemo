import React from 'react';
import SEO from '../../common/SEO';
// import FinTechBanner from '../../components/programs-section/fintech/FinTechBanner';
import FinTechDescription from '../../components/programs-section/fintech/FinTechDescription';
import FinTechPrograms from '../../components/programs-section/fintech/FinTechPrograms';
import FinTechEmployers from '../../components/programs-section/fintech/FinTechEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import FinTechHowItHelps from '../../components/programs-section/fintech/FinTechHowItHelps';
import FinTechWhatItIncludes from '../../components/programs-section/fintech/FinTechWhatItIncludes';
// import FinTechSponsors from '../../components/programs-section/fintech/FinTechSponsors';

const FinTech = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="FinTech" />
      <Layout>
        <BreadcrumbOne 
          title="FinTech"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="FinTech"
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
        {/* <FinTechBanner /> */}
        <FinTechDescription />
        <FinTechHowItHelps />
        <FinTechWhatItIncludes />
        {/* <FinTechSponsors /> */}
        <FinTechPrograms setShowRegisterForm={setShowRegisterForm} />
        <FinTechEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default FinTech;