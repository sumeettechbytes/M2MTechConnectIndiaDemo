import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Predictive Maintenance for Manufacturing Equipment',
    info: 'Develop machine learning models to predict when manufacturing equipment (e.g., CNC machines, robotics) requires maintenance, reducing downtime and maintenance costs for Canadian manufacturing companies.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/predictive-maintenance-for-manufacturing-equipment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Quality Control and Defect Detection',
    info: 'Implement computer vision and AI algorithms to automatically detect defects and anomalies in manufacturing processes, improving product quality and reducing waste in industries like automotive manufacturing.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/quality-control-and-defect-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Supply Chain Optimization',
    info: 'Use data analytics and AI to optimize supply chain operations, including inventory management, demand forecasting, and supplier selection, benefiting various sectors like aerospace, automotive, and electronics manufacturing.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/supply-chain-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Energy Efficiency in Manufacturing',
    info: 'Apply data science and AI techniques to optimize energy consumption in manufacturing facilities, helping Canadian manufacturers reduce energy costs and meet sustainability goals.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/energy-efficiency-in-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Customized Manufacturing',
    info: 'Develop AI-driven systems that enable mass customization in manufacturing, allowing companies to efficiently produce tailored products in response to individual customer demands.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/customized-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'Robotics and Automation',
    info: 'Investigate the integration of machine learning and AI into robotic systems to enhance automation in manufacturing, particularly in areas such as flexible manufacturing and collaborative robotics.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/robotics-and-automation.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Smart Factories',
    info: 'Create intelligent manufacturing environments (smart factories) where IoT sensors and AI-driven systems monitor and control production processes in real-time to improve efficiency and quality.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/smart-factories.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Additive Manufacturing (3D Printing)',
    info: 'Research how AI can optimize the design and production processes in additive manufacturing, enabling the creation of complex, lightweight, and cost-effective components.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/additive-manufacturing-3d-printing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'Human-Robot Collaboration',
    info: 'Investigate the safe and efficient collaboration between humans and robots in manufacturing settings, ensuring worker safety and productivity improvements.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/human-robot-collaboration.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Supply Chain Resilience and Risk Management',
    info: 'Develop AI-driven models to assess and mitigate supply chain risks, including those related to disruptions (e.g., pandemics, natural disasters), benefiting Canadian manufacturers\' global supply networks.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/supply-chain-resilience-and-risk-management.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 11,
    title: 'Quality Assurance in Food Processing',
    info: 'Apply computer vision and AI techniques to inspect and assure the quality of food products in the agri-food and food processing industries.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/quality-assurance-in-food-processing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 12,
    title: 'Materials Research for Advanced Manufacturing',
    info: 'Utilize AI for materials discovery and optimization, enhancing the development of new materials and processes in industries like aerospace and automotive manufacturing.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/material-research-for-advanced-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const AdvancedManufacturingPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "Advanced Manufacturing Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaborating with Canadian manufacturing companies, research institutions, and government agencies can help drive these projects forward. These initiatives have the potential to enhance productivity, competitiveness, and sustainability within Canada's advanced manufacturing sector.</p>
          </div>
          <div className="col-lg-12 mt--40">
            <div className="row g-5">
              { items.map( ( data ) => (
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

export default AdvancedManufacturingPrograms;