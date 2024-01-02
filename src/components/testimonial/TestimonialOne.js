import React from 'react';
import Slider from 'react-slick';
import { TestimonialOneParams } from '../../utils/script';

let data = [
    {
        name: "Queeny Gong",
        details: "It's a great program that has many different courses that build coding, data science, machine learning etc. skills. The learning process is really easy to follow and the videos walk through everything very slowly and in detail. I had a lot of fun making the projects at the end of every course and it helped me build my understanding. Overall, I gained a lot of new skills from this course that will be helpful for me in the future.",
    },
    {
        name: "Stanley Wang",
        details: "Great amount of courses and information to learn in this program. The teaching is clear and the modules are structured really well. The communication I received was also really helpful and timely!",
    },
    {
        name: "Stephanie Wu",
        details: "Great program for those looking for an introduction to programming using Python as well as design and machine learning. The lessons are easy to follow with step by step walk through’s to keep you engaged and help you through the learning process. Although the timeframe for completing all the courses was a bit tight it was manageable and I do highly recommend the program overall!",
    },
    {
        name: "Jing Wan",
        details: "Great opportunity for students looking to expand their skills on python/ VR and AR. The courses are easy follow, and there is always scrum masters to help you along the journey",
    },
    {
        name: "Jabriel Abdile",
        details: "Amazing staff to work with, the courses were made in a perfect way that helped you truly understand what you were doing within python!",
    },
    {
        name: "Ricky Zhao",
        details: "Their programs offer a wide range of courses. I had a fun time learning python, VR, AR, and data science. The scrum masters are supportive and always there, so help is available whenever needed. I strongly encourage everyone to take their program.",
    },
    {
        name: "Daniel Kim",
        details: "Great Course, had lots of fun learning, but had the most fun being able to create a something/project, and being able to create whatever I want using the concept learned",
    },
    {
        name: "Cyanea Zheng",
        details: "I participated in M2M Tech's 10 week coding & design program this summer and thoroughly enjoyed all the courses and projects. I was able to expand greatly on my limited knowledge in python, AR, VR, and data science. I highly recommend anyone interested in learning more about coding and design to take courses from this company!!",
    },
    {
        name: "Edward Wu",
        details: "I had a great experience and was able to learn a lot in a short amount of time, the staff are very open to feedback and I would highly recommend the programs offered.",
    },
    {
        name: "Jialin Qiu",
        details: "Great environment for students and people to learn how to code with a variety of courses to select from!",
    },
];

const TestimonialOne = ( props ) => {
    const classes = `testimonial-activation testimonial-style-1 edu-slick-button slick-button-left ${props.className ? props.className : '' }`;
    data = props.item ? data.slice( 0, props.item ) : data;
    return (
        <Slider 
            className={ classes }
            { ...TestimonialOneParams }
        >
            { data.map( ( item, i ) => (
                <div className="single-testimonial" key={ i }>
                    <div className="inner">
                        {/* { props.quoteIcon !== 'disable' && 
                            <div className="quote-sign">
                                <img src={`${process.env.PUBLIC_URL}/images/testimonial/testimonial-01/quote.png`} alt="Quote Images" />
                            </div>
                        } */}
                        <p className="description">“{ item.details }”</p>
                        <div className="client-information">
                            {/* <div className="thumb">
                                <img src={`${process.env.PUBLIC_URL}/images/testimonial/testimonial-01/${item.image}`} alt="Client Thumb" />
                            </div> */}
                            <div className="info">
                                <h5 className="title">{ item.name }</h5>
                                {/* <span className="designation">{ item.designation }</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            ) ) }
        </Slider>
    );
}
export default TestimonialOne;