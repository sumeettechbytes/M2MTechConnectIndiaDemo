import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

const StudentsSpotlightAchievements = ({
    setShowRegisterForm
    }) => {
    return (
        <>
            <div name="achievements" className="edu-service-area service-wrapper-1 edu-section-gap bg-image" id="ProgramshowCase">
                <div className="container eduvibe-animated-shape">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                classes = "text-center"
                                slogan = "students success"
                                title = "Celebrating STEM Students Achievements Across Canada"
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-12">
                        <img src="/images/students-spotlight/students_spotlight_achievements_v3.webp" alt="map showing our locations" />
                      </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-14.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-11-01.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src={`${process.env.PUBLIC_URL}/images/shapes/shape-15.png`} alt="Shape Thumb" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsSpotlightAchievements;