import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import CoursesDeepLearningBanner from '../../components/courses/courses-deep-learning/CoursesDeepLearningBanner';
import CoursesDeepLearningPotentialJobs from '../../components/courses/courses-deep-learning/CoursesDeepLearningPotentialJobs';
import CoursesDeepLearningWhyChooseSuchACareer from '../../components/courses/courses-deep-learning/CoursesDeepLearningWhyChooseSuchACareer';
import CoursesDeepLearningCurriculum from '../../components/courses/courses-deep-learning/CoursesDeepLearningCurriculum';
import CoursesDeepLearningEmployerLedWIL from '../../components/courses/courses-deep-learning/CoursesDeepLearningEmployerLedWIL';
// import CoursesDeepLearningPastStudentsProjects from '../../components/courses/courses-deep-learning/CoursesDeepLearningPastStudentsProjects';
// import CoursesDeepLearningFAQ from '../../components/courses/courses-deep-learning/CoursesDeepLearningFAQ';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';
import CoursesDeepLearningDescription from '../../components/courses/courses-deep-learning/CoursesDeepLearningDescription';

const CoursesDeepLearning = ({
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
      title="Deep Learning"
      description="Join a cohort to learn to design artificial neural networks to model and solve complex problems. Get hands-on project experience."
      />
        <HeaderTwo styles="header-transparent header-style-2" searchDisable />
        <div className="eduvibe-contact-us edu-contact-us-area mt-0">
          <div className="eduvibe-animated-shape">
            <CoursesDeepLearningBanner />
            <CoursesDeepLearningDescription />
            <CoursesDeepLearningWhyChooseSuchACareer />
            <CoursesDeepLearningCurriculum setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
            <CoursesDeepLearningPotentialJobs />
            <CoursesDeepLearningEmployerLedWIL />
            {/* <CoursesDeepLearningPastStudentsProjects />
            <CoursesDeepLearningFAQ /> */}
          </div>
        </div>
      <FooterOne />
      {showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
    </>
  )
}

export default CoursesDeepLearning;