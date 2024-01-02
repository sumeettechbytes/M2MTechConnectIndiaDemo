import React, { useState, useEffect } from 'react';
import { transitionBack, transitionIn, transitionOut } from '../../../utils/transitions';
import Checkbox from '../../../common/Checkbox';
import validator from 'validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

const INITIAL_STATE_USER_INTEREST = {
  formSubmitFrom: "https://www.m2mtechconnect.com/skillsboost",
  formName: "Skillsboost Sign Up Form",
  skillsboostSignUpCostAgreement: "",
  skillsboostSignUpExperience: "",
  skillsboostSignUpEligibleToWork: "",
  skillsboostSignUpStatus: "",
  skillsboostSignUpEnrolledInUniversity: "",
  skillsboostSignUpInterestedInDataScience: "",
  skillsboostSignUpInterestedInMachineLearning: "",
  skillsboostSignUpInterestedInCoding: "",
  skillsboostSignUpInterestedInDesignThinking: "",
  skillsboostSignUpFirstName: "",
  skillsboostSignUpLastName: "",
  skillsboostSignUpEmail: "",
};

const SkillsboostSignUpForm = ({
  setShowSkillsboostSignUpForm
  }) => {

  const [skillsboostSignUpCostAgreement, setSkillsboostSignUpCostAgreement] = useState("");
  const [skillsboostSignUpExperience, setSkillsboostSignUpExperience] = useState("");
  const [skillsboostSignUpEligibleToWork, setSkillsboostSignUpEligibleToWork] = useState("");
  const [skillsboostSignUpStatus, setSkillsboostSignUpStatus] = useState("")
  const [skillsboostSignUpEnroll, setSkillsboostSignUpEnroll] = useState("")
  const [skillsboostSignUpInterestedInDataScience, setSkillsboostSignUpInterestedInDataScience] = useState("")
  const [skillsboostSignUpInterestedInMachineLearning, setSkillsboostSignUpInterestedInMachineLearning] = useState("")
  const [skillsboostSignUpInterestedInCoding, setSkillsboostSignUpInterestedInCoding] = useState("")
  const [skillsboostSignUpInterestedInDesignThinking, setSkillsboostSignUpInterestedInDesignThinking] = useState("")
  const [skillsboostSignUpFirstName, setSkillsboostSignUpFirstName] = useState("")
  const [skillsboostSignUpLastName, setSkillsboostSignUpLastName] = useState("")
  const [skillsboostSignUpEmail, setSkillsboostSignUpEmail] = useState("")

  const resetSkillsboostSignUpForm = () => {
    setSkillsboostSignUpCostAgreement("");
    setSkillsboostSignUpExperience("");
    setSkillsboostSignUpEligibleToWork("");
    setSkillsboostSignUpStatus("");
    setSkillsboostSignUpEnroll("");
    setSkillsboostSignUpInterestedInDataScience("");
    setSkillsboostSignUpInterestedInMachineLearning("");
    setSkillsboostSignUpInterestedInCoding("");
    setSkillsboostSignUpInterestedInDesignThinking("");
    setSkillsboostSignUpFirstName("");
    setSkillsboostSignUpLastName("");
    setSkillsboostSignUpEmail("");
    document.querySelector('body').style.overflowY = '';
  }

  const [showSkillsboostSignUpFormCostAgreement, setShowSkillsboostSignUpFormCostAgreement] = useState(false);
  const [showSkillsboostSignUpFormExperience, setShowSkillsboostSignUpFormExperience] = useState(false);
  const [showSkillsboostSignUpFormEligibleToWork, setShowSkillsboostSignUpFormEligibleToWork] = useState(false);
  const [showSkillsboostSignUpFormStatus, setShowSkillsboostSignUpFormStatus] = useState(false)
  const [showSkillsboostSignUpFormEnroll, setShowSkillsboostSignUpFormEnroll] = useState(false)
  const [showSkillsboostSignUpFormInterest, setShowSkillsboostSignUpFormInterest] = useState(false)
  const [showSkillsboostSignUpFormUserInfo, setShowSkillsboostSignUpFormUserInfo] = useState(false)
  const [showSkillsboostSignUpFormStepThankYou, setShowSkillsboostSignUpFormStepThankYou] = useState(false)
  const [showSkillsboostSignUpFormStepEndingTwo, setShowSkillsboostSignUpFormStepEndingTwo] = useState(false)

  const [skillsboostSignUpFormSubmit, setSkillsboostSignUpFormSubmit] = useState(INITIAL_STATE_USER_INTEREST);

  const [skillsboostSignUpInvalidEmailMessage, setSkillsboostSignUpInvalidEmailMessage] = useState("")

  const [skillsboostSignUpCostAgreementNextdisabled, setSkillsboostSignUpCostAgreementNextDisabled] = useState(true);
  const [skillsboostSignUpExperienceNextdisabled, setSkillsboostSignUpExperienceNextDisabled] = useState(true);
  const [skillsboostSignUpEligibleToWorkNextdisabled, setSkillsboostSignUpEligibleToWorkNextDisabled] = useState(true);
  const [skillsboostSignUpStatusNextdisabled, setSkillsboostSignUpStatusNextDisabled] = useState(true);
  const [skillsboostSignUpEnrollNextdisabled, setSkillsboostSignUpEnrollNextDisabled] = useState(true);
  const [skillsboostSignUpUserInfoNextdisabled, setSkillsboostSignUpUserInfoNextDisabled] = useState(true);

  const onSkillsboostSignUpCostAgreementOptionChange = (e) => {
    setSkillsboostSignUpCostAgreement(e.target.value);
  }
  
  const onSkillsboostSignUpExperienceOptionChange = (e) => {
    setSkillsboostSignUpExperience(e.target.value);
  }
  
  const onSkillsboostSignUpEligibleToWorkOptionChange = (e) => {
    setSkillsboostSignUpEligibleToWork(e.target.value);
  }

  const onSkillsboostSignUpStatusOptionChange = (e) => {
    setSkillsboostSignUpStatus(e.target.value);
  }
  
  const onSkillsboostSignUpEnrollOptionChange = (e) => {
    setSkillsboostSignUpEnroll(e.target.value);
  }
  
  const handleSkillsboostSignUpChangeDataScience = (e) => {
    setSkillsboostSignUpInterestedInDataScience(!skillsboostSignUpInterestedInDataScience);
  }

  const handleSkillsboostSignUpChangeMachineLearning = (e) => {
    setSkillsboostSignUpInterestedInMachineLearning(!skillsboostSignUpInterestedInMachineLearning);
  }

  const handleSkillsboostSignUpChangeCoding = (e) => {
    setSkillsboostSignUpInterestedInCoding(!skillsboostSignUpInterestedInCoding);
  }

  const handleSkillsboostSignUpChangeDesignThinking = (e) => {
    setSkillsboostSignUpInterestedInDesignThinking(!skillsboostSignUpInterestedInDesignThinking);
  }

  const validateEmail = (email) => {
    if(email !== "") {
      if (validator.isEmail(email)) {
        setSkillsboostSignUpInvalidEmailMessage("");
        setSkillsboostSignUpUserInfoNextDisabled(false);
      } else {
        setSkillsboostSignUpInvalidEmailMessage("Is not a valid Email!");
        setSkillsboostSignUpUserInfoNextDisabled(true)
      }
    } else if(email === "") {
      setSkillsboostSignUpInvalidEmailMessage("");
      setSkillsboostSignUpUserInfoNextDisabled(true);
    }
  };

  const handleSkillsboostSignUpFirstNameChange = (e) => {
    setSkillsboostSignUpFirstName(e.target.value)
  }
 
  const handleSkillsboostSignUpLastNameChange = (e) => {
    setSkillsboostSignUpLastName(e.target.value)
  }
    
  const handleSkillsboostSignUpEmailChange = (e) => {
    setSkillsboostSignUpEmail(e.target.value)
  }

  const onSubmitSkillsboostSignUpCostAgreement = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormCostAgreement(false);
      if(skillsboostSignUpCostAgreement === "Yes") {
        setShowSkillsboostSignUpFormExperience(true);
      } else {
        setShowSkillsboostSignUpFormStepEndingTwo(true);
      }
    })
  }

  const onSubmitSkillsboostSignUpExperience = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormExperience(false);
      if(skillsboostSignUpExperience === "Professional with at least 3 years of experience") {
        setShowSkillsboostSignUpFormEligibleToWork(true);
      } else if(skillsboostSignUpExperience === "Other") {
        setShowSkillsboostSignUpFormStepEndingTwo(true);
      } else {
        setShowSkillsboostSignUpFormStatus(true);
      }
    }, 300);
  }
  
  const onSubmitSkillsboostSignUpEligibleToWork = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormEligibleToWork(false);
      if(skillsboostSignUpEligibleToWork === "Yes") {
        setShowSkillsboostSignUpFormInterest(true);
      } else {
        setShowSkillsboostSignUpFormStepEndingTwo(true);
        setSkillsboostSignUpFormSubmit(INITIAL_STATE_USER_INTEREST);
        resetSkillsboostSignUpForm();
      }
    }, 300);
  }

  const onSubmitSkillsboostSignUpStatus = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormStatus(false);
      if(skillsboostSignUpStatus === "None of the above") {
        setShowSkillsboostSignUpFormStepEndingTwo(true);
        setSkillsboostSignUpFormSubmit(INITIAL_STATE_USER_INTEREST);
        resetSkillsboostSignUpForm();
      } else if(skillsboostSignUpExperience === "Higher Secondary school student and at least 15 years of age") {
        setShowSkillsboostSignUpFormInterest(true);
      } else {
        setShowSkillsboostSignUpFormEnroll(true);
      }
    }, 300);
  }
  
  const onSubmitSkillsboostSignUpEnroll = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormEnroll(false);
      setShowSkillsboostSignUpFormInterest(true);
    }, 300);
  }
  
  const onSubmitSkillsboostSignUpInterest = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormInterest(false);
      setShowSkillsboostSignUpFormUserInfo(true);
    }, 300);
  }
  
  const onSubmitSkillsboostSignUpUserInfo = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowSkillsboostSignUpFormUserInfo(false);
      setShowSkillsboostSignUpFormStepThankYou(true);
      handleSkillsboostSignUpFormSubmit();
      resetSkillsboostSignUpForm();
    }, 300);
  }
  
  const handleSkillsboostSignUpFormSubmit = async () => {
    try {
      const url = `https://formspree.io/f/xlekeqld`;
      const { formSubmitFrom, formName, skillsboostSignUpCostAgreement, skillsboostSignUpExperience, skillsboostSignUpEligibleToWork, skillsboostSignUpStatus, skillsboostSignUpEnrolledInUniversity, skillsboostSignUpInterestedInDataScience, skillsboostSignUpInterestedInMachineLearning, skillsboostSignUpInterestedInCoding, skillsboostSignUpInterestedInDesignThinking, skillsboostSignUpFirstName, skillsboostSignUpLastName, skillsboostSignUpEmail } = skillsboostSignUpFormSubmit;
      const payload = { formSubmitFrom, formName, skillsboostSignUpCostAgreement, skillsboostSignUpExperience, skillsboostSignUpEligibleToWork, skillsboostSignUpStatus, skillsboostSignUpEnrolledInUniversity, skillsboostSignUpInterestedInDataScience, skillsboostSignUpInterestedInMachineLearning, skillsboostSignUpInterestedInCoding, skillsboostSignUpInterestedInDesignThinking, skillsboostSignUpFirstName, skillsboostSignUpLastName, skillsboostSignUpEmail };
      const response = await axios.post(url, payload);
      console.log(response);
      setSkillsboostSignUpFormSubmit(INITIAL_STATE_USER_INTEREST);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpCostAgreement": skillsboostSignUpCostAgreement }));
  }, [skillsboostSignUpCostAgreement])
  
  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpExperience": skillsboostSignUpExperience }));
  }, [skillsboostSignUpExperience])
  
  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpEligibleToWork": skillsboostSignUpEligibleToWork }));
  }, [skillsboostSignUpEligibleToWork])
      
  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpStatus": skillsboostSignUpStatus }));
  }, [skillsboostSignUpStatus])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpEnrolledInUniversity": skillsboostSignUpEnroll }));
  }, [skillsboostSignUpEnroll])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpInterestedInDataScience": skillsboostSignUpInterestedInDataScience }));
  }, [skillsboostSignUpInterestedInDataScience])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpInterestedInMachineLearning": skillsboostSignUpInterestedInMachineLearning }));
  }, [skillsboostSignUpInterestedInMachineLearning])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpInterestedInCoding": skillsboostSignUpInterestedInCoding }));
  }, [skillsboostSignUpInterestedInCoding])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpInterestedInDesignThinking": skillsboostSignUpInterestedInDesignThinking }));
  }, [skillsboostSignUpInterestedInDesignThinking])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpFirstName": skillsboostSignUpFirstName }));
  }, [skillsboostSignUpFirstName])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpLastName": skillsboostSignUpLastName }));
  }, [skillsboostSignUpLastName])

  useEffect(() => {
    setSkillsboostSignUpFormSubmit(prevState => ({ ...prevState, "skillsboostSignUpEmail": skillsboostSignUpEmail }));
  }, [skillsboostSignUpEmail])

  useEffect(() => {
    validateEmail(skillsboostSignUpEmail);
  }, [skillsboostSignUpEmail])

  useEffect(() => {
    skillsboostSignUpCostAgreement !== "" ? setSkillsboostSignUpCostAgreementNextDisabled(false) : setSkillsboostSignUpCostAgreementNextDisabled(true);
    skillsboostSignUpExperience !== "" ? setSkillsboostSignUpExperienceNextDisabled(false) : setSkillsboostSignUpExperienceNextDisabled(true);
    skillsboostSignUpEligibleToWork !== "" ? setSkillsboostSignUpEligibleToWorkNextDisabled(false) : setSkillsboostSignUpEligibleToWorkNextDisabled(true);
    skillsboostSignUpStatus !== "" ? setSkillsboostSignUpStatusNextDisabled(false) : setSkillsboostSignUpStatusNextDisabled(true);
    skillsboostSignUpEnroll !== "" ? setSkillsboostSignUpEnrollNextDisabled(false) : setSkillsboostSignUpEnrollNextDisabled(true);
  }, [skillsboostSignUpCostAgreement, skillsboostSignUpEligibleToWork, skillsboostSignUpExperience, skillsboostSignUpStatus, skillsboostSignUpEnroll])
  
  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setShowSkillsboostSignUpFormCostAgreement(true);
  }, [])

  useEffect(() => {
    if(showSkillsboostSignUpFormCostAgreement) transitionIn("SkillsboostSignUpFormQuestionCostAgreement");
    if(showSkillsboostSignUpFormExperience) transitionIn("SkillsboostSignUpFormQuestionExperience");
    if(showSkillsboostSignUpFormEligibleToWork) transitionIn("SkillsboostSignUpFormQuestionEligibleToWork");
    if(showSkillsboostSignUpFormStatus) transitionIn("SkillsboostSignUpFormQuestionStatus");
    if(showSkillsboostSignUpFormEnroll) transitionIn("SkillsboostSignUpFormQuestionEnroll");
    if(showSkillsboostSignUpFormInterest) transitionIn("SkillsboostSignUpFormQuestionInterest");
    if(showSkillsboostSignUpFormUserInfo) transitionIn("SkillsboostSignUpFormQuestionUserInfo");
    if(showSkillsboostSignUpFormStepThankYou) transitionIn("SkillsboostSignUpFormStepThankYou");
    if(showSkillsboostSignUpFormStepEndingTwo) transitionIn("SkillsboostSignUpFormStepEndingTwo");
  }, [showSkillsboostSignUpFormCostAgreement, showSkillsboostSignUpFormEligibleToWork, showSkillsboostSignUpFormExperience, showSkillsboostSignUpFormStatus, showSkillsboostSignUpFormEnroll, showSkillsboostSignUpFormInterest, showSkillsboostSignUpFormUserInfo, showSkillsboostSignUpFormStepThankYou, showSkillsboostSignUpFormStepEndingTwo])

  return (
    <>
      <div className="enrollment-form-container">
        <div className="enrollment-form-wrapper">
          <h3 className="enrollment-form-head">SkillsBoost Sign up<span className="enrollment-form-close-btn" onClick={() => {setShowSkillsboostSignUpForm(false); resetSkillsboostSignUpForm()}}>&#x2715;</span></h3>
          <div className="enrollment-form-body">
            {showSkillsboostSignUpFormCostAgreement && <div className="transition-in" id="SkillsboostSignUpFormQuestionCostAgreement">
              <h4>This program costs 700CAD. Are you interested to proceed?</h4>
              <input
                type="radio"
                value="Yes"
                name="skillsboostSignUpCostAgreement"
                id="rfq00o1"
                checked={skillsboostSignUpCostAgreement === "Yes"}
                onChange={onSkillsboostSignUpCostAgreementOptionChange}
              />
              <label htmlFor="rfq00o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="skillsboostSignUpCostAgreement"
                id="rfq00o2"
                checked={skillsboostSignUpCostAgreement === "No"}
                onChange={onSkillsboostSignUpCostAgreementOptionChange}
              />
              <label className="mt-4" htmlFor="rfq00o2">&nbsp;No</label>
            </div>}
            {showSkillsboostSignUpFormExperience && <div className="transition-in" id="SkillsboostSignUpFormQuestionExperience">
              <h4>Tell us about yourself. Are you a</h4>
              <input
                type="radio"
                value="Professional with at least 3 years of experience"
                name="skillsboostSignUpExperience"
                id="rfq0o1"
                checked={skillsboostSignUpExperience === "Professional with at least 3 years of experience"}
                onChange={onSkillsboostSignUpExperienceOptionChange}
              />
              <label className="d-flex flex-row" htmlFor="rfq0o1">&nbsp;Professional with at least 3 years of experience.&nbsp;&nbsp;&nbsp;
                <div className="user-interest-form-experience">
                  <img width='24px' src={`${process.env.PUBLIC_URL}/images/icons/info-solid.svg`} alt="info" />
                  <div className="user-interest-form-experience-info">
                    <ul>
                      <li>Work experience can be outside of Canada.</li>
                      <li>Work experience does not need to be three consecutive years.</li>
                      <li>Work experience must be outside of full or part-time studies (high school or postsecondary).</li>
                      <li>Work experience can include volunteer work.</li>
                      <li>Three years can be a combination of full-time or part-time paid/volunteer work, where full-time is defined as 30 or more hours per week and part-time is defined as less than 30 hours per week.</li>
                    </ul>
                  </div>
                </div>
              </label>
              <input
                type="radio"
                value="Post Secondary/Recent Graduate"
                name="skillsboostSignUpExperience"
                id="rfq0o2"
                checked={skillsboostSignUpExperience === "Post Secondary/Recent Graduate"}
                onChange={onSkillsboostSignUpExperienceOptionChange}
              />
              <label className="mt-4" htmlFor="rfq0o2">&nbsp;Post Secondary/Recent Graduate</label>
              <input
                type="radio"
                value="Higher Secondary school student and at least 15 years of age"
                name="skillsboostSignUpExperience"
                id="rfq0o3"
                checked={skillsboostSignUpExperience === "Higher Secondary school student and at least 15 years of age"}
                onChange={onSkillsboostSignUpExperienceOptionChange}
              />
              <label className="mt-4" htmlFor="rfq0o3">&nbsp;Higher Secondary school student and at least 15 years of age</label>
              <input
                type="radio"
                value="Other"
                name="skillsboostSignUpExperience"
                id="rfq0o4"
                checked={skillsboostSignUpExperience === "Other"}
                onChange={onSkillsboostSignUpExperienceOptionChange}
              />
              <label className="mt-4" htmlFor="rfq0o4">&nbsp;Other</label>
            </div>}
            {showSkillsboostSignUpFormEligibleToWork && <div className="transition-in" id="SkillsboostSignUpFormQuestionEligibleToWork">
              <h4>Are you legally eligible to work in Canada?<br></br>
                <span className="note-in-form-question">Note: Work permit holders should have at least one year on the permit after the start of the upskilling program.</span>
              </h4>
              <input
                type="radio"
                value="Yes"
                name="skillsboostSignUpEligibleToWork"
                id="rfq01o1"
                checked={skillsboostSignUpEligibleToWork === "Yes"}
                onChange={onSkillsboostSignUpEligibleToWorkOptionChange}
              />
              <label htmlFor="rfq01o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="skillsboostSignUpEligibleToWork"
                id="rfq01o2"
                checked={skillsboostSignUpEligibleToWork === "No"}
                onChange={onSkillsboostSignUpEligibleToWorkOptionChange}
              />
              <label className="mt-4" htmlFor="rfq01o2">&nbsp;No</label>
            </div>}
            {showSkillsboostSignUpFormStatus && <div className="transition-in" id="SkillsboostSignUpFormQuestionStatus">
              <h4>Are you a Canadian Permanent Resident (PR), Canadian Citizen or International Student?</h4>
              <input
                type="radio"
                value="Canadian Permanent Resident"
                name="skillsboostSignUpStatus"
                id="rfq1o1"
                checked={skillsboostSignUpStatus === "Canadian Permanent Resident"}
                onChange={onSkillsboostSignUpStatusOptionChange}
              />
              <label htmlFor="rfq1o1">&nbsp;Canadian Permanent Resident</label>
              <input
                type="radio"
                value="Canadian Citizen"
                name="skillsboostSignUpStatus"
                id="rfq1o2"
                checked={skillsboostSignUpStatus === "Canadian Citizen"}
                onChange={onSkillsboostSignUpStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o2">&nbsp;Canadian Citizen</label>
              <input
                type="radio"
                value="International Student"
                name="skillsboostSignUpStatus"
                id="rfq1o3"
                checked={skillsboostSignUpStatus === "International Student"}
                onChange={onSkillsboostSignUpStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o3">&nbsp;International Student</label>
              <input
                type="radio"
                value="None of the above"
                name="skillsboostSignUpStatus"
                id="rfq1o4"
                checked={skillsboostSignUpStatus === "None of the above"}
                onChange={onSkillsboostSignUpStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o4">&nbsp;None of the above</label>
            </div>}
            {showSkillsboostSignUpFormEnroll && <div className="transition-in" id="SkillsboostSignUpFormQuestionEnroll">
              <h4>Are you currently enrolled in any Canadian University?</h4>
              <input
                type="radio"
                value="Yes"
                name="skillsboostSignUpEnroll"
                id="rfq2o1"
                checked={skillsboostSignUpEnroll === "Yes"}
                onChange={onSkillsboostSignUpEnrollOptionChange}
              />
              <label htmlFor="rfq2o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="skillsboostSignUpEnroll"
                id="rfq2o2"
                checked={skillsboostSignUpEnroll === "No"}
                onChange={onSkillsboostSignUpEnrollOptionChange}
              />
              <label className="mt-4" htmlFor="rfq2o2">&nbsp;No</label>
            </div>}
            {showSkillsboostSignUpFormInterest && <div className="transition-in" id="SkillsboostSignUpFormQuestionInterest">
              <h4>Are you interested in</h4>
              <Checkbox
                label="Data Science"
                value={skillsboostSignUpInterestedInDataScience}
                onChange={handleSkillsboostSignUpChangeDataScience}
              />
              <Checkbox
                label="Machine Learning"
                value={skillsboostSignUpInterestedInMachineLearning}
                onChange={handleSkillsboostSignUpChangeMachineLearning}
              />
              <Checkbox
                label="Coding"
                value={skillsboostSignUpInterestedInCoding}
                onChange={handleSkillsboostSignUpChangeCoding}
              />
              <Checkbox
                label="Design Thinking"
                value={skillsboostSignUpInterestedInDesignThinking}
                onChange={handleSkillsboostSignUpChangeDesignThinking}
              />
            </div>}
            {showSkillsboostSignUpFormUserInfo && <div className="transition-in" id="SkillsboostSignUpFormQuestionUserInfo">
              <h4>Please share your contact information</h4>
              <label>First Name<br></br>
                <input
                  type="text"
                  value={skillsboostSignUpFirstName}
                  placeholder="first"
                  name="first name"
                  id="rfq4o1"
                  className="enrollment-form-link-input"
                  onChange={handleSkillsboostSignUpFirstNameChange}
                />
              </label>
              <label className="mt-4">Last Name<br></br>
                <input
                  type="text"
                  value={skillsboostSignUpLastName}
                  placeholder="last"
                  name="last name"
                  id="rfq4o2"
                  className="enrollment-form-link-input"
                  onChange={handleSkillsboostSignUpLastNameChange}
                />
              </label>
              <label className="mt-4">Email<br></br>
                <input
                  type="text"
                  value={skillsboostSignUpEmail}
                  placeholder="name@example.com"
                  name="email"
                  id="rfq4o3"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleSkillsboostSignUpEmailChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{skillsboostSignUpInvalidEmailMessage}</span>
              </label>
            </div>}
            {showSkillsboostSignUpFormStepThankYou && <div className="transition-in" id="SkillsboostSignUpFormStepThankYou">
              <h4>Thank you for your interest! We will contact you shortly.</h4>
              <p>Please send your resume as an email to <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a>.</p>
              {/* <Link className="edu-btn btn-bg-alt" to="/datatalent">More Info<i className="icon-arrow-right-line-right"></i></Link> */}
            </div>}
            {showSkillsboostSignUpFormStepEndingTwo && <div className="transition-in" id="SkillsboostSignUpFormStepEndingTwo">
              <h4>Unfortunately, We won't be able to proceed on this program sign up.</h4>
              <p>Please browse our other programs.</p>
              {/* <Link className="edu-btn btn-bg-alt" to="/datatalent">More Info<i className="icon-arrow-right-line-right"></i></Link> */}
            </div>}
          </div>
          <div className="enrollment-form-footer">
            {showSkillsboostSignUpFormCostAgreement && <>
              <button className='edu-btn' style={{visibility: 'hidden'}}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpCostAgreementNextdisabled} onClick={() => onSubmitSkillsboostSignUpCostAgreement("SkillsboostSignUpFormQuestionCostAgreement")}>Next</button>
            </>}
            {showSkillsboostSignUpFormExperience && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionExperience", setShowSkillsboostSignUpFormExperience, setShowSkillsboostSignUpFormCostAgreement ); setSkillsboostSignUpEligibleToWork(""); }}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpExperienceNextdisabled} onClick={() => onSubmitSkillsboostSignUpExperience("SkillsboostSignUpFormQuestionExperience")}>Next</button>
            </>}
            {showSkillsboostSignUpFormEligibleToWork && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionEligibleToWork", setShowSkillsboostSignUpFormEligibleToWork, setShowSkillsboostSignUpFormExperience ); setSkillsboostSignUpEligibleToWork(""); }}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpEligibleToWorkNextdisabled} onClick={() => onSubmitSkillsboostSignUpEligibleToWork("SkillsboostSignUpFormQuestionEligibleToWork")}>Next</button>
            </>}
            {showSkillsboostSignUpFormStatus && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionStatus", setShowSkillsboostSignUpFormStatus, setShowSkillsboostSignUpFormExperience ); setSkillsboostSignUpStatus(""); }}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpStatusNextdisabled} onClick={() => onSubmitSkillsboostSignUpStatus("SkillsboostSignUpFormQuestionStatus")}>Next</button>
            </>}
            {showSkillsboostSignUpFormEnroll && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionEnroll", setShowSkillsboostSignUpFormEnroll, setShowSkillsboostSignUpFormStatus ); setSkillsboostSignUpEnroll(""); }}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpEnrollNextdisabled} onClick={() => onSubmitSkillsboostSignUpEnroll("SkillsboostSignUpFormQuestionEnroll" )}>Next</button>
            </>}
            {showSkillsboostSignUpFormInterest && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionInterest", setShowSkillsboostSignUpFormInterest, skillsboostSignUpEligibleToWork === "Yes" ? setShowSkillsboostSignUpFormEligibleToWork : skillsboostSignUpExperience === "Higher Secondary school student and at least 15 years of age" ? setShowSkillsboostSignUpFormStatus : setShowSkillsboostSignUpFormEnroll ); setSkillsboostSignUpInterestedInDataScience(""); setSkillsboostSignUpInterestedInMachineLearning(""); setSkillsboostSignUpInterestedInCoding(""); setSkillsboostSignUpInterestedInDesignThinking(""); }}>Back</button>
              <button className='edu-btn' onClick={() => onSubmitSkillsboostSignUpInterest( "SkillsboostSignUpFormQuestionInterest" )}>Next</button>
            </>}
            {showSkillsboostSignUpFormUserInfo && <>
              <button className='edu-btn' onClick={() => { transitionBack( "SkillsboostSignUpFormQuestionUserInfo", setShowSkillsboostSignUpFormUserInfo, setShowSkillsboostSignUpFormInterest ); setSkillsboostSignUpFirstName(""); setSkillsboostSignUpLastName(""); setSkillsboostSignUpEmail(""); }}>Back</button>
              <button className='edu-btn' disabled={skillsboostSignUpUserInfoNextdisabled} onClick={() => onSubmitSkillsboostSignUpUserInfo( "SkillsboostSignUpFormQuestionUserInfo" )}>Next</button>
            </>}
            {showSkillsboostSignUpFormStepThankYou && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowSkillsboostSignUpForm(false)}>Done</button>
            </>}
            {showSkillsboostSignUpFormStepEndingTwo && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowSkillsboostSignUpForm(false)}>Done</button>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsboostSignUpForm;