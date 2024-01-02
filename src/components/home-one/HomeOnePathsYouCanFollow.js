import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const items = [
    {
        title: 'Coding Jobs',
        info: 'Automation Engineer, Software Engineer, Web Developer...',
        icon: 'icon-Hand---Book'
    },
    {
        title: 'Design Thinking',
        info: 'Game Developer, UX Designer, Content Creator...',
        icon: 'icon-pentool'
    },
    {
        title: 'ML/AI',
        info: 'ML Engineer, NLP Scientist, Data Engineer...',
        icon: 'icon-share-fill'
    },
    {
        title: 'Data Science',
        info: 'Data Scientist, Business Analyst, Data Architect...',
        icon: 'icon-Note-text-line'
    }
];

const HomeOneAbout = () => {
    return (
        <>
        {/* <div style={{borderTop: "1px solid #6f6b80", width: "calc(100% - 2rem)", margin: "auto", maxWidth: "1280px"}}></div> */}
        <Element
            name="paths-you-can-follow"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="image-1" src={`${process.env.PUBLIC_URL}/images/about/about-09/paths.webp`} alt="About Main Thumb" loading="lazy" />
                            {/* <div className="image-2">
                                <img src="/images/about/about-09/what_we_do_two.png" alt="About Parallax Thumb" />
                            </div> */}
                            {/* <div className="badge-inner">
                                <img className="image-3" src="/images/about/about-09/badge_1.png" alt="About Circle Thumb" />
                            </div> */}
                            <div className="shape-image shape-image-1">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner mt-md-16">
                            <SectionTitle
                                slogan = "Paths You Can Follow"
                                title = "These STEM skills can unlock paths for various fields"
                            />
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                            >
                                {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
                                null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p> */}
                            </ScrollAnimation>
                            { items && items.length > 0 &&
                                <div className="about-feature-list">
                                    { items.map( ( data , i ) => (
                                        <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            className="our-feature"
                                            animateOnce={ true }
                                            key={i}
                                        >
                                            <div className="our-feature">
                                                <div className="icon">
                                                    <i className={ data.icon }></i>
                                                </div>
                                                <div className="feature-content">
                                                    <h6 className="feature-title">{ data.title }</h6>
                                                    <p className="feature-description">{ data.info }</p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    ) ) }
                                </div>
                            }
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="read-more-btn"
                                animateOnce={ true }
                            >
                                <Link className="edu-btn" to="/careers/jobs">Available Jobs<i className="icon-arrow-right-line-right"></i></Link>
                            </ScrollAnimation>
                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Element>
        </>
    )
}

export default HomeOneAbout;