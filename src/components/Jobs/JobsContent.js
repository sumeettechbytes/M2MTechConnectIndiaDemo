import React, { useLayoutEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

const JobsContent = () => {

  useLayoutEffect(() => {
    const anchor = window.location.hash.split('#')[1];
    if (anchor) {
      const accExists = ["AI_Engineer", "Digital_Marketing_Specialist", "Machine_Learning_Engineer", "VR_AR_Engineer", "Web_App_Developer"].includes(anchor);
      if (accExists) {
        const anchorEl = document.getElementById(anchor);
        anchorEl.scrollIntoView({behavior: 'smooth'});
        anchorEl.children[0].children[0].click();
      }
    }
  }, []);

  return (
    <section className="faq-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-1 order-lg-1">
            <div className="jobs-accordion">
              <Accordion allowZeroExpanded allowMultipleExpanded>
                <AccordionItem uuid="a" id="AI_Engineer" onClick={() => window.location.href = window.location.hash.split('#')[0] + "#AI_Engineer"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      AI Engineer
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      We are looking for a motivated, bright, entrepreneurial, enthusiastic individuals to join our team! As a Artificial Intelligence (AI) Engineer, you will have an opportunity to
                    </p>
                    <ul>
                      <li>Design and implement cool research ideas</li>
                      <li>Create technologies for Business Automation</li>
                      <li>Build the infrastructure to turn lab experiments into enterprise-ready AI solutions</li>
                    </ul>
                    <h5>
                      Responsibilities:
                    </h5>
                    <ul>
                      <li>Natural Language Processing (NLP) research and apply it to create technologies for business automation.</li>
                      <li>Use your NLP experience to propose and develop models and solutions.</li>
                      <li>Devise models and algorithms to develop scalable solutions that can work in real-time with large amounts of data.</li>
                      <li>Replace Traditional analytical tools to develop services in the enterprise setting in a throughtful and scalable manner.</li>
                      <li>Work in close collaboration with other team members using a wide range of technologies.</li>
                      <li>Solve technical problems</li>
                    </ul>
                    <h5>
                      Requirements:
                    </h5>
                    <ul>
                      <li>Experience in Python and related ML frameworks such as Tensorflow</li>
                      <li>Solid understanding of Math and CS fundamentals related to Machine Learning algorithms</li>
                      <li>Experience building production NLP models, and deploying them to solve chalklenges at scale</li>
                      <li>Own ML models end-to-end, from collecting training data to deploying in production</li>
                      <li>Excellent problem-solving skills</li>
                      <li>Excellent verbal and written communication skills</li>
                      <li>Ability to work well in a team environment</li>
                    </ul>
                    <h5>
                      Benefits:
                    </h5>
                    <ul>
                      <li>Explore Your Ideal Work-Life Balance:
                        <ul>
                          <li>⏰ Flexible Hours</li>
                          <li>🌐 Remote Work Opportunities</li>
                        </ul>
                      </li>
                      <li>Join our dynamic team with a Competitive Compensation Package:
                        <ul>
                          <li>💰 Salary Range: $25/hour - $35/hour</li>
                        </ul>
                      </li>
                      <li>Unlock Long-Term Career Potential:
                        <ul>
                          <li>📅 Initial Employment Term: 4 - 6 Months</li>
                          <li>🔄 Option for Continuous Renewal Based on Performance and Business Needs</li>
                        </ul>
                      </li>
                      <li>Embrace a Future of Flexibility and Growth with Us!</li>
                    </ul>
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/jobs">Apply Now</a>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b" id="Digital_Marketing_Specialist" onClick={() => window.location.href = window.location.hash.split('#')[0] + "#Digital_Marketing_Specialist"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Digital Marketing Specialist
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      We are looking for a motivated, bright, entrepreneurial, enthusiastic individuals to join our team! As a Digital Marketing Specialist, you will have an opportunity to
                    </p>
                    <ul>
                      <li>Play a key role in Digital Marketing campaigns planning, execution and monitoring.</li>
                      <li>Interpret and analyze data to make informed decisions and provide recommendations based on insights</li>
                      <li>Provide strategic support and input on the development of new campaigns to reach desired target audiences.</li>
                    </ul>
                    <h5>
                      Responsibilities:
                    </h5>
                    <ul>
                      <li>Play a key role in Digital Marketing campaigns (planning, executing and monitoring).</li>
                      <li>This includes but not limited to paid search (Google Ads), paid social (Facebook, Twitter, LinkedIn, Instagram), and other Digital Marketing techniques.</li>
                      <li>Update and maintain digital campaign, channel, and tactic reporting on a weekly basis</li>
                      <li>Interpret and analyze data to make informed decisions and provide recommendations based on insights</li>
                      <li>Work in close collaboration with other team members using a wide range of technologies</li>
                      <li>Evaluate and utilize the latest concepts, tools, and technologies in Digital Marketing.</li>
                    </ul>
                    <h5>
                      Requirements:
                    </h5>
                    <ul>
                      <li>Experience in B2B Digital Marketing capacity including Campaign planning, execution and monitoring).</li>
                      <li>Working knowledge of paid social platforms (Facebook, LinkedIn, Twitter, Instagram), Google Ads, Google Analytics, and re-marketing platforms is desirable.</li>
                      <li>Provide strategic support and input on the development of new campaigns to reach desired target audiences</li>
                      <li>Highly organized, with demonstrated ability to manage a variety of campaigns simultaneously</li>
                      <li>Excellent problem-solving skills and ability to create innovative design.</li>
                      <li>Excellent verbal and written communication skills</li>
                      <li>Ability to work well in a team environment</li>
                    </ul>
                    <h5>
                      Benefits:
                    </h5>
                    <ul>
                      <li>Explore Your Ideal Work-Life Balance:
                        <ul>
                          <li>⏰ Flexible Hours</li>
                          <li>🌐 Remote Work Opportunities</li>
                        </ul>
                      </li>
                      <li>Join our dynamic team with a Competitive Compensation Package:
                        <ul>
                          <li>💰 Salary Range: $21/hour - $30/hour</li>
                        </ul>
                      </li>
                      <li>Unlock Long-Term Career Potential:
                        <ul>
                          <li>📅 Initial Employment Term: 4 - 6 Months</li>
                          <li>🔄 Option for Continuous Renewal Based on Performance and Business Needs</li>
                        </ul>
                      </li>
                      <li>Embrace a Future of Flexibility and Growth with Us!</li>
                    </ul>
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/jobs">Apply Now</a>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c" id="Machine_Learning_Engineer" onClick={() => window.location.href = window.location.hash.split('#')[0] + "#Machine_Learning_Engineer"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Machine Learning Engineer 
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We are looking for a motivated, bright, entrepreneurial, enthusiastic individuals to join our team! As a Machine Learning Engineer, you will have an opportunity to
                    </p>
                    <ul>
                      <li>Design and implement cool research ideas.</li>
                      <li>Build training/deployment pipelines.</li>
                      <li>Build the infrastructure to support the data collection and analysis process.</li>
                    </ul>
                    <h5>
                      Responsibilities:
                    </h5>
                    <ul>
                      <li>Design, train and improve Machine Learning models</li>
                      <li>Train large scale models on massive datasets</li>
                      <li>Develop automation tools to enable machine learning</li>
                      <li>Work in close collaboration with other team members using a wide range of technologies</li>
                      <li>Run machine learning tests</li>
                      <li>Solve technical problems</li>
                    </ul>
                    <h5>
                      Requirements:
                    </h5>
                    <ul>
                      <li>Experience in Python and related ML frameworks such as Tensorflow</li>
                      <li>Experience using large-scale distributed training strategies</li>
                      <li>Excellent problem-solving skills</li>
                      <li>Excellent verbal and written communication skills.</li>
                      <li>Ability to work well in a team environment</li>
                    </ul>
                    <h5>
                      Benefits:
                    </h5>
                    <ul>
                      <li>Explore Your Ideal Work-Life Balance:
                        <ul>
                          <li>⏰ Flexible Hours</li>
                          <li>🌐 Remote Work Opportunities</li>
                        </ul>
                      </li>
                      <li>Join our dynamic team with a Competitive Compensation Package:
                        <ul>
                          <li>💰 Salary Range: $25/hour - $35/hour</li>
                        </ul>
                      </li>
                      <li>Unlock Long-Term Career Potential:
                        <ul>
                          <li>📅 Initial Employment Term: 4 - 6 Months</li>
                          <li>🔄 Option for Continuous Renewal Based on Performance and Business Needs</li>
                        </ul>
                      </li>
                      <li>Embrace a Future of Flexibility and Growth with Us!</li>
                    </ul>
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/jobs">Apply Now</a>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d" id="VR_AR_Engineer" onClick={() => window.location.href = window.location.hash.split('#')[0] + "#VR_AR_Engineer"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      VR/AR Engineer
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We are looking for a motivated, bright, entrepreneurial, enthusiastic individuals to join our team! As an Augmented Reality (AR) Engineer, you will have an opportunity to
                    </p>
                    <ul>
                      <li>Design and implement cool VR/AR projects.</li>
                      <li>Build an innovative, immersive, intuitive, and collaborative experience.</li>
                      <li>Improving the animation and 3D modeling experience.</li>
                    </ul>
                    <h5>
                      Responsibilities:
                    </h5>
                    <ul>
                      <li>Build an innovative, immersive, intuitive, and collaborative experience for creating animated 3D content.</li>
                      <li>Improving the animation and 3D modeling experience by optimizing the toolset and incorporating the latest designs.</li>
                      <li>Shape the future of VR creation for gaming, animation, and the metaverse.</li>
                      <li>Freedom to build and innovate beyond your job description</li>
                      <li>Work in close collaboration with other team members using a wide range of technologies</li>
                      <li>Solve technical problems</li>
                    </ul>
                    <h5>
                      Requirements:
                    </h5>
                    <ul>
                      <li>Familiarity with AR/VR technologies and literature.</li>
                      <li>Experience with Unity game engine.</li>
                      <li>Experience developing AR/VR projects.</li>
                      <li>Excellent problem-solving skills and ability to create innovative design.</li>
                      <li>Excellent verbal and written communication skills</li>
                      <li>Ability to work well in a team environment</li>
                    </ul>
                    <h5>
                      Benefits:
                    </h5>
                    <ul>
                      <li>Explore Your Ideal Work-Life Balance:
                        <ul>
                          <li>⏰ Flexible Hours</li>
                          <li>🌐 Remote Work Opportunities</li>
                        </ul>
                      </li>
                      <li>Join our dynamic team with a Competitive Compensation Package:
                        <ul>
                          <li>💰 Salary Range: $25/hour - $30/hour</li>
                        </ul>
                      </li>
                      <li>Unlock Long-Term Career Potential:
                        <ul>
                          <li>📅 Initial Employment Term: 4 - 6 Months</li>
                          <li>🔄 Option for Continuous Renewal Based on Performance and Business Needs</li>
                        </ul>
                      </li>
                      <li>Embrace a Future of Flexibility and Growth with Us!</li>
                    </ul>
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/jobs">Apply Now</a>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e" id="Web_App_Developer" onClick={() => window.location.href = window.location.hash.split('#')[0] + "#Web_App_Developer"}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Web/App Developer
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We are looking for a motivated, bright, entrepreneurial, enthusiastic individuals to join our team! As a Web/App Developer, you will have an opportunity to
                    </p>
                    <ul>
                      <li>Leverage current technologies to build modern, functional, responsive web clients</li>
                      <li>Collaborate with UX and visual designers on proposed designs</li>
                      <li>Evaluate and utilize the latest concepts, tools, and technologies.</li>
                    </ul>
                    <h5>
                      Responsibilities:
                    </h5>
                    <ul>
                      <li>Create cutting edge web applications using React focused on usability, responsiveness, configuration, and presentation of data through visualizations.</li>
                      <li>Leverage current technologies to build modern, functional, responsive web clients</li>
                      <li>Collaborate with UX and visual designers on proposed designs</li>
                      <li>Freedom to build and innovate beyond your job description</li>
                      <li>Work in close collaboration with other team members using a wide range of technologies</li>
                      <li>Solve technical problems</li>
                    </ul>
                    <h5>
                      Requirements:
                    </h5>
                    <ul>
                      <li>Understanding of frontend development skills (HTML, CSS, JS)</li>
                      <li>Understanding and prior experience of Node.js, React, GraphQL, REST based projects is a great plus.</li>
                      <li>Familiarity with Ruby, PHP is desirable.</li>
                      <li>Excellent problem-solving skills and ability to create innovative design.</li>
                      <li>Excellent verbal and written communication skills</li>
                      <li>Ability to work well in a team environment</li>
                    </ul>
                    <h5>
                      Benefits:
                    </h5>
                    <ul>
                      <li>Explore Your Ideal Work-Life Balance:
                        <ul>
                          <li>⏰ Flexible Hours</li>
                          <li>🌐 Remote Work Opportunities</li>
                        </ul>
                      </li>
                      <li>Join our dynamic team with a Competitive Compensation Package:
                        <ul>
                          <li>💰 Salary Range: $21/hour - $30/hour</li>
                        </ul>
                      </li>
                      <li>Unlock Long-Term Career Potential:
                        <ul>
                          <li>📅 Initial Employment Term: 4 - 6 Months</li>
                          <li>🔄 Option for Continuous Renewal Based on Performance and Business Needs</li>
                        </ul>
                      </li>
                      <li>Embrace a Future of Flexibility and Growth with Us!</li>
                    </ul>
                    <a className="edu-btn" href="https://form.jotform.com/m2mtech/jobs">Apply Now</a>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-4 mt--40 order-3 order-lg-2">
            <div className="faq-img">
              <img src={`${process.env.PUBLIC_URL}/images/careers/jobs/undraw_agreement_re_d4dv.svg`} alt="illustration" />
            </div>
          </div>
          {/* <div className="col-12 order-2 mt--40 order-lg-3">
            <h3>How to Apply</h3>
            <p>Please send an email to <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a> with your resume and why you are interested in this job.</p>
          </div> */}
        </div>
      </div>
      
      <div className="container eduvibe-animated-shape">
        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="shape-image shape-image-3">
            <img src={process.env.PUBLIC_URL+"/images/shapes/shape-15.png"} alt="Shape Thumb" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobsContent;