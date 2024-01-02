import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'KOHO',
		"website": 'https://www.koho.ca/',
		"description": "KOHO is a financial services company aiming to build better financial products for Canadians. Partnering with companies like Mastercard, its product proposition centers around a virtual card and a bank account that provides users various perks when they use it. They also offer opportunities for customers to improve their credit score for a small monthly fee, something that is particularly useful for Canadians with a poor credit history.",
		"link": "/work-integrated-learning/koho",
		"externalLink": "https://www.koho.ca/careers/",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Flexiti',
		"website": 'https://www.flexiti.com/',
		"description": "Founded in 2013, Flexiti is a point-of-sale fintech leader on a mission to make high-ticket purchases more convenient. Its extensive network spans over 8,000 retail locations and ecommerce sites including notable brands like The Brick, Wayfair, Sleep Country, Staples, and Birks. The company's sales financing platform has been a pioneer in flexible financing, earning recognition as one of Canada's fastest-growing fintech firms.",
		"link": "/work-integrated-learning/flexiti",
		"externalLink": "https://flexiti.bamboohr.com/careers",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Clearco',
		"website": 'https://clear.co/',
		"description": "Clearco is a Toronto-based ecommerce investor that provides equity-free capital solutions for ecommerce businesses. Founders who receive funding from Clearco benefit from real-time access to a vast partner network, as well as valuable insights and data tools that facilitate business scaling. Clearco has provided significant support for female founders and women-led businesses, funding 25 times more than the average traditional venture capital firm.",
		"link": "/work-integrated-learning/clearco",
		"externalLink": "https://clear.co/careers/",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Nuvei',
		"website": 'https://nuvei.com/',
		"description": "Nuvei is a Canadian fintech payments company that offers the tools that so-called top-tier enterprises need to embrace cutting-edge payment solutions, comprehensive payout choices, and robust financial services such as card issuing, banking, risk management and fraud prevention. Nuvei serves over 200 markets worldwide including local acquiring in 45+ markets, supporting 150 currencies, and offering 580+ alternative payment methods.",
		"link": "/work-integrated-learning/nuvei",
		"externalLink": "https://nuvei.com/company/careers/",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'WealthSimple',
		"website": 'https://www.wealthsimple.com/en-ca',
		"description": "Wealthsimple is an online investment management firm led by a team of world-class financial experts which invests clients’ money in a “globally diversified” portfolio of low-cost index funds. The company draws on technology to ensure the best possible returns and all its investment tools are available at the click of a button, contributing towards the growing democratization of investment. Wealthsimple also offers retirement plans for businesses, making it easier for employers to provide retirement savings options for their employees.",
		"link": "/work-integrated-learning/wealthsimple",
		"externalLink": "https://jobs.lever.co/wealthsimple",
	},
];

const FinTechEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">FinTech Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
								Revolutionizing the financial landscape with fintech innovations, driving inclusivity, efficiency, and economic empowerment for a better and more equitable future. These are the Canadian based employers that are providing jobs in FinTech industry:
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

export default FinTechEmployers;