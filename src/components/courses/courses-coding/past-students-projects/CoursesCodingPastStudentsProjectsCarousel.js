import React from 'react';
import Carousel from 'react-spring-3d-carousel';

const images = [
    {
      key: 1,
      content: <div className="past-project">
        <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/700/400/?random" alt="5" loading="lazy" /></a>
        <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
        <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div>
      </div>,
      thumbnailTitle: "Thumb",
      thumbnailLabel: "label",
      description: "Lorem description ipsum dolor sit amet",
      original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
      thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    },
    {
      key: 2,
      content: <div className="past-project">
        <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/700/400/?random" alt="5" loading="lazy" /></a>
        <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
        <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div>
      </div>,
      thumbnailTitle: "Thumb",
      thumbnailLabel: "label",
      description: "Lorem description ipsum dolor sit amet",
      original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
      thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    },
    {
      key: 3,
      content: <div className="past-project">
        <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/700/400/?random" alt="5" loading="lazy" /></a>
        <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
        <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div>
      </div>,
      thumbnailTitle: "Thumb",
      thumbnailLabel: "label",
      description: "Lorem description ipsum dolor sit amet",
      original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
      thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    },
    {
      key: 4,
      content: <div className="past-project">
        <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/700/400/?random" alt="5" loading="lazy" /></a>
        <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
        <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div>
      </div>,
      thumbnailTitle: "Thumb",
      thumbnailLabel: "label",
      description: "Lorem description ipsum dolor sit amet",
      original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
      thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    },
    {
      key: 5,
      content: <div className="past-project">
        <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/700/400/?random" alt="5" loading="lazy" /></a>
        <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
        <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div>
      </div>,
      thumbnailTitle: "Thumb",
      thumbnailLabel: "label",
      description: "Lorem description ipsum dolor sit amet",
      original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
      thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    },
];

const CoursesCodingPastStudentsProjectsCarousel = () => {
  return (
    <>
      <div className="container">
        <div className="row student-project-carousel-container">
          <Carousel showNavigation slides={images} />
        </div>
      </div>
    </>
  );
}

export default CoursesCodingPastStudentsProjectsCarousel;