import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
  {
    "id": 1,
    "title": "University of McGill, Stanley Wang",
    "image": "students-spotlight/spotlight-UMcG.webp",
    "date": "19 July, 2023",
    "shortDate": "19 Jul",
    "author": ["Jaclyn"],
    "readingTime": "2 Min Read",
    "categories": ["UMcG"],
    "tags": ["STEM", "Students", "Technology", "STEM Education"],
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
  {
    "id": 3,
    "title": "University of McGill, Sumaya Soufi",
    "image": "students-spotlight/spotlight-03.webp",
    "date": "24 July, 2023",
    "shortDate": "24 Jul",
    "author": ["M2M Tech"],
    "readingTime": "3 Min Read",
    "categories": ["UMcG"],
    "tags": ["STEM", "Students", "Tech","Machine Learning", "STEM Education"],
    "details": "We're excited to showcase Sumaya Soufi! Sumaya is a student from McGill University (located in Quebec), and she participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-sumaya-soufi-university-of-mcgill-e58d7997e594",
  },
  {
    "id": 4,
    "title": "University of Alberta, Bao Nguyen",
    "image": "students-spotlight/spotlight-04.webp",
    "date": "24 July, 2023",
    "shortDate": "24 Jul",
    "author": ["M2M Tech"],
    "readingTime": "2 Min Read",
    "categories": ["UAlb"],
    "tags": ["STEM", "Students", "Finance", "Student Life", "University"],
    "details": "We're excited to showcase Bao Nguyen! Bao is a student from University of Alberta, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-bao-nguyen-university-of-mcgill-a794b89d0845",
  },
  {
    "id": 5,
    "title": "University of Alberta, Yousef Moussa",
    "image": "students-spotlight/spotlight-05.webp",
    "date": "24 July, 2023",
    "shortDate": "24 Jul",
    "author": ["M2M Tech"],
    "readingTime": "2 Min Read",
    "categories": ["UVic"],
    "tags": ["STEM", "Software Engineering", "Tech", "STEM Education"],
    "details": "We're excited to showcase Yousef Moussa! Yousef is a student from University of Alberta, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-yousef-moussa-university-of-alberta-3bdf7a4ed576",
  },
  {
    "id": 6,
    "title": "British Columbia Institute of Technology, Anton Villadolid",
    "image": "students-spotlight/spotlight-06.webp",
    "date": "5 October, 2023",
    "shortDate": "5 Oct",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["BCIT"],
    "tags": ["AI", "Data Science", "Education", "STEM", "Coding"],
    "details": "We're excited to showcase Anton Villadolid! Anton is a student from British Columbia Institute of Technology, and they participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-anton-villadolid-6e5bf6d58355",
  },
  {
    "id": 7,
    "title": "University of British Columbia, Yu Cheng Li",
    "image": "students-spotlight/spotlight-07.webp",
    "date": "5 October, 2023",
    "shortDate": "5 Oct",
    "author": ["Ruini"],
    "readingTime": "3 Min Read",
    "categories": ["UBC"],
    "tags": ["STEM", "Software Engineering", "Tech", "STEM Education"],
    "details": "We're excited to showcase Yu Cheng Li! Cheng Li is a student from University of British Columbia, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-yu-cheng-li-the-university-of-british-columbia-008fae4c6542",
  },
  {
    "id": 9,
    "title": "University of British Columbia, Christina Zhang",
    "image": "students-spotlight/spotlight-09.webp",
    "date": "6 October, 2023",
    "shortDate": "6 Oct",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UBC"],
    "tags": ["STEM", "Design", "Data Science", "Data Visualization", "Education"],
    "details": "We're excited to showcase Christina Zhang! Christina is a student from University of British Columbia, and she participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-christina-zhang-the-university-of-british-columbia-c6a20fd05308",
  },
  {
    "id": 10,
    "title": "University of Calgary, Kimih Yan",
    "image": "students-spotlight/spotlight-10.webp",
    "date": "6 October, 2023",
    "shortDate": "6 Oct",
    "author": ["Ruini"],
    "readingTime": "3 Min Read",
    "categories": ["UC"],
    "tags": ["STEM", "Data Science", "AI", "Education", "Programming"],
    "details": "We're excited to showcase Kimih Yan! Kimih is a student from University of Calgary, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-kimih-yan-university-of-calgary-7d56c3bed079",
  },
  {
    "id": 11,
    "title": "University of Calgary, Doyin Abatan",
    "image": "students-spotlight/spotlight-11.webp",
    "date": "6 October, 2023",
    "shortDate": "6 Oct",
    "author": ["Ruini"],
    "readingTime": "3 Min Read",
    "categories": ["UC"],
    "tags": ["Data Science", "Programming", "AI", "Bioinformatics", "Information Technology"],
    "details": "We're excited to showcase Doyin Abatan! Doyin is a student from University of Calgary, and she participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-doyin-abatan-university-of-calgary-4d71f488c567",
  },
  {
    "id": 12,
    "title": "University of Manitoba, Nduka Uguna",
    "image": "students-spotlight/spotlight-12_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UM"],
    "tags": ["University", "Data Science", "Programming", "Education", "Coding"],
    "details": "We're excited to showcase Nduka Uguna! Nduka is a student from University of Manitoba, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-nduka-uguna-university-of-manitoba-b793e24a27dc",
  },
  {
    "id": 13,
    "title": "University of British Columbia, Abhigyan Dabla",
    "image": "students-spotlight/spotlight-15_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UBC"],
    "tags": ["Predictive Analytics", "Data Science", "Programming", "Education", "Coding"],
    "details": "This blog post takes a closer look at Abhigyuan's journey, uncovering the challenges that fueled his learning and propelled him toward exciting career opportunities.",
    "link": "https://medium.com/m2mtechconnect/in-the-program-hes-been-diving-into-the-world-of-ai-and-machine-learning-dd7c687b06de",
  },
  {
    "id": 14,
    "title": "MacEwan University, Subhan Noor",
    "image": "students-spotlight/spotlight-13_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["MEU"],
    "tags": ["Python", "Data Science", "Programming", "Education", "Coding"],
    "details": "We're excited to showcase Subhan Noor! Subhan is a MacEwan University student who participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/welcome-to-our-stem-student-spotlight-series-where-we-highlight-the-incredible-initiatives-and-487b65264c5b",
  },
  {
    "id": 15,
    "title": "York University, Tobiloba Omooba",
    "image": "students-spotlight/spotlight-14_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "3 Min Read",
    "categories": ["YU"],
    "tags": ["Machine Learning", "Data Science", "Programming", "AI", "Coding"],
    "details": "We're excited to showcase Tobiloba Omooba! Tobiloba is a York University student who participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-tobiloba-omooba-york-university-ddeb549d0184",
  },
  {
    "id": 16,
    "title": "Université du Québec à Montréal, Ouail Slimani",
    "image": "students-spotlight/spotlight-16_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UQAM"],
    "tags": ["Machine Learning", "Data Science", "Programming", "AI", "Coding"],
    "details": "We're excited to showcase Ouail Slimani! Ouail is a UQAM student who participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-ouail-slimani-universit%C3%A9-du-qu%C3%A9bec-%C3%A0-montr%C3%A9al-uqam-f98ca38782b9",
  },
  {
    "id": 17,
    "title": "Simon Fraser University, Kia Brownridge",
    "image": "students-spotlight/spotlight-17_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "3 Min Read",
    "categories": ["SFU"],
    "tags": ["Data Visualization", "Data Science", "Programming", "Data", "Coding"],
    "details": "We're excited to showcase Kia Brownridge! Kia is a student from Simon Fraser University, and they participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-kia-brownridge-simon-fraser-university-60742f9e3f9f",
  },
  {
    "id": 18,
    "title": "University of Toronto, Bonan Luan",
    "image": "students-spotlight/spotlight-18_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UT"],
    "tags": ["Maching Learning", "Data Science", "Programming", "Education", "Coding"],
    "details": "We're excited to showcase Bonan Luan! Bonan is a student from the University of Toronto, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-bonan-luan-university-of-toronto-7eda810a2156",
  },
  {
    "id": 19,
    "title": "University of Calgary, David Hu",
    "image": "students-spotlight/spotlight-19_v2.webp",
    "date": "11 November, 2023",
    "shortDate": "11 Nov",
    "author": ["Ruini"],
    "readingTime": "2 Min Read",
    "categories": ["UC"],
    "tags": ["Maching Learning", "Data Science", "Programming", "Education", "Coding"],
    "details": "We're excited to showcase David Hu! David is a student from the University of Calgary, and he participated in our Work Integrated Learning opportunity.",
    "link": "https://medium.com/m2mtechconnect/stem-student-spotlight-david-hu-university-of-toronto-499dea84b800",
  },
]

const StudentsSpotlightBlogs = () => {
    return (
        <>
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
                  items.toReversed().map((item) => (
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
        </>
    )
}

export default StudentsSpotlightBlogs;