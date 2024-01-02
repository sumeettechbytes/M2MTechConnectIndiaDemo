import React from 'react';
import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';

const CourseTypeOne = ({ data, classes }) => {
    const excerpt = data.excerpt.substring(0, 142) + "...";

    return (
        <div className={`edu-card card-type-3 radius-small ${ classes ? classes : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/images/course/${data.image}`} alt="Course Thumb" />
                    </Link>
                    {/* <div className="wishlist-top-right">
                        <button className="wishlist-btn"><i className="icon-Heart"></i></button>
                    </div> */}
                    <div className="top-position status-group left-bottom">
                        <Link className="eduvibe-status status-03" to={process.env.PUBLIC_URL + `/programs/supply-chain-optimization`}>
                            {data.categories.slice(0, 1)}
                        </Link>
                    </div>
                </div>
                <div className="content">
                    <div className="card-top">
                        <ul className="edu-meta meta-02">
                            <li><i className="icon-map-pin-line"></i>{data.location}</li>
                        </ul>
                        <ul className="edu-meta meta-02">
                            <li><i className="icon-time-line"></i>{data.duration}</li>
                        </ul>
                    </div>
                    <h6 className="title">
                        <Link to={process.env.PUBLIC_URL + `/programs/supply-chain-optimization`}>{data.title}</Link>
                    </h6>
                    <div className="card-bottom">
                        <div className="price-list price-style-02">
                            {data.employers} Employers
                        </div>
                        <div className="edu-rating rating-default">
                            {data.student} Applicants
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-hover-action">
                <div className="hover-content">
                    <div className="content-top">
                        <div className="top-status-bar">
                            <Link className="eduvibe-status status-03" to={process.env.PUBLIC_URL + `/programs/supply-chain-optimization`}>
                                {data.categories.slice(0, 1)}
                            </Link>
                        </div>
                        {/* <div className="top-wishlist-bar">
                            <button className="wishlist-btn"><i className="icon-Heart"></i></button>
                        </div> */}
                    </div>

                    <h6 className="title">
                        <Link to={process.env.PUBLIC_URL + `/programs/supply-chain-optimization`}>{data.title}</Link>
                    </h6>

                    <p className="description">{ excerpt }</p>

                    <div className="price-list price-style-02">
                        <div className="price current-price">{data.employers} Employers</div><br></br>
                        <div className="read-more-btn">
                            <Link className="edu-btn btn-medium btn-white" to='#'>
                                View Employers
                            </Link>
                        </div>
                        <div className="price current-price">{data.student} Applicants</div>
                        <div className="read-more-btn">
                            <Link className="edu-btn btn-medium btn-white" to='#'>
                                View Applicants
                            </Link>
                        </div>
                    </div>

                    {/* <div className="hover-bottom-content">
                        <ul className="edu-meta meta-02">
                            <li><i className="icon-map-pin-line"></i>Online</li>
                        </ul>
                        <ul className="edu-meta meta-02">
                            <li><i className="icon-file-list-3-line"></i>{data.lesson} Lessons</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CourseTypeOne;