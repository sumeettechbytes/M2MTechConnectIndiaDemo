import React, { useState, useEffect } from 'react';
import { transitionIn, transitionOut } from '../../../utils/transitions';
import validator from 'validator';
import axios from 'axios';

const INITIAL_STATE_DOWNLOAD_CURRICULUM_FORM = {
  formSubmitFrom: "https://www.m2mtechconnect.com/courses",
  formName: "Download curriculum form on courses page",
  firstName: "",
  lastName: "",
  email: "",
};
const DownloadCurriculumSignUp = ({
  formSubmitFrom,
  formName,
  setShowDownloadCurriculumForm,
  Download,
  downloadFileName,
}) => {

  const [downloadCurriculumFirstName, setDownloadCurriculumFirstName] = useState("")
  const [downloadCurriculumLastName, setDownloadCurriculumLastName] = useState("")
  const [downloadCurriculumEmail, setDownloadCurriculumEmail] = useState("")
  
  const resetDownloadCurriculumForm = () => {
    setDownloadCurriculumFirstName("");
    setDownloadCurriculumLastName("");
    setDownloadCurriculumEmail("");
    document.querySelector('body').style.overflowY = '';
  }
  
  const [showDownloadCurriculumFormUserInfo, setShowDownloadCurriculumFormUserInfo] = useState(false)
  const [showDownloadCurriculumFormStepThankYou, setShowDownloadCurriculumFormStepThankYou] = useState(false)
  
  const [downloadCurriculumFormSubmit, setDownloadCurriculumFormSubmit] = useState(INITIAL_STATE_DOWNLOAD_CURRICULUM_FORM);

  const [invalidEmailMessage, setInvalidEmailMessage] = useState("");

  const [userInfoNextdisabled, setUserInfoNextDisabled] = useState(true);

  
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

  const handleDownloadCurriculumFirstNameChange = (e) => {
    setDownloadCurriculumFirstName(e.target.value)
  }
 
  const handleDownloadCurriculumLastNameChange = (e) => {
    setDownloadCurriculumLastName(e.target.value)
  }
    
  const handleDownloadCurriculumEmailChange = (e) => {
    setDownloadCurriculumEmail(e.target.value)
  }

  const onSubmitDownloadCurriculumUserInfo = (elementId) => {
    transitionOut(elementId);
    setTimeout(() => {
      setShowDownloadCurriculumFormUserInfo(false);
      setShowDownloadCurriculumFormStepThankYou(true);
      handleDownloadCurriculumFormSubmit();
    }, 300);
  }

  const handleDownloadCurriculumFormSubmit = async () => {
    try {
      const url = `https://formspree.io/f/xlekeqld`;
      const { formSubmitFrom, formName, firstName, lastName, email } = downloadCurriculumFormSubmit;
      const payload = { formSubmitFrom, formName, firstName, lastName, email };
      const response = await axios.post(url, payload);
      response.status === 200 ? console.log("success") : console.log("failed to submit");
      setDownloadCurriculumFormSubmit(INITIAL_STATE_DOWNLOAD_CURRICULUM_FORM);
    } catch (error) {
      console.log(error)
    }
  };

  const startDownloadPDF = () => {
    let alink = document.createElement('a');
    alink.href = Download;
    alink.download = downloadFileName;
    alink.click();
  }

  useEffect(() => {
    setDownloadCurriculumFormSubmit(prevState => ({ ...prevState, "formSubmitFrom": formSubmitFrom }));
  }, [formSubmitFrom])
  
  useEffect(() => {
    setDownloadCurriculumFormSubmit(prevState => ({ ...prevState, "formName": formName }));
  }, [formName])
  
  useEffect(() => {
    setDownloadCurriculumFormSubmit(prevState => ({ ...prevState, "firstName": downloadCurriculumFirstName }));
  }, [downloadCurriculumFirstName])

  useEffect(() => {
    setDownloadCurriculumFormSubmit(prevState => ({ ...prevState, "lastName": downloadCurriculumLastName }));
  }, [downloadCurriculumLastName])

  useEffect(() => {
    setDownloadCurriculumFormSubmit(prevState => ({ ...prevState, "email": downloadCurriculumEmail }));
  }, [downloadCurriculumEmail])

  useEffect(() => {
    validateEmail(downloadCurriculumEmail);
  }, [downloadCurriculumEmail])

  useEffect(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setShowDownloadCurriculumFormUserInfo(true);
  }, [])

  useEffect(() => {
    if(showDownloadCurriculumFormUserInfo) transitionIn("DownloadCurriculumFormQuestionUserInfo");
    if(showDownloadCurriculumFormStepThankYou) transitionIn("DownloadCurriculumFormStepThankYou");
    }, [ showDownloadCurriculumFormUserInfo, showDownloadCurriculumFormStepThankYou ])


  return (
    <>
      <div className="enrollment-form-container">
        <div className="enrollment-form-wrapper">
          <h3 className="enrollment-form-head">Download Curriculum<span className="enrollment-form-close-btn" onClick={() => {setShowDownloadCurriculumForm(false); resetDownloadCurriculumForm()}}>&#x2715;</span></h3>
          <div className="enrollment-form-body">
          {showDownloadCurriculumFormUserInfo && <div className="transition-in" id="DownloadCurriculumFormQuestionUserInfo">
              <h4>Please share your contact information</h4>
              <label>First Name<br></br>
                <input
                  type="text"
                  value={downloadCurriculumFirstName}
                  placeholder="first"
                  name="first name"
                  id="rfq4o1"
                  className="enrollment-form-link-input"
                  onChange={handleDownloadCurriculumFirstNameChange}
                />
              </label>
              <label className="mt-4">Last Name<br></br>
                <input
                  type="text"
                  value={downloadCurriculumLastName}
                  placeholder="last"
                  name="last name"
                  id="rfq4o2"
                  className="enrollment-form-link-input"
                  onChange={handleDownloadCurriculumLastNameChange}
                />
              </label>
              <label className="mt-4">Email<br></br>
                <input
                  type="text"
                  value={downloadCurriculumEmail}
                  placeholder="name@example.com"
                  name="email"
                  id="rfq4o3"
                  className="enrollment-form-link-input"
                  onChange={(e) => handleDownloadCurriculumEmailChange(e)}
                />
                <br></br>
                <span style={{ fontWeight: "bold", color: "red" }}>{invalidEmailMessage}</span>
              </label>
            </div>}
            {showDownloadCurriculumFormStepThankYou && <div className="transition-in" id="DownloadCurriculumFormStepThankYou">
              <h4>Thank you for your interest! You may now download the curriculum using the download button below!</h4>
            </div>}
          </div>
          <div className="enrollment-form-footer">
            {showDownloadCurriculumFormUserInfo && <>
              <button className='edu-btn' disabled={userInfoNextdisabled} onClick={() => onSubmitDownloadCurriculumUserInfo( "DownloadCurriculumFormQuestionUserInfo" )}>Submit</button>
            </>}
            {showDownloadCurriculumFormStepThankYou && <>
              <button className='edu-btn' style={{visibility: "hidden"}}>Back</button>
              <button className='edu-btn' onClick={() => startDownloadPDF()}>Download Curriculum PDF</button>
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadCurriculumSignUp;