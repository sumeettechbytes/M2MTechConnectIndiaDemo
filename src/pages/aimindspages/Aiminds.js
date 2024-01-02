import React from 'react';
import SEO from '../../common/SEO';
// import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import AimindsBanner from '../../components/aiminds/AimindsBanner';
import AimindsDescription from '../../components/aiminds/AimindsDescription';
// import AimindsFAQs from '../../components/aiminds/AimindsFAQs';
import AimindsWhyChooseUs from '../../components/aiminds/AimindsWhyChooseUs';
// import AimindsSignUpForm from '../../components/form/aiminds-form/AimindsSignUpForm';

const Aiminds = ({
	showAimindsSignUpForm,
	setShowAimindsSignUpForm
	}) => {
	return (
		<>
			<SEO
				title="Aiminds"
				description="Unlock 80 hours, fully subsidized, Digital Tech internships for Canadian employers, to build Aiminds pipeline using our Upskilled Talents."
			/>
			<HeaderTwo styles="header-transparent header-style-2" searchDisable />
			<AimindsBanner setShowAimindsSignUpForm={setShowAimindsSignUpForm} />
			<AimindsDescription />
			<AimindsWhyChooseUs setShowAimindsSignUpForm={setShowAimindsSignUpForm} />
			{/* <AimindsFAQs /> */}
			<FooterOne />
			{/* {showAimindsSignUpForm && <AimindsSignUpForm setShowAimindsSignUpForm={setShowAimindsSignUpForm} />} */}
		</>
    )
}
export default Aiminds;