import React from 'react';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
// import ScrollAnimation from 'react-animate-on-scroll';
// import SectionTitle from '../../sectionTitle/SectionTitle';

// const items = [
//     {
//         title: 'Lorem Ipsum',
//         info: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
//         icon: 'icon-Hand---Book'
//     },
//     {
//         title: 'Lorem Ipsum',
//         info: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
//         icon: 'icon-artboard-line'
//     },
//     {
//         title: 'Lorem Ipsum',
//         info: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
//         icon: 'icon-user-2'
//     }
// ];

const DataAnalyticsCurriculum = () => {
    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    return (
        <Element
            name="what-we-do-one"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="image-1" src={`${process.env.PUBLIC_URL}/images/shapes/mask-shape-1.png`} alt="About Main Thumb" loading="lazy" />
                            <div className="shape-image shape-image-1">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="inner mt-md-16">
                            <div className="col-lg-12 pre-section-title text-center">
                                <span className="color-primary pretitle">Curriculum</span>
                                <h3 className="title">Schedule For This Bundle</h3>
                            </div>
                            {/* { items && items.length > 0 &&
                                <div className="about-feature-list">
                                    { items.map( ( data , i ) => (
                                        <div className="our-feature" key={i}>
                                            <div className="our-feature">
                                                <div className="icon">
                                                    <i className={ data.icon }></i>
                                                </div>
                                                <div className="feature-content">
                                                    <h6 className="feature-title">{ data.title }</h6>
                                                    <p className="feature-description">{ data.info }</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            } */}

                            <div className="row g-5">
                                <div className="container mt-100 industries-list-tab-wrapper">
                                    <div className="tab industries-list-tab">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 tab-selections">
                                                {/* Tabs navs */}
                                                <ul className="tabs our-story-mobile">
                                                    <li
                                                        className="current"
                                                        onClick={(e) => { openTabSection(e, 'tab1');}}
                                                        // onClick={(e) => { openTabSection(e, 'tab1'); window.location = "#our-story-content";}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 1</h3>
                                                            <p>Our Humble Beginning</p>
                                                        </span>
                                                    </li>

                                                    <li
                                                        onClick={(e) => {openTabSection(e, 'tab2');}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 2</h3>
                                                            <p>Fun Facts</p>
                                                        </span>
                                                    </li>

                                                    <li
                                                        onClick={(e) => {openTabSection(e, 'tab3');}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 3</h3>
                                                            <p>Lorem Ipsum</p>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={(e) => {openTabSection(e, 'tab3');}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 3</h3>
                                                            <p>Lorem Ipsum</p>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={(e) => {openTabSection(e, 'tab3');}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 3</h3>
                                                            <p>Lorem Ipsum</p>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={(e) => {openTabSection(e, 'tab3');}}
                                                    >
                                                        <span>
                                                            <h3>Chapter 3</h3>
                                                            <p>Lorem Ipsum</p>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            <div className="col-lg-9 tab-selections-content">
                                                <div className="tab_content" id="our-story-content">
                                                    {/* Tab item #1 */}
                                                    <div id="tab1" className="tabs_item">
                                                        <div className="row align-items-center">
                                                            {/* <div className="col-lg-6">
                                                                <div className="industries-img left-img">
                                                                    <img src="/images/shapes/mask-shape-1.png" alt="illustration" />
                                                                </div>
                                                            </div> */}

                                                            <div className="col-lg-12 ml-md-20">
                                                                <div className="industries-content">
                                                                    <h4>Chapter Description</h4>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    
                                                                    {/* <div className="text-center">
                                                                        <Link href="/index-5/#">
                                                                            <a className="default-btn">Discover More</a>
                                                                        </Link>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Tab item #2 */}
                                                    <div id="tab2" className="tabs_item">
                                                        <div className="row  align-items-center">
                                                            <div className="col-lg-12 ml-md-20">
                                                                <div className="industries-content">
                                                                    <h4>Chapter Description</h4>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    
                                                                    {/* <div className="text-center">
                                                                        <Link href="/index-5/#">
                                                                            <a className="default-btn">Discover More</a>
                                                                        </Link>
                                                                    </div> */}
                                                                </div>
                                                            </div>

                                                            {/* <div className="col-lg-6">
                                                                <div className="industries-img right-img">
                                                                    <img src="/images/shapes/mask-shape-1.png" alt="illustration" />
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>

                                                    {/* Tab item #3 */}
                                                    <div id="tab3" className="tabs_item">
                                                        <div className="row  align-items-center">
                                                            {/* <div className="col-lg-6">
                                                                <div className="industries-img left-img">
                                                                    <img src="/images/shapes/mask-shape-1.png" width={416} height={312} alt="illustration" />
                                                                </div>
                                                            </div> */}

                                                            <div className="col-lg-12 ml-md-20">
                                                                <div className="industries-content">
                                                                    <h4>Chapter Description</h4>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                                                                    
                                                                    <div className="text-left">
                                                                        <a className="edu-btn btn-secondary" href="#">CTA</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default DataAnalyticsCurriculum;