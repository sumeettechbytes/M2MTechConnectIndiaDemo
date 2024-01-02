import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import CoursesMachineLearningBanner from '../../components/courses/courses-machine-learning/CoursesMachineLearningBanner';
import CoursesMachineLearningPotentialJobs from '../../components/courses/courses-machine-learning/CoursesMachineLearningPotentialJobs';
import CoursesMachineLearningWhyChooseSuchACareer from '../../components/courses/courses-machine-learning/CoursesMachineLearningWhyChooseSuchACareer';
import CoursesMachineLearningCurriculum from '../../components/courses/courses-machine-learning/CoursesMachineLearningCurriculum';
import CoursesMachineLearningEmployerLedWIL from '../../components/courses/courses-machine-learning/CoursesMachineLearningEmployerLedWIL';
// import CoursesMachineLearningPastStudentsProjects from '../../components/courses/courses-machine-learning/CoursesMachineLearningPastStudentsProjects';
// import CoursesMachineLearningFAQ from '../../components/courses/courses-machine-learning/CoursesMachineLearningFAQ';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';
import CoursesMachineLearningDescription from '../../components/courses/courses-machine-learning/CoursesMachineLearningDescription';

const CoursesMachineLearning = ({
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
      title="Machine Learning"
      description="Join a cohort to learn to give computers the ability to learn without being explicitly programmed. Get hands-on project experience."
      />
        <HeaderTwo styles="header-transparent header-style-2" searchDisable />
        <div className="eduvibe-contact-us edu-contact-us-area mt-0">
          <div className="eduvibe-animated-shape">
            <CoursesMachineLearningBanner />
            <CoursesMachineLearningDescription />
            <CoursesMachineLearningWhyChooseSuchACareer />
            <CoursesMachineLearningCurriculum setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
            <CoursesMachineLearningPotentialJobs />
            <CoursesMachineLearningEmployerLedWIL />
            {/* <CoursesMachineLearningPastStudentsProjects />
            <CoursesMachineLearningFAQ /> */}
          </div>
        </div>
      <FooterOne />
      {showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
    </>
  )
}

export default CoursesMachineLearning;