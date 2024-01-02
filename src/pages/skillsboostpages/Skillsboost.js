import React from 'react';
import SEO from '../../common/SEO';
// import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';

import HeaderTwo from '../../common/header/HeaderTwo';
import FooterOne from '../../common/footer/FooterOne';
import SkillsboostBanner from '../../components/skillsboost/SkillsboostBanner';
import SkillsboostDescription from '../../components/skillsboost/SkillsboostDescription';
// import SkillsboostFAQs from '../../components/skillsboost/SkillsboostFAQs';
import SkillsboostWhyChooseUs from '../../components/skillsboost/SkillsboostWhyChooseUs';
import SkillsboostSignUpForm from '../../components/form/skillsboost-form/SkillsboostSignUpForm';

const Skillsboost = ({
	showSkillsboostSignUpForm,
	setShowSkillsboostSignUpForm
	}) => {
	return (
		<>
			<SEO
				title="Skillsboost"
				description="Unlock 80 hours, fully subsidized, Digital Tech internships for Canadian employers, to build Skillsboost pipeline using our Upskilled Talents."
			/>
			<HeaderTwo styles="header-transparent header-style-2" searchDisable />
			<SkillsboostBanner setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />
			<SkillsboostDescription />
			<SkillsboostWhyChooseUs setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />
			{/* <SkillsboostFAQs /> */}
			<FooterOne />
			{showSkillsboostSignUpForm && <SkillsboostSignUpForm setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />}
		</>
    )
}
export default Skillsboost;