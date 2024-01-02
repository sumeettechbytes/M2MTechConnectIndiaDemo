import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import DataAnalyticsBanner from '../../components/courses/data-analytics/DataAnalyticsBanner';
import DataAnalyticsPotentialJobs from '../../components/courses/data-analytics/DataAnalyticsPotentialJobs';
import DataAnalyticsWhyChooseSuchACareer from '../../components/courses/data-analytics/DataAnalyticsWhyChooseSuchACareer';
import DataAnalyticsCurriculum from '../../components/courses/data-analytics/DataAnalyticsCurriculum';
import DataAnalyticsEmployerLedWIL from '../../components/courses/data-analytics/DataAnalyticsEmployerLedWIL';
// import DataAnalyticsPastStudentsProjects from '../../components/courses/data-analytics/DataAnalyticsPastStudentsProjects';
// import DataAnalyticsFAQ from '../../components/courses/data-analytics/DataAnalyticsFAQ';
import DataAnalyticsDescription from '../../components/courses/data-analytics/DataAnalyticsDescription';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';

const DataAnalytics = ({
  showDownloadCurriculumForm,
  setShowDownloadCurriculumForm,
  Download,
  downloadFileName,
	formSubmitFrom,
	formName,
}) => {
  return (
    <>
      <SEO
      title="Data Analytics"
      description="Through a combination of immersive online learning, hands-on projects, and personalized mentorship, you'll develop a solid foundation in Data Analytics and gain the practical skills required to excel in your career."
      />
        <HeaderTwo styles="header-transparent header-style-2" searchDisable />
        <div className="eduvibe-contact-us edu-contact-us-area mt-0">
          <div className="eduvibe-animated-shape">
            <DataAnalyticsBanner />
            <DataAnalyticsDescription />
            <DataAnalyticsWhyChooseSuchACareer />
            <DataAnalyticsCurriculum setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
            <DataAnalyticsPotentialJobs />
            <DataAnalyticsEmployerLedWIL />
            {/* <DataAnalyticsPastStudentsProjects />
            <DataAnalyticsFAQ /> */}
          </div>
        </div>
      <FooterOne />
      {showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
    </>
  )
}

export default DataAnalytics;