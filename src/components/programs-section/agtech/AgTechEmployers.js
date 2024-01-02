import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'Vive Crop',
		"website": 'https://www.vivecrop.com/',
		"description": "Vive Crop is an Ag Tech firm employing precision chemistry to support growers in achieving tangible results. Focused on improving grower ROI, efficiency, and sustainability, the company creates products that enable farmers to achieve more with fewer resources, enhancing crop quality and yields while lessening environmental impact. With a skilled and flexible management team, Vive Crop is committed to exploring new possibilities for customers and driving advancements in agricultural practices within the Ag Tech sector.",
		"link": "/work-integrated-learning/vive-corp",
		"externalLink": "https://www.vivecrop.com/career",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Semios',
		"website": 'https://semios.com/',
		"description": "Semios is a Ag Tech firm committed to sustainable and enhanced food production. Its precision farming platform is tailored to provide crop management tools for intricate specialty crops like almonds, pistachios, apples, citrus, and grapes Leveraging an in-orchard IoT wireless network, combined with machine learning and extensive data analytics, Semios is resolute in exploring innovative solutions for growers and advancing practices in precision agriculture.",
		"link": "/work-integrated-learning/semios",
		"externalLink": "https://apply.workable.com/semios/",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Milk Moovement',
		"website": 'https://www.milkmoovement.com/',
		"description": "Milk Moovement is a Ag Tech firm whose vision is to create a data-driven food supply and leverage innovative technologies to transform the landscape of the dairy industry. Committed to excellence and efficiency, Milk Moovement is dedicated to optimizing the dairy supply chain, fostering sustainability, and ensuring the seamless flow of nourishment from farm to table. Through innovation and a steadfast commitment to excellence, Milk Moovement is transforming the dairy supply chain for the betterment of both consumers and producers alike.",
		"link": "/work-integrated-learning/milk-moovement",
		"externalLink": "https://jobs.lever.co/milk-moovement",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Ukko Agro',
		"website": 'https://ukko.ag/',
		"description": "Ukko Agro is a leading-edge ag-tech enterprise, dedicated to bringing adaptive, integrated and actionable insights from digitized acres to ag retailers and their grower customers across North America. Ukko Agro's localized weather and forecasting technology is helping farmers mitigate risk and get the highest possible returns from their high-value input investments. Their commitment is to drive positive change by delivering actionable insights that contribute to the success and prosperity of farmers.",
		"link": "/work-integrated-learning/ukko-agro",
		"externalLink": "https://ukko.ag/ukko-company/#careers",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'Future Fields',
		"website": 'https://futurefields.io/',
		"description": "Future Fields is a Ag Tech firm centered around elevating recombinant protein production to new heights of sustainability. Their vision is to set a new benchmark in biotechnology by actively contributing to the reduction of our collective environmental footprint. With a focus on recombinant protein production, they deeply understand the pivotal role it plays in various industries, from food to medicine.",
		"link": "/work-integrated-learning/futurefields",
		"externalLink": "https://futurefields.applytojobs.ca/",
	},
];

const AgTechEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">AgTech Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
							 Cultivating a sustainable future with cutting-edge agricultural technology, revolutionizing farming practices for enhanced efficiency and global food security. These are the Canadian based employers that are providing jobs in AgTech industry:
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

export default AgTechEmployers;