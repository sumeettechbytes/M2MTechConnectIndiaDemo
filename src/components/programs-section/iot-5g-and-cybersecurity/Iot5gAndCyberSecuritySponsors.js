import React from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import { ProgramSponsorsParams, ProgramSponsorsMobileParams, ProgramSponsorsTabletParams } from '../../../utils/script';

let sponsors = [
  {
    id: 1,
    image: "/images/sponsors/Compressed_CMAI-Logo-with-Black-Dot.png",
    alt: "CMAI",
  },
  {
    id: 2,
    image: "/images/sponsors/riipen_logo.png",
    alt: "Riipen",
  },
  {
    id: 3,
    image: "/images/sponsors/ictc-website-logo-200x90.svg",
    alt: "ICTC",
  },
  {
    id: 4,
    image: "/images/sponsors/technation-logo-black.svg",
    alt: "Technation",
  },
  {
    id: 5,
    image: "/images/sponsors/InnovateBC_Logomark_teal_rev-1.webp",
    alt: "Innovate BC",
  },
  {
    id: 6,
    image: "/images/sponsors/ECO-Logo.svg",
    alt: "Eco Canada",
  },
  {
    id: 7,
    image: "/images/sponsors/Cican-logo-en.webp",
    alt: "CiCan",
  },
  {
    id: 8,
    image: "/images/sponsors/magnet-logo.png",
    alt: "Magnet",
  },
]

const Iot5gAndCyberSecuritySponsors = (props) => {
  const classes = `testimonial-activation testimonial-style-1 edu-slick-button slick-button-left ${props.className ? props.className : '' }`;
  const item = 10;
  sponsors = item ? sponsors.slice( 0, item ) : sponsors;
  return (
    <Element
      name="features"
      className="landing-demo-features our-sponsors-section edu-section-gap bg-color-white home-one-cat"
    >
      <div className="container eduvibe-animated-shape">
        <div className="row">
          <div className="col-lg-12 pre-section-title text-center">
            {/* <span className="color-primary pretitle">Sponsors</span> */}
            <h3 className="title">Clean Technology Sponsors</h3>
          </div>
        </div>

        <div className="sponsors-desktop row g-5 mt--10">
          <Slider 
            className={ classes }
            { ...ProgramSponsorsParams }
          >
            { sponsors.map( ( item, i ) => (
              <div key={item.id} className="sponsors-wrapper mt--20 mb--40">
                <div className="inner">
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL+item.image}`} alt={item.alt} />
                  </div>
                </div>
              </div>
            ) ) }
          </Slider>
        </div>
          
        <div className="sponsors-tablet row g-5 mt--10">
          <Slider 
            className={ classes }
            { ...ProgramSponsorsTabletParams }
          >
            { sponsors.map( ( item, i ) => (
              <div key={item.id} className="sponsors-wrapper mt--20 mb--40">
                <div className="inner">
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL+item.image}`} alt={item.alt} />
                  </div>
                </div>
              </div>
            ) ) }
          </Slider>
        </div>
          
        <div className="sponsors-mobile row g-5 mt--10">
          <Slider 
            className={ classes }
            { ...ProgramSponsorsMobileParams }
          >
            { sponsors.map( ( item, i ) => (
              <div key={item.id} className="sponsors-wrapper mt--20 mb--40">
                <div className="inner">
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL+item.image}`} alt={item.alt} />
                  </div>
                </div>
              </div>
            ) ) }
          </Slider>
        </div>

        <div className="shape-wrapper">
          <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-1">
              <img src="/images/shapes/shape-04-08.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-2">
              <img src="/images/shapes/shape-03-02.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-3">
              <img src="/images/shapes/shape-11-10.png" alt="Shape Thumb" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Iot5gAndCyberSecuritySponsors;