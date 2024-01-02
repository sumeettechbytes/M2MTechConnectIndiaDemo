import React from 'react';
import CoursesSectionTitle from '../CoursesSectionTitle';
import { Element } from 'react-scroll';

const CoursesDeepLearningDescription = () => {
    return (
        <>
            <Element
            name="introduction"
            className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
            >
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Unleash the Power of Artificial Intelligence"
                    />
                </div>
                <div className="col-lg-12 mt-40">
                    <p>Welcome to the Deep Learning Course, designed exclusively for Canadian professionals with entry-level experience and university students. This transformative program dives deep into the world of Artificial Intelligence, empowering you to harness the potential of cutting-edge deep learning technologies. From creating intelligent systems to revolutionizing industries, our course equips you to be at the forefront of AI innovation.</p>
                </div>

                <h4 className="text-center mt-60 mb-0">Course Overview</h4>
                
                <blockquote className="blockquote-style-1">“ Our Deep Learning Course is carefully crafted to cater to the unique needs of Canadian learners venturing into the realm of AI and deep learning. Through an immersive online learning experience, hands-on projects, and expert mentorship, you'll gain a strong foundation in deep learning and develop the practical skills needed to thrive in Canada's AI-driven landscape. ”
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
                            Canadian professionals seeking to transition into AI and Deep Learning roles.
                        </li>
                        <li>
                            University students passionate about AI and ML, exploring promising career opportunities.
                        </li>
                        <li>
                            Entry-level professionals eager to contribute to Canada's AI-driven future.
                        </li>
                    </ul>
                    <h4>Prerequisites</h4>
                    <p className="mt-0">While prior programming knowledge is helpful, we welcome learners from all backgrounds. A passion for AI and a desire to learn are all you need to succeed in this course.</p>
                    <h4 className="mt--30">Enroll Today</h4>
                    <p className="mt-0">Embrace the future of AI and Deep Learning. Enroll in our Deep Learning Course today and embark on an exciting journey that propels you towards success in Canada's thriving AI landscape.</p>
                    <div className="text-center">
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/ml-ai-neural-networks">Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesDeepLearningDescription;