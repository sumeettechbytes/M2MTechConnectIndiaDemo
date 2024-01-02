import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';

const accordionItems = [
    {
        id: 1,
        title: 'How long does the course take to complete?',
        body: '<p>It’s expected that you can complete the course in 12 weeks at ~4 hours per week. You may complete the course faster or, if you need more time, you have the flexibility to complete it at your own pace. However, you will be limited to 12 mentor calls for this course.</p>'
    },
    {
        id: 2,
        title: 'Is this software engineering course 100% online?',
        body: '<p>This course is 100% online.</p>'
    },
    {
        id: 3,
        title: 'What are the prerequisites for admission?',
        body: `<p>The Software Engineering Career Track bootcamp requires you to have a background in:</p>

        <ul><li></li><li><strong>JavaScript fundamentals</strong> — the ability to write simple functions, loops, conditional statements, and declare variables</li>
        <li><strong>Programmatic problem-solving skills</strong> — the ability to break down a problem into its component pieces, think through it logically, and come up with a solution</li>
        <li><strong>Recommended: HTML & CSS fundamentals</strong> — the ability to build simple web pages with basic knowledge of selectors, common CSS rules and specificity</li></ul>`
    },
    {
        id: 4,
        title: 'Can you become a software engineer with a bootcamp?',
        body: "<p>Yes, you absolutely can! While a traditional computer science degree can be a great path to becoming a software engineer, it's not the only way. Many successful software engineers have learned their skills through coding bootcamps like M2M Tech Connect's. With M2M Tech Connect's Software Engineering Bootcamp, you'll learn everything you need to know to start your career in software engineering.</p>"
    },
];

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const CoursesCodingFAQ = () => {
    const [activeId, setActiveId] = useState( '0' );
    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    return (
        <Element
            name="faq"
            className="landing-demo-faq-wrapper edu-accordion-area accordion-shape-1 edu-section-gap bg-color-white home-one-cat"
        >
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            {/* <span className="color-primary pretitle">FAQ</span> */}
                            <h3 className="title">Have Any Questions?</h3>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <div className="col-xl-8 offset-xl-2">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={ true }
                        >
                            <Accordion bsPrefix="landing-demo-faq edu-accordion-02 variation-2 landing-page-accordion" defaultActiveKey="0" flush>
                                {
                                    accordionItems.map( ( accordion, i ) => (
                                        <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                                            <div className="edu-accordion-header">
                                                <CustomToggle eventKey={ i.toString() }>{ accordion.title }</CustomToggle>
                                            </div>
                                            <Accordion.Body bsPrefix="edu-accordion-body"><div dangerouslySetInnerHTML={{__html: accordion.body}}></div></Accordion.Body>
                                        </Accordion.Item>
                                    ) )
                                }
                            </Accordion>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="shape-wrapper">
                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="animate-image shape-image-1">
                            <img src="/images/shapes/shape-11-11.png" alt="Shape Thumb" />
                        </div>
                        <div className="animate-image shape-image-2">
                            <img src="/images/shapes/shape-14-01.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default CoursesCodingFAQ;