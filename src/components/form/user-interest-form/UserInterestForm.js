import React, { useState, useEffect } from 'react';
import { transitionBack, transitionIn, transitionOut } from '../../../utils/transitions';
import Checkbox from '../../../common/Checkbox';
import validator from 'validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

const INITIAL_STATE_USER_INTEREST = {
  formSubmitFrom: "https://www.m2mtechconnect.com/careers/work-integrated-learning",
  formName: "Cohort Sign up form",
  userInterestExperience: "",
  userInterestEligibleToWork: "",
  userInterestStatus: "",
  userInterestEnrolledInUniversity: "",
  userInterestInterestedInDataScience: "",
  userInterestInterestedInMachineLearning: "",
  userInterestInterestedInCoding: "",
  userInterestInterestedInDesignThinking: "",
  userInterestFirstName: "",
  userInterestLastName: "",
  userInterestEmail: "",
};

const UserInterestForm = ({
  setShowUserInterestForm
  }) => {

  const [userInterestExperience, setUserInterestExperience] = useState("");
  const [userInterestEligibleToWork, setUserInterestEligibleToWork] = useState("");
  const [userInterestStatus, setUserInterestStatus] = useState("")
  const [userInterestEnroll, setUserInterestEnroll] = useState("")
  const [userInterestInterestedInDataScience, setUserInterestInterestedInDataScience] = useState("")
  const [userInterestInterestedInMachineLearning, setUserInterestInterestedInMachineLearning] = useState("")
  const [userInterestInterestedInCoding, setUserInterestInterestedInCoding] = useState("")
  const [userInterestInterestedInDesignThinking, setUserInterestInterestedInDesignThinking] = useState("")
  const [userInterestFirstName, setUserInterestFirstName] = useState("")
  const [userInterestLastName, setUserInterestLastName] = useState("")
  const [userInterestEmail, setUserInterestEmail] = useState("")

  const resetUserInterestForm = () => {
    setUserInterestExperience("");
    setUserInterestEligibleToWork("");
    setUserInterestStatus("");
    setUserInterestEnroll("");
    setUserInterestInterestedInDataScience("");
    setUserInterestInterestedInMachineLearning("");
    setUserInterestInterestedInCoding("");
    setUserInterestInterestedInDesignThinking("");
    setUserInterestFirstName("");
    setUserInterestLastName("");
    setUserInterestEmail("");
    document.querySelector('body').style.overflowY = '';
  }

  const [showUserInterestFormExperience, setShowUserInterestFormExperience] = useState(false);
  const [showUserInterestFormEligibleToWork, setShowUserInterestFormEligibleToWork] = useState(false);
  const [showUserInterestFormStatus, setShowUserInterestFormStatus] = useState(false)
  const [showUserInterestFormEnroll, setShowUserInterestFormEnroll] = useState(false)
  const [showUserInterestFormInterest, setShowUserInterestFormInterest] = useState(false)
  const [showUserInterestFormUserInfo, setShowUserInterestFormUserInfo] = useState(false)
  const [showUserInterestFormStepThankYou, setShowUserInterestFormStepThankYou] = useState(false)
  const [showUserInterestFormStepEndingTwo, setShowUserInterestFormStepEndingTwo] = useState(false)

  const [userInterestFormSubmit, setUserInterestFormSubmit] = useState(INITIAL_STATE_USER_INTEREST);

  const [userInterestInvalidEmailMessage, setUserInterestInvalidEmailMessage] = useState("")

  const [userInterestExperienceNextdisabled, setUserInterestExperienceNextDisabled] = useState(true);
  const [userInterestEligibleToWorkNextdisabled, setUserInterestEligibleToWorkNextDisabled] = useState(true);
  const [userInterestStatusNextdisabled, setUserInterestStatusNextDisabled] = useState(true);
  const [userInterestEnrollNextdisabled, setUserInterestEnrollNextDisabled] = useState(true);
  const [userInterestUserInfoNextdisabled, setUserInterestUserInfoNextDisabled] = useState(true);

  const onUserInterestExperienceOptionChange = (e) => {
    setUserInterestExperience(e.target.value);
  }
  
  const onUserInterestEligibleToWorkOptionChange = (e) => {
    setUserInterestEligibleToWork(e.target.value);
  }

  const onUserInterestStatusOptionChange = (e) => {
    setUserInterestStatus(e.target.value);
  }
  
  const onUserInterestEnrollOptionChange = (e) => {
    setUserInterestEnroll(e.target.value);
  }
  
  const handleUserInterestChangeDataScience = (e) => {
    setUserInterestInterestedInDataScience(!userInterestInterestedInDataScience);
  }

  const handleUserInterestChangeMachineLearning = (e) => {
    setUserInterestInterestedInMachineLearning(!userInterestInterestedInMachineLearning);
  }

  const handleUserInterestChangeCoding = (e) => {
    setUserInterestInterestedInCoding(!userInterestInterestedInCoding);
  }

  const handleUserInterestChangeDesignThinking = (e) => {
    setUserInterestInterestedInDesignThinking(!userInterestInterestedInDesignThinking);
  }

  const validateEmail = (email) => {
    if(email !== "") {
      if (validator.isEmail(email)) {
        setUserInterestInvalidEmailMessage("");
        setUserInterestUserInfoNextDisabled(false);
      } else {
        setUserInterestInvalidEmailMessage("Is not a valid Email!");
        setUserInterestUserInfoNextDisabled(true)
      }
    } else if(email === "") {
      setUserInterestInvalidEmailMessage("");
      setUserInterestUserInfoNextDisabled(true);
    }
  };

  const handleUserInterestFirstNameChange = (e) => {
    setUserInterestFirstName(e.target.value)
  }
 
  const handleUserInterestLastNameChange = (e) => {
    setUserInterestLastName(e.target.value)
  }
    
  const handleUserInterestEmailChange = (e) => {
    setUserInterestEmail(e.target.value)
  }

  const onSubmitUserInterestExperience = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormExperience(false);
      if(userInterestExperience === "Professional with at least 3 years of experience") {
        setShowUserInterestFormEligibleToWork(true);
      } else if(userInterestExperience === "Other") {
        setShowUserInterestFormStepEndingTwo(true);
      } else {
        setShowUserInterestFormStatus(true);
      }
    }, 300);
  }
  
  const onSubmitUserInterestEligibleToWork = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormEligibleToWork(false);
      if(userInterestEligibleToWork === "Yes") {
        setShowUserInterestFormInterest(true);
      } else {
        setShowUserInterestFormStepEndingTwo(true);
        setUserInterestFormSubmit(INITIAL_STATE_USER_INTEREST);
        resetUserInterestForm();
      }
    }, 300);
  }

  const onSubmitUserInterestStatus = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormStatus(false);
      if(userInterestStatus === "None of the above") {
        setShowUserInterestFormStepEndingTwo(true);
        setUserInterestFormSubmit(INITIAL_STATE_USER_INTEREST);
        resetUserInterestForm();
      } else {
        setShowUserInterestFormEnroll(true);
      }
    }, 300);
  }
  
  const onSubmitUserInterestEnroll = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormEnroll(false);
      setShowUserInterestFormInterest(true);
    }, 300);
  }
  
  const onSubmitUserInterestInterest = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormInterest(false);
      setShowUserInterestFormUserInfo(true);
    }, 300);
  }
  
  const onSubmitUserInterestUserInfo = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowUserInterestFormUserInfo(false);
      setShowUserInterestFormStepThankYou(true);
      handleUserInterestFormSubmit();
      resetUserInterestForm();
    }, 300);
  }
  
  const handleUserInterestFormSubmit = async () => {
    try {
      const url = `https://formspree.io/f/xlekeqld`;
      const { formSubmitFrom, formName, userInterestExperience, userInterestEligibleToWork, userInterestStatus, userInterestEnrolledInUniversity, userInterestInterestedInDataScience, userInterestInterestedInMachineLearning, userInterestInterestedInCoding, userInterestInterestedInDesignThinking, userInterestFirstName, userInterestLastName, userInterestEmail } = userInterestFormSubmit;
      const payload = { formSubmitFrom, formName, userInterestExperience, userInterestEligibleToWork, userInterestStatus, userInterestEnrolledInUniversity, userInterestInterestedInDataScience, userInterestInterestedInMachineLearning, userInterestInterestedInCoding, userInterestInterestedInDesignThinking, userInterestFirstName, userInterestLastName, userInterestEmail };
      const response = await axios.post(url, payload);
      console.log(response);
      setUserInterestFormSubmit(INITIAL_STATE_USER_INTEREST);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestExperience": userInterestExperience }));
  }, [userInterestExperience])
  
  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestEligibleToWork": userInterestEligibleToWork }));
  }, [userInterestEligibleToWork])
      
  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestStatus": userInterestStatus }));
  }, [userInterestStatus])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestEnrolledInUniversity": userInterestEnroll }));
  }, [userInterestEnroll])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestInterestedInDataScience": userInterestInterestedInDataScience }));
  }, [userInterestInterestedInDataScience])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestInterestedInMachineLearning": userInterestInterestedInMachineLearning }));
  }, [userInterestInterestedInMachineLearning])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestInterestedInCoding": userInterestInterestedInCoding }));
  }, [userInterestInterestedInCoding])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestInterestedInDesignThinking": userInterestInterestedInDesignThinking }));
  }, [userInterestInterestedInDesignThinking])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestFirstName": userInterestFirstName }));
  }, [userInterestFirstName])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestLastName": userInterestLastName }));
  }, [userInterestLastName])

  useEffect(() => {
    setUserInterestFormSubmit(prevState => ({ ...prevState, "userInterestEmail": userInterestEmail }));
  }, [userInterestEmail])

  useEffect(() => {
    validateEmail(userInterestEmail);
  }, [userInterestEmail])

  useEffect(() => {
    userInterestExperience !== "" ? setUserInterestExperienceNextDisabled(false) : setUserInterestExperienceNextDisabled(true);
    userInterestEligibleToWork !== "" ? setUserInterestEligibleToWorkNextDisabled(false) : setUserInterestEligibleToWorkNextDisabled(true);
    userInterestStatus !== "" ? setUserInterestStatusNextDisabled(false) : setUserInterestStatusNextDisabled(true);
    userInterestEnroll !== "" ? setUserInterestEnrollNextDisabled(false) : setUserInterestEnrollNextDisabled(true);
  }, [userInterestEligibleToWork, userInterestExperience, userInterestStatus, userInterestEnroll])
  
  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setShowUserInterestFormExperience(true);
  }, [])

  useEffect(() => {
    if(showUserInterestFormExperience) transitionIn("UserInterestFormQuestionExperience");
    if(showUserInterestFormEligibleToWork) transitionIn("UserInterestFormQuestionEligibleToWork");
    if(showUserInterestFormStatus) transitionIn("UserInterestFormQuestionStatus");
    if(showUserInterestFormEnroll) transitionIn("UserInterestFormQuestionEnroll");
    if(showUserInterestFormInterest) transitionIn("UserInterestFormQuestionInterest");
    if(showUserInterestFormUserInfo) transitionIn("UserInterestFormQuestionUserInfo");
    if(showUserInterestFormStepThankYou) transitionIn("UserInterestFormStepThankYou");
    if(showUserInterestFormStepEndingTwo) transitionIn("UserInterestFormStepEndingTwo");
  }, [showUserInterestFormEligibleToWork, showUserInterestFormExperience, showUserInterestFormStatus, showUserInterestFormEnroll, showUserInterestFormInterest, showUserInterestFormUserInfo, showUserInterestFormStepThankYou, showUserInterestFormStepEndingTwo])

  return (
    <>
      <div className="enrollment-form-container">
        <div className="enrollment-form-wrapper">
          <h3 className="enrollment-form-head">Cohort Sign up<span className="enrollment-form-close-btn" onClick={() => {setShowUserInterestForm(false); resetUserInterestForm()}}>&#x2715;</span></h3>
          <div className="enrollment-form-body">
            {showUserInterestFormExperience && <div className="transition-in" id="UserInterestFormQuestionExperience">
              <h4>Tell us about yourself. Are you a</h4>
              <input
                type="radio"
                value="Professional with at least 3 years of experience"
                name="userInterestExperience"
                id="rfq0o1"
                checked={userInterestExperience === "Professional with at least 3 years of experience"}
                onChange={onUserInterestExperienceOptionChange}
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
                name="userInterestExperience"
                id="rfq0o2"
                checked={userInterestExperience === "Post Secondary/Recent Graduate"}
                onChange={onUserInterestExperienceOptionChange}
              />
              <label className="mt-4" htmlFor="rfq0o2">&nbsp;Post Secondary/Recent Graduate</label>
              <input
                type="radio"
                value="Other"
                name="userInterestExperience"
                id="rfq0o3"
                checked={userInterestExperience === "Other"}
                onChange={onUserInterestExperienceOptionChange}
              />
              <label className="mt-4" htmlFor="rfq0o3">&nbsp;Other</label>
            </div>}
            {showUserInterestFormEligibleToWork && <div className="transition-in" id="UserInterestFormQuestionEligibleToWork">
              <h4>Are you legally eligible to work in Canada?<br></br>
                <span className="note-in-form-question">Note: Work permit holders should have at least one year on the permit after the start of the upskilling program.</span>
              </h4>
              <input
                type="radio"
                value="Yes"
                name="userInterestEligibleToWork"
                id="rfq01o1"
                checked={userInterestEligibleToWork === "Yes"}
                onChange={onUserInterestEligibleToWorkOptionChange}
              />
              <label htmlFor="rfq01o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="userInterestEligibleToWork"
                id="rfq01o2"
                checked={userInterestEligibleToWork === "No"}
                onChange={onUserInterestEligibleToWorkOptionChange}
              />
              <label className="mt-4" htmlFor="rfq01o2">&nbsp;No</label>
            </div>}
            {showUserInterestFormStatus && <div className="transition-in" id="UserInterestFormQuestionStatus">
              <h4>Are you a Canadian Permanent Resident (PR), Canadian Citizen or International Student?</h4>
              <input
                type="radio"
                value="Canadian Permanent Resident"
                name="userInterestStatus"
                id="rfq1o1"
                checked={userInterestStatus === "Canadian Permanent Resident"}
                onChange={onUserInterestStatusOptionChange}
              />
              <label htmlFor="rfq1o1">&nbsp;Canadian Permanent Resident</label>
              <input
                type="radio"
                value="Canadian Citizen"
                name="userInterestStatus"
                id="rfq1o2"
                checked={userInterestStatus === "Canadian Citizen"}
                onChange={onUserInterestStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o2">&nbsp;Canadian Citizen</label>
              <input
                type="radio"
                value="International Student"
                name="userInterestStatus"
                id="rfq1o3"
                checked={userInterestStatus === "International Student"}
                onChange={onUserInterestStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o3">&nbsp;International Student</label>
              <input
                type="radio"
                value="None of the above"
                name="userInterestStatus"
                id="rfq1o4"
                checked={userInterestStatus === "None of the above"}
                onChange={onUserInterestStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o4">&nbsp;None of the above</label>
            </div>}
            {showUserInterestFormEnroll && <div className="transition-in" id="UserInterestFormQuestionEnroll">
              <h4>Are you currently enrolled in any Canadian University?</h4>
              <input
                type="radio"
                value="Yes"
                name="userInterestEnroll"
                id="rfq2o1"
                checked={userInterestEnroll === "Yes"}
                onChange={onUserInterestEnrollOptionChange}
              />
              <label htmlFor="rfq2o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="userInterestEnroll"
                id="rfq2o2"
                checked={userInterestEnroll === "No"}
                onChange={onUserInterestEnrollOptionChange}
              />
              <label className="mt-4" htmlFor="rfq2o2">&nbsp;No</label>
            </div>}
            {showUserInterestFormInterest && <div className="transition-in" id="UserInterestFormQuestionInterest">
              <h4>Are you interested in</h4>
              <Checkbox
                label="Data Science"
                value={userInterestInterestedInDataScience}
                onChange={handleUserInterestChangeDataScience}
              />
              <Checkbox
                label="Machine Learning"
                value={userInterestInterestedInMachineLearning}
                onChange={handleUserInterestChangeMachineLearning}
              />
              <Checkbox
                label="Coding"
                value={userInterestInterestedInCoding}
                onChange={handleUserInterestChangeCoding}
              />
              <Checkbox
                label="Design Thinking"
                value={userInterestInterestedInDesignThinking}
                onChange={handleUserInterestChangeDesignThinking}
              />
            </div>}
            {showUserInterestFormUserInfo && <div className="transition-in" id="UserInterestFormQuestionUserInfo">
              <h4>Please share your contact information</h4>
              <label>First Name<br></br>
                <input
                  type="text"
                  value={userInterestFirstName}
                  placeholder="first"
                  name="first name"
                  id="rfq4o1"
                  className="enrollment-form-link-input"
                  onChange={handleUserInterestFirstNameChange}
                />
              </label>
              <label className="mt-4">Last Name<br></br>
                <input
                  type="text"
                  value={userInterestLastName}
                  placeholder="last"
                  name="last name"
                  id="rfq4o2"
                  className="enrollment-form-link-input"
                  onChange={handleUserInterestLastNameChange}
                />
              </label>
              <label className="mt-4">Email<br></br>
                <input
                  type="text"
                  value={userInterestEmail}
                  placeholder="name@example.com"
                  name="email"
                  id="rfq4o3"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleUserInterestEmailChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{userInterestInvalidEmailMessage}</span>
              </label>
            </div>}
            {showUserInterestFormStepThankYou && <div className="transition-in" id="UserInterestFormStepThankYou">
              <h4>Thank you for your interest! We will contact you shortly.</h4>
              <p>Please send your resume as an email to <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a>.</p>
              {/* <Link className="edu-btn btn-bg-alt" to="/datatalent">More Info<i className="icon-arrow-right-line-right"></i></Link> */}
            </div>}
            {showUserInterestFormStepEndingTwo && <div className="transition-in" id="UserInterestFormStepEndingTwo">
              <h4>Sorry! Unfortunately, We don't have any programs currently for you.</h4>
              <p>Please check again later.</p>
              {/* <Link className="edu-btn btn-bg-alt" to="/datatalent">More Info<i className="icon-arrow-right-line-right"></i></Link> */}
            </div>}
          </div>
          <div className="enrollment-form-footer">
            {showUserInterestFormExperience && <>
              <button className='edu-btn' style={{visibility: 'hidden'}}>Back</button>
              <button className='edu-btn' disabled={userInterestExperienceNextdisabled} onClick={() => onSubmitUserInterestExperience("UserInterestFormQuestionExperience")}>Next</button>
            </>}
            {showUserInterestFormEligibleToWork && <>
              <button className='edu-btn' onClick={() => { transitionBack( "UserInterestFormQuestionEligibleToWork", setShowUserInterestFormEligibleToWork, setShowUserInterestFormExperience ); setUserInterestEligibleToWork(""); }}>Back</button>
              <button className='edu-btn' disabled={userInterestEligibleToWorkNextdisabled} onClick={() => onSubmitUserInterestEligibleToWork("UserInterestFormQuestionEligibleToWork")}>Next</button>
            </>}
            {showUserInterestFormStatus && <>
              <button className='edu-btn' onClick={() => { transitionBack( "UserInterestFormQuestionStatus", setShowUserInterestFormStatus, setShowUserInterestFormExperience ); setUserInterestStatus(""); }}>Back</button>
              <button className='edu-btn' disabled={userInterestStatusNextdisabled} onClick={() => onSubmitUserInterestStatus("UserInterestFormQuestionStatus")}>Next</button>
            </>}
            {showUserInterestFormEnroll && <>
              <button className='edu-btn' onClick={() => { transitionBack( "UserInterestFormQuestionEnroll", setShowUserInterestFormEnroll, setShowUserInterestFormStatus ); setUserInterestEnroll(""); }}>Back</button>
              <button className='edu-btn' disabled={userInterestEnrollNextdisabled} onClick={() => onSubmitUserInterestEnroll("UserInterestFormQuestionEnroll" )}>Next</button>
            </>}
            {showUserInterestFormInterest && <>
              <button className='edu-btn' onClick={() => { transitionBack( "UserInterestFormQuestionInterest", setShowUserInterestFormInterest, userInterestEligibleToWork === "Yes" ? setShowUserInterestFormEligibleToWork : setShowUserInterestFormEnroll ); setUserInterestInterestedInDataScience(""); setUserInterestInterestedInMachineLearning(""); setUserInterestInterestedInCoding(""); setUserInterestInterestedInDesignThinking(""); }}>Back</button>
              <button className='edu-btn' onClick={() => onSubmitUserInterestInterest( "UserInterestFormQuestionInterest" )}>Next</button>
            </>}
            {showUserInterestFormUserInfo && <>
              <button className='edu-btn' onClick={() => { transitionBack( "UserInterestFormQuestionUserInfo", setShowUserInterestFormUserInfo, setShowUserInterestFormInterest ); setUserInterestFirstName(""); setUserInterestLastName(""); setUserInterestEmail(""); }}>Back</button>
              <button className='edu-btn' disabled={userInterestUserInfoNextdisabled} onClick={() => onSubmitUserInterestUserInfo( "UserInterestFormQuestionUserInfo" )}>Next</button>
            </>}
            {showUserInterestFormStepThankYou && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowUserInterestForm(false)}>Done</button>
            </>}
            {showUserInterestFormStepEndingTwo && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowUserInterestForm(false)}>Done</button>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInterestForm;