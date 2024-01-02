import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import ContactUs from './pages/innerpages/ContactUs';
import HomeOne from './pages/homepages/HomeOne';
import ResearchOne from './pages/researchpages/ResearchOne';
// import DataAnalysisAndDataVisualization from './pages/innerpages/DataAnalysisAndDataVisualization';
import WorkIntegratedLearning from './pages/workintegratedlearningpages/WorkIntegratedLearning';
import CleanTechnology from './pages/researchpages/CleanTechnology';
import AdvancedManufacturing from './pages/researchpages/AdvancedManufacturing';
import Iot5gAndCyberSecurity from './pages/researchpages/Iot5gAndCyberSecurity';
import BusinessIntelligence from './pages/researchpages/BusinessIntelligence';
import FinTech from './pages/researchpages/FinTech';
import HealthTech from './pages/researchpages/HealthTech';
import AgTech from './pages/researchpages/AgTech';
import Error from './pages/innerpages/Error';
import PredictiveMaintenanceSolution from './pages/innerpages/PredictiveMaintenanceSolution';
import CleanEnergyConsumptionForeCastingProject from './pages/innerpages/CleanEnergyConsumptionForecastingProject';
import CleanEnergyManagementInSmartGrids from './pages/innerpages/CleanEnergyManagementInSmartGrids';
import CustomerSegmentation from './pages/innerpages/CustomerSegmentation';
import MedicalDiagnosisProject from './pages/innerpages/MedicalDiagnosisProject';
import HousingMarketPricePrediction from './pages/innerpages/HousingMarketPricePrediction';
import CropYieldPredictionProject from './pages/innerpages/CropYieldPredictionProject';
import SupplyChainOptimization from './pages/innerpages/SupplyChainOptimization';
import BusinessIntelligenceDataVisualizationProject from './pages/innerpages/BusinessIntelligenceDataVisualizationProject';
import HealthcareMonitoringAndManagementProject from './pages/innerpages/HealthcareMonitoringAndManagementProject';
import IntrusionDetectionProject from './pages/innerpages/IntrusionDetectionProject';
import ArtificialIntelligenceAndMachineLearningApplication from './pages/innerpages/ArtificialIntelligenceAndMachineLearningApplication';
// import CareerServices from './pages/careerservicespages/CareerServices';
import Courses from './pages/coursespages/Courses';
import StudentsSpotlight from './pages/studentspotlightpages/StudentsSpotlight';
import DataAnalytics from './pages/coursespages/DataAnalytics';
import DataAnalyticsPotentialJobsDetails from './components/courses/data-analytics/potential-jobs/DataAnalyticsPotentialJobsDetails';
import CoursesCoding from './pages/coursespages/CoursesCoding';
import CoursesCodingPotentialJobsDetails from './components/courses/courses-coding/potential-jobs/CoursesCodingPotentialJobsDetails';
import CoursesDesign from './pages/coursespages/CoursesDesign';
import CoursesDesignPotentialJobsDetails from './components/courses/courses-design/potential-jobs/CoursesDesignPotentialJobsDetails';
import CoursesMachineLearning from './pages/coursespages/CoursesMachineLearning';
import CoursesMachineLearningPotentialJobsDetails from './components/courses/courses-machine-learning/potential-jobs/CoursesMachineLearningPotentialJobsDetails';
import CoursesDeepLearning from './pages/coursespages/CoursesDeepLearning';
import CoursesDeepLearningPotentialJobsDetails from './components/courses/courses-deep-learning/potential-jobs/CoursesDeepLearningPotentialJobsDetails';
import PrivacyPolicy from './pages/innerpages/PrivacyPolicy';
import DataTalent from './pages/datatalentpages/DataTalent';
import Skillsboost from './pages/skillsboostpages/Skillsboost';
import Aiminds from './pages/aimindspages/Aiminds';

// Import PDF Here
import DataAnalyticsCurriculum from './assets/courses-curriculums/Data-Analytics-Curriculum.pdf';
import MachineLearningCurriculum from './assets/courses-curriculums/Machine-Learning-Curriculum.pdf';
import DeepLearningCurriculum from './assets/courses-curriculums/Deep-Learning-Curriculum.pdf';
import CodingCurriculum from './assets/courses-curriculums/Coding-Curriculum.pdf';
import DesignCurriculum from './assets/courses-curriculums/Design-Curriculum.pdf';
import SpotlightPackage from './assets/spotlight/STEM_STUDENT_SPOTLIGHT_PROGRAM_PACKAGE.pdf';
import DataTalentCurriculum from './assets/datatalent/Data-Science-ML-AI-Curriculum.pdf';

// Import Css Here 
import './assets/scss/style.scss';
import Jobs from './pages/jobspages/Jobs';

function App() {

  const [showUserInterestForm, setShowUserInterestForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showDownloadCurriculumForm, setShowDownloadCurriculumForm] = useState(false);
  const [employerRegisterForm, setShowEmployerRegisterForm] = useState(false);
  const [showSkillsboostSignUpForm, setShowSkillsboostSignUpForm] = useState(false);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<HomeOne showUserInterestForm={showUserInterestForm} setShowUserInterestForm={setShowUserInterestForm} showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} showSkillsboostSignUpForm={showSkillsboostSignUpForm} setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />}/>
          <Route exact path='/contact-us' element={<ContactUs/>}/>
          {/* <Route exact path='/sitemap-generator' element={<Sitemap />}/> */}
          <Route exact path='/courses' element={<Courses />}/>
          <Route exact path='/courses/data-analytics' element={<DataAnalytics showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={DataAnalyticsCurriculum} downloadFileName={'Data-Analytics-Curriculum'} formName={'Download Data Analytics Curriculum form on courses/data-analytics page'} formSubmitFrom={'https://m2mtechconnect.com/courses/data-analytics/'} />}/>
          <Route exact path='/courses/data-analytics/potential-jobs/:id' element={<DataAnalyticsPotentialJobsDetails />}/>
          <Route exact path='/courses/coding' element={<CoursesCoding showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={CodingCurriculum} downloadFileName={'Coding-Curriculum'} formName={'Download Coding Curriculum form on courses/coding page'} formSubmitFrom={'https://m2mtechconnect.com/courses/coding/'} />}/>
          <Route exact path='/courses/coding/potential-jobs/:id' element={<CoursesCodingPotentialJobsDetails />}/>
          <Route exact path='/courses/design' element={<CoursesDesign showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={DesignCurriculum} downloadFileName={'Design-Curriculum'} formName={'Download Design Curriculum form on courses/design page'} formSubmitFrom={'https://m2mtechconnect.com/courses/design/'} />}/>
          <Route exact path='/courses/design/potential-jobs/:id' element={<CoursesDesignPotentialJobsDetails />}/>
          <Route exact path='/courses/machine-learning' element={<CoursesMachineLearning showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={MachineLearningCurriculum} downloadFileName={'Machine-Learning-Curriculum'} formName={'Download Machine Learning Curriculum form on courses/machine-learning page'} formSubmitFrom={'https://m2mtechconnect.com/courses/machine-learning/'} />}/>
          <Route exact path='/courses/machine-learning/potential-jobs/:id' element={<CoursesMachineLearningPotentialJobsDetails />}/>
          <Route exact path='/courses/deep-learning' element={<CoursesDeepLearning showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={DeepLearningCurriculum} downloadFileName={'Deep-Learning-Curriculum'} formName={'Download Deep Learning Curriculum form on courses/deep-learning page'} formSubmitFrom={'https://m2mtechconnect.com/courses/deep-learning/'} />}/>
          <Route exact path='/courses/deep-learning/potential-jobs/:id' element={<CoursesDeepLearningPotentialJobsDetails />}/>
          <Route exact path='/datatalent' element={<Navigate to='/programs/datatalent' />} />
          <Route exact path='/programs' element={<Navigate to='/programs/datatalent' />} />
          <Route exact path='/programs/datatalent' element={<DataTalent showUserInterestForm={showUserInterestForm} setShowUserInterestForm={setShowUserInterestForm} employerRegisterForm={employerRegisterForm} setShowEmployerRegisterForm={setShowEmployerRegisterForm} showDownloadCurriculumForm={showDownloadCurriculumForm} setShowDownloadCurriculumForm={setShowDownloadCurriculumForm} Download={DataTalentCurriculum} downloadFileName={'Data-Science-ML-AI-Curriculum'} formName={'Download Datatalent Curriculum form on programs/datatalent page'} formSubmitFrom={'https://m2mtechconnect.com/programs/datatalent/'} />}/>
          <Route exact path='/skillsboost' element={<Navigate to='/programs/skillsboost' />} />
          <Route exact path='/programs/skillsboost' element={<Skillsboost showSkillsboostSignUpForm={showSkillsboostSignUpForm} setShowSkillsboostSignUpForm={setShowSkillsboostSignUpForm} />}/>
          <Route exact path='/programs/aiminds' element={<Aiminds />}/>
          <Route exact path='/work-integrated-learning' element={<Navigate to='/careers/work-integrated-learning' />} />
          <Route exact path='/careers/work-integrated-learning' element={<WorkIntegratedLearning showUserInterestForm={showUserInterestForm} setShowUserInterestForm={setShowUserInterestForm} />}/>
          <Route exact path='/careers' element={<Navigate to ='/careers/jobs' />} />
          <Route exact path='/careers/jobs' element={<Jobs />}/>
          <Route exact path='/research/clean-technology' element={<CleanTechnology showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/advanced-manufacturing' element={<AdvancedManufacturing showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/iot-5g-and-cybersecurity' element={<Iot5gAndCyberSecurity showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/business-intelligence' element={<BusinessIntelligence showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/fintech' element={<FinTech showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/healthtech' element={<HealthTech showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/research/agtech' element={<AgTech showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/data-analysis-and-data-visualization' element={<DataAnalysisAndDataVisualization showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/> */}
          {/* <Route exact path='/work-integrated-learning/artificial-intelligence-and-machine-learning-application' element={<Navigate to="/careers/work-integrated-learning/artificial-intelligence-and-machine-learning-application" />}/> */}
          <Route exact path='/careers/work-integrated-learning/artificial-intelligence-and-machine-learning-application' element={<ArtificialIntelligenceAndMachineLearningApplication showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/predictive-maintenance-solution' element={<Navigate to="/careers/work-integrated-learning/predictive-maintenance-solution" />}/> */}
          <Route exact path='/careers/work-integrated-learning/predictive-maintenance-solution' element={<PredictiveMaintenanceSolution showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/clean-energy-consumption-forecasting-project' element={<Navigate to="/careers/work-integrated-learning/clean-energy-consumption-forecasting-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/clean-energy-consumption-forecasting-project' element={<CleanEnergyConsumptionForeCastingProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/clean-energy-management-in-smart-grids' element={<Navigate to="/careers/work-integrated-learning/clean-energy-management-in-smart-grids" />}/> */}
          <Route exact path='/careers/work-integrated-learning/clean-energy-management-in-smart-grids' element={<CleanEnergyManagementInSmartGrids showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/customer-segmentation' element={<Navigate to="/careers/work-integrated-learning/customer-segmentation" />}/> */}
          <Route exact path='/careers/work-integrated-learning/customer-segmentation' element={<CustomerSegmentation showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/medical-diagnosis-project' element={<Navigate to="/careers/work-integrated-learning/medical-diagnosis-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/medical-diagnosis-project' element={<MedicalDiagnosisProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/housing-market-price-prediction' element={<Navigate to="/careers/work-integrated-learning/housing-market-price-prediction" />}/> */}
          <Route exact path='/careers/work-integrated-learning/housing-market-price-prediction' element={<HousingMarketPricePrediction showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/crop-yield-prediction-project' element={<Navigate to="/careers/work-integrated-learning/crop-yield-prediction-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/crop-yield-prediction-project' element={<CropYieldPredictionProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/supply-chain-optimization' element={<Navigate to="/careers/work-integrated-learning/supply-chain-optimization" />}/> */}
          <Route exact path='/careers/work-integrated-learning/supply-chain-optimization' element={<SupplyChainOptimization showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/business-intelligence-data-visualization-project' element={<Navigate to="/careers/work-integrated-learning/business-intelligence-data-visualization-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/business-intelligence-data-visualization-project' element={<BusinessIntelligenceDataVisualizationProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/healthcare-monitoring-and-management-project' element={<Navigate to="/careers/work-integrated-learning/healthcare-monitoring-and-management-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/healthcare-monitoring-and-management-project' element={<HealthcareMonitoringAndManagementProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          {/* <Route exact path='/work-integrated-learning/intrusion-detection-project' element={<Navigate to="/careers/work-integrated-learning/intrusion-detection-project" />}/> */}
          <Route exact path='/careers/work-integrated-learning/intrusion-detection-project' element={<IntrusionDetectionProject showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />}/>
          <Route exact path='/spotlight' element={<Navigate to='/insights/spotlight' />} />
          <Route exact path='/insights/spotlight' element={<StudentsSpotlight showUserInterestForm={showUserInterestForm} setShowUserInterestForm={setShowUserInterestForm} download={SpotlightPackage} downloadFileName={'STEM_STUDENT_SPOTLIGHT_PROGRAM_PACKAGE'} />}/>
          <Route exact path='/research' element={<ResearchOne />}/>
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />

          <Route path='*' element={<Error/>}/>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
