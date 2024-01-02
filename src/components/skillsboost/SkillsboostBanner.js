import React, { useEffect } from 'react';
import { Link as ScrollTo } from 'react-scroll';

const SkillsboostBanner = ({
  setShowSkillsboostSignUpForm
}) => {

  useEffect(() => {
    const feature1 = document.getElementById("BannerFeature1");
    const feature2 = document.getElementById("BannerFeature2");
    const feature3 = document.getElementById("BannerFeature3");
    const feature4 = document.getElementById("BannerFeature4");
    const feature5 = document.getElementById("BannerFeature5");
    const feature6 = document.getElementById("BannerFeature6");
    // const feature7 = document.getElementById("BannerFeature7");
    setTimeout(() => {
      // Comment the below line
      feature1.style.width = "228.98px";
      feature1.style.backgroundColor = "var(--color-secondary)";
      // Uncomment following line and comment the above line mentioned to check the exact length in desktop mode. Update it and comment back.
      // feature1.style.width = "fit-content";
      feature1.children[0].style.marginTop = 0;
      feature1.children[0].style.opacity = 1;
      feature1.children[1].style.opacity = 1;
      feature1.children[1].style.width = "fit-content";
    }, 500)
    setTimeout(() => {
      feature2.style.width = "247.89px";
      feature2.style.backgroundColor = "var(--color-secondary)";
      // feature2.style.width = "fit-content";
      feature2.children[0].style.marginTop = 0;
      feature2.children[0].style.opacity = 1;
      feature2.children[1].style.opacity = 1;
      feature2.children[1].style.width = "fit-content";
    }, 600)
    setTimeout(() => {
      feature3.style.width = "191.88px";
      feature3.style.backgroundColor = "var(--color-secondary)";
      // feature3.style.width = "fit-content";
      feature3.children[0].style.marginTop = 0;
      feature3.children[0].style.opacity = 1;
      feature3.children[1].style.opacity = 1;
      feature3.children[1].style.width = "fit-content";
    }, 700)
    setTimeout(() => {
      feature4.style.width = "267.52px";
      feature4.style.backgroundColor = "var(--color-secondary)";
      // feature4.style.width = "fit-content";
      feature4.children[0].style.marginTop = 0;
      feature4.children[0].style.opacity = 1;
      feature4.children[1].style.opacity = 1;
      feature4.children[1].style.width = "fit-content";
    }, 800)
    setTimeout(() => {
      feature5.style.width = "246.22px";
      feature5.style.backgroundColor = "var(--color-secondary)";
      // feature5.style.width = "fit-content";
      feature5.children[0].style.marginTop = 0;
      feature5.children[0].style.opacity = 1;
      feature5.children[1].style.opacity = 1;
      feature5.children[1].style.width = "fit-content";
    }, 900)
    setTimeout(() => {
      feature6.style.width = "239.31px";
      feature6.style.backgroundColor = "var(--color-secondary)";
      // feature6.style.width = "fit-content";
      feature6.children[0].style.marginTop = 0;
      feature6.children[0].style.opacity = 1;
      feature6.children[1].style.opacity = 1;
      feature6.children[1].style.width = "fit-content";
    }, 1000)
    // setTimeout(() => {
    //   feature7.style.width = "215.58px";
    //   feature7.style.backgroundColor = "var(--color-secondary)";
    //   // feature7.style.width = "fit-content";
    //   feature7.children[0].style.marginTop = 0;
    //   feature7.children[0].style.opacity = 1;
    //   feature7.children[1].style.opacity = 1;
    //   feature7.children[1].style.width = "fit-content";
    // }, 1100)
  }, [])

  return (
  <>
    <div className="data-talent-banner banner-style-1 bg-image height-640 d-flex align-items-center">
      <div className="container eduvibe-animated-shape">
        <div className="row g-5 row--40 align-items-center">
          <div className="order-1 order-xl-1 col-lg-12 col-xl-6">
            <div className="banner-left-content">
              <div className="inner">
                <div className="content">
                  <h1 className="title">SkillsBoost</h1>
                  <p className="description">Accelerate your Data Science career! Unlock industry-aligned certifications with us. Gain practical skills from Certified Experts, propelling you towards excellence in the dynamic world of data. Elevate your expertise and open doors to exciting opportunities. Your journey to success starts here!</p>
                  <div className="read-more-btn banner-btns">
                    {/* <button className="edu-btn" onClick={() => setShowEmployerRegisterForm(true)}>Employer Login</button>
                    <button className="edu-btn btn-secondary" onClick={() => setShowUserInterestForm(true)}>Jobseekers Login</button> */}
                    {/* <a className="edu-btn" href="https://form.jotform.com/m2mtech/employer-register">Employer Login</a> */}
                    {/* <a className="edu-btn btn-secondary" href="https://form.jotform.com/m2mtech/cohort-sign-up">Jobseekers Login</a> */}
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/skillsboost-sign-up">Enroll Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 order-xl-3"></div>
          <div className="order-2 order-xl-3 col-lg-12 col-xl-4 d-flex flex-column align-self-end justify-content-center banner-right-content">
            <div className="banner-feature mt-4" id="BannerFeature1">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">Expert Guidance</p>
              </div>
            </div>
            <div className="banner-feature mt-4" id="BannerFeature2">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">Cloud Subscription</p>
              </div>
            </div>
            <div className="banner-feature mt-4" id="BannerFeature3">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">Get Certified</p>
              </div>
            </div>
            <div className="banner-feature mt-4" id="BannerFeature4">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">Workforce Readiness</p>
              </div>
            </div>
            <div className="banner-feature mt-4" id="BannerFeature5">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">Networking Events</p>
              </div>
            </div>
            <div className="banner-feature mt-4" id="BannerFeature6">
              <div className="icon">
                <i className="icon-checkbox-circle-fill"></i>
              </div>
              <div className="feature-content">
                <p className="feature-description">WIL Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down-btn">
        <ScrollTo
          className="round-btn"
          to="introduction"
          spy={true}
          smooth={true}
          duration={200}
        >
          <i className="icon-arrow-down-s-line"></i>
        </ScrollTo>
      </div>      
    </div>
  </>
  )
}

export default SkillsboostBanner;