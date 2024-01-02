import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import CoursesCodingBanner from '../../components/courses/courses-coding/CoursesCodingBanner';
import CoursesCodingPotentialJobs from '../../components/courses/courses-coding/CoursesCodingPotentialJobs';
import CoursesCodingWhyChooseSuchACareer from '../../components/courses/courses-coding/CoursesCodingWhyChooseSuchACareer';
import CoursesCodingCurriculum from '../../components/courses/courses-coding/CoursesCodingCurriculum';
import CoursesCodingEmployerLedWIL from '../../components/courses/courses-coding/CoursesCodingEmployerLedWIL';
// import CoursesCodingPastStudentsProjects from '../../components/courses/courses-coding/CoursesCodingPastStudentsProjects';
// import CoursesCodingFAQ from '../../components/courses/courses-coding/CoursesCodingFAQ';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';
import CoursesCodingDescription from '../../components/courses/courses-coding/CoursesCodingDescription';

const CoursesCoding = ({
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
      title="Coding"
      description="Join a cohort to learn the science of turning data into insights. Get hands-on project experience."
      />
        <HeaderTwo styles="header-transparent header-style-2" searchDisable />
        <div className="eduvibe-contact-us edu-contact-us-area mt-0">
          <div className="eduvibe-animated-shape">
            <CoursesCodingBanner />
            <CoursesCodingDescription />
            <CoursesCodingWhyChooseSuchACareer />
            <CoursesCodingCurriculum setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
            <CoursesCodingPotentialJobs />
            <CoursesCodingEmployerLedWIL />
            {/* <CoursesCodingPastStudentsProjects />
            <CoursesCodingFAQ /> */}
          </div>
        </div>
      <FooterOne />
      {showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
    </>
  )
}

export default CoursesCoding;