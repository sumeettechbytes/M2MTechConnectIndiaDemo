import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFilter from '../../components/career-services/CourseTypeFilter';

const CareerServices = () => {

  return (
    <>
      <SEO title="Career Services" />
      <Layout>
        <BreadcrumbOne 
          title="Career Services"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Career Services"
        />
        <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
        <div className="edu-course-area course-three-wrapper edu-section-gap bg-color-white position-relative">
          <div className="container">
            <CourseTypeFilter itemToShow="9" showLoadMore='enable' />
          </div>
      </div>
          
          
          <div className="container eduvibe-animated-shape">
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-04-01.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-02-08.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-15.png"} alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CareerServices;