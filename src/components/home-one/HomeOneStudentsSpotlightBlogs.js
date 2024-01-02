import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const PostData = [
    {
        "id": 1,
        "title": "University of McGill, Stanley Wang",
        "image": "students-spotlight/spotlight-UMcG.webp",
        "date": "19 July, 2023",
        "shortDate": "19 Jul",
        "author": ["Jaclyn"],
        "readingTime": "2 Min Read",
        "categories": ["UMcG"],
        // "tags": ["STEM", "Students", "Technology", "STEM Education"],
        "details": "We're excited to showcase Stanley Wang! Stanley is a student from McGill University (located in Quebec), and he participated in our Work Integrated Learning opportunity.",
        "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-stanley-wang-university-of-mcgill-e64670e731d6",
    },
    {
        "id": 2,
        "title": "University of Victoria, AICLUB",
        "image": "students-spotlight/spotlight-02_v2.webp",
        "date": "15 May, 2023",
        "shortDate": "15 May",
        "author": ["Jaclyn"],
        "readingTime": "3 Min Read",
        "categories": ["UVic"],
        "tags": ["STEM", "Students", "Technology", "AI", "STEM Education"],
        "details": "We're excited to showcase the University of Victoria Artificial Intelligence Club (UVic AI) and their incredible contributions to the field of artificial intelligence.",
        "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c",
    },
];

const HomeOneStudentsSpotlightBlogs = () => {

    return (
        <div className="edu-blog-area eduvibe-home-one-blog edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "student spotlights"
                            title = "Read Our STEM Student Spotlights Below!"
                        />
                    </div>
                    
                </div>
                <div className="row g-5 mt--30">
                    { 
                        PostData.slice( 0, 2 ).map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-6 col-sm-6 col-12"
                                key={ item.id } 
                            >
                                <div className="edu-blog blog-type-3 radius-small bg-color-white">
                                    <div className="inner">
                                        <div className="content">
                                            <h4 className="title">
                                                <a href={item.link}>{item.title}</a>
                                            </h4>
                                            <div className="blog-card-bottom">
                                                <ul className="blog-meta">
                                                    <li><i className="icon-calendar-2-line"></i>{ item.date }</li>
                                                    <li><i className="icon-user-line"></i>Posted By <span className="color-primary">{item.author}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="thumbnail">
                                            <a href={item.link}>
                                                <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt="Blog Thumb" />
                                            </a>
                                        </div>
                                        <div className="description">
                                            <p>{ item.details }</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ) )
                    }
                    <div className="col-lg-12">
                        <div className="read-more-btn text-center mt-4">
                            <Link className="edu-btn" to="/insights/spotlight">Know More<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-02.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-15-02.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-13-03.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-17.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOneStudentsSpotlightBlogs;