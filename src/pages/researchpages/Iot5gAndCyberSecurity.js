import React from 'react';
import SEO from '../../common/SEO';
// import Iot5gAndCyberSecurityBanner from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityBanner';
import Iot5gAndCyberSecurityDescription from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityDescription';
import Iot5gAndCyberSecurityPrograms from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityPrograms';
import Iot5gAndCyberSecurityEmployers from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityEmployers';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import Iot5gAndCyberSecurityHowItHelps from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityHowItHelps';
import Iot5gAndCyberSecurityWhatItIncludes from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecurityWhatItIncludes';
// import Iot5gAndCyberSecuritySponsors from '../../components/programs-section/iot-5g-and-cybersecurity/Iot5gAndCyberSecuritySponsors';

const Iot5gAndCyberSecurity = ({
  showRegisterForm,
  setShowRegisterForm
}) => {
  return (
    <>
      <SEO title="IoT, 5G & CyberSecurity" />
      <Layout>
        <BreadcrumbOne 
          title="IoT, 5G & CyberSecurity"
          rootUrl="/research"
          parentUrl="Research"
          currentUrl="IoT, 5G & CyberSecurity"
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
        {/* <Iot5gAndCyberSecurityBanner /> */}
        <Iot5gAndCyberSecurityDescription />
        <Iot5gAndCyberSecurityHowItHelps />
        <Iot5gAndCyberSecurityWhatItIncludes />
        {/* <Iot5gAndCyberSecuritySponsors /> */}
        <Iot5gAndCyberSecurityPrograms setShowRegisterForm={setShowRegisterForm} />
        <Iot5gAndCyberSecurityEmployers />
      </Layout>
      {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />}
    </>
  )
}

export default Iot5gAndCyberSecurity;