import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import Select from 'react-select';

const items = [
  {
    id: 1,
    title: 'Smart Agriculture for Canadian Farms (IoT)',
    info: 'Develop IoT solutions that use sensors and data analytics to optimize crop management, livestock monitoring, and resource usage for Canadian farmers.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/smart-agriculture-for-canadian-farms.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Agriculture',
  },
  {
    id: 2,
    title: 'Smart Cities for Sustainable Urbanization (IoT)',
    info: 'Create IoT-based systems to enhance urban planning, traffic management, waste reduction, and energy efficiency in Canadian cities like Toronto, Vancouver, and Montreal.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/smart-cities-for-sustainable-urbanization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Cities',
  },
  {
    id: 3,
    title: 'IoT in Cold Chain Logistics (IoT)',
    info: 'Implement IoT sensors and AI to improve the monitoring and transportation of perishable goods in cold climates, benefiting the Canadian food industry.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/iot-in-cold-chain-logistics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Logistics',
  },
  {
    id: 4,
    title: 'Remote Healthcare Monitoring (IoT)',
    info: 'Develop IoT devices and machine learning algorithms for remote patient monitoring, ensuring timely healthcare interventions for remote and rural communities in Canada.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/remote-healthcare-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 5,
    title: '5G Network Optimization (5G)',
    info: 'Use machine learning and AI to optimize 5G network deployment and management, especially in challenging environments like Canada\'s vast and remote regions.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-network-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Networking',
  },
  {
    id: 6,
    title: '5G-Enabled Autonomous Vehicles (5G)',
    info: 'Research the use of 5G connectivity for autonomous vehicles, considering the unique challenges of Canada\'s diverse climate and geography.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-enabled-autonomous-vehicles.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Autonomous Vehicles',
  },
  {
    id: 7,
    title: '5G-Enabled Smart Manufacturing (5G)',
    info: 'Explore how 5G can enhance automation and connectivity in Canadian manufacturing plants, improving efficiency and flexibility.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-enabled-smart-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Manufacturing',
  },
  {
    id: 8,
    title: 'IoT Security Solutions (CyberSecurity)',
    info: 'Develop advanced cybersecurity solutions to protect IoT devices and networks, addressing the increasing risks associated with connected devices in various industries, including energy, healthcare, and transportation.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/iot-security-solutions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Security',
  },
  {
    id: 9,
    title: '5G Network Security (CyberSecurity)',
    info: 'Investigate and develop robust cybersecurity mechanisms for 5G networks, safeguarding critical infrastructure and communication systems in Canada.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/5g-network-security.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Security',
  },
  {
    id: 10,
    title: 'Threat Intelligence for Critical Infrastructure (CyberSecurity)',
    info: 'Use AI and data analytics to provide early threat detection and mitigation for critical infrastructure sectors such as energy, utilities, and transportation.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/threat-intelligence-for-critical-infrastructure.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Security',
  },
  {
    id: 11,
    title: 'AI-Driven Cyber Threat Detection (CyberSecurity)',
    info: 'Create AI-based tools that continuously monitor and detect cyber threats for Canadian organizations, including government agencies, financial institutions, and healthcare providers.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/ai-driven-cyber-threat-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Security',
  },
  {
    id: 12,
    title: 'Quantum-Safe Cybersecurity (CyberSecurity)',
    info: 'Research and develop quantum-resistant encryption and cybersecurity protocols to protect sensitive data and communications in Canada\'s advanced technology sectors.',
    industry: 'IoT, 5g & CyberSecurity',
    image: 'research/iot-5g-and-cybersecurity/quantum-safe-cybersecurity.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Security',
  },
  {
    id: 13,
    title: 'Predictive Healthcare Models for Indigenous Communities',
    info: 'Develop predictive models that leverage healthcare data to address the specific health challenges faced by Indigenous communities in Canada, considering factors like remote locations and cultural context.',
    industry: 'HealthTech',
    image: 'research/healthtech/predictive-healthcare-models-for-indigenous-communities.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Predictive Models',
  },
  {
    id: 14,
    title: 'Telehealth Optimization for Rural Areas',
    info: 'Create AI-powered telehealth solutions that enhance access to healthcare services for residents in remote and underserved areas of Canada.',
    industry: 'HealthTech',
    image: 'research/healthtech/telehealth-optimization-for-rural-areas.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Telehealth',
  },
  {
    id: 15,
    title: 'Medical Image Analysis for Northern Health Clinics',
    info: 'Implement machine learning algorithms for the automated analysis of medical images (e.g., X-rays, MRIs) in northern health clinics, where access to radiologists may be limited.',
    industry: 'HealthTech',
    image: 'research/healthtech/medical-image-analysis-for-northern-health-clinics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 16,
    title: 'Epidemiological Forecasting for Disease Outbreaks',
    info: 'Develop AI-driven models that forecast disease outbreaks in Canadian regions, aiding public health agencies in proactive response and resource allocation.',
    industry: 'HealthTech',
    image: 'research/healthtech/epidemiological-forecasting-for-disease-outbreaks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Forecasting',
  },
  {
    id: 17,
    title: 'Patient Record Management for Multilingual Populations',
    info: 'Create natural language processing (NLP) solutions for managing electronic health records (EHRs) of multilingual patients in Canada, ensuring accessibility and accuracy.',
    industry: 'HealthTech',
    image: 'research/healthtech/patient-record-management-for-multilingual-populations.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Management',
  },
  {
    id: 18,
    title: 'AI-Enhanced Diagnosis for Indigenous Health Practitioners',
    info: 'Design AI tools that assist Indigenous health practitioners in diagnosing and treating health conditions specific to their communities, integrating traditional knowledge with modern healthcare practices.',
    industry: 'HealthTech',
    image: 'research/healthtech/ai-enhanced-diagnosis-for-indigenous-health-practitioners.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Diagnosis',
  },
  {
    id: 19,
    title: 'Drug Discovery for Rare Canadian Diseases',
    info: 'Utilize AI-driven drug discovery techniques to identify potential treatments for rare diseases prevalent in Canada, encouraging pharmaceutical research in underrepresented areas.',
    industry: 'HealthTech',
    image: 'research/healthtech/drug-discovery-for-rare-canadian-diseases.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Drug Discovery',
  },
  {
    id: 20,
    title: 'Mental Health Support Chatbots for Youth',
    info: 'Develop AI-driven chatbots that provide mental health support and resources tailored to the unique needs of Canadian youth, addressing issues like anxiety and depression.',
    industry: 'HealthTech',
    image: 'research/healthtech/mental-health-support-chatbots-for-youth.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Mental Health Support',
  },
  {
    id: 21,
    title: 'AI for Elderly Care in Long-Term Facilities',
    info: 'Implement AI systems that monitor the well-being of elderly residents in long-term care facilities in Canada, detecting falls, changes in vital signs, and potential health risks.',
    industry: 'HealthTech',
    image: 'research/healthtech/ai-for-elderly-care-in-long-term-facilities.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Elderly Care',
  },
  {
    id: 22,
    title: 'Health Data Privacy Solutions',
    info: 'Research privacy-preserving AI techniques for securely analyzing and sharing healthcare data in compliance with Canadian data protection regulations.',
    industry: 'HealthTech',
    image: 'research/healthtech/health-data-privacy-solutions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Data Privacy',
  },
  {
    id: 23,
    title: 'Personalized Cancer Treatment for Indigenous Patients',
    info: 'Develop AI models that personalize cancer treatment plans for Indigenous cancer patients, considering genetic and cultural factors.',
    industry: 'HealthTech',
    image: 'research/healthtech/personalized-cancer-treatment-for-indigenous-patients.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Cancer Treatment',
  },
  {
    id: 24,
    title: 'Remote Patient Monitoring for Chronic Diseases',
    info: 'Create AI-based remote patient monitoring systems for Canadians with chronic diseases, ensuring timely intervention and reducing hospital readmissions.',
    industry: 'HealthTech',
    image: 'research/healthtech/remote-patient-monitoring-for-chronic-diseases.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 25,
    title: 'Credit Scoring for Canadian Consumers',
    info: 'Develop advanced credit scoring models using machine learning to assess the creditworthiness of Canadian consumers, especially those with thin or no credit histories.',
    industry: 'FinTech',
    image: 'research/fintech/credit-scoring-for-canadian-consumers.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Credit Scoring',
  },
  {
    id: 26,
    title: 'Fraud Detection in Canadian Banking',
    info: 'Create real-time fraud detection systems for Canadian banks, leveraging AI to identify and prevent fraudulent transactions while minimizing false positives.',
    industry: 'FinTech',
    image: 'research/fintech/fraud-detection-in-canadian-banking.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Detection',
  },
  {
    id: 27,
    title: 'Personalized Financial Advice for Canadians',
    info: 'Develop AI-driven robo-advisors that provide personalized investment and financial planning advice tailored to the unique financial goals and regulatory considerations of Canadian investors.',
    industry: 'FinTech',
    image: 'research/fintech/personalized-financial-advice-for-canadians.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Financial Advice',
  },
  {
    id: 28,
    title: 'Mortgage Risk Assessment',
    info: 'Build predictive models that assess mortgage risk factors specific to the Canadian housing market, helping lenders make informed decisions about mortgage approvals.',
    industry: 'FinTech',
    image: 'research/fintech/mortgage-risk-assessment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Risk Assessment',
  },
  {
    id: 29,
    title: 'Cryptocurrency Regulation and Monitoring',
    info: 'Develop AI tools for monitoring cryptocurrency transactions to ensure compliance with Canadian regulations and prevent money laundering and fraud in the crypto space.',
    industry: 'FinTech',
    image: 'research/fintech/cryptocurrency-regulation-and-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 30,
    title: 'Canadian Pension Plan Optimization',
    info: 'Utilize data science and AI to optimize the Canadian Pension Plan (CPP) for retirees, considering factors like life expectancy, investment returns, and inflation.',
    industry: 'FinTech',
    image: 'research/fintech/canadian-pension-plan-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Pension Plan',
  },
  {
    id: 31,
    title: 'Insurance Claims Processing',
    info: 'Implement AI and natural language processing (NLP) to streamline and automate insurance claims processing for Canadian insurance companies, improving efficiency and customer satisfaction.',
    industry: 'FinTech',
    image: 'research/fintech/insurance-claims-processing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Insurance',
  },
  {
    id: 32,
    title: 'Regulatory Compliance Monitoring',
    info: 'Develop AI-based compliance monitoring systems to help Canadian financial institutions stay up-to-date with changing regulations and reduce compliance risks.',
    industry: 'FinTech',
    image: 'research/fintech/regulatory-compliance-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 33,
    title: 'Sustainable Finance Analysis',
    info: 'Use data analytics and machine learning to assess the environmental and social impact of investments in Canadian sustainable finance initiatives, supporting ethical and responsible investing.',
    industry: 'FinTech',
    image: 'research/fintech/sustainable-finance-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 34,
    title: 'Trading Algorithms for Canadian Stock Markets',
    info: 'Create advanced trading algorithms for the Toronto Stock Exchange (TSX) and other Canadian stock markets, optimizing execution strategies for investors and traders.',
    industry: 'FinTech',
    image: 'research/fintech/trading-algorithms-for-canadian-stock-markets.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Trading Algorithms',
  },
  {
    id: 35,
    title: 'Personal Finance Management Apps for Canadians',
    info: 'Develop AI-powered personal finance management apps that help Canadians track their spending, save money, and invest wisely, considering Canada-specific financial products and tax regulations.',
    industry: 'FinTech',
    image: 'research/fintech/personal-finance-management-apps-for-canadians.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Management',
  },
  {
    id: 36,
    title: 'AI-Enhanced Customer Support for Canadian Banks',
    info: 'Implement chatbots and virtual assistants that can provide efficient and localized customer support for Canadian banking customers, addressing common inquiries and tasks.',
    industry: 'FinTech',
    image: 'research/fintech/ai-enhanced-customer-support-for-canadian-banks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Customer Support',
  },
  {
    id: 37,
    title: 'Renewable Energy Forecasting',
    info: 'Develop advanced machine learning models to predict renewable energy generation, such as wind and solar power, based on historical data and weather patterns. This can help optimize the integration of renewable energy into the grid, which is a significant focus in Canada.',
    industry: 'CleanTech',
    image: 'research/clean-technology/renewable-energy-forecasting.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Forecasting',
  },
  {
    id: 38,
    title: 'Electric Vehicle Charging Optimization',
    info: 'Create algorithms that optimize the charging schedules for electric vehicles in a way that minimizes grid stress and costs while ensuring that vehicles are charged when needed. This project can aid in the adoption of electric vehicles across Canada.',
    industry: 'CleanTech',
    image: 'research/clean-technology/electric-vehicle-charging-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Charging Optimization',
  },
  {
    id: 39,
    title: 'Waste Management and Recycling',
    info: 'Use AI and computer vision to automate and optimize waste sorting and recycling processes. Implement smart bins that can identify recyclable materials and reduce contamination, improving recycling rates.',
    industry: 'CleanTech',
    image: 'research/clean-technology/waste-management-and-recycling.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Management',
  },
  {
    id: 40,
    title: 'Energy Efficiency in Buildings',
    info: 'Develop AI-driven solutions to optimize energy consumption in commercial and residential buildings. Use data to control heating, cooling, and lighting systems for maximum efficiency, reducing energy costs and carbon emissions.',
    industry: 'CleanTech',
    image: 'research/clean-technology/energy-efficiency-in-buildings.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 41,
    title: 'Carbon Footprint Tracking',
    info: 'Create a platform that enables individuals and businesses to track and reduce their carbon footprints. Utilize AI to provide personalized recommendations on sustainable practices, transportation choices, and energy consumption reductions.',
    industry: 'CleanTech',
    image: 'research/clean-technology/carbon-footprint-tracking.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 42,
    title: 'Natural Resource Management',
    info: 'Apply data science and AI techniques to monitor and manage natural resources, such as water and forests. Develop predictive models to assess the impact of climate change on these resources and propose adaptive management strategies.',
    industry: 'CleanTech',
    image: 'research/clean-technology/natural-resource-management.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Management',
  },
  {
    id: 43,
    title: 'Clean Energy Investment Analytics',
    info: 'Build machine learning models to assess the potential and risks associated with investments in clean energy projects. Provide investors with data-driven insights into the profitability and sustainability of CleanTech ventures.',
    industry: 'CleanTech',
    image: 'research/clean-technology/clearn-energy-investment-analytics.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 44,
    title: 'Environmental Monitoring with IoT',
    info: 'Deploy IoT sensors to collect environmental data (e.g., air quality, water quality, soil conditions) and use machine learning to analyze and predict environmental changes, helping with early warning systems for pollution or climate-related events.',
    industry: 'CleanTech',
    image: 'research/clean-technology/enviromental-monitorying-with-iot.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 45,
    title: 'Grid Optimization and Demand Response',
    info: 'Develop AI algorithms to optimize the distribution and usage of energy in the grid, integrating renewable energy sources and implementing demand response strategies to balance supply and demand.',
    industry: 'CleanTech',
    image: 'research/clean-technology/grid-optimization-and-demand-response.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 46,
    title: 'Clean Energy Policy Analysis',
    info: 'Analyze the impact of government policies and regulations on CleanTech adoption and sustainability. Use data analytics to assess the effectiveness of incentives, subsidies, and carbon pricing mechanisms.',
    industry: 'CleanTech',
    image: 'research/clean-technology/clean-energy-policy-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 47,
    title: 'Customer Analytics for Retailers',
    info: 'Develop AI-driven models to analyze customer behavior and preferences in the Canadian retail sector. Implement recommendation systems that personalize shopping experiences for Canadian consumers based on local trends and preferences.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/customer-analytics-for-retailers.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 48,
    title: 'Tourism Analytics for Canadian Destinations',
    info: 'Use data science to analyze tourism data and predict trends for popular Canadian destinations. Develop tools that assist local businesses in optimizing services and marketing strategies for tourists.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/tourism-analytics-for-canadian-destinations.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 49,
    title: 'Financial Fraud Detection for Canadian Banks',
    info: 'Build machine learning models to detect financial fraud and money laundering in the Canadian banking industry. Develop real-time fraud detection systems to protect Canadian financial institutions and their customers.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/financial-fraud-detection-for-canadian-banks.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Detection',
  },
  {
    id: 50,
    title: 'Canadian E-commerce Optimization',
    info: 'Apply data analytics and AI to optimize supply chain and logistics operations for Canadian e-commerce businesses. Enhance product recommendation engines for Canadian online shoppers.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/canadian-e-commerce-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 51,
    title: 'Natural Resource Analytics for Resource Companies',
    info: 'Utilize data science to analyze data from resource extraction industries such as mining and forestry. Develop predictive maintenance models for Canadian resource companies to optimize machinery and reduce environmental impact.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/natural-resource-analytics-for-resource-companies.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 52,
    title: 'Healthcare Analytics for Canadian Hospitals',
    info: 'Implement AI-driven predictive models to assist Canadian healthcare providers in resource allocation and patient care optimization. Develop tools for analyzing public health data and forecasting disease outbreaks.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/healthcare-analytics-for-canadian-hospitals.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 53,
    title: 'Climate Change Impact Analysis for Canadian Agriculture',
    info: 'Use data science and AI to assess the impact of climate change on Canadian agriculture. Develop decision support systems for Canadian farmers to adapt to changing environmental conditions.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/climate-change-impact-analysis-for-canadian-agriculture.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 54,
    title: 'Canadian Real Estate Market Analysis',
    info: 'Build predictive models for the Canadian real estate market to aid investors, homebuyers, and sellers in making informed decisions. Analyze local real estate trends and housing affordability in Canadian cities.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/canadian-real-extate-market-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 55,
    title: 'Energy Efficiency for Canadian Businesses',
    info: 'Develop AI-driven solutions to optimize energy consumption and reduce greenhouse gas emissions for Canadian businesses. Offer tools for Canadian organizations to meet sustainability goals.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/energy-efficiency-for-banadian-businesses.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 56,
    title: 'Public Policy Analysis',
    info: 'Apply data science and machine learning to analyze government policies and their impact on the Canadian economy. Provide insights to policymakers on economic growth, employment, and social well-being.',
    industry: 'Business Intelligence',
    image: 'research/business-intelligence/public-policy-analysis.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Analysis',
  },
  {
    id: 57,
    title: 'Precision Agriculture for Canadian Crops',
    info: 'Develop AI-driven precision agriculture solutions that analyze data from various sensors and satellite imagery to optimize crop planting, irrigation, and fertilization for Canadian crops like wheat, canola, and barley.',
    industry: 'AgTech',
    image: 'research/agtech/precision-agriculture-for-canadian-crops.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Irrigation',
  },
  {
    id: 58,
    title: 'Climate-Resilient Crop Selection',
    info: 'Create machine learning models that recommend climate-resilient crop varieties for Canadian farmers based on historical weather data and climate change projections.',
    industry: 'AgTech',
    image: 'research/agtech/climate-resilient-crop-selection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Irrigation',
  },
  {
    id: 59,
    title: 'Automated Pest and Disease Detection',
    info: 'Implement computer vision and AI algorithms to detect and diagnose pests and diseases in Canadian crops, enabling early intervention and reduced chemical usage.',
    industry: 'AgTech',
    image: 'research/agtech/automated-pest-and-diesease-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Detection',
  },
  {
    id: 60,
    title: 'Smart Irrigation for Drought-Prone Regions',
    info: 'Develop IoT-based smart irrigation systems that conserve water resources in drought-prone areas like the Canadian Prairies, optimizing water usage for crops.',
    industry: 'AgTech',
    image: 'research/agtech/smart-irrigation-for-drought-prone-regions.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Irrigation',
  },
  {
    id: 61,
    title: 'Sustainable Livestock Farming',
    info: 'Use data analytics and AI to optimize livestock farming practices, including animal health monitoring, feed management, and sustainable grazing strategies.',
    industry: 'AgTech',
    image: 'research/agtech/sustainable-livestock-farming.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Livestock Farming',
  },
  {
    id: 62,
    title: 'Food Traceability for Canadian Products',
    info: 'Implement blockchain and AI technologies to enable food traceability from farm to table, ensuring the safety and authenticity of Canadian agricultural products.',
    industry: 'AgTech',
    image: 'research/agtech/food-traceability-for-canadian-products.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Food Traceability',
  },
  {
    id: 63,
    title: 'Indigenous Farming Knowledge Integration',
    info: 'Collaborate with Indigenous communities to integrate traditional farming knowledge with modern data science and AI techniques for sustainable and culturally relevant agricultural practices.',
    industry: 'AgTech',
    image: 'research/agtech/indigenous-farming-knowledge-integration.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Knowledge Integration',
  },
  {
    id: 64,
    title: 'Climate Change Impact Assessment',
    info: 'Utilize data science to assess the impact of climate change on Canadian agriculture, identifying strategies to mitigate risks and adapt to changing environmental conditions.',
    industry: 'AgTech',
    image: 'research/agtech/climate-change-impact-assessment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Assessment',
  },
  {
    id: 65,
    title: 'Agricultural Robotics for Harvesting',
    info: 'Research and develop AI-powered robots and drones for harvesting Canadian crops, addressing labor shortages and improving efficiency.',
    industry: 'AgTech',
    image: 'research/agtech/agricultural-robotics-for-harvesting.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Robotics and Automation',
  },
  {
    id: 66,
    title: 'Soil Health Monitoring',
    info: 'Implement IoT sensors and AI analytics to monitor and improve soil health in Canadian farmlands, ensuring long-term agricultural sustainability.',
    industry: 'AgTech',
    image: 'research/agtech/soil-health-monitoring.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Monitoring',
  },
  {
    id: 67,
    title: 'Farm Management Software for Smallholders',
    info: 'Create user-friendly AI-driven farm management software tailored to the needs of small-scale Canadian farmers, helping them make data-driven decisions.',
    industry: 'AgTech',
    image: 'research/agtech/farm-management-software-for-smallholders.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Management',
  },
  {
    id: 68,
    title: 'Predictive Farm Equipment Maintenance',
    info: 'Develop machine learning models that predict maintenance needs for farm equipment, reducing downtime and repair costs for Canadian farmers.',
    industry: 'AgTech',
    image: 'research/agtech/predictive-farm-equipment-maintenance.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Predictive Maintenance',
  },
  {
    id: 69,
    title: 'Predictive Maintenance for Manufacturing Equipment',
    info: 'Develop machine learning models to predict when manufacturing equipment (e.g., CNC machines, robotics) requires maintenance, reducing downtime and maintenance costs for Canadian manufacturing companies.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/predictive-maintenance-for-manufacturing-equipment.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Manufacturing',
  },
  {
    id: 70,
    title: 'Quality Control and Defect Detection',
    info: 'Implement computer vision and AI algorithms to automatically detect defects and anomalies in manufacturing processes, improving product quality and reducing waste in industries like automotive manufacturing.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/quality-control-and-defect-detection.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Automated Detection',
  },
  {
    id: 71,
    title: 'Supply Chain Optimization',
    info: 'Use data analytics and AI to optimize supply chain operations, including inventory management, demand forecasting, and supplier selection, benefiting various sectors like aerospace, automotive, and electronics manufacturing.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/supply-chain-optimization.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Supply Chain',
  },
  {
    id: 72,
    title: 'Energy Efficiency in Manufacturing',
    info: 'Apply data science and AI techniques to optimize energy consumption in manufacturing facilities, helping Canadian manufacturers reduce energy costs and meet sustainability goals.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/energy-efficiency-in-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Manufacturing',
  },
  {
    id: 73,
    title: 'Customized Manufacturing',
    info: 'Develop AI-driven systems that enable mass customization in manufacturing, allowing companies to efficiently produce tailored products in response to individual customer demands.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/customized-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Manufacturing',
  },
  {
    id: 74,
    title: 'Robotics and Automation',
    info: 'Investigate the integration of machine learning and AI into robotic systems to enhance automation in manufacturing, particularly in areas such as flexible manufacturing and collaborative robotics.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/robotics-and-automation.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Robotics and Automation',
  },
  {
    id: 75,
    title: 'Smart Factories',
    info: 'Create intelligent manufacturing environments (smart factories) where IoT sensors and AI-driven systems monitor and control production processes in real-time to improve efficiency and quality.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/smart-factories.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Smart Factories',
  },
  {
    id: 76,
    title: 'Additive Manufacturing (3D Printing)',
    info: 'Research how AI can optimize the design and production processes in additive manufacturing, enabling the creation of complex, lightweight, and cost-effective components.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/additive-manufacturing-3d-printing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: '3D Printing',
  },
  {
    id: 77,
    title: 'Human-Robot Collaboration',
    info: 'Investigate the safe and efficient collaboration between humans and robots in manufacturing settings, ensuring worker safety and productivity improvements.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/human-robot-collaboration.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Robotics and Automation',
  },
  {
    id: 78,
    title: 'Supply Chain Resilience and Risk Management',
    info: 'Develop AI-driven models to assess and mitigate supply chain risks, including those related to disruptions (e.g., pandemics, natural disasters), benefiting Canadian manufacturers\' global supply networks.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/supply-chain-resilience-and-risk-management.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Supply Chain',
  },
  {
    id: 79,
    title: 'Quality Assurance in Food Processing',
    info: 'Apply computer vision and AI techniques to inspect and assure the quality of food products in the agri-food and food processing industries.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/quality-assurance-in-food-processing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Quality Assurance',
  },
  {
    id: 80,
    title: 'Materials Research for Advanced Manufacturing',
    info: 'Utilize AI for materials discovery and optimization, enhancing the development of new materials and processes in industries like aerospace and automotive manufacturing.',
    industry: 'Advanced Manufacturing',
    image: 'research/advanced-manufacturing/material-research-for-advanced-manufacturing.webp',
    link: '/work-integrated-learning/clean-energy-consumption-forecasting-project',
    areaOfFocus: 'Materials Research',
  },
];

const ResearchProjectsFilter = () => {
  const [allItems, setItems] = useState(items);
  const [filter1, setFilter1] = useState();
  const [filter2, setFilter2] = useState();
  const [filters1, setFilters1] = useState();
  const [filters2, setFilters2] = useState();

  const selectAreaOfFocus = useRef();

  const handleFilter1 = (selected) => {
    selected ? setFilter1(selected.value) : setFilter1();
  }
  
  const handleFilter2 = (selected) => {
    selected ? setFilter2(selected.value) : setFilter2();
  }
      
  useEffect(() => {
    let options = [];
    items.forEach((item) => {
      options.includes(item.industry) === false && options.push(item.industry)
    });
    let filter = [];
    options.forEach((option) => {
      const obj = {};
      obj["value"] = option;
      obj["label"] = option;
      filter.push(obj)
    });
    setFilters1(filter);
  }, []);
  
  useEffect(() => {
    let options = [];
    // If first filter applied, update second filter options accordingly
    if(filter1) {
      items.forEach((item) => {
        item.industry === filter1 && options.includes(item.areaOfFocus) === false && options.push(item.areaOfFocus);
      });
      //If first filter changes, clear second filter
      selectAreaOfFocus.current.state.selectValue[0] && selectAreaOfFocus.current.setValue(null);
    } else {
      items.forEach((item) => {
        options.includes(item.areaOfFocus) === false && options.push(item.areaOfFocus)
      });
    }
    let filter = [];
    options.forEach((option) => {
      const obj = {};
      obj["value"] = option;
      obj["label"] = option;
      filter.push(obj)
    });
    setFilters2(filter);
  }, [filter1]);
  
  // Filter (works)
  // useEffect(() => {
  //   let filtered;
  //   if(filter1) {
  //     if(filter2) {
  //       filtered = items.filter((item) => item.industry === filter1 && item.areaOfFocus === filter2);
  //     }
  //   } else if(filter2) {
  //     filtered = items.filter((item) => item.areaOfFocus === filter2);
  //   } else {
  //     filtered = items;
  //   }
  //   setItems(filtered);
  // }, [filter1, filter2])
  
  // Same filter as above but condensed
  useEffect(() => {
    let filtered;
    filter1 ? filter2 ? filtered = items.filter(item => item.areaOfFocus === filter2 && item.industry === filter1) : filtered = items.filter(item => item.industry === filter1) : filter2 ? filtered = items.filter(item => item.areaOfFocus === filter2) : filtered = items;
    setItems(filtered);
  }, [filter1, filter2])

  return (
    <>
      <div className="container">
        <Element
          name="introduction"
          className="research-element style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
        >
          <div className="col-12 col-md-4">
            <Select
              className="basic-single"
              placeholder="Industry..."
              onChange={handleFilter1}
              isClearable="true"
              name="industry"
              options={filters1}
            />
          </div>
          <div className="col-12 col-md-4">
            <Select
              ref={selectAreaOfFocus}
              className="basic-single"
              placeholder="Area of Focus..."
              onChange={handleFilter2}
              isClearable="true"
              name="area of focus"
              options={filters2}
            />
          </div>
          <div className="col-lg-12 row mt--80">
            { <>
              <h5 className="col-12 text-center">{allItems.length === items.length ? "" : allItems.length === 0 ? "No projects match your filters." : allItems.length === 1 ? "1 project match your filters." : allItems.length + " projects match your filters." }</h5> {allItems.map( ( data , i ) => (
              <div key={data.id} className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                <div className="research-projects research-service-card radius-small">
                  <div className="inner d-flex flex-column">
                    <div className="thumbnail">
                      <img src={`${process.env.PUBLIC_URL}/images/${ data.image }`} alt="industry Thumb" loading="lazy" />
                    </div>
                    <div className="content-wrapper d-flex flex-column flex-grow-1 justify-content-between">
                      <div className="content program-info">
                        <h6 className="title">{ data.title }</h6>
                        <p className="description">{ data.info }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ) ) }
            </> }
          </div>
        </Element>
      </div>
    </>
  )
}

export default ResearchProjectsFilter;