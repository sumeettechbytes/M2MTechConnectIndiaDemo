import React, { useState, useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import SkillsboostSectionTitle from './SkillsboostSectionTitle';
import { Element } from 'react-scroll';

const onlineEducation = {
  leftColumn: [
    {
      id: 1,
      title: 'What does a Data Talent project need to include?',
      body: 'Projects should provide 80 hours of work per learner participating and align with one of the four Data Talent disciplines (web development, cyber security, data science, or data analytics). Each project must be completed within 2-8 weeks. For more information on how to create and submit a project for Data Talent, please contact us.'
    },
    {
      id: 2,
      title: 'What specialist skills do Upskill Canada grads have to bring to my projects?',
      body: 'The Upskill Canada graduates are skilled in these areas - Clean Technology, Advanced Manufacturing, Business Intelligence, IoT, 5g & Cyber Security, FinTech, HealthTech, AgTech.'
    },
    {
      id: 3,
      title: 'How many projects can I submit, and how many learners can I take on?',
      body: 'There is no limit to how many projects an employer can submit to the Data Talent program. You should work with 2-4 learners per project.'
    },
    {
      id: 4,
      title: 'What if my project requires more than 80 hours of work?',
      body: 'If this is the case, we suggest taking on more learners for the same project. We recommend that employers accept at least 2 learners per project, but you can work with up to 4. Working with 4 learners means a project can require up to 320 hours of work in total.'
    },
  ]
}

const CustomToggle = ({ children, eventKey }) => {
  const { activeEventKey } = useContext( AccordionContext );
  const decoratedOnClick = useAccordionButton( eventKey );
  const isCurrentEventKey = activeEventKey === eventKey;
  return <button type="button" onClick={ decoratedOnClick } aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{ children }</button>
}

const SkillsboostFAQs = () => {
  const [activeId1, setActiveId1] = useState( '0' );

  function toggleActive1( id ) {
    if (activeId1 === id) {
      setActiveId1(null);
    } else {
      setActiveId1(id);
    }
  }
  
  return (
    <>
      <Element
        name="faqs"
        className="home-one-programs data-talent-description-content style-variation3 blog-main-content justify-content-center edu-section-gap"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <SkillsboostSectionTitle
                classes = "text-center"
                title = "Frequently Asked Questions"
              />
            </div>
            <div className="col-lg-12 mt--40 data-talent-description">
              <div className="row g-5 align-items-center mt--20">
                <div className="col-lg-12">
                  <div className="accordion-style-1">
                    <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                      {
                        onlineEducation.leftColumn.map( ( accordion, i ) => (
                          <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive1(i.toString())} bsPrefix={`edu-accordion-item ${activeId1 === i.toString() ? 'active-item' : ''}`}>
                            <div className="edu-accordion-header">
                              <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                            </div>
                            <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                          </Accordion.Item>
                        ) )
                      }
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default SkillsboostFAQs;