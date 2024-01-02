import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'Terramera',
		"website": 'https://www.terramera.com/',
		"description": "Terramera is a global agtech (agriculture tech) leader fusing science, nature and artificial intelligence to transform how food is grown and the economics of agriculture in the next decade. With our revolutionary Actigate™ technology platform, we are committed to reducing the global synthetic pesticide load by 80% by 2030 to protect plant and human health and ensure an earth that thrives and provides for everyone. It is based in Vancouver, BC.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://www.terramera.com/careers/",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Minesense Technologies',
		"website": 'https://minesense.com/',
		"description": "MineSense Technologies Ltd is a Vancouver-based company that specializes in providing mining solutions through advanced sensor-based technologies and data analytics. The company was founded in 2009 by Jeff More, an entrepreneur with a background in the mining industry. MineSense aims to optimize the ore extraction process by enabling more efficient and sustainable mining operations.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://minesense.com/careers/",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Portable Electric',
		"website": 'https://portable-electric.com/',
		"description": "Founded in 2015 in Vancouver, BC, Portable Electric's ecosystem of portable mobile electric generators and power stations was created with the desire to see accountability from individuals and industries persisting with toxic gas and diesel generators with no regard for their actions. Since then, their Voltstack e-Generators or portable power stations have become a global leader in providing clean, sustainable mobile power solutions across several industries.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://portable-electric.com/careers/",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Moment Energy',
		"website": 'https://www.momentenergy.com/',
		"description": "Moment Energy is a clean-tech company based in Coquitlam, BC helping build a sustainable economy through energy storage systems made from repurposed electric vehicle batteries. As an impact-driven organization, Moment Energy's goal is to provide a reliable and environmentally friendly energy storage solution for their customers. They are the only Canadian company collaborating with Nissan North America and other world-renowned automakers to repurpose their EV batteries. As a Canadian-owned and operated company, Moment Energy was founded in 2019 by four tech entrepreneurs with a mission to provide worldwide access to clean, reliable, and affordable power.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://secure.collage.co/jobs/moment-energy/",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'GaN Systems',
		"website": 'https://gansystems.com/',
		"description": "GaN Systems is a Canadian semiconductor company that specializes in the development and production of gallium nitride (GaN) power devices. The company was founded in 2014 and is headquartered in Ottawa, Canada. Gan Systems focuses on creating highly efficient, reliable, and cost-effective GaN power transistors, which are essential components in various applications, including automotive, consumer electronics, renewable energy, industrial, and aerospace sectors.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://gansystems.com/careers/",
	},
];

const CleanTechnologyEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">Clean Technology Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
							Implementing comprehensive cleantech programs is essential for mitigating environmental challenges and transitioning to a sustainable future. These are the Canadian based employers that are providing jobs in Clean Technology industry:
							</p>

							<div className="shape shape-6 about-parallax-2 d-xl-block d-none">
								<img src={`${process.env.PUBLIC_URL}/images/shapes/shape-12.png`} alt="Shape Thumb" loading="lazy" />
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="container">
							{ items && items.length > 0 &&
								<div className="row g-5 employer-list-desktop">
									{ items.map( ( data , i ) => (
										<div key={i} className="col-md-4 employer-wrapper">
											<div className="employer-inner service-card-1">
												<div className="employer-content">
													<h5 className="feature-title"><a href={ data.website } alt="website">{ data.title }</a></h5>
													<p className="feature-description">{ data.description }</p>
												</div>
												<div className="d-flex justify-content-center flex-wrap">
													<a className="edu-btn btn-secondary mt-3" href={ data.externalLink }>Current Jobs<i className="icon-Double-arrow"></i></a>
												</div>
											</div>
										</div>
									) ) }
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</Element>
	)
}

export default CleanTechnologyEmployers;