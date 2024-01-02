import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ProgramsSection from '../../components/programs-section/ProgramsSection';
import ProgramsDescription from '../../components/programs-section/ProgramsDescription';
// import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import ProgramsSponsors from '../../components/programs-section/ProgramsSponsors';
// import ProgramsAchievements from '../../components/programs-section/ProgramsAchievements';
import HomeOneSuccessStory from '../../components/home-one/HomeOneSuccessStory';
import UserInterestForm from '../../components/form/user-interest-form/UserInterestForm';

const WorkIntegratedLearning = ({
  showUserInterestForm,
  setShowUserInterestForm
  }) => {
  return (
    <>
      <SEO
        title="Work Integrated Learning"
        description="Prepare yourself for a successful career by joining our program and unlocking the power of experiential learning."
      />
      <Layout>
        <BreadcrumbOne 
          title="Work Integrated Learning"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Work Integrated Learning"
        />
        <ProgramsDescription />                
        <ProgramsSection setShowUserInterestForm={setShowUserInterestForm} />
        {/* <ProgramsSponsors /> */}
        <HomeOneSuccessStory />
      </Layout>
      {showUserInterestForm && <UserInterestForm setShowUserInterestForm={setShowUserInterestForm} />}
    </>
  )
}
export default WorkIntegratedLearning;