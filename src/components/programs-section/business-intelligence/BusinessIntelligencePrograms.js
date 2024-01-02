import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Customer Analytics for Retailers',
    info: 'Develop AI-driven models to analyze customer behavior and preferences in the Canadian retail sector. Implement recommendation systems that personalize shopping experiences for Canadian consumers based on local trends and preferences.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/customer-analytics-for-retailers.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Tourism Analytics for Canadian Destinations',
    info: 'Use data science to analyze tourism data and predict trends for popular Canadian destinations. Develop tools that assist local businesses in optimizing services and marketing strategies for tourists.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/tourism-analytics-for-canadian-destinations.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Financial Fraud Detection for Canadian Banks',
    info: 'Build machine learning models to detect financial fraud and money laundering in the Canadian banking industry. Develop real-time fraud detection systems to protect Canadian financial institutions and their customers.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/financial-fraud-detection-for-canadian-banks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Canadian E-commerce Optimization',
    info: 'Apply data analytics and AI to optimize supply chain and logistics operations for Canadian e-commerce businesses. Enhance product recommendation engines for Canadian online shoppers.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/canadian-e-commerce-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Natural Resource Analytics for Resource Companies',
    info: 'Utilize data science to analyze data from resource extraction industries such as mining and forestry. Develop predictive maintenance models for Canadian resource companies to optimize machinery and reduce environmental impact.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/natural-resource-analytics-for-resource-companies.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'Healthcare Analytics for Canadian Hospitals',
    info: 'Implement AI-driven predictive models to assist Canadian healthcare providers in resource allocation and patient care optimization. Develop tools for analyzing public health data and forecasting disease outbreaks.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/healthcare-analytics-for-canadian-hospitals.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Climate Change Impact Analysis for Canadian Agriculture',
    info: 'Use data science and AI to assess the impact of climate change on Canadian agriculture. Develop decision support systems for Canadian farmers to adapt to changing environmental conditions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/climate-change-impact-analysis-for-canadian-agriculture.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Canadian Real Estate Market Analysis',
    info: 'Build predictive models for the Canadian real estate market to aid investors, homebuyers, and sellers in making informed decisions. Analyze local real estate trends and housing affordability in Canadian cities.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/canadian-real-extate-market-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'Energy Efficiency for Canadian Businesses',
    info: 'Develop AI-driven solutions to optimize energy consumption and reduce greenhouse gas emissions for Canadian businesses. Offer tools for Canadian organizations to meet sustainability goals.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/energy-efficiency-for-banadian-businesses.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Public Policy Analysis',
    info: 'Apply data science and machine learning to analyze government policies and their impact on the Canadian economy. Provide insights to policymakers on economic growth, employment, and social well-being.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Business Intelligence',
    image: 'research/business-intelligence/public-policy-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const BusinessIntelligencePrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "Business Intelligence Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaboration with Canadian businesses, government agencies, and academic institutions can help drive these research projects forward. These initiatives can contribute significantly to Canada's business intelligence landscape and economic growth.</p>
          </div>
          <div className="col-lg-12 mt--40">
            <div className="row g-5">
              { items.map( ( data , i ) => (
                <div key={data.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="research-projects service-card program-service-card service-card-1 radius-small">
                    <div className="inner">
                      <div className="thumbnail">
                        <img src={`${process.env.PUBLIC_URL}/images/${ data.image }`} alt="Category Thumb" loading="lazy" />
                      </div>
                      <div className="content program-info">
                        <h6 className="title">{ data.title }</h6>
                        <p className="description">{ data.info }</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default BusinessIntelligencePrograms;