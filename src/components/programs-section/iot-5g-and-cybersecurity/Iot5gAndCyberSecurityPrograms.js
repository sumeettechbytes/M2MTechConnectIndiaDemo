import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Smart Agriculture for Canadian Farms (IoT)',
    info: 'Develop IoT solutions that use sensors and data analytics to optimize crop management, livestock monitoring, and resource usage for Canadian farmers.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/smart-agriculture-for-canadian-farms.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Smart Cities for Sustainable Urbanization (IoT)',
    info: 'Create IoT-based systems to enhance urban planning, traffic management, waste reduction, and energy efficiency in Canadian cities like Toronto, Vancouver, and Montreal.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/smart-cities-for-sustainable-urbanization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'IoT in Cold Chain Logistics (IoT)',
    info: 'Implement IoT sensors and AI to improve the monitoring and transportation of perishable goods in cold climates, benefiting the Canadian food industry.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/iot-in-cold-chain-logistics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Remote Healthcare Monitoring (IoT)',
    info: 'Develop IoT devices and machine learning algorithms for remote patient monitoring, ensuring timely healthcare interventions for remote and rural communities in Canada.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/remote-healthcare-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: '5G Network Optimization (5G)',
    info: 'Use machine learning and AI to optimize 5G network deployment and management, especially in challenging environments like Canada\'s vast and remote regions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-network-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: '5G-Enabled Autonomous Vehicles (5G)',
    info: 'Research the use of 5G connectivity for autonomous vehicles, considering the unique challenges of Canada\'s diverse climate and geography.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-enabled-autonomous-vehicles.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: '5G-Enabled Smart Manufacturing (5G)',
    info: 'Explore how 5G can enhance automation and connectivity in Canadian manufacturing plants, improving efficiency and flexibility.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-enabled-smart-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'IoT Security Solutions (CyberSecurity)',
    info: 'Develop advanced cybersecurity solutions to protect IoT devices and networks, addressing the increasing risks associated with connected devices in various industries, including energy, healthcare, and transportation.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/iot-security-solutions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: '5G Network Security (CyberSecurity)',
    info: 'Investigate and develop robust cybersecurity mechanisms for 5G networks, safeguarding critical infrastructure and communication systems in Canada.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-network-security.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Threat Intelligence for Critical Infrastructure (CyberSecurity)',
    info: 'Use AI and data analytics to provide early threat detection and mitigation for critical infrastructure sectors such as energy, utilities, and transportation.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/threat-intelligence-for-critical-infrastructure.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 11,
    title: 'AI-Driven Cyber Threat Detection (CyberSecurity)',
    info: 'Create AI-based tools that continuously monitor and detect cyber threats for Canadian organizations, including government agencies, financial institutions, and healthcare providers.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/ai-driven-cyber-threat-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 12,
    title: 'Quantum-Safe Cybersecurity (CyberSecurity)',
    info: 'Research and develop quantum-resistant encryption and cybersecurity protocols to protect sensitive data and communications in Canada\'s advanced technology sectors.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/quantum-safe-cybersecurity.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const Iot5gAndCyberSecurityPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "IoT, 5G & CyberSecurity Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaboration with Canadian universities, government bodies, and industry partners is crucial for the success of these research projects. These initiatives can contribute significantly to Canada's technological advancement and cybersecurity resilience in the rapidly evolving fields of IoT, 5G, and cybersecurity.</p>
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

export default Iot5gAndCyberSecurityPrograms;