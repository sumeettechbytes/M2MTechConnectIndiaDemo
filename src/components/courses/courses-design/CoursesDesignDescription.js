import React from 'react';
import CoursesSectionTitle from '../CoursesSectionTitle';
import { Element } from 'react-scroll';

const CoursesDesignDescription = () => {
    return (
        <>
            <Element
            name="introduction"
            className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
            >
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "3D Printing, VR, AR: Unleash Your Creativity"
                    />
                </div>
                <div className="col-lg-12 mt-40">
                    <p>Welcome to our Design Course, exclusively curated for Canadian professionals with entry-level experience and university students. This innovative program takes you on a creative journey, empowering you to master 3D Printing design, create immersive VR and AR experiences, craft captivating infographics and animation videos, and build stunning websites for businesses.</p>
                </div>

                <h4 className="text-center mt-60 mb-0">Course Overview</h4>
                
                <blockquote className="blockquote-style-1">“ Our Design Course is thoughtfully designed to cater to the unique needs of Canadian learners passionate about unleashing their creativity. Through hands-on projects and expert guidance, you'll develop a diverse skill set in design and discover exciting opportunities to shape the future of visual storytelling. ”
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
                            Canadian professionals seeking to transition into Designer roles
                        </li>
                        <li>
                            University students interested in building a strong foundation in Design for future career prospects
                        </li>
                        <li>
                            Entry-level professionals looking to enhance their Design skills and explore opportunities in the Canadian job market
                        </li>
                    </ul>
                    <h4>Prerequisites</h4>
                    <p className="mt-0">While no prior experience in Design is required, familiarity with basic designing, arts, and graphics concepts will be beneficial.</p>
                    <h4 className="mt--30">Enroll Today</h4>
                    <p className="mt-0">Take a leap forward in your Design journey and unlock exciting career opportunities in Canada. Enroll in our Design Course today to gain the knowledge, skills and network needed to thrive in the design-driven world.</p>
                    <div className="text-center">
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/design-thinking-group-courses">Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesDesignDescription;