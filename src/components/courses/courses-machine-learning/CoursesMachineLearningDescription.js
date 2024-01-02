import React from 'react';
import CoursesSectionTitle from '../CoursesSectionTitle';
import { Element } from 'react-scroll';

const CoursesMachineLearningDescription = () => {
    return (
        <>
            <Element
            name="introduction"
            className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
            >
            
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Unlock the Future of AI"
                    />
                </div>
                <div className="col-lg-12 mt-40">
                    <p>Welcome to our Machine Learning Course, designed exclusively for Canadian professionals with entry-level experience and University students. This cutting-edge program equips you with the skills to dive into the exciting world of Artificial Intelligence and Machine Learning. From building intelligent systems to solving complex problems, our course empowers you to be at the forefront of AI innovation.</p>
                </div>

                <h4 className="text-center mt-60 mb-0">Course Overview</h4>
                
                <blockquote className="blockquote-style-1">“ Our Machine Learning Course is thoughtfully curated to cater to the unique needs of Canadian professionals and university students venturing into the realm of AI and ML. Through a blend of immersive online learning, hands-on projects, and personalized mentorship, you'll gain a solid foundation in machine learning and develop practical expertise to succeed in the rapidly evolving AI landscape. ”
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
                            Canadian professionals seeking to transition into AI and Machine Learning roles.
                        </li>
                        <li>
                            University students with a passion for AI and ML, exploring promising career opportunities.
                        </li>
                        <li>
                            Entry-level professionals eager to embrace AI technology and contribute to Canada's AI-driven future.
                        </li>
                    </ul>
                    <h4>Prerequisites</h4>
                    <p className="mt-0">While prior programming knowledge is helpful, we welcome learners from all backgrounds. A curious mind and enthusiasm to learn are all you need to succeed in this course.</p>
                    <h4 className="mt--30">Enroll Today</h4>
                    <p className="mt-0">Take the leap into the future of AI and Machine Learning. Enroll in our Machine Learning Course today and embark on an exciting journey that propels you towards success in Canada's thriving AI landscape.</p>
                    <div className="text-center">
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/machine-learning-group-courses">Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesMachineLearningDescription;