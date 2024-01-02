import React from 'react';
import { Element } from 'react-scroll';
import ProgramsSectionTitle from '../ProgramsSectionTitle';

const items = [
  {
    id: 1,
    title: 'Credit Scoring for Canadian Consumers',
    info: 'Develop advanced credit scoring models using machine learning to assess the creditworthiness of Canadian consumers, especially those with thin or no credit histories.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/credit-scoring-for-canadian-consumers.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 2,
    title: 'Fraud Detection in Canadian Banking',
    info: 'Create real-time fraud detection systems for Canadian banks, leveraging AI to identify and prevent fraudulent transactions while minimizing false positives.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/fraud-detection-in-canadian-banking.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 3,
    title: 'Personalized Financial Advice for Canadians',
    info: 'Develop AI-driven robo-advisors that provide personalized investment and financial planning advice tailored to the unique financial goals and regulatory considerations of Canadian investors.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/personalized-financial-advice-for-canadians.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 4,
    title: 'Mortgage Risk Assessment',
    info: 'Build predictive models that assess mortgage risk factors specific to the Canadian housing market, helping lenders make informed decisions about mortgage approvals.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/mortgage-risk-assessment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 5,
    title: 'Cryptocurrency Regulation and Monitoring',
    info: 'Develop AI tools for monitoring cryptocurrency transactions to ensure compliance with Canadian regulations and prevent money laundering and fraud in the crypto space.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/cryptocurrency-regulation-and-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 6,
    title: 'Canadian Pension Plan Optimization',
    info: 'Utilize data science and AI to optimize the Canadian Pension Plan (CPP) for retirees, considering factors like life expectancy, investment returns, and inflation.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/canadian-pension-plan-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 7,
    title: 'Insurance Claims Processing',
    info: 'Implement AI and natural language processing (NLP) to streamline and automate insurance claims processing for Canadian insurance companies, improving efficiency and customer satisfaction.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/insurance-claims-processing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 8,
    title: 'Regulatory Compliance Monitoring',
    info: 'Develop AI-based compliance monitoring systems to help Canadian financial institutions stay up-to-date with changing regulations and reduce compliance risks.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/regulatory-compliance-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 9,
    title: 'Sustainable Finance Analysis',
    info: 'Use data analytics and machine learning to assess the environmental and social impact of investments in Canadian sustainable finance initiatives, supporting ethical and responsible investing.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/sustainable-finance-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 10,
    title: 'Trading Algorithms for Canadian Stock Markets',
    info: 'Create advanced trading algorithms for the Toronto Stock Exchange (TSX) and other Canadian stock markets, optimizing execution strategies for investors and traders.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/trading-algorithms-for-canadian-stock-markets.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 11,
    title: 'Personal Finance Management Apps for Canadians',
    info: 'Develop AI-powered personal finance management apps that help Canadians track their spending, save money, and invest wisely, considering Canada-specific financial products and tax regulations.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/personal-finance-management-apps-for-canadians.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
  {
    id: 12,
    title: 'AI-Enhanced Customer Support for Canadian Banks',
    info: 'Implement chatbots and virtual assistants that can provide efficient and localized customer support for Canadian banking customers, addressing common inquiries and tasks.',
    numberOfCourses: '12 weeks',
    modeOfCourses: 'Anywhere',
    category: 'FinTech',
    image: 'research/fintech/ai-enhanced-customer-support-for-canadian-banks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project'
  },
];

const FinTechPrograms = () => {
  return (
    <>
      <Element
        className="style-variation3 blog-main-content justify-content-center edu-section-gap home-one-cat"
      >
        <div className="container">
          <div className="col-lg-12">
            <ProgramsSectionTitle
              classes = "text-center"
              title = "FinTech Research Projects"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="employer-description">Collaboration with Canadian financial institutions, regulatory bodies, and FinTech startups can help drive these research projects. These initiatives can contribute significantly to Canada's FinTech ecosystem, providing innovative solutions and addressing the unique financial needs of Canadian consumers and businesses.</p>
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

export default FinTechPrograms;