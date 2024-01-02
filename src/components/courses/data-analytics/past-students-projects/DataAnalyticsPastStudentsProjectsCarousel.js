import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import Slider from 'react-slick';

const images = [
  {
    key: 1,
    content: <div className="past-project">
      <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/800/450/?random" alt="5" loading="lazy" /></a>
      <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
      {/* <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div> */}
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
      <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/800/450/?random" alt="5" loading="lazy" /></a>
      <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
      {/* <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div> */}
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
      <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/800/450/?random" alt="5" loading="lazy" /></a>
      <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
      {/* <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div> */}
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
      <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/800/450/?random" alt="5" loading="lazy" /></a>
      <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4>
      {/* <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div> */}
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
      <a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c"><img src="https://picsum.photos/800/450/?random" alt="5" loading="lazy" /></a>
      {/* <h4 className="past-project-title text-center mb-0"><a href="https://medium.com/m2mtechconnect/stem-student-spotlight-uvic-ai-club-university-of-victoria-663147b7497c">Title</a></h4> */}
      <h4 className="past-project-title text-center mb-0">Title</h4>
      {/* <div className="past-project-description text-center p-4">Description here. Lorem ipsum, dolor sit amet consectetur elit. Vel voluptatibus ipsum voluptate, ex possimus error quibusdam reiciendis aut nisi nulla rem, saepe perferendis alias minus laudantium! Magnam quae pariatur nostrum!</div> */}
    </div>,
    thumbnailTitle: "Thumb",
    thumbnailLabel: "label",
    description: "Lorem description ipsum dolor sit amet",
    original: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
    thumbnail: '/images/category/category-01/coding-and-design-thinking-group-courses.png',
  },
];

const images2 = [
  {
    id: 1,
    src: "https://picsum.photos/800/450/?random",
    vid: "vRNVk9fsYOg",
    alt: "lorem ipsum",
  },
  {
    id: 2,
    src: "https://picsum.photos/800/450/?random",
    vid: "vRNVk9fsYOg",
    alt: "lorem ipsum",
  },
  {
    id: 3,
    src: "https://picsum.photos/800/450/?random",
    vid: "vRNVk9fsYOg",
    alt: "lorem ipsum",
  },
  {
    id: 4,
    src: "https://picsum.photos/800/450/?random",
    vid: "vRNVk9fsYOg",
    alt: "lorem ipsum",
  },
  {
    id: 5,
    src: "https://picsum.photos/800/450/?random",
    vid: "vRNVk9fsYOg",
    alt: "lorem ipsum",
  },
]

const DataAnalyticsPastStudentsProjectsCarousel = () => {
  
  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i className="icon-arrow-right-line-right"></i>
      </div>
    )
  }
  
  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i className="icon-arrow-left-line"></i>
      </div>
    )
  }

  const [imgIndex, setImgIndex] = useState(0);
  
  return (
    <>
      <div className="container">
        <div className="row student-project-carousel-container">
          <Carousel showNavigation slides={images} config={config.gentle} />
        </div>
      </div>
      <div className="container slider-2-container mt--80">
        <div className="row student-project-carousel-container">
          <h3>Slider 2</h3>
          <Slider
            infinite={true}
            lazyLoad={true}
            speed={300}
            slidesToShow={3}
            centerMode={true}
            centerPadding={0}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            beforeChange={(current, next) => setImgIndex(next)}
          >
            {images2.map((img, i) => (
              <div key={i} className={i === imgIndex ? "slide activeSlide": "slide"}>
                {/* <img src={img.src} alt={img.alt} /> */}
                <iframe width="560" height="225" src={`https://www.youtube.com/embed/${img.vid}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default DataAnalyticsPastStudentsProjectsCarousel;