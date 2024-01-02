import React from 'react';
import { Link as ScrollTo } from 'react-scroll';

const CleanTechnologyBanner = () => {

  return (
    <div className="data-analytics-banner banner-style-1 banner-style-students-spotlight bg-image height-640 d-flex align-items-center">
			<div className="container eduvibe-animated-shape">
				<div className="row g-5 row--40 align-items-center">
					<div className="order-1 order-xl-1 col-lg-12 col-xl-6">
						<div className="banner-left-content">
							<div className="inner">
								<div className="content">
									<h1 className="title">Clean Technology</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-1 order-xl-3"></div>
					<div className="col-xl-5 order-2 order-xl-3"></div>						
				</div>
				
				<div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
					<div className="shape-image shape-image-1">
						<img src={`${process.env.PUBLIC_URL}/images/shapes/shape-04-01.png`} alt="Shape Thumb" loading="lazy" />
					</div>
					<div className="shape-image shape-image-2">
						<img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-02.png`} alt="Shape Thumb" loading="lazy" />
					</div>
					<div className="shape-image shape-image-3">
						<img src={`${process.env.PUBLIC_URL}/images/shapes/shape-03-01.png`} alt="Shape Thumb" loading="lazy" />
					</div>
					<div className="shape-image shape-image-4">
						<img src={`${process.env.PUBLIC_URL}/images/shapes/shape-08.png`} alt="Shape Thumb" loading="lazy" />
					</div>
				</div>

			</div>

			<div className="scroll-down-btn">
				<ScrollTo
					className="round-btn"
					to="introduction"
					spy={true}
					smooth={true}
					duration={200}
				>
					<i className="icon-arrow-down-s-line"></i>
				</ScrollTo>
			</div>
        
    </div>
  )
}

export default CleanTechnologyBanner;