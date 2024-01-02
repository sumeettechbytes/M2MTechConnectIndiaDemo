import React from 'react';
import CoursesSectionTitle from './CoursesSectionTitle';
// import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Coding Fun with Python Group courses',
    info: "In this course bundle we will introduce Programming concepts with simple hands on fun Python projects. We start with simple drag and drop projects eventually progressing to learning coding using IDE.",
    numberOfCourses: '9',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Ecommerce',
    image: 'coding-fun-with-python-group-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/coding-fun-with-python-group-courses'
  },
  {
    id: 2,
    title: 'Design Thinking Group Courses',
    info: "In this course bundle we will introduce Design Thinking concepts with simple hands on fun projects. We start with 3D printing design, VR design and eventually progressing to learning AR design.",
    numberOfCourses: '12',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Business Intelligence',
    image: 'design-thinking-group-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/design-thinking-group-courses'
  },
  {
    id: 3,
    title: 'Data Science Group Courses',
    info: "In this course bundle we will go through Data Science (Data Analysis, Data Visualization) concepts with simple hands on projects.",
    numberOfCourses: '21',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Digital Technologies',
    image: 'data-science-data-analysis-and-data-visualization-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/data-science-intro-to-ml-group-courses'
  },
  {
    id: 4,
    title: 'No Code/Low Code Visual ML',
    info: "In this course bundle we will go through No Code, Low Code Visual Machine Learning Cloud tools based projects.",
    numberOfCourses: '6',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Marketing',
    image: 'data-science-data-analysis-and-data-visualization-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/no-code-low-code-visual-ml'
  },
  {
    id: 5,
    title: 'Machine Learning Group Courses',
    info: "In this course bundle we will go through Reinforcement Learning, Supervised Machine Learning and it's types Regression and Classification related concepts, Unsupervised Machine Learning, Decision Trees with simple hands on projects.",
    numberOfCourses: '29',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Marketing',
    image: 'data-science-data-analysis-and-data-visualization-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/machine-learning-group-courses'
  },
  {
    id: 6,
    title: 'ML & AI - Neural Networks',
    info: "In this course bundle we will go through Neural Network concepts and it's applications with simple hands on projects.",
    numberOfCourses: '10',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'IoT, CyberSecurity',
    image: 'ml-and-ai-neural-networks.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/ml-ai-neural-networks'
  },
  {
    id: 7,
    title: 'Coding & Design Thinking Group courses',
    info: "In this course bundle we will introduce Programming & Design Thinking concepts with simple hands on fun projects. We will cover Python based games, animation, graphic design, 3D printing, VR/AR design.",
    numberOfCourses: '21',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'IoT, Health Tech',
    image: 'coding-and-design-thinking-group-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/coding-design-thinking-group-courses'
  },
  {
    id: 8,
    title: 'Coding & Data Science Group courses',
    info: "In this course bundle we will introduce Programming concepts with simple hands on fun Python projects. Later in the course we introduce Data Science (Data Analysis, Data Visualization) concepts with hands on projects.",
    numberOfCourses: '21',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Advanced Manufacturing',
    image: 'data-science-data-analysis-and-data-visualization-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/coding-data-science-group-courses'
  },
  {
    id: 9,
    title: 'Data Science & Machine Learning Group courses',
    info: "Learn & Do hands-on projects in Data Analysis, Data Visualization, Visual Cloud ML tools, Reinforcement Learning, Supervised Machine Learning and it's types Regression, Classification related concepts, Unsupervised Machine Learning, Decision Trees.",
    numberOfCourses: '66',
    modeOfCourses: 'Virtual Self-paced',
    // category: 'Advanced Manufacturing',
    image: 'data-science-data-analysis-and-data-visualization-courses.webp',
    bundleLink: 'https://courses.m2mtechconnect.com/bundles/data-science-machine-learning-group-courses'
  },
  // {
  //   id: 12,
  //   title: 'Crop Yield Prediction Project',
  //   info: 'The main goal of this project is to develop a crop yield prediction system using machine learning techniques.',
  //   numberOfCourses: '12 weeks',
  //   modeOfCourses: 'Virtual Self-paced',
  //   category: 'AgTech',
  //   image: 'data-science-data-analysis-and-data-visualization-courses.webp',
  //   bundleLink: '/programs/crop-yield-prediction-project'
  // },
];

const CoursesBundles = () => {
  return (
    <>
      <div className="row g-5 mt-80">
        <div className="col-lg-12 mb-4">
          <CoursesSectionTitle 
            classes = "text-center"
            title = "Our Courses"
          />
        </div>
        { items.map( ( data , i ) => (
          <div key={data.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="service-card program-service-card service-card-1 radius-small">
              <div className="inner">
                <div className="thumbnail">
                  <a href={ data.bundleLink }>
                    <img src={`${process.env.PUBLIC_URL}/images/category/category-01/${ data.image }`} alt="Category Thumb" loading="lazy" />
                  </a>
                </div>
                <div className="content program-info">
                  <div className="program-info-content d-flex justify-content-between">
                    <span className="course-total"><i className="icon-Bag"></i> { data.numberOfCourses } courses</span>
                    <span className="course-total"><i className="icon-map-pin-line"></i> { data.modeOfCourses }</span>
                  </div>
                  <h6 className="title mt-3"><a href={ data.bundleLink }>{ data.title }</a></h6>
                  <p className="description">{ data.info }</p>
                  <div className="d-flex justify-content-center flex-wrap mt-3">
                    <a className="edu-btn btn-secondary mt-3" href={data.bundleLink}>Get Bundle<i className="icon-arrow-right-line-right"></i></a>
                    {/* <Link className="edu-btn btn-bg-alt mt-3" to={ data.link }>Find Out More<i className="icon-arrow-right-line-right"></i></Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) ) }
      </div>
    </>
  )
}

export default CoursesBundles;