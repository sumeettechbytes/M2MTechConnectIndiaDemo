import React from 'react';
import CoursesSectionTitle from '../courses/CoursesSectionTitle';

const ProgramsSection = () => {
  return (
    <>
      <div className="courses-description-content style-variation3 blog-main-content edu-section-gap row g-5">
        {/* <div className="col-lg-12 mt-0">
          <CoursesSectionTitle
            classes = "text-center"
            title = "Overview"
          />
        </div> */}
          
        <blockquote className="blockquote-style-1">“ At M2M Tech, we believe that practical experience is a crucial component of learning Data Science. That's why our Data Science Program goes beyond classroom lectures and offers an immersive experiential learning journey that prepares you for real-world challenges. Through our Employer-led Work Integrated learning program and internship opportunities, you'll have the chance to apply your skills, collaborate with industry professionals and gain invaluable experience in the field of Data Science. ”
          <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
        </blockquote>
    
        <div className="col-lg-12 mt-60">
          <CoursesSectionTitle 
            classes = "text-center"
            title = "Key Features"
          />
        </div>
        <div className="our-feature">
          <div className="icon">
            <i className="icon-checkbox-circle-fill-solid"></i>
          </div>
          <div className="feature-content">
            <h6 className="feature-title"><em>Employer-led Work Integrated Learning</em></h6>
            <p className="feature-description">Our Data Science Program includes a unique Work-Integrated learning component where we partner with leading companies in the industry. You'll have the opportunity to work on real projects under the guidance of experienced professionals from these organizations. This hands-on experience will allow you to apply the knowledge and techniques learned in the classroom to solve practical problems and gain insights into industry practices.</p>
          </div>
        </div>
        <div className="our-feature">
          <div className="icon">
            <i className="icon-checkbox-circle-fill-solid"></i>
          </div>
          <div className="feature-content">
            <h6 className="feature-title"><em>Industry-Relevant Projects</em></h6>
            <p className="feature-description">During the Work-Integrated learning phase, you'll be assigned to industry-relevant projects that mirror the challenges faced by Data Scientists in the field. These projects are carefully designed to expose you to various data types, complex datasets and cutting-edge technologies. You'll learn to analyze data, develop models and derive meaningful insights that drive decision-making in organizations.</p>
          </div>
        </div>
        <div className="our-feature">
          <div className="icon">
            <i className="icon-checkbox-circle-fill-solid"></i>
          </div>
          <div className="feature-content">
            <h6 className="feature-title"><em>Mentorship and Networking</em></h6>
            <p className="feature-description">Throughout the program, you'll receive mentorship from industry experts who will guide you in your project work and provide valuable feedback. You'll have the opportunity to network with professionals in the Data Science field, expanding your professional connections and gaining insights into potential career paths. This mentorship and networking aspect is instrumental in shaping your professional development and building long-lasting relationships in the industry.</p>
          </div>
        </div>
        <div className="our-feature">
          <div className="icon">
            <i className="icon-checkbox-circle-fill-solid"></i>
          </div>
          <div className="feature-content">
            <h6 className="feature-title"><em>Internship Opportunities</em></h6>
            <p className="feature-description">In addition to the Work-Integrated learning program, we also facilitate Internship opportunities with our industry partners. These internships provide you with a chance to work within a professional Data Science team, further honing your skills and gaining hands-on experience in a real-world environment. Internships are invaluable for building your resume, developing your industry-specific skills and increasing your chances of securing a full-time position upon completion of the program.</p>
          </div>
        </div>
        <div className="our-feature">
          <div className="icon">
            <i className="icon-checkbox-circle-fill-solid"></i>
          </div>
          <div className="feature-content">
            <h6 className="feature-title"><em>Practical Skill Development</em></h6>
            <p className="feature-description">Our experiential learning approach emphasizes practical skill development. You'll learn to use industry-standard tools, software and techniques employed by data scientists, ensuring you're well-equipped with the necessary skills to excel in your career. The hands-on nature of the program allows you to develop critical thinking, problem-solving and collaboration skills that are highly sought after by employers.</p>
          </div>
        </div>
                        
        <p>
          With our Data Science Program's experiential learning opportunities, you'll not only gain a solid theoretical foundation but also build the confidence and competence to thrive in real-world Data Science scenarios. Prepare yourself for a successful career by joining our program and unlocking the power of experiential learning.
        </p>

        <div className="footer-note mt-60">
          <p>
            <strong>Note:</strong> The availability of internships and specific details may vary based on partnerships with companies and industry demand.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProgramsSection;