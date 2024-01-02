import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';

const accordionItems = [
    {
        id: 1,
        title: 'What is user interface design?',
        body: '<p>User interface design involves designing the visual elements, layout, and interactive features of a digital interface, like as a website or mobile application. It focuses on creating interfaces that are visually appealing, easy to navigate, and provide a seamless user experience.</p>'
    },
    {
        id: 2,
        title: 'How long is the data analytics course?',
        body: '<p>It’s expected that you can complete the course in 12 weeks at ~4 hours per week. You may complete the course faster or, if you need more time, you have the flexibility to complete it at your own pace. However, you will be limited to 12 mentor calls for this course.</p>'
    },
    {
        id: 3,
        title: 'Is this course conducted online, or in person?',
        body: '<p>This course is 100% online.</p>'
    },
    {
        id: 4,
        title: 'What are the prerequisites for admission?',
        body: `<p>The UI/UX Design Career Track bootcamp is beginner friendly. All backgrounds are welcome if you can demonstrate strong visual, creativity, and communication skills.</p>
        <p>You will have to pass a technical skills survey, which is an evaluation of baseline visual skills, analytical thinking, and the ability to empathize with users.</p>
        <p>We do recommend candidates have a bachelor’s degree or higher (in any subject). If you don’t have a degree, you are welcome to apply with the understanding that not having a degree may be a barrier to landing certain roles. Degree level doesn't impact your admission into the program. All enrolled students, regardless of degree level, receive comprehensive 1:1 support and individualized career coaching. We've got your back.</p>`
    },
];

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const CoursesDesignFAQ = () => {
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

export default CoursesDesignFAQ;