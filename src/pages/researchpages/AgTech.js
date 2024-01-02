import React from 'react';
import SEO from '../../common/SEO';
// import AgTechBanner from '../../components/programs-section/agtech/AgTechBanner';
import AgTechDescription from '../../components/programs-section/agtech/AgTechDescription';
import AgTechPrograms from '../../components/programs-section/agtech/AgTechPrograms';
import AgTechEmployers from '../../components/programs-section/agtech/AgTechEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import AgTechHowItHelps from '../../components/programs-section/agtech/AgTechHowItHelps';
import AgTechWhatItIncludes from '../../components/programs-section/agtech/AgTechWhatItIncludes';
// import AgTechSponsors from '../../components/programs-section/agtech/AgTechSponsors';

const AgTech = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="AgTech" />
      <Layout>
        <BreadcrumbOne 
          title="AgTech"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="AgTech"
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
        {/* <AgTechBanner /> */}
        <AgTechDescription />
        <AgTechHowItHelps />
        <AgTechWhatItIncludes />
        {/* <AgTechSponsors /> */}
        <AgTechPrograms setShowRegisterForm={setShowRegisterForm} />
        <AgTechEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default AgTech;