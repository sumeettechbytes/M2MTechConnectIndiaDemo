import React, { useRef } from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerOne from '../../components/banner/BannerOne';
import HomeOneAbout from '../../components/home-one/HomeOneAbout';
import HomeOneWhatWeDo from '../../components/home-one/HomeOneWhatWeDo';
import HomeOneHowWeDoIt from '../../components/home-one/HomeOneHowWeDoIt';
import HomeOneWhatYouWillLearn from '../../components/home-one/HomeOneWhatYouWillLearn';
import HomeOnePathsYouCanFollow from '../../components/home-one/HomeOnePathsYouCanFollow';
import HomeOneSuccessStory from '../../components/home-one/HomeOneSuccessStory';
import HomeOneCategory from '../../components/home-one/HomeOneCategory';
// import HomeOneCourses from '../../components/home-one/HomeOneCourses';
import TestimonialSectionFour from '../../components/testimonial-section/TestimonialSectionFour';
import VideoSectionTwo from '../../components/video-section/VideoSectionTwo';
import NewsLettterOne from '../../components/newsletter/NewsLettterOne';
import FooterOne from '../../common/footer/FooterOne';
import HomeOnePrograms from '../../components/home-one/HomeOnePrograms';
import HomeOneStudentsSpotlightBlogs from '../../components/home-one/HomeOneStudentsSpotlightBlogs';
import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import UserInterestForm from '../../components/form/user-interest-form/UserInterestForm';
import SkillsboostSignUpForm from '../../components/form/skillsboost-form/SkillsboostSignUpForm';

const HomeOne = ({
  showUserInterestForm,
  setShowUserInterestForm,
  showRegisterForm,
  setShowRegisterForm,
  showSkillsboostSignUpForm,
  setShowSkillsboostSignUpForm
  }) => {

  const GoogleReviews = useRef();

  return (
    <>
      <SEO
        title="M2M Tech"
        description="Join a cohort and revolutionize your learning experience where collaboration, community and personalization meet!"
      />

      <HeaderTwo styles="header-transparent header-style-2" searchDisable />

      <BannerOne
        setShowUserInterestForm={setShowUserInterestForm}
        GoogleReviews={GoogleReviews}
      />
        
      <HomeOnePrograms setShowUserInterestForm={setShowUserInterestForm} setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />

      <HomeOneAbout />

      <HomeOneWhatWeDo />

      <HomeOneHowWeDoIt />

      <HomeOneWhatYouWillLearn />

      <HomeOnePathsYouCanFollow />

      <HomeOneCategory />

      {/* <HomeOneCourses /> */}

      <VideoSectionTwo />

      <HomeOneStudentsSpotlightBlogs />

      <HomeOneSuccessStory />

      <TestimonialSectionFour GoogleReviews={GoogleReviews} />

      <NewsLettterOne />

      <FooterOne />

      {showUserInterestForm && <UserInterestForm setShowUserInterestForm={setShowUserInterestForm} />}
      {/* {showRegisterForm && <RegisterProgramForm setShowRegisterForm={setShowRegisterForm} />} */}
      {showSkillsboostSignUpForm && <SkillsboostSignUpForm setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />}
    </>
  )
}

export default HomeOne;