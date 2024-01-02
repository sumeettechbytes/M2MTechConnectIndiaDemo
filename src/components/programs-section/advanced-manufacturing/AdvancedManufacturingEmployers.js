import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'Lincoln Electric Canada',
		"website": 'https://www.lincolnelectric.com/en-ca/',
		"description": "Lincoln Electric Canada is a subsidiary of Lincoln Electric Holdings, Inc., a global leader in welding and cutting solutions. With a strong presence in Canada, the company offers a wide range of welding products, equipment, and services to industries such as manufacturing, construction, and automotive. Committed to innovation and customer satisfaction, Lincoln Electric Canada provides cutting-edge welding technologies and expert support to businesses across the country.",
		"link": "/work-integrated-learning/lincoln-electric-canada",
		"externalLink": "https://jobs.lincolnelectric.com/?utm_source=LEwebsite&utm_medium=HP&utm_campaign=2022_Recruitment",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Velcro',
		"website": 'https://www.velcro.com/',
		"description": "At Velcro, their primary focus is on developing products that cater to customer needs and uphold the highest standards for quality, service, and safety. The original VELCRO® Brand fasteners they produce are globally recognized for their quality, strength, and reliability. For decades, they have closely collaborated with some of the most esteemed brands, fostering strong relationships with their customers. From their manufacturing floor to their sales and customer service offices, they maintain a top-to-bottom commitment to their quality culture, ensuring that every product they deliver not only meets but surpasses customer expectations worldwide.",
		"link": "/work-integrated-learning/velcro",
		"externalLink": "https://www.velcro.com/about-us/careers/",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Magna International',
		"website": 'https://www.magna.com/',
		"description": "Magna stands as a global automotive powerhouse, supplying 58 Original Equipment Manufacturers (OEMs) worldwide. With products and systems featured in two out of every three vehicles launched globally until 2019, Magna's influence on the automotive landscape is unparalleled.",
		"link": "/work-integrated-learning/magna-international",
		"externalLink": "https://www.magna.com/careers",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Bombardier',
		"website": 'https://bombardier.com/en',
		"description": "Bombardier's manufacturing division is a cornerstone of the company's operations, driving its production of cutting-edge aircraft and rail vehicles. The manufacturing side of Bombardier is characterized by state-of-the-art facilities, advanced technologies, and a commitment to quality and innovation.",
		"link": "/work-integrated-learning/bombardier",
		"externalLink": "https://bombardier.com/en/careers/career-opportunities",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'Safran',
		"website": 'https://www.safran-group.com/countries/canada',
		"description": "Safran is a leading international high-technology group specializing in aerospace, defense, and security. Founded in 2005, Safran has quickly become a key player in the global aerospace industry. Even though the company's headquarters is located in Paris, France, it has a strong presence in the Canadian manufacturing sector.",
		"link": "/work-integrated-learning/safran",
		"externalLink": "https://www.safran-group.com/jobs",
	},
];

const AdvancedManufacturingEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">Advanced Manufacturing Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
								Pioneering the future of industry with advanced manufacturing, driving efficiency, sustainability, and technological progress for a more innovative and sustainable world. These are the Canadian based employers that are providing jobs in Advanced Manufacturing industry:
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
									{ items.map( ( data ) => (
										<div key={data.id} className="col-md-4 employer-wrapper">
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

export default AdvancedManufacturingEmployers;