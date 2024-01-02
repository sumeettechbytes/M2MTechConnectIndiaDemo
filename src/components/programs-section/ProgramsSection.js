import React from 'react';
import { Link } from 'react-router-dom';

const items = [
    // {
    //     id: 1,
    //     title: 'Data Analysis & Data Visualization',
    //     info: "We'd like students to help analyze datasets to draw helpful insights. We would like to enhance our marketing campaigns through re-evaluating our customer segmentation. We would like to implement cutting edge technology to analyze our customer segmentation, relative to each of our products and services. From the analysis, we hope to gain insights that will enhance our strategy and help us refocus our product/service marketing.",
    //     numberOfCourses: '12 weeks',
    //     modeOfCourses: 'Anywhere',
    //     category: 'Digital Technologies',
    //     image: 'project-details/data-analysis-and-data-visualization_thumbnail.webp',
    //     link: '/careers/work-integrated-learning/data-analysis-and-data-visualization'
    // },
    {
        id: 1,
        title: 'Supply Chain Optimization',
        info: 'The goal of this project is to create an efficient supply chain optimization system using Python libraries such as NumPy and Pandas.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Ecommerce',
        image: 'project-details/supply-chain-optimization_thumbnail.webp',
        link: '/careers/work-integrated-learning/supply-chain-optimization'
    },
    {
        id: 2,
        title: 'Business Intelligence Data Visualization Project',
        info: 'The goal of this project is to identify patterns and trends in the available dataset.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Business Intelligence',
        image: 'project-details/business-intelligence-data-visualization-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/business-intelligence-data-visualization-project'
    },
    {
        id: 3,
        title: 'Clean Energy Management in Smart Grids',
        info: 'The goal of this project is to create a clean energy management system in smart grids using reinforcement learning.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'CleanTech',
        image: 'project-details/clean-energy-management-in-smart-grids_thumbnail.webp',
        link: '/careers/work-integrated-learning/clean-energy-management-in-smart-grids'
    },
    {
        id: 4,
        title: 'Medical Diagnosis Project',
        info: 'The main goal of this project is to create a medical diagnosis system using classification supervised learning. This system will be used to accurately diagnose medical conditions based on patient data.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Health Tech',
        image: 'project-details/medical-diagnosis-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/medical-diagnosis-project'
    },
    {
        id: 5,
        title: 'Housing Market Price Prediction',
        info: 'The goal of this project is to create a housing market price prediction using regression supervised learning.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'FinTech',
        image: 'project-details/housing-market-price-prediction_thumbnail.webp',
        link: '/careers/work-integrated-learning/housing-market-price-prediction'
    },
    {
        id: 6,
        title: 'Clean Energy Consumption Forecasting Project',
        info: 'The goal of this project is to create a forecasting system using Regression Supervised Machine Learning to predict Clean Energy consumption.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'CleanTech',
        image: 'project-details/clean-energy-consumption-forecasting-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/clean-energy-consumption-forecasting-project'
    },
    {
        id: 7,
        title: 'Customer Segmentation',
        info: 'The goal of this project is to enhance our marketing campaigns through re-evaluating our customer segmentation. We would like to implement cutting edge technology to analyze our customer segmentation, relative to each of our products and services. From the analysis, we hope to gain insights that will enhance our strategy and help us refocus our product/service marketing.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Marketing',
        image: 'project-details/customer-segmentation_thumbnail.webp',
        link: '/careers/work-integrated-learning/customer-segmentation'
    },
    {
        id: 8,
        title: 'Intrusion Detection Project',
        info: 'The goal of this project is to create an IoT Intrusion Detection system that uses Decision Trees to identify anomalous activities that may indicate potential attacks or unauthorized access attempts. This will help in early detection and prevention of security breaches.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'IoT, CyberSecurity',
        image: 'project-details/intrusion-detection-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/intrusion-detection-project'
    },
    {
        id: 9,
        title: 'Healthcare Monitoring and Management Project',
        info: 'The goal of this project is to create a Healthcare Monitoring and Management system that uses IoT devices such as wearables, medical sensors and connected healthcare systems to collect patient data using Deep Learning.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'IoT, Health Tech',
        image: 'project-details/healthcare-monitoring-and-management-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/healthcare-monitoring-and-management-project'
    },
    {
        id: 10,
        title: 'Predictive Maintenance Solution',
        info: 'The goal of this project is to build a predictive maintenance solution using Deep Learning.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Advanced Manufacturing',
        image: 'project-details/predictive-maintenance-solution_thumbnail.webp',
        link: '/careers/work-integrated-learning/predictive-maintenance-solution'
    },
    {
        id: 11,
        title: 'Artificial Intelligence & Machine Learning Application',
        info: 'We would like to apply the latest AI and machine learning techniques to our dataset to gather new insights that our organization can leverage.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'Digital Technologies',
        image: 'project-details/artificial-intelligence-and-machine-learning-application_thumbnail.webp',
        link: '/careers/work-integrated-learning/artificial-intelligence-and-machine-learning-application'
    },
    {
        id: 12,
        title: 'Crop Yield Prediction Project',
        info: 'The main goal of this project is to develop a crop yield prediction system using machine learning techniques.',
        numberOfCourses: '12 weeks',
        modeOfCourses: 'Anywhere',
        category: 'AgTech',
        image: 'project-details/crop-yield-prediction-project_thumbnail.webp',
        link: '/careers/work-integrated-learning/crop-yield-prediction-project'
    },
];

const ProgramsSection = ( {
  setShowUserInterestForm
  } ) => {
  return (
    <>
      <div className="home-one-cat edu-service-area service-wrapper-1 edu-section-gap bg-image" id="Work_Integrated_Learning">
        <div className="container eduvibe-animated-shape">
          <div className="row g-5">
            { items.map( ( data , i ) => (
              <div key={data.id} className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="service-card program-service-card service-card-1 radius-small">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href={ data.link }>
                        <img src={`${process.env.PUBLIC_URL}/images/${ data.image }`} alt="Category Thumb" loading="lazy" />
                      </a>
                    </div>
                    <div className="content program-info">
                      <div className="program-info-content d-flex justify-content-between">
                        <span className="course-total"><i className="icon-time-line"></i> { data.numberOfCourses }</span>
                        <span className="course-total"><i className="icon-presentation"></i> { data.category }</span>
                      </div>
                      <h6 className="title mt-3"><a href={ data.link }>{ data.title }</a></h6>
                      <p className="description">{ data.info }</p>
                      <div className="d-flex justify-content-between flex-wrap mt-3">
                        <a className="edu-btn btn-secondary mt-3" href="https://form.jotform.com/m2mtech/wil-programs-sign-up">Register Now<i className="icon-arrow-right-line-right"></i></a>
                        <Link className="edu-btn btn-bg-alt mt-3" to={ data.link }>Find Out More<i className="icon-arrow-right-line-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) ) }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgramsSection;