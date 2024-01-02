import React, { useEffect } from 'react';
import { Link as ScrollTo } from 'react-scroll';

const FinTechBanner = () => {

//   useEffect(() => {
//       const feature1 = document.getElementById("BannerFeature1");
//       const feature2 = document.getElementById("BannerFeature2");
//       const feature3 = document.getElementById("BannerFeature3");
//       const feature4 = document.getElementById("BannerFeature4");
//       const feature5 = document.getElementById("BannerFeature5");
//       const feature6 = document.getElementById("BannerFeature6");
//       const feature7 = document.getElementById("BannerFeature7");
//       setTimeout(() => {
//           feature1.style.width = "255.19px";
//           feature1.style.backgroundColor = "var(--color-secondary)";
//           // feature1.style.width = "fit-content";
//           feature1.children[0].style.marginTop = 0;
//           feature1.children[0].style.opacity = 1;
//           feature1.children[1].style.opacity = 1;
//           feature1.children[1].style.width = "fit-content";
//       }, 500)
//       setTimeout(() => {
//           feature2.style.width = "280.25px";
//           feature2.style.backgroundColor = "var(--color-secondary)";
//           // feature2.style.width = "fit-content";
//           feature2.children[0].style.marginTop = 0;
//           feature2.children[0].style.opacity = 1;
//           feature2.children[1].style.opacity = 1;
//           feature2.children[1].style.width = "fit-content";
//       }, 600)
//       setTimeout(() => {
//           feature3.style.width = "303.09px";
//           feature3.style.backgroundColor = "var(--color-secondary)";
//           // feature3.style.width = "fit-content";
//           feature3.children[0].style.marginTop = 0;
//           feature3.children[0].style.opacity = 1;
//           feature3.children[1].style.opacity = 1;
//           feature3.children[1].style.width = "fit-content";
//       }, 700)
//       setTimeout(() => {
//           feature4.style.width = "219.58px";
//           feature4.style.backgroundColor = "var(--color-secondary)";
//           // feature4.style.width = "fit-content";
//           feature4.children[0].style.marginTop = 0;
//           feature4.children[0].style.opacity = 1;
//           feature4.children[1].style.opacity = 1;
//           feature4.children[1].style.width = "fit-content";
//       }, 800)
//       setTimeout(() => {
//           feature5.style.width = "315.14px";
//           feature5.style.backgroundColor = "var(--color-secondary)";
//           // feature5.style.width = "fit-content";
//           feature5.children[0].style.marginTop = 0;
//           feature5.children[0].style.opacity = 1;
//           feature5.children[1].style.opacity = 1;
//           feature5.children[1].style.width = "fit-content";
//       }, 900)
//       setTimeout(() => {
//           feature6.style.width = "217.2px";
//           feature6.style.backgroundColor = "var(--color-secondary)";
//           // feature6.style.width = "fit-content";
//           feature6.children[0].style.marginTop = 0;
//           feature6.children[0].style.opacity = 1;
//           feature6.children[1].style.opacity = 1;
//           feature6.children[1].style.width = "fit-content";
//       }, 1000)
//       setTimeout(() => {
//           feature7.style.width = "216.38px";
//           feature7.style.backgroundColor = "var(--color-secondary)";
//           // feature6.style.width = "fit-content";
//           feature7.children[0].style.marginTop = 0;
//           feature7.children[0].style.opacity = 1;
//           feature7.children[1].style.opacity = 1;
//           feature7.children[1].style.width = "fit-content";
//       }, 1100)
//   }, [])

  return (
    <div className="data-analytics-banner banner-style-1 banner-style-students-spotlight bg-image height-640 d-flex align-items-center">
        <div className="container eduvibe-animated-shape">
            <div className="row g-5 row--40 align-items-center">
                <div className="order-1 order-xl-1 col-lg-12 col-xl-6">
                    <div className="banner-left-content">
                        <div className="inner">
                            <div className="content">
                                <h1 className="title">Clean Technology</h1>
                                {/* <div className="read-more-btn">
                                    <a className="edu-btn" href="#">Register Now</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-1 order-xl-3"></div>
                <div className="col-xl-5 order-2 order-xl-3">
                    
                </div>
                {/* <div className="order-2 order-xl-3 col-lg-12 col-xl-5 d-flex flex-column align-items-start justify-content-center banner-right-content">
                    <div className="banner-feature mt-4" id="BannerFeature1">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Tailored Curriculum</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature2">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Industry Level Projects</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature3">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Personalized Mentorship</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature4">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Job-ready Skills</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature5">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Networking Opportunities</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature6">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">Career Support</p>
                        </div>
                    </div>
                    <div className="banner-feature mt-4" id="BannerFeature7">
                        <div className="icon">
                            <i className="icon-checkbox-circle-fill"></i>
                        </div>
                        <div className="feature-content">
                            <p className="feature-description">WIL, Internships</p>
                        </div>
                    </div>
                </div> */}
            </div>
            
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
              </div>
              <div className="shape-image shape-image-2">
                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-02.png`} alt="Shape Thumb" loading="lazy" />
              </div>
              <div className="shape-image shape-image-3">
                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-01.png`} alt="Shape Thumb" loading="lazy" />
              </div>
              <div className="shape-image shape-image-4">
                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-08.png`} alt="Shape Thumb" loading="lazy" />
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
  )
}

export default FinTechBanner;