import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import CoursesDesignBanner from '../../components/courses/courses-design/CoursesDesignBanner';
import CoursesDesignPotentialJobs from '../../components/courses/courses-design/CoursesDesignPotentialJobs';
import CoursesDesignWhyChooseSuchACareer from '../../components/courses/courses-design/CoursesDesignWhyChooseSuchACareer';
import CoursesDesignCurriculum from '../../components/courses/courses-design/CoursesDesignCurriculum';
import CoursesDesignEmployerLedWIL from '../../components/courses/courses-design/CoursesDesignEmployerLedWIL';
// import CoursesDesignPastStudentsProjects from '../../components/courses/courses-design/CoursesDesignPastStudentsProjects';
// import CoursesDesignFAQ from '../../components/courses/courses-design/CoursesDesignFAQ';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';
import CoursesDesignDescription from '../../components/courses/courses-design/CoursesDesignDescription';

const CoursesDesign = ({
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
      title="Design"
      description="Join a cohort to learn to design a website or mobile app. Get hands-on project experience."
      />
        <HeaderTwo styles="header-transparent header-style-2" searchDisable />
        <div className="eduvibe-contact-us edu-contact-us-area mt-0">
          <div className="eduvibe-animated-shape">
            <CoursesDesignBanner />
            <CoursesDesignDescription />
            <CoursesDesignWhyChooseSuchACareer />
            <CoursesDesignCurriculum setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
            <CoursesDesignPotentialJobs />
            <CoursesDesignEmployerLedWIL />
            {/* <CoursesDesignPastStudentsProjects />
            <CoursesDesignFAQ /> */}
          </div>
        </div>
      <FooterOne />
      {showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
    </>
  )
}

export default CoursesDesign;