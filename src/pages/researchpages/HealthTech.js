import React from 'react';
import SEO from '../../common/SEO';
// import HealthTechBanner from '../../components/programs-section/healthtech/HealthTechBanner';
import HealthTechDescription from '../../components/programs-section/healthtech/HealthTechDescription';
import HealthTechPrograms from '../../components/programs-section/healthtech/HealthTechPrograms';
import HealthTechEmployers from '../../components/programs-section/healthtech/HealthTechEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import HealthTechHowItHelps from '../../components/programs-section/healthtech/HealthTechHowItHelps';
import HealthTechWhatItIncludes from '../../components/programs-section/healthtech/HealthTechWhatItIncludes';
// import HealthTechSponsors from '../../components/programs-section/healthtech/HealthTechSponsors';

const HealthTech = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="HealthTech" />
      <Layout>
        <BreadcrumbOne 
          title="HealthTech"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="HealthTech"
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
        {/* <HealthTechBanner /> */}
        <HealthTechDescription />
        <HealthTechHowItHelps />
        <HealthTechWhatItIncludes />
        {/* <HealthTechSponsors /> */}
        <HealthTechPrograms setShowRegisterForm={setShowRegisterForm} />
        <HealthTechEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default HealthTech;