import React from 'react';
import SEO from '../../common/SEO';
// import CleanTechnologyBanner from '../../components/programs-section/clean-technology/CleanTechnologyBanner';
import CleanTechnologyDescription from '../../components/programs-section/clean-technology/CleanTechnologyDescription';
import CleanTechnologyPrograms from '../../components/programs-section/clean-technology/CleanTechnologyPrograms';
import CleanTechnologyEmployers from '../../components/programs-section/clean-technology/CleanTechnologyEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import CleanTechnologyHowItHelps from '../../components/programs-section/clean-technology/CleanTechnologyHowItHelps';
import CleanTechnologyWhatItIncludes from '../../components/programs-section/clean-technology/CleanTechnologyWhatItIncludes';
// import CleanTechnologySponsors from '../../components/programs-section/clean-technology/CleanTechnologySponsors';

const CleanTechnology = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="Clean Technology" />
      <Layout>
        <BreadcrumbOne 
          title="Clean Technology"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Clean Technology"
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
        {/* <CleanTechnologyBanner /> */}
        <CleanTechnologyDescription />
        <CleanTechnologyHowItHelps />
        <CleanTechnologyWhatItIncludes />
        {/* <CleanTechnologySponsors /> */}
        <CleanTechnologyPrograms setShowRegisterForm={setShowRegisterForm} />
        <CleanTechnologyEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default CleanTechnology;