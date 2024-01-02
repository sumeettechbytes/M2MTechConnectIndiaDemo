import React, { useState, useEffect } from 'react';
import { transitionBack, transitionIn, transitionOut } from '../../../utils/transitions';
import Checkbox from '../../../common/Checkbox';
import validator from 'validator';
import axios from 'axios';

const INITIAL_STATE_EMPLOYER_REGISTER = {
  formSubmitFrom: "https://www.m2mtechconnect.com/data-talent",
  formName: "Employer Register Form",
  employerHiringRoles: "",
  employerHiringCity: "",
  employerMoreDetails: "",
  employerHearAboutUs: "",
  employerPartnerCuratedResumes: "",
  employerPartnerScheduleInterviewsWithSelectedCandidates: "",
  employerPartnerEmployerShowcase: "",
  employerPartnerIndustryGuestSpeaking: "",
  employerPartnerWageSubsidy: "",
  employerPartnerHiringPartnership: "",
  employerPartnerOther: "",
  employerName: "",
  employerEmail: "",
  employerPhone: "",
  employerCompany: "",
  // attachment: "",
};

const EmployerRegisterForm = ({
  setShowEmployerRegisterForm
  }) => {

  const [employerHiringRoles, setEmployerHiringRoles] = useState("");
  const [employerHiringCity, setEmployerHiringCity] = useState("");
  const [employerMoreDetails, setEmployerMoreDetails] = useState("");
  const [employerHearAboutUs, setEmployerHearAboutUs] = useState("");
  const [employerPartnerCuratedResumes, setEmployerPartnerCuratedResumes] = useState("");
  const [employerPartnerScheduleInterviewsWithSelectedCandidates, setEmployerPartnerScheduleInterviewsWithSelectedCandidates] = useState("");
  const [employerPartnerEmployerShowcase, setEmployerPartnerEmployerShowcase] = useState("");
  const [employerPartnerIndustryGuestSpeaking, setEmployerPartnerIndustryGuestSpeaking] = useState("");
  const [employerPartnerWageSubsidy, setEmployerPartnerWageSubsidy] = useState("");
  const [employerPartnerHiringPartnership, setEmployerPartnerHiringPartnership] = useState("");
  const [employerPartnerOther, setEmployerPartnerOther] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [employerPhone, setEmployerPhone] = useState("");
  const [employerCompany, setEmployerCompany] = useState("");
  // const [attachment, setAttachment] = useState("");

  const resetEmployerRegisterForm = () => {
    setEmployerHiringRoles("");
    setEmployerHiringCity("");
    setEmployerMoreDetails("");
    setEmployerHearAboutUs("");
    setEmployerPartnerCuratedResumes("");
    setEmployerPartnerScheduleInterviewsWithSelectedCandidates("");
    setEmployerPartnerEmployerShowcase("");
    setEmployerPartnerIndustryGuestSpeaking("");
    setEmployerPartnerWageSubsidy("");
    setEmployerPartnerHiringPartnership("");
    setEmployerPartnerOther("");
    setEmployerName("");
    setEmployerEmail("");
    setEmployerPhone("");
    setEmployerCompany("");
    // setAttachment("");
    document.querySelector('body').style.overflowY = '';
  }

  const [showEmployerRegisterFormHiringRoles, setShowEmployerRegisterFormHiringRoles] = useState(false);
  const [showEmployerRegisterFormHiringCity, setShowEmployerRegisterFormHiringCity] = useState(false);
  const [showEmployerRegisterFormMoreDetails, setShowEmployerRegisterFormMoreDetails] = useState(false);
  // const [showEmployerRegisterFormHearAboutUs, setShowEmployerRegisterFormHearAboutUs] = useState(false);
  const [showEmployerRegisterFormPartner, setShowEmployerRegisterFormPartner] = useState(false);
  const [showEmployerRegisterFormEmployerInfo, setShowEmployerRegisterFormEmployerInfo] = useState(false);
  const [showEmployerRegisterFormThankYou, setShowEmployerRegisterFormThankYou] = useState(false);

  const [employerRegisterFormSubmit, setEmployerRegisterFormSubmit] = useState(INITIAL_STATE_EMPLOYER_REGISTER);

  const [employerRegisterInvalidEmailMessage, setEmployerRegisterInvalidEmailMessage] = useState("");
  const [employerRegisterInvalidPhoneMessage, setEmployerRegisterInvalidPhoneMessage] = useState("");

  const [employerRegisterEmployerInfoNextdisabled, setEmployerRegisterEmployerInfoNextDisabled] = useState(true);
  const [employerRegisterHiringRolesNextdisabled, setEmployerRegisterHiringRolesNextDisabled] = useState(true);
  const [employerRegisterHiringCityNextdisabled, setEmployerRegisterHiringCityNextDisabled] = useState(true);
  const [employerRegisterHearAboutUsNextdisabled, setEmployerRegisterHearAboutUsNextDisabled] = useState(true);
  // const [employerRegisterPartnerNextdisabled, setEmployerRegisterPartnerNextDisabled] = useState(true);

  const onEmployerHiringRolesOptionChange = (e) => {
    setEmployerHiringRoles(e.target.value);
  }
  
  const onEmployerHiringCityOptionChange = (e) => {
    setEmployerHiringCity(e.target.value);
  }
  
  const onEmployerHearAboutUsOptionChange = (e) => {
    setEmployerHearAboutUs(e.target.value);
  }
  // const handleAttachmentChange = (event) => {
	// 	setAttachment(event.target.files[0]);
	// };
  
  const handleEmployerPartnerChangeCuratedResumes = (e) => {
    setEmployerPartnerCuratedResumes(!employerPartnerCuratedResumes);
  }
  const handleEmployerPartnerChangeScheduleInterviewsWithSelectedCandidates = (e) => {
    setEmployerPartnerScheduleInterviewsWithSelectedCandidates(!employerPartnerScheduleInterviewsWithSelectedCandidates);
  }
  const handleEmployerPartnerChangeEmployerShowcase = (e) => {
    setEmployerPartnerEmployerShowcase(!employerPartnerEmployerShowcase);
  }
  const handleEmployerPartnerChangeIndustryGuestSpeaking = (e) => {
    setEmployerPartnerIndustryGuestSpeaking(!employerPartnerIndustryGuestSpeaking);
  }
  const handleEmployerPartnerChangeWageSubsidy = (e) => {
    setEmployerPartnerWageSubsidy(!employerPartnerWageSubsidy);
  }
  const handleEmployerPartnerChangeHiringPartnership = (e) => {
    setEmployerPartnerHiringPartnership(!employerPartnerHiringPartnership);
  }
  const handleEmployerPartnerChangeOther = (e) => {
    setEmployerPartnerOther(!employerPartnerOther);
  }
    
  const validateEmail = (email) => {
    if(email !== "") {
      if (validator.isEmail(email)) {
        setEmployerRegisterInvalidEmailMessage("");
        setEmployerRegisterEmployerInfoNextDisabled(false);
      } else {
        setEmployerRegisterInvalidEmailMessage("Is not a valid Email!");
        setEmployerRegisterEmployerInfoNextDisabled(true)
      }
    } else if(email === "") {
      setEmployerRegisterInvalidEmailMessage("");
      setEmployerRegisterEmployerInfoNextDisabled(true);
    }
  };
  
  const validatePhoneNumber = (number) => {
    if(number !== "") {
      if (validator.isMobilePhone(number)) {
        setEmployerRegisterInvalidPhoneMessage("");
        setEmployerRegisterEmployerInfoNextDisabled(false);
      } else {
        setEmployerRegisterInvalidPhoneMessage("Is not a valid phone number!");
        setEmployerRegisterEmployerInfoNextDisabled(true)
      }
    } else if(number === "") {
      setEmployerRegisterInvalidPhoneMessage("");
      setEmployerRegisterEmployerInfoNextDisabled(true);
    }
  };
  
  const handleEmployerMoreDetailsChange = (e) => {
    setEmployerMoreDetails(e.target.value);
  }

  const handleEmployerNameChange = (e) => {
    setEmployerName(e.target.value);
  }
    
  const handleEmployerEmailChange = (e) => {
    setEmployerEmail(e.target.value);
  }

  const handleEmployerPhoneChange = (e) => {
    setEmployerPhone(e.target.value);
  }

  const handleEmployerCompanyChange = (e) => {
    setEmployerCompany(e.target.value);
  }

  const onSubmitEmployerInfo = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowEmployerRegisterFormEmployerInfo(false);
      setShowEmployerRegisterFormHiringRoles(true);
    }, 300);
  }
    
  const onSubmitHiringRoles = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowEmployerRegisterFormHiringRoles(false);
      setShowEmployerRegisterFormHiringCity(true);
    }, 300);
  }
  
  const onSubmitHiringCity = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowEmployerRegisterFormHiringCity(false);
      setShowEmployerRegisterFormPartner(true);
    }, 300);
  }
  
  // const onSubmitHearAboutUs = (elementId) => {
  //   transitionOut(elementId);
  //   setTimeout(() => {
  //     setShowEmployerRegisterFormHearAboutUs(false);
  //     setShowEmployerRegisterFormPartner(true);
  //   }, 300);
  // }
  
  const onSubmitPartner = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowEmployerRegisterFormPartner(false);
      setShowEmployerRegisterFormMoreDetails(true);
    }, 300);
  }
  
  const onSubmitMoreDetails = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowEmployerRegisterFormMoreDetails(false);
      setShowEmployerRegisterFormThankYou(true);
      handleEmployerRegisterFormSubmit();
      resetEmployerRegisterForm();
    }, 300);
  }
  
  const handleEmployerRegisterFormSubmit = async () => {
    try {
      const url = `https://formspree.io/f/xlekeqld`;
      const { formSubmitFrom, formName, employerHiringRoles, employerHiringCity, employerMoreDetails, employerPartnerCuratedResumes, employerPartnerScheduleInterviewsWithSelectedCandidates, employerPartnerEmployerShowcase, employerPartnerIndustryGuestSpeaking, employerPartnerWageSubsidy, employerPartnerHiringPartnership, employerPartnerOther, employerName, employerEmail, employerPhone, employerCompany } = employerRegisterFormSubmit;
      const payload = { formSubmitFrom, formName, employerHiringRoles, employerHiringCity, employerMoreDetails, employerPartnerCuratedResumes, employerPartnerScheduleInterviewsWithSelectedCandidates, employerPartnerEmployerShowcase, employerPartnerIndustryGuestSpeaking, employerPartnerWageSubsidy, employerPartnerHiringPartnership, employerPartnerOther, employerName, employerEmail, employerPhone, employerCompany };
      const response = await axios.post(url, payload);
      // const { formSubmitFrom, formName, employerHiringRoles, employerHiringCity, employerMoreDetails, employerPartnerCuratedResumes, employerPartnerScheduleInterviewsWithSelectedCandidates, employerPartnerEmployerShowcase, employerPartnerIndustryGuestSpeaking, employerPartnerWageSubsidy, employerPartnerHiringPartnership, employerPartnerOther, employerName, employerEmail, employerPhone, employerCompany, attachment } = employerRegisterFormSubmit;
      // const payload = { formSubmitFrom, formName, employerHiringRoles, employerHiringCity, employerMoreDetails, employerPartnerCuratedResumes, employerPartnerScheduleInterviewsWithSelectedCandidates, employerPartnerEmployerShowcase, employerPartnerIndustryGuestSpeaking, employerPartnerWageSubsidy, employerPartnerHiringPartnership, employerPartnerOther, employerName, employerEmail, employerPhone, employerCompany, attachment };
      // const response = await axios.post(url, payload, {
      //   headers: {
      //     'content-type': 'multipart/form-data',
      //   },
      // });
      console.log(response);
      setEmployerRegisterFormSubmit(INITIAL_STATE_EMPLOYER_REGISTER);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerHiringRoles": employerHiringRoles }));
  }, [employerHiringRoles])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerHiringCity": employerHiringCity }));
  }, [employerHiringCity])
      
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerMoreDetails": employerMoreDetails }));
  }, [employerMoreDetails])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerHearAboutUs": employerHearAboutUs }));
  }, [employerHearAboutUs])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerCuratedResumes": employerPartnerCuratedResumes }));
  }, [employerPartnerCuratedResumes])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerScheduleInterviewsWithSelectedCandidates": employerPartnerScheduleInterviewsWithSelectedCandidates }));
  }, [employerPartnerScheduleInterviewsWithSelectedCandidates])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerEmployerShowcase": employerPartnerEmployerShowcase }));
  }, [employerPartnerEmployerShowcase])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerIndustryGuestSpeaking": employerPartnerIndustryGuestSpeaking }));
  }, [employerPartnerIndustryGuestSpeaking])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerWageSubsidy": employerPartnerWageSubsidy }));
  }, [employerPartnerWageSubsidy])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerHiringPartnership": employerPartnerHiringPartnership }));
  }, [employerPartnerHiringPartnership])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPartnerOther": employerPartnerOther }));
  }, [employerPartnerOther])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerName": employerName }));
  }, [employerName])

  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerEmail": employerEmail }));
  }, [employerEmail])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerPhone": employerPhone }));
  }, [employerPhone])
  
  useEffect(() => {
    setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "employerCompany": employerCompany }));
  }, [employerCompany])
  
  // useEffect(() => {
  //   setEmployerRegisterFormSubmit(prevState => ({ ...prevState, "attachment": attachment }));
  // }, [attachment])

  useEffect(() => {
    validateEmail(employerEmail);
  }, [employerEmail])
  
  useEffect(() => {
    validatePhoneNumber(employerPhone);
  }, [employerPhone])

  useEffect(() => {
    employerHiringRoles !== "" ? setEmployerRegisterHiringRolesNextDisabled(false) : setEmployerRegisterHiringRolesNextDisabled(true);
    employerHiringCity !== "" ? setEmployerRegisterHiringCityNextDisabled(false) : setEmployerRegisterHiringCityNextDisabled(true);
    employerHearAboutUs !== "" ? setEmployerRegisterHearAboutUsNextDisabled(false) : setEmployerRegisterHearAboutUsNextDisabled(true);
  }, [employerHiringRoles, employerHiringCity, employerHearAboutUs])
  
  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setShowEmployerRegisterFormEmployerInfo(true);
  }, [])

  useEffect(() => {
    if(showEmployerRegisterFormEmployerInfo) transitionIn("EmployerRegisterFormQuestionEmployerInfo");
    if(showEmployerRegisterFormHiringRoles) transitionIn("EmployerRegisterFormQuestionHiringRoles");
    if(showEmployerRegisterFormHiringCity) transitionIn("EmployerRegisterFormQuestionHiringCity");
    if(showEmployerRegisterFormPartner) transitionIn("EmployerRegisterFormQuestionPartner");
    if(showEmployerRegisterFormMoreDetails) transitionIn("EmployerRegisterFormQuestionMoreDetails");
    if(showEmployerRegisterFormThankYou) transitionIn("EmployerRegisterFormThankYou");
  }, [showEmployerRegisterFormEmployerInfo, showEmployerRegisterFormHiringRoles, showEmployerRegisterFormHiringCity, showEmployerRegisterFormPartner, showEmployerRegisterFormMoreDetails, showEmployerRegisterFormThankYou])

  return (
    <>
      <div className="enrollment-form-container">
        <div className="enrollment-form-wrapper">
          <h3 className="enrollment-form-head">Employer Register<span className="enrollment-form-close-btn" onClick={() => {setShowEmployerRegisterForm(false); resetEmployerRegisterForm()}}>&#x2715;</span></h3>
          <div className="enrollment-form-body">
            {showEmployerRegisterFormEmployerInfo && <div className="transition-in" id="EmployerRegisterFormQuestionEmployerInfo">
              <h4>Please share your contact information</h4>
              <label>Name<br></br>
                <input
                  type="text"
                  value={employerName}
                  placeholder="Name..."
                  name="first last name"
                  id="erfq1o1"
                  className="enrollment-form-link-input"
                  onChange={handleEmployerNameChange}
                />
              </label>
              {/* <label className="mt-4">Last Name<br></br>
                <input
                  type="text"
                  value={employerLastName}
                  placeholder="last"
                  name="last name"
                  id="erfq1o2"
                  className="enrollment-form-link-input"
                  onChange={handleEmployerLastNameChange}
                />
              </label> */}
              <label className="mt-4">Email<br></br>
                <input
                  type="text"
                  value={employerEmail}
                  placeholder="name@example.com"
                  name="email"
                  id="erfq1o2"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleEmployerEmailChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{employerRegisterInvalidEmailMessage}</span>
              </label>
              <label className="mt-4">Phone Number<br></br>
                <input
                  type="number"
                  value={employerPhone}
                  placeholder="12345..."
                  name="phone number"
                  id="erfq1o3"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleEmployerPhoneChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{employerRegisterInvalidPhoneMessage}</span>
              </label>
              <label className="mt-4">Company<br></br>
                <input
                  type="text"
                  value={employerCompany}
                  placeholder="example ltd."
                  name="company"
                  id="erfq1o4"
                  className="enrollment-form-link-input"
                  onChange={handleEmployerCompanyChange}
                />
              </label>
              {/* <input type="file" name="attachment" accept="application/pdf" onChange={handleAttachmentChange} /> */}
            </div>}
            {showEmployerRegisterFormHiringRoles && <div className="transition-in" id="EmployerRegisterFormQuestionHiringRoles">
              <h4>What roles are you hiring for?</h4>
              <input
                type="radio"
                value="Coding"
                name="employerHiringRoles"
                id="erfq2o1"
                checked={employerHiringRoles === "Coding"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label htmlFor="erfq2o1">&nbsp;Coding</label>
              <input
                type="radio"
                value="Data Science"
                name="employerHiringRoles"
                id="erfq2o2"
                checked={employerHiringRoles === "Data Science"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label className="mt-4" htmlFor="erfq2o2">&nbsp;Data Science</label>
              <input
                type="radio"
                value="ML/AI"
                name="employerHiringRoles"
                id="erfq2o3"
                checked={employerHiringRoles === "ML/AI"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label className="mt-4" htmlFor="erfq2o3">&nbsp;ML/AI</label>
              <input
                type="radio"
                value="Design Thinking"
                name="employerHiringRoles"
                id="erfq2o4"
                checked={employerHiringRoles === "Design Thinking"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label className="mt-4" htmlFor="erfq2o4">&nbsp;Design Thinking</label>
              <input
                type="radio"
                value="All Of Above"
                name="employerHiringRoles"
                id="erfq2o5"
                checked={employerHiringRoles === "All Of Above"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label className="mt-4" htmlFor="erfq2o5">&nbsp;All Of Above</label>
              <input
                type="radio"
                value="Other Roles"
                name="employerHiringRoles"
                id="erfq2o6"
                checked={employerHiringRoles === "Other Roles"}
                onChange={onEmployerHiringRolesOptionChange}
              />
              <label className="mt-4" htmlFor="erfq2o6">&nbsp;Other Roles</label>
            </div>}
            {showEmployerRegisterFormHiringCity && <div className="transition-in" id="EmployerRegisterFormQuestionHiringCity">
              <h4>What city are you hiring for?</h4>
              <input
                type="radio"
                value="Vancouver"
                name="employerHiringCity"
                id="erfq03o1"
                checked={employerHiringCity === "Vancouver"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label htmlFor="erfq03o1">&nbsp;Vancouver</label>
              <input
                type="radio"
                value="Calgary"
                name="employerHiringCity"
                id="erfq03o2"
                checked={employerHiringCity === "Calgary"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label className="mt-4" htmlFor="erfq03o2">&nbsp;Calgary</label>
              <input
                type="radio"
                value="Toronto"
                name="employerHiringCity"
                id="erfq03o3"
                checked={employerHiringCity === "Toronto"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label className="mt-4" htmlFor="erfq03o3">&nbsp;Toronto</label>
              <input
                type="radio"
                value="Quebec"
                name="employerHiringCity"
                id="erfq03o4"
                checked={employerHiringCity === "Quebec"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label className="mt-4" htmlFor="erfq03o4">&nbsp;Quebec</label>
              <input
                type="radio"
                value="Other cities"
                name="employerHiringCity"
                id="erfq03o5"
                checked={employerHiringCity === "Other cities"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label className="mt-4" htmlFor="erfq03o5">&nbsp;Other cities</label>
              <input
                type="radio"
                value="Remote only"
                name="employerHiringCity"
                id="erfq03o6"
                checked={employerHiringCity === "Remote only"}
                onChange={onEmployerHiringCityOptionChange}
              />
              <label className="mt-4" htmlFor="erfq03o6">&nbsp;Remote only</label>
            </div>}
            {/* {showEmployerRegisterFormHearAboutUs && <div className="transition-in" id="EmployerRegisterFormQuestionHearAboutUs">
            <h4>How did you year about us?</h4>
              <input
                type="radio"
                value="Friend or Family"
                name="employerHearAboutUs"
                id="erfq04o1"
                checked={employerHearAboutUs === "Friend or Family"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label htmlFor="erfq04o1">&nbsp;Friend or Family</label>
              <input
                type="radio"
                value="Saw you in an article"
                name="employerHearAboutUs"
                id="erfq04o2"
                checked={employerHearAboutUs === "Saw you in an article"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o2">&nbsp;Saw you in an article</label>
              <input
                type="radio"
                value="Saw you at an event"
                name="employerHearAboutUs"
                id="erfq04o3"
                checked={employerHearAboutUs === "Saw you at an event"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o3">&nbsp;Saw you at an event</label>
              <input
                type="radio"
                value="Google"
                name="employerHearAboutUs"
                id="erfq04o4"
                checked={employerHearAboutUs === "Google"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o4">&nbsp;Google</label>
              <input
                type="radio"
                value="LinkedIn"
                name="employerHearAboutUs"
                id="erfq04o5"
                checked={employerHearAboutUs === "LinkedIn"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o5">&nbsp;LinkedIn</label>
              <input
                type="radio"
                value="Twitter"
                name="employerHearAboutUs"
                id="erfq04o6"
                checked={employerHearAboutUs === "Twitter"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o6">&nbsp;Twitter</label>
              <input
                type="radio"
                value="Instagram"
                name="employerHearAboutUs"
                id="erfq04o7"
                checked={employerHearAboutUs === "Instagram"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o7">&nbsp;Instagram</label>
              <input
                type="radio"
                value="Other"
                name="employerHearAboutUs"
                id="erfq04o8"
                checked={employerHearAboutUs === "Other"}
                onChange={onEmployerHearAboutUsOptionChange}
              />
              <label className="mt-4" htmlFor="erfq04o8">&nbsp;Other</label>
            </div>} */}
            {showEmployerRegisterFormPartner && <div className="transition-in" id="EmployerRegisterFormQuestionPartner">
            <h4>How would you like to partner with us?</h4>
              <Checkbox
                label="Curated resumes"
                value={employerPartnerCuratedResumes}
                onChange={handleEmployerPartnerChangeCuratedResumes}
              />
              <Checkbox
                label="Schedule interviews with selected candidates"
                value={employerPartnerScheduleInterviewsWithSelectedCandidates}
                onChange={handleEmployerPartnerChangeScheduleInterviewsWithSelectedCandidates}
              />
              <Checkbox
                label="Employer showcase"
                value={employerPartnerEmployerShowcase}
                onChange={handleEmployerPartnerChangeEmployerShowcase}
              />
              <Checkbox
                label="Industry guest speaking"
                value={employerPartnerIndustryGuestSpeaking}
                onChange={handleEmployerPartnerChangeIndustryGuestSpeaking}
              />
              <Checkbox
                label="Wage subsidy"
                value={employerPartnerWageSubsidy}
                onChange={handleEmployerPartnerChangeWageSubsidy}
              />
              <Checkbox
                label="Hiring partnership"
                value={employerPartnerHiringPartnership}
                onChange={handleEmployerPartnerChangeHiringPartnership}
              />
              <Checkbox
                label="Other"
                value={employerPartnerOther}
                onChange={handleEmployerPartnerChangeOther}
              />
            </div>}
            {showEmployerRegisterFormMoreDetails && <div className="transition-in" id="EmployerRegisterFormQuestionMoreDetails">
              <h4>If you want to share any more information</h4>
              <textarea
                rows="4"
                placeholder="location, roles, etc..."
                value={employerMoreDetails}
                onChange={handleEmployerMoreDetailsChange}
              ></textarea>
            </div>}
            
            {showEmployerRegisterFormThankYou && <div className="transition-in" id="EmployerRegisterFormThankYou">
              <h4>Thank you for registering with us! We will contact you shortly.</h4>
              {/* <p>Please send your resume as an email to <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a>.</p> */}
              {/* <Link className="edu-btn btn-bg-alt" to="/data-talent">More Info<i className="icon-arrow-right-line-right"></i></Link> */}
            </div>}
          </div>
          <div className="enrollment-form-footer">
            {showEmployerRegisterFormEmployerInfo && <>
              <button className='edu-btn' style={{visibility: 'hidden'}}>Back</button>
              <button className='edu-btn' disabled={employerRegisterEmployerInfoNextdisabled} onClick={() => onSubmitEmployerInfo("EmployerRegisterFormQuestionEmployerInfo")}>Next</button>
            </>}
            {showEmployerRegisterFormHiringRoles && <>
              <button className='edu-btn' onClick={() => { transitionBack( "EmployerRegisterFormQuestionHiringRoles", setShowEmployerRegisterFormHiringRoles, setShowEmployerRegisterFormEmployerInfo ); setEmployerHiringRoles(""); }}>Back</button>
              <button className='edu-btn' disabled={employerRegisterHiringRolesNextdisabled} onClick={() => onSubmitHiringRoles("EmployerRegisterFormQuestionHiringRoles")}>Next</button>
            </>}
            {showEmployerRegisterFormHiringCity && <>
              <button className='edu-btn' onClick={() => { transitionBack( "EmployerRegisterFormQuestionHiringCity", setShowEmployerRegisterFormHiringCity, setShowEmployerRegisterFormHiringRoles ); setEmployerHiringCity(""); }}>Back</button>
              <button className='edu-btn' disabled={employerRegisterHiringCityNextdisabled} onClick={() => onSubmitHiringCity("EmployerRegisterFormQuestionHiringCity")}>Next</button>
            </>}
            {/* {showEmployerRegisterFormHearAboutUs && <>
              <button className='edu-btn' onClick={() => { transitionBack( "EmployerRegisterFormQuestionHearAboutUs", setShowEmployerRegisterFormHearAboutUs, setShowEmployerRegisterFormHiringCity ); setEmployerHearAboutUs(""); }}>Back</button>
              <button className='edu-btn' disabled={employerRegisterHearAboutUsNextdisabled} onClick={() => onSubmitHearAboutUs("EmployerRegisterFormQuestionHearAboutUs" )}>Next</button>
            </>} */}
            {showEmployerRegisterFormPartner && <>
              <button className='edu-btn' onClick={() => { transitionBack( "EmployerRegisterFormQuestionPartner", setShowEmployerRegisterFormPartner, setShowEmployerRegisterFormHiringCity ); setEmployerPartnerCuratedResumes(""); setEmployerPartnerScheduleInterviewsWithSelectedCandidates(""); setEmployerPartnerEmployerShowcase(""); setEmployerPartnerIndustryGuestSpeaking(""); setEmployerPartnerWageSubsidy(""); setEmployerPartnerHiringPartnership(""); setEmployerPartnerOther(""); }}>Back</button>
              <button className='edu-btn' onClick={() => onSubmitPartner( "EmployerRegisterFormQuestionPartner" )}>Next</button>
            </>}
            {showEmployerRegisterFormMoreDetails && <>
              <button className='edu-btn' onClick={() => { transitionBack( "EmployerRegisterFormQuestionMoreDetails", setShowEmployerRegisterFormMoreDetails, setShowEmployerRegisterFormPartner ); setEmployerMoreDetails(""); }}>Back</button>
              <button className='edu-btn' onClick={() => onSubmitMoreDetails( "EmployerRegisterFormQuestionMoreDetails" )}>Next</button>
            </>}
            {showEmployerRegisterFormThankYou && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => setShowEmployerRegisterForm(false)}>Done</button>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployerRegisterForm;