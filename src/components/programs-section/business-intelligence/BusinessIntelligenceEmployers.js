import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'Sedin Technologies',
		"website": 'https://sedintechnologies.com/',
		"description": "Sedin, founded in 2006, is a global IT services provider. The company offers solutions ranging from business intelligence to technology consulting, addressing the needs of startups and large enterprises alike. With eight distinct tech divisions and a team exceeding 500 members worldwide, the company strives for expansion and innovation to propel clients toward success.",
		"link": "/work-integrated-learning/sedin-technologies",
		"externalLink": "https://sedintechnologies-talent.freshteam.com/jobs",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Synergo Group',
		"website": 'https://synergogroup.net/',
		"description": "Founded in 2005, The Synergo Group is a Canadian IT consulting agency offering services to startups and Corporate Innovation Teams across all project phases. Specializing in business intelligence and custom software development, the company helps manage the entire business lifecycle. With cross-functional teams spread across the USA, U.K., Denmark, Germany, Romania, and The Netherlands, Synergo Group prioritizes understanding clients' projects and end users to create exceptional experiences.",
		"link": "/work-integrated-learning/synergo-group",
		"externalLink": "https://synergogroup.net/careers/",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Adastra Corp',
		"website": 'https://adastracorp.com/',
		"description": "Adastra is a business intelligence focused company dedicated to enhancing customer experience, cost efficiencies, and revenue growth through the strategic use of data. With over 20 years of experience, Adastra emphasizes the importance of accessible and resilient data infrastructure. Adastra has a proven track record of assisting organizations of all sizes, from SMEs to Fortune 1000s, in achieving their transformation goals.",
		"link": "/work-integrated-learning/adastra-corp",
		"externalLink": "https://adastracorp.com/careers/canada/",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'AOT Technologies',
		"website": 'https://www.aot-technologies.com/',
		"description": "AOT Technologies is a IT consulting firm that excels in crafting intelligent systems and leveraging its proficiency in low code development with a particular emphasis on business intelligence. Committed to using technology to benefit society, AOT is dedicated to creating innovative solutions that enhance lives. As experts in business intelligence, the team thrives on challenges and critical thinking, consistently making a positive impact alongside its clients.",
		"link": "/work-integrated-learning/aot-technologies",
		"externalLink": "https://www.aot-technologies.com/careers-at-aot-technologies/",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'Sigma Software Group',
		"website": 'https://sigma.software/',
		"description": "Sigma Software, a global IT firm, specializes in meeting the technology needs of enterprises, startups, and ISVs with a strong emphasis on business intelligence. Their unified delivery organization delivers services such as software development, integration, support & maintenance, managed services, and IT and digital transformation consulting. With development offices in multiple countries, including Poland, Ukraine, Hungary, Bulgaria, Czech Republic, Portugal, Canada, Brazil, and Colombia, the company ensures a stable, predictable, and value-driven delivery of business intelligence solutions.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://career.sigma.software/what-we-offer/vacancies/",
	},
];

const BusinessIntelligenceEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">Business Intelligence Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
								Elevating businesses towards a sustainable and prosperous future through insightful data-driven decisions powered by business intelligence. These are the Canadian based employers that are providing jobs in Business Intelligence industry:
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

export default BusinessIntelligenceEmployers;