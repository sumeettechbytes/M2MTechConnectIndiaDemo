import React from 'react';
import CoursesSectionTitle from '../CoursesSectionTitle';
import { Element } from 'react-scroll';

const DataAnalyticsDescription = () => {
    return (
        <>
            <Element
            name="introduction"
            className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5 edu-section-gap"
            >
            
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Unlock the Power of Data: Empower your Career with Data Analysis & Visualization!"
                    />
                </div>
                <div className="col-lg-12 mt-40">
                    <p>Welcome to our Data Analysis & Visualization Course, specifically designed for Canadian professionals with entry-level experience and University students. This comprehensive program will equip you with the in-demand skills needed to thrive in the rapidly growing field of Data Analytics. From exploring diverse datasets to deriving actionable insights, our course empowers you to make data-driven decisions that drive success.</p>
                </div>

                <h4 className="text-center mt-60 mb-0">Course Overview</h4>
                
                <blockquote className="blockquote-style-1">“ Our Data Analysis & Visualization Course is thoughtfully curated to meet the unique needs of Canadian professionals and University students seeking to enter the field of Data Analytics. This is accomplished by continuosly engaging with relevant Canadian Employers and conducting periodic curriculum reviews and ensure Industry relevance and Skills alignment. Master the art of Data Analysis, Manipulation and Visualization to unleash powerful insights from vast datasets, while creating captivating visual narratives. ”
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
                            Canadian professionals seeking to transition into Data Analytics roles
                        </li>
                        <li>
                            University students interested in building a strong foundation in Data Analytics for future career prospects
                        </li>
                        <li>
                            Entry-level professionals looking to enhance their Data Science skills and explore opportunities in the Canadian job market
                        </li>
                    </ul>
                    <h4>Prerequisites</h4>
                    <p className="mt-0">While no prior experience in Data Analysis/Data Visualization is required, familiarity with basic mathematics, statistics and programming concepts will be beneficial.</p>
                    <h4 className="mt--30">Enroll Today</h4>
                    <p className="mt-0">Take a leap forward in your Data Analytics journey and unlock exciting career opportunities in Canada. Enroll in our Data Analysis & Data Visualization Course today to gain the knowledge, skills and network needed to thrive in the data-driven world.</p>
                    <div className="text-center">
                        <a className="edu-btn" href="https://courses.m2mtechconnect.com/bundles/data-science-intro-to-ml-group-courses">Join Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataAnalyticsDescription;