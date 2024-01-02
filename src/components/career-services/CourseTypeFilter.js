import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import CourseTypeOne from './CourseTypeOne';
import CourseData from './CourseData.json';

// const CourseData = [
//     {
//         "id": 1,
//         "title": "Competitive Strategy law for all students",
//         "image": "course-01.jpg",
//         "instructor": "James Carlson",
//         "duration": "3h 14m 20s",
//         "durationInHour": "3 Hours",
//         "durationInHourMinute": "3hr 14min",
//         "level": "Intermediate",
//         "language": "English",
//         "deadline": "25 Dec, 2022",
//         "rating": "4.9",
//         "student": 763,
//         "lesson": 29,
//         "quizzes": 12,
//         "price": "45.00",
//         "oldPrice": "55.00",
//         "review": 56,
//         "passPercentage": 80,
//         "featured": true,
//         "certificate": "available",
//         "filterParam": "Popularity",
//         "categories": ["Language Learning", "Business"],
//         "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
//         "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
//     },
// ]

const CourseTypeFilter = ( { itemToShow, showLoadMore, incrementPerClick } ) => {
    const FilterControls = [...new Set( CourseData.map( item => item.filterParam ) ) ];
    FilterControls.unshift( 'All' );
    const numberOfCourses = itemToShow || 6;
    const dataIncrement = incrementPerClick || 3;
    const [noMorePost, setNoMorePost] = useState( false );
    const [dataVisibleCount, setDataVisibleCount] = useState( numberOfCourses );
    // const [activeFilter, setActiveFilter] = useState( '' );
    const [visibleItems, setVisibleItems] = useState( [] );
    // useEffect( () => {
        // setActiveFilter( FilterControls[0].toLowerCase() );
        // setVisibleItems( CourseData.filter( ( item ) => item.id <= dataVisibleCount ) );
    // }, [] );

    // const handleChange = ( e ) => {
    //     e.preventDefault();
    //     setActiveFilter( e.target.textContent.toLowerCase() );
    //     let tempData;
    //     if ( e.target.textContent.toLowerCase() === FilterControls[0].toLowerCase() ) {
    //         tempData = CourseData.filter( ( data ) => data.id <= dataVisibleCount );
    //     } else {
    //         tempData = CourseData.filter( ( data ) => data.filterParam.toLowerCase() === e.target.textContent.toLowerCase() &&
    //         data.id <= dataVisibleCount );
    //     }
    //     setVisibleItems( tempData );
    // }

    const handleLoadMoreBtn = (e) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if ( dataVisibleCount >= CourseData.length ) {
            setNoMorePost( true );
        } else {
            setDataVisibleCount( tempCount );
            setVisibleItems( CourseData.filter( ( data ) => data.id <= tempCount ) );
        }
    }

    useEffect(() => {
        const tempData = CourseData.filter( ( data ) => data.id <= 3 );
        setVisibleItems( tempData );
    }, [])

    return (
        <>
            <div className="row g-5 align-items-center mb--45 mb--30 mt_md--30 mt_sm--30">
                <div className="col-lg-6">
                    <div className="section-title text-start">
                        <span className="pre-title">Job Requisitions</span>
                        <h3 className="title">We Offer Career Opportunities</h3>
                    </div>
                </div>
                {/* <div className="col-lg-6">
                    <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end">
                        {FilterControls.map( ( filter, i ) => (
                            <button
                                onClick={handleChange}
                                key={i}
                                className={
                                    filter.toLowerCase() === activeFilter
                                    ? "is-checked"
                                    : " "
                                }
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div> */}
            </div>

            <div className="row g-5">
                {
                    visibleItems.map((item) => (
                        <div className="col-12 col-sm-12 col-xl-4 col-md-6" key={ item.id }>
                            <CourseTypeOne data={item} />
                        </div>
                    ) )
                }
            </div>

            { showLoadMore === 'enable' &&
                <div className="row text-center mt--60">
                    <div className="col-lg-12">
                        <button
                            className="edu-btn"
                            onClick={ handleLoadMoreBtn }
                            disabled={ noMorePost ? 'disabled' : null }
                        >
                            { 
                                noMorePost ? (
                                    'All Courses Displayed'
                                ) : (
                                    <span>
                                        Load More 
                                        <span className="eduvibe-spin-icon">
                                            <FaSpinner />
                                        </span>
                                    </span>
                                )
                            }
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default CourseTypeFilter;