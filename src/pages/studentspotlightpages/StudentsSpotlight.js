import React from 'react';
import SEO from '../../common/SEO';
// import RegisterProgramForm from '../../components/form/register-program-form/RegisterProgramForm';
import HeaderTwo from '../../common/header/HeaderTwo';
import StudentsSpotlightBanner from '../../components/students-spotlight/StudentsSpotlightBanner';
import StudentsSpotlightAchievements from '../../components/students-spotlight/StudentsSpotlightAchievements';
import StudentsSpotlightBlogs from '../../components/students-spotlight/StudentsSpotlightBlogs';
import FooterOne from '../../common/footer/FooterOne';
import UserInterestForm from '../../components/form/user-interest-form/UserInterestForm';

const StudentsSpotlight = ({
    showUserInterestForm,
    setShowUserInterestForm,
    download,
    downloadFileName
    }) => {
    return (
        <>
            <SEO
            title="Students Spotlight"
            description="A glance at how our students are benefiting from our programs."
            />
                <HeaderTwo styles="header-transparent header-style-2" searchDisable />
                <div className="eduvibe-contact-us edu-contact-us-area mt-0">
                    <div className="eduvibe-animated-shape">
                        <StudentsSpotlightBanner setShowUserInterestForm={setShowUserInterestForm} download={download} downloadFileName={downloadFileName} />
                        <StudentsSpotlightAchievements />
                        <StudentsSpotlightBlogs />
                        
                        {/* <ProgramsSection setShowRegisterForm={setShowRegisterForm} /> */}

                        {/* <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-04-01.png"} alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-02-08.png"} alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-3">
                                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-15.png"} alt="Shape Thumb" />
                            </div>
                        </div> */}
                    </div>
                </div>
            {showUserInterestForm && <UserInterestForm setShowUserInterestForm={setShowUserInterestForm} />}
            <FooterOne />
        </>
    )
}
export default StudentsSpotlight;