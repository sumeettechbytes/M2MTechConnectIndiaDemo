import React from 'react';
import SEO from '../../common/SEO';
// import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import DataTalentBanner from '../../components/data-talent/DataTalentBanner';
import DataTalentDescription from '../../components/data-talent/DataTalentDescription';
// import DataTalentFAQs from '../../components/data-talent/DataTalentFAQs';
import DataTalentWhyChooseUs from '../../components/data-talent/DataTalentWhyChooseUs';
import UserInterestForm from '../../components/form/user-interest-form/UserInterestForm';
import EmployerRegisterForm from '../../components/form/employer-register-form/EmployerRegisterForm';
import DownloadCurriculumSignUp from '../../components/form/download-curriculum-form/DownloadCurriculumnSignUp';

const DataTalent = ({
	showUserInterestForm,
	setShowUserInterestForm,
	employerRegisterForm,
	setShowEmployerRegisterForm,
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
				title="DataTalent"
				description="Unlock 80 hours, fully subsidized, Digital Tech internships for Canadian employers, to build DataTalent pipeline using our Upskilled Talents."
			/>
			<HeaderTwo styles="header-transparent header-style-2" searchDisable />
			<DataTalentBanner setShowUserInterestForm={setShowUserInterestForm} setShowEmployerRegisterForm={setShowEmployerRegisterForm} />
			<DataTalentDescription setShowUserInterestForm={setShowUserInterestForm} setShowEmployerRegisterForm={setShowEmployerRegisterForm} />
			<DataTalentWhyChooseUs showUserInterestForm={showUserInterestForm} setShowUserInterestForm={setShowUserInterestForm} employerRegisterForm={employerRegisterForm} setShowEmployerRegisterForm={setShowEmployerRegisterForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} />
			{/* <DataTalentFAQs /> */}
			<FooterOne />
			{showUserInterestForm && <UserInterestForm setShowUserInterestForm={setShowUserInterestForm} />}
			{employerRegisterForm && <EmployerRegisterForm setShowEmployerRegisterForm={setShowEmployerRegisterForm} />}
			{showDownloadCurriculumForm && <DownloadCurriculumSignUp setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={Download} downloadFileName={downloadFileName} formName={formName} formSubmitFrom={formSubmitFrom} />}
		</>
    )
}
export default DataTalent;