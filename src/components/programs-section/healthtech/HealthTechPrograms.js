import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Predictive Healthcare Models for Indigenous Communities',
    info: 'Develop predictive models that leverage healthcare data to address the specific health challenges faced by Indigenous communities in Canada, considering factors like remote locations and cultural context.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/predictive-healthcare-models-for-indigenous-communities.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Telehealth Optimization for Rural Areas',
    info: 'Create AI-powered telehealth solutions that enhance access to healthcare services for residents in remote and underserved areas of Canada.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/telehealth-optimization-for-rural-areas.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Medical Image Analysis for Northern Health Clinics',
    info: 'Implement machine learning algorithms for the automated analysis of medical images (e.g., X-rays, MRIs) in northern health clinics, where access to radiologists may be limited.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/medical-image-analysis-for-northern-health-clinics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Epidemiological Forecasting for Disease Outbreaks',
    info: 'Develop AI-driven models that forecast disease outbreaks in Canadian regions, aiding public health agencies in proactive response and resource allocation.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/epidemiological-forecasting-for-disease-outbreaks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Patient Record Management for Multilingual Populations',
    info: 'Create natural language processing (NLP) solutions for managing electronic health records (EHRs) of multilingual patients in Canada, ensuring accessibility and accuracy.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/patient-record-management-for-multilingual-populations.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'AI-Enhanced Diagnosis for Indigenous Health Practitioners',
    info: 'Design AI tools that assist Indigenous health practitioners in diagnosing and treating health conditions specific to their communities, integrating traditional knowledge with modern healthcare practices.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/ai-enhanced-diagnosis-for-indigenous-health-practitioners.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Drug Discovery for Rare Canadian Diseases',
    info: 'Utilize AI-driven drug discovery techniques to identify potential treatments for rare diseases prevalent in Canada, encouraging pharmaceutical research in underrepresented areas.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/drug-discovery-for-rare-canadian-diseases.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Mental Health Support Chatbots for Youth',
    info: 'Develop AI-driven chatbots that provide mental health support and resources tailored to the unique needs of Canadian youth, addressing issues like anxiety and depression.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/mental-health-support-chatbots-for-youth.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'AI for Elderly Care in Long-Term Facilities',
    info: 'Implement AI systems that monitor the well-being of elderly residents in long-term care facilities in Canada, detecting falls, changes in vital signs, and potential health risks.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/ai-for-elderly-care-in-long-term-facilities.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Health Data Privacy Solutions',
    info: 'Research privacy-preserving AI techniques for securely analyzing and sharing healthcare data in compliance with Canadian data protection regulations.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/health-data-privacy-solutions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 11,
    title: 'Personalized Cancer Treatment for Indigenous Patients',
    info: 'Develop AI models that personalize cancer treatment plans for Indigenous cancer patients, considering genetic and cultural factors.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/personalized-cancer-treatment-for-indigenous-patients.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 12,
    title: 'Remote Patient Monitoring for Chronic Diseases',
    info: 'Create AI-based remote patient monitoring systems for Canadians with chronic diseases, ensuring timely intervention and reducing hospital readmissions.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'HealthTech',
    image: 'research/healthtech/remote-patient-monitoring-for-chronic-diseases.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const HealthTechPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "HealthTech Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaboration with Canadian healthcare providers, Indigenous communities, government agencies, and research institutions is essential for the success of these research projects. These initiatives can significantly contribute to improving healthcare accessibility, quality, and outcomes for Canadians across the country.</p>
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

export default HealthTechPrograms;