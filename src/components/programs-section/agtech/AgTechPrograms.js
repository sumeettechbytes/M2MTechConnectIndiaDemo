import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Precision Agriculture for Canadian Crops',
    info: 'Develop AI-driven precision agriculture solutions that analyze data from various sensors and satellite imagery to optimize crop planting, irrigation, and fertilization for Canadian crops like wheat, canola, and barley.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/precision-agriculture-for-canadian-crops.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Climate-Resilient Crop Selection',
    info: 'Create machine learning models that recommend climate-resilient crop varieties for Canadian farmers based on historical weather data and climate change projections.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/climate-resilient-crop-selection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Automated Pest and Disease Detection',
    info: 'Implement computer vision and AI algorithms to detect and diagnose pests and diseases in Canadian crops, enabling early intervention and reduced chemical usage.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/automated-pest-and-diesease-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Smart Irrigation for Drought-Prone Regions',
    info: 'Develop IoT-based smart irrigation systems that conserve water resources in drought-prone areas like the Canadian Prairies, optimizing water usage for crops.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/smart-irrigation-for-drought-prone-regions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Sustainable Livestock Farming',
    info: 'Use data analytics and AI to optimize livestock farming practices, including animal health monitoring, feed management, and sustainable grazing strategies.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/sustainable-livestock-farming.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'Food Traceability for Canadian Products',
    info: 'Implement blockchain and AI technologies to enable food traceability from farm to table, ensuring the safety and authenticity of Canadian agricultural products.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/food-traceability-for-canadian-products.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Indigenous Farming Knowledge Integration',
    info: 'Collaborate with Indigenous communities to integrate traditional farming knowledge with modern data science and AI techniques for sustainable and culturally relevant agricultural practices.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/indigenous-farming-knowledge-integration.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Climate Change Impact Assessment',
    info: 'Utilize data science to assess the impact of climate change on Canadian agriculture, identifying strategies to mitigate risks and adapt to changing environmental conditions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/climate-change-impact-assessment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'Agricultural Robotics for Harvesting',
    info: 'Research and develop AI-powered robots and drones for harvesting Canadian crops, addressing labor shortages and improving efficiency.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/agricultural-robotics-for-harvesting.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Soil Health Monitoring',
    info: 'Implement IoT sensors and AI analytics to monitor and improve soil health in Canadian farmlands, ensuring long-term agricultural sustainability.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/soil-health-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 11,
    title: 'Farm Management Software for Smallholders',
    info: 'Create user-friendly AI-driven farm management software tailored to the needs of small-scale Canadian farmers, helping them make data-driven decisions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/farm-management-software-for-smallholders.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 12,
    title: 'Predictive Farm Equipment Maintenance',
    info: 'Develop machine learning models that predict maintenance needs for farm equipment, reducing downtime and repair costs for Canadian farmers.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'AgTech',
    image: 'research/agtech/predictive-farm-equipment-maintenance.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const AgTechPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "AgTech Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaboration with Canadian agricultural organizations, research institutions, government agencies, and Indigenous communities is crucial for the success of these research projects. These initiatives can enhance the resilience, productivity, and sustainability of Canada's agricultural sector.</p>
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

export default AgTechPrograms;