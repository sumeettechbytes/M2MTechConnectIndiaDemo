import React from 'react';

const CoursesSectionTitle = ( { slogan, title, classes } ) => {
    return (
        <div className={`section-title ${ classes ? classes: '' }`}>
                {/* <span className="pre-title" dangerouslySetInnerHTML={{__html: slogan}}></span> */}
                <h3 className="title" dangerouslySetInnerHTML={{__html: title}}></h3>
        </div>
    )
}
export default CoursesSectionTitle;