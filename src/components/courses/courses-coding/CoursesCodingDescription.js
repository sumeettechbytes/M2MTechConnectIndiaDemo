import React from 'react';
import CoursesSectionTitle from '../CoursesSectionTitle';
import { Element } from 'react-scroll';

const CoursesCodingDescription = () => {
    return (
        <>
            <Element
            name="introduction"
            className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
            >
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Python Coding Course: Master the Art of Programming"
                    />
                </div>
                <div className="col-lg-12 mt-40">
                    <p>Welcome to the Python Coding Course, specially designed for Canadian professionals with entry-level experience and university students. This comprehensive program takes you on a journey from No Code to becoming proficient in Python programming. Starting with user-friendly tools like edublocks.org, you'll progress to IDE-based coding, empowering you to unleash the full potential of Python for real-world applications.</p>
                </div>

                <h4 className="text-center mt-60 mb-0">Course Overview</h4>
                
                <blockquote className="blockquote-style-1">“ Our Python Coding Course caters to the unique needs of Canadian learners with little to no coding experience. Through hands-on projects and expert mentorship, you'll develop a solid foundation in Python programming and gain practical skills to excel in various industries where coding is a valuable asset. ”
                    <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
                </blockquote>

            </Element>
            <div className="edu-about-area about-style-1 edu-section-gap bg-color-white home-one-cat courses-eligibility-section">
                <div className="container">
                    <div className="col-lg-12">
                        <CoursesSectionTitle 
                            classes = "text-center"
                            slogan = "Eligibility"
                            title = "Who Should Enroll?"
                        />
                    </div>
                    <ul className="col-12 mt--40">
                        <li>
                            Canadian professionals seeking to transition into Coding roles
                        </li>
                        <li>
                            University students interested in building a strong foundation in Coding for future career prospects
                        </li>
                        <li>
                            Entry-level professionals looking to enhance their Coding skills and explore opportunities in the Canadian job market
                        </li>
                    </ul>
                    <h4>Prerequisites</h4>
                    <p className="mt-0">While no prior experience in Coding is required, familiarity with basic mathematics, statistics and programming concepts will be beneficial.</p>
                    <h4 className="mt--30">Enroll Today</h4>
                    <p className="mt-0">Take a leap forward in your Coding journey and unlock exciting career opportunities in Canada. Enroll in our Coding Course today to gain the knowledge, skills and network needed to thrive in the software-driven world.</p>
                    <div className="text-center">
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/coding-fun-with-python-group-courses">Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesCodingDescription;