import React, { useRef } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CoursesDescription from '../../components/courses/CoursesDescription';
import CoursesBundles from '../../components/courses/CoursesBundles';
import TestimonialSectionFour from '../../components/testimonial-section/TestimonialSectionFour';
import CoursesOurStory from '../../components/courses/CoursesOurStory';

const Courses = () => {
  const GoogleReviews = useRef();
  return (
    <>
      <SEO
      title="Courses"
      description="We believe in providing diverse learning opportunities to suit different learning preferences and career goals."
      />
      <Layout>
        <BreadcrumbOne 
          title="Courses"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Courses"
        />
        <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <CoursesDescription />
            <CoursesBundles />
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
        <TestimonialSectionFour GoogleReviews={GoogleReviews} />
        <CoursesOurStory />
      </Layout>
    </>
  )
}

export default Courses;