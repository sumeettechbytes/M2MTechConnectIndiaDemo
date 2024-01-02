import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Renewable Energy Forecasting',
    info: 'Develop advanced machine learning models to predict renewable energy generation, such as wind and solar power, based on historical data and weather patterns. This can help optimize the integration of renewable energy into the grid, which is a significant focus in Canada.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/renewable-energy-forecasting.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Electric Vehicle Charging Optimization',
    info: 'Create algorithms that optimize the charging schedules for electric vehicles in a way that minimizes grid stress and costs while ensuring that vehicles are charged when needed. This project can aid in the adoption of electric vehicles across Canada.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/electric-vehicle-charging-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Waste Management and Recycling',
    info: 'Use AI and computer vision to automate and optimize waste sorting and recycling processes. Implement smart bins that can identify recyclable materials and reduce contamination, improving recycling rates.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/waste-management-and-recycling.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Energy Efficiency in Buildings',
    info: 'Develop AI-driven solutions to optimize energy consumption in commercial and residential buildings. Use data to control heating, cooling, and lighting systems for maximum efficiency, reducing energy costs and carbon emissions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/energy-efficiency-in-buildings.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Carbon Footprint Tracking',
    info: 'Create a platform that enables individuals and businesses to track and reduce their carbon footprints. Utilize AI to provide personalized recommendations on sustainable practices, transportation choices, and energy consumption reductions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/carbon-footprint-tracking.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'Natural Resource Management',
    info: 'Apply data science and AI techniques to monitor and manage natural resources, such as water and forests. Develop predictive models to assess the impact of climate change on these resources and propose adaptive management strategies.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/natural-resource-management.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Clean Energy Investment Analytics',
    info: 'Build machine learning models to assess the potential and risks associated with investments in clean energy projects. Provide investors with data-driven insights into the profitability and sustainability of CleanTech ventures.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/clearn-energy-investment-analytics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Environmental Monitoring with IoT',
    info: 'Deploy IoT sensors to collect environmental data (e.g., air quality, water quality, soil conditions) and use machine learning to analyze and predict environmental changes, helping with early warning systems for pollution or climate-related events.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/enviromental-monitorying-with-iot.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'Grid Optimization and Demand Response',
    info: 'Develop AI algorithms to optimize the distribution and usage of energy in the grid, integrating renewable energy sources and implementing demand response strategies to balance supply and demand.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/grid-optimization-and-demand-response.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Clean Energy Policy Analysis',
    info: 'Analyze the impact of government policies and regulations on CleanTech adoption and sustainability. Use data analytics to assess the effectiveness of incentives, subsidies, and carbon pricing mechanisms.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'CleanTech',
    image: 'research/clean-technology/clean-energy-policy-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const CleanTechnologyPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "Clean Technology Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">These research projects can make a significant contribution to Canada's CleanTech sector, addressing sustainability challenges and promoting the transition to a cleaner and more sustainable energy future. Collaboration with government agencies, industry partners, and academic institutions can help facilitate these projects and drive innovation in CleanTech.</p>
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

export default CleanTechnologyPrograms;