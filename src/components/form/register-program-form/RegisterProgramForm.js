import React, { useState, useEffect } from 'react';
import { transitionBack, transitionIn, transitionOut } from '../../../utils/transitions';
import Checkbox from '../../../common/Checkbox';
import validator from 'validator';
import axios from 'axios';

const INITIAL_STATE_REGISTER_FORM = {
  formSubmitFrom: "https://www.m2mtechconnect.com",
  formName: "Register now form on programs",
  status: "",
  professional3years: "",
  enrolledInUniversity: "",
  interestedInDigitalTechnology: "",
  interestedInAdvancedManufacturing: "",
  interestedInCleanTechnology: "",
  interestedInLifeSciencesAndBiomanufacturing: "",
  firstName: "",
  lastName: "",
  email: "",
};


const RegisterProgramForm = ({
  setShowRegisterForm
  }) => {

  const [registerStatus, setRegisterStatus] = useState("")
  const [registerEnroll, setRegisterEnroll] = useState("")
  const [registerProfessional, setRegisterProfessional] = useState("")
  const [registerInterestedInDigitalTechnology, setRegisterInterestedInDigitalTechnology] = useState("")
  const [registerInterestedInAdvancedManufacturing, setRegisterInterestedInAdvancedManufacturing] = useState("")
  const [registerInterestedInCleanTechnology, setRegisterInterestedInCleanTechnology] = useState("")
  const [registerInterestedInLifeSciencesAndBiomanufacturing, setRegisterInterestedInLifeSciencesAndBiomanufacturing] = useState("")
  const [registerFirstName, setRegisterFirstName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")

  const resetRegisterForm = () => {
    setRegisterStatus("");
    setRegisterEnroll("");
    setRegisterProfessional("");
    setRegisterInterestedInDigitalTechnology("");
    setRegisterInterestedInAdvancedManufacturing("");
    setRegisterInterestedInCleanTechnology("");
    setRegisterInterestedInLifeSciencesAndBiomanufacturing("");
    setRegisterFirstName("");
    setRegisterLastName("");
    setRegisterEmail("");
    document.querySelector('body').style.overflowY = '';
  }

  const [showRegisterFormStatus, setShowRegisterFormStatus] = useState(false)
  const [showRegisterFormEnroll, setShowRegisterFormEnroll] = useState(false)
  const [showRegisterFormProfessional, setShowRegisterFormProfessional] = useState(false)
  const [showRegisterFormInterest, setShowRegisterFormInterest] = useState(false)
  const [showRegisterFormUserInfo, setShowRegisterFormUserInfo] = useState(false)
  const [showRegisterFormStepThankYou, setShowRegisterFormStepThankYou] = useState(false)
  const [showRegisterFormStepEndingTwo, setShowRegisterFormStepEndingTwo] = useState(false)

  const [registerFormSubmit, setRegisterFormSubmit] = useState(INITIAL_STATE_REGISTER_FORM);

  const [invalidEmailMessage, setInvalidEmailMessage] = useState("")

  const [statusNextdisabled, setStatusNextDisabled] = useState(true);
  const [enrollNextdisabled, setEnrollNextDisabled] = useState(true);
  const [professionalNextdisabled, setProfessionalNextDisabled] = useState(true);
  const [userInfoNextdisabled, setUserInfoNextDisabled] = useState(true);

  const onStatusOptionChange = (e) => {
    setRegisterStatus(e.target.value);
  }
  
  const onEnrollOptionChange = (e) => {
    setRegisterEnroll(e.target.value);
  }
  
  const onProfessionalOptionChange = (e) => {
    setRegisterProfessional(e.target.value);
  }

  const handleChangeDigitalTechnology = (e) => {
    setRegisterInterestedInDigitalTechnology(!registerInterestedInDigitalTechnology);
  }

  const handleChangeAdvancedManufacturing = (e) => {
    setRegisterInterestedInAdvancedManufacturing(!registerInterestedInAdvancedManufacturing);
  }

  const handleChangeCleanTechnology = (e) => {
    setRegisterInterestedInCleanTechnology(!registerInterestedInCleanTechnology);
  }

  const handleChangeLifeSciencesAndBiomanufacturing = (e) => {
    setRegisterInterestedInLifeSciencesAndBiomanufacturing(!registerInterestedInLifeSciencesAndBiomanufacturing);
  }

  const validateEmail = (email) => {
    if(email !== "") {
      if (validator.isEmail(email)) {
        setInvalidEmailMessage("");
        setUserInfoNextDisabled(false);
      } else {
        setInvalidEmailMessage("Is not a valid Email!");
        setUserInfoNextDisabled(true)
      }
    } else if(email === "") {
      setInvalidEmailMessage("");
      setUserInfoNextDisabled(true);
    }
  };

  const handleRegisterFirstNameChange = (e) => {
    setRegisterFirstName(e.target.value)
  }
 
  const handleRegisterLastNameChange = (e) => {
    setRegisterLastName(e.target.value)
  }
    
  const handleRegisterEmailChange = (e) => {
    setRegisterEmail(e.target.value)
  }
        
  
  const onSubmitRegisterStatus = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowRegisterFormStatus(false);
      if(registerStatus === "None of the above") {
        setShowRegisterFormStepEndingTwo(true);
        setRegisterFormSubmit(INITIAL_STATE_REGISTER_FORM);
        resetRegisterForm();
      } else {
        setShowRegisterFormEnroll(true);
      }
    }, 300);
  }
  
  const onSubmitRegisterEnroll = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowRegisterFormEnroll(false);
      if(registerEnroll === "Yes") {
        setShowRegisterFormInterest(true);
      } else {
        setShowRegisterFormProfessional(true);
      }
    }, 300);
  }
  
  const onSubmitRegisterProfessional = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowRegisterFormProfessional(false);
      if(registerProfessional === "Yes") {
        setShowRegisterFormInterest(true);
      } else {
        setShowRegisterFormStepEndingTwo(true);
        setRegisterFormSubmit(INITIAL_STATE_REGISTER_FORM);
        resetRegisterForm();
      }
    }, 300);
  }
  
  const onSubmitRegisterInterest = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowRegisterFormInterest(false);
      setShowRegisterFormUserInfo(true);
    }, 300);
  }
  
  const onSubmitRegisterUserInfo = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowRegisterFormUserInfo(false);
      setShowRegisterFormStepThankYou(true);
      handleRegisterFormSubmit();      
      setRegisterFormSubmit(INITIAL_STATE_REGISTER_FORM);
      resetRegisterForm();
    }, 300);
  }
  
  const handleRegisterFormSubmit = async () => {
    try {
      const url = `https://formspree.io/f/xlekeqld`;
      const { formSubmitFrom, formName, status, enrolledInUniversity, professional3years, interestedInDigitalTechnology, interestedInMachineLearning, interestedInCoding, interestedInDesignThinking, firstName, lastName, email } = registerFormSubmit;
      const payload = { formSubmitFrom, formName, status, enrolledInUniversity, professional3years, interestedInDigitalTechnology, interestedInMachineLearning, interestedInCoding, interestedInDesignThinking, firstName, lastName, email };
      const response = await axios.post(url, payload);
      console.log(response);
      setRegisterFormSubmit(INITIAL_STATE_REGISTER_FORM);
    } catch (error) {
      console.log(error)
    }
  };
      
  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "status": registerStatus }));
  }, [registerStatus])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "enrolledInUniversity": registerEnroll }));
  }, [registerEnroll])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "professional3years": registerProfessional }));
  }, [registerProfessional])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "interestedInDigitalTechnology": registerInterestedInDigitalTechnology }));
  }, [registerInterestedInDigitalTechnology])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "interestedInMachineLearning": registerInterestedInAdvancedManufacturing }));
  }, [registerInterestedInAdvancedManufacturing])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "interestedInCoding": registerInterestedInCleanTechnology }));
  }, [registerInterestedInCleanTechnology])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "interestedInDesignThinking": registerInterestedInLifeSciencesAndBiomanufacturing }));
  }, [registerInterestedInLifeSciencesAndBiomanufacturing])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "firstName": registerFirstName }));
  }, [registerFirstName])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "lastName": registerLastName }));
  }, [registerLastName])

  useEffect(() => {
    setRegisterFormSubmit(prevState => ({ ...prevState, "email": registerEmail }));
  }, [registerEmail])

  useEffect(() => {
      validateEmail(registerEmail);
  }, [registerEmail])
  
  useEffect(() => {
    if( registerStatus !== "") setStatusNextDisabled(false);
    if( registerEnroll !== "") setEnrollNextDisabled(false);
    if( registerProfessional !== "") setProfessionalNextDisabled(false);
  }, [registerStatus, registerEnroll, registerProfessional])
  
  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setShowRegisterFormStatus(true);
  }, [])

  useEffect(() => {
    if(showRegisterFormStatus) transitionIn("RegisterFormQuestionStatus");
    if(showRegisterFormEnroll) transitionIn("RegisterFormQuestionEnroll");
    if(showRegisterFormProfessional) transitionIn("RegisterFormQuestionProfessional");
    if(showRegisterFormInterest) transitionIn("RegisterFormQuestionInterest");
    if(showRegisterFormUserInfo) transitionIn("RegisterFormQuestionUserInfo");
    if(showRegisterFormStepThankYou) transitionIn("RegisterFormStepThankYou");
    if(showRegisterFormStepEndingTwo) transitionIn("RegisterFormStepEndingTwo");
  }, [showRegisterFormStatus, showRegisterFormEnroll, showRegisterFormProfessional, showRegisterFormInterest, showRegisterFormUserInfo, showRegisterFormStepThankYou, showRegisterFormStepEndingTwo])

  return (
    <>
      <div className="enrollment-form-container">
        <div className="enrollment-form-wrapper">
          <h3 className="enrollment-form-head">Cohort Register Form<span className="enrollment-form-close-btn" onClick={() => {setShowRegisterForm(false); resetRegisterForm()}}>&#x2715;</span></h3>
          <div className="enrollment-form-body">
            {showRegisterFormStatus && <div className="transition-in" id="RegisterFormQuestionStatus">
              <h4>Are you a Canadian Permanent Resident (PR), Canadian Citizen or International Student?</h4>
              <input
                type="radio"
                value="Canadian Permanent Resident"
                name="registerStatus"
                id="rfq1o1"
                checked={registerStatus === "Canadian Permanent Resident"}
                onChange={onStatusOptionChange}
              />
              <label htmlFor="rfq1o1">&nbsp;Canadian Permanent Resident</label>
              <input
                type="radio"
                value="Canadian Citizen"
                name="registerStatus"
                id="rfq1o2"
                checked={registerStatus === "Canadian Citizen"}
                onChange={onStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o2">&nbsp;Canadian Citizen</label>
              <input
                type="radio"
                value="International Student"
                name="registerStatus"
                id="rfq1o3"
                checked={registerStatus === "International Student"}
                onChange={onStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o3">&nbsp;International Student</label>
              <input
                type="radio"
                value="None of the above"
                name="registerStatus"
                id="rfq1o4"
                checked={registerStatus === "None of the above"}
                onChange={onStatusOptionChange}
              />
              <label className="mt-4" htmlFor="rfq1o4">&nbsp;None of the above</label>
            </div>}
            {showRegisterFormEnroll && <div className="transition-in" id="RegisterFormQuestionEnroll">
              <h4>Are you currently enrolled in any Canadian University?</h4>
              <input
                type="radio"
                value="Yes"
                name="registerEnroll"
                id="rfq2o1"
                checked={registerEnroll === "Yes"}
                onChange={onEnrollOptionChange}
              />
              <label htmlFor="rfq2o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="registerEnroll"
                id="rfq2o2"
                checked={registerEnroll === "No"}
                onChange={onEnrollOptionChange}
              />
              <label className="mt-4" htmlFor="rfq2o2">&nbsp;No</label>
            </div>}
            {showRegisterFormProfessional && <div className="transition-in" id="RegisterFormQuestionProfessional">
              <h4>Are you a professional with at least 3 years of experience?</h4>
              <input
                type="radio"
                value="Yes"
                name="registerProfessional"
                id="rfq3o1"
                checked={registerProfessional === "Yes"}
                onChange={onProfessionalOptionChange}
              />
              <label htmlFor="rfq3o1">&nbsp;Yes</label>
              <input
                type="radio"
                value="No"
                name="registerProfessional"
                id="rfq3o2"
                checked={registerProfessional === "No"}
                onChange={onProfessionalOptionChange}
              />
              <label className="mt-4" htmlFor="rfq3o2">&nbsp;No</label>
            </div>}
            {showRegisterFormInterest && <div className="transition-in" id="RegisterFormQuestionInterest">
              <h4>Are you interested in</h4>
              <Checkbox
                label="Digital Technology"
                value={registerInterestedInDigitalTechnology}
                onChange={handleChangeDigitalTechnology}
              />
              <Checkbox
                label="Advanced Manufacturing"
                value={registerInterestedInAdvancedManufacturing}
                onChange={handleChangeAdvancedManufacturing}
              />
              <Checkbox
                label="Clean Technology"
                value={registerInterestedInCleanTechnology}
                onChange={handleChangeCleanTechnology}
              />
              <Checkbox
                label="Life Sciences & Biomanufacturing"
                value={registerInterestedInLifeSciencesAndBiomanufacturing}
                onChange={handleChangeLifeSciencesAndBiomanufacturing}
              />
            </div>}
            {showRegisterFormUserInfo && <div className="transition-in" id="RegisterFormQuestionUserInfo">
              <h4>Please share your contact information</h4>
              <label>First Name<br></br>
                <input
                  type="text"
                  value={registerFirstName}
                  placeholder="first"
                  name="first name"
                  id="rfq4o1"
                  className="enrollment-form-link-input"
                  onChange={handleRegisterFirstNameChange}
                />
              </label>
              <label className="mt-4">Last Name<br></br>
                <input
                  type="text"
                  value={registerLastName}
                  placeholder="last"
                  name="last name"
                  id="rfq4o2"
                  className="enrollment-form-link-input"
                  onChange={handleRegisterLastNameChange}
                />
              </label>
              <label className="mt-4">Email<br></br>
                <input
                  type="text"
                  value={registerEmail}
                  placeholder="name@example.com"
                  name="email"
                  id="rfq4o3"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleRegisterEmailChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{invalidEmailMessage}</span>
              </label>
            </div>}
            {showRegisterFormStepThankYou && <div className="transition-in" id="RegisterFormStepThankYou">
              <h4>Thank you for your interest! We will contact you shortly.</h4>
              <p>Please send your resume as an email to <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a>.</p>
            </div>}
            {showRegisterFormStepEndingTwo && <div className="transition-in" id="RegisterFormStepEndingTwo">
              <h4>Sorry! Unfortunately, We don't have any programs currently for you.</h4>
              <p>Feel free to register again if your information changes.</p>
            </div>}
          </div>
          <div className="enrollment-form-footer">
            {showRegisterFormStatus && <>
              <button className='edu-btn' style={{visibility: 'hidden'}}>Back</button>
              <button className='edu-btn' disabled={statusNextdisabled} onClick={() => onSubmitRegisterStatus("RegisterFormQuestionStatus")}>Next</button>
            </>}
            {showRegisterFormEnroll && <>
              <button className='edu-btn' onClick={() => { transitionBack( "RegisterFormQuestionEnroll", setShowRegisterFormEnroll, setShowRegisterFormStatus ); setRegisterEnroll(""); }}>Back</button>
              <button className='edu-btn' disabled={enrollNextdisabled} onClick={() => onSubmitRegisterEnroll("RegisterFormQuestionEnroll" )}>Next</button>
            </>}
            {showRegisterFormProfessional && <>
              <button className='edu-btn' onClick={() => { transitionBack( "RegisterFormQuestionProfessional", setShowRegisterFormProfessional, setShowRegisterFormEnroll ); setRegisterProfessional(""); }}>Back</button>
              <button className='edu-btn' disabled={professionalNextdisabled} onClick={() => onSubmitRegisterProfessional("RegisterFormQuestionProfessional" )}>Next</button>
            </>}
            {showRegisterFormInterest && <>
              <button className='edu-btn' onClick={() => { transitionBack( "RegisterFormQuestionInterest", setShowRegisterFormInterest, registerEnroll === "Yes" ? setShowRegisterFormEnroll : setShowRegisterFormProfessional ); setRegisterInterestedInAdvancedManufacturing(""); setRegisterInterestedInCleanTechnology(""); setRegisterInterestedInDigitalTechnology(""); setRegisterInterestedInLifeSciencesAndBiomanufacturing(""); }}>Back</button>
              <button className='edu-btn' onClick={() => onSubmitRegisterInterest( "RegisterFormQuestionInterest" )}>Next</button>
            </>}
            {showRegisterFormUserInfo && <>
              <button className='edu-btn' onClick={() => { transitionBack( "RegisterFormQuestionUserInfo", setShowRegisterFormUserInfo, setShowRegisterFormInterest ); setRegisterFirstName(""); setRegisterLastName(""); setRegisterEmail(""); }}>Back</button>
              <button className='edu-btn' disabled={userInfoNextdisabled} onClick={() => onSubmitRegisterUserInfo( "RegisterFormQuestionUserInfo" )}>Next</button>
            </>}
            {showRegisterFormStepThankYou && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowRegisterForm(false)}>Done</button>
            </>}
            {showRegisterFormStepEndingTwo && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowRegisterForm(false)}>Done</button>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterProgramForm;