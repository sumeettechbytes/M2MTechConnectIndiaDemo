import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CourseTwo from '../../components/course/CourseTypeTwo';
import CourseData from '../../data/course/CourseData.json';

const HomeOneCourses = () => {
    // let [courseDataDynamic, setCourseDataDynamic] = useState();

    // useEffect(() => {
    //     let option = {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Auth-API-Key': 'd5fd3e22848fa30fb6796b6e82547215',
    //             'X-Auth-Subdomain': 'm2m-s-school'
    //         }
    //     }
    //     const getCourses = async () => {
    //         const res = await fetch(`https://api.thinkific.com/api/public/v1/collections?page=2&limit=5`, option);
    //         const data = await res.json();
    //         console.log(data);
    //         setCourseDataDynamic(data);
    //     }
    //     getCourses();
    // }, []);

    return (
        <div className="edu-course-area eduvibe-home-one-course course-wrapper-1 edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Popular Courses"
                            title = "Featured On This Month"
                        />
                    </div>
                </div>
                {/* <div>
                    {courseDataDynamic?.items[0].name}
                </div> */}

                <div className="row g-5 mt--10">
                    { 
                        CourseData.slice( 0, 6 ).map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="col-12 col-sm-12 col-xl-4 col-md-6"
                                animateOnce={true}
                                key={ item.id }
                            >
                                <CourseTwo data={item} />
                            </ScrollAnimation>
                        ) )
                    }
                </div>

                <div className="row mt--60">
                    <div className="col-lg-12">
                        <div className="load-more-btn text-center">
                            <a className="edu-btn" href="https://courses.m2mtechconnect.com/collections">View All Courses<i className="icon-arrow-right-line-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-09.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-10.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-11.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeOneCourses;