import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'Train Fitness',
		"website": 'https://trainfitness.ai/',
		"description": "Train Fitness specializes in cutting-edge fitness technology, offering an innovative product designed to elevate the workout experience. Their flagship product is an Automatic Exercise Detection & Rep Counting system, seamlessly integrated with Apple Watch. Harnessing the power of Artificial Intelligence (AI), their technology transforms the way customers engage with fitness, providing real-time feedback and precision to enhance their training sessions.",
		"link": "/work-integrated-learning/train-fitness",
		"externalLink": "https://wellfound.com/company/train-fitness/jobs",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Green Space Health',
		"website": 'https://greenspacehealth.com/en-ca/',
		"description": "Green Space health is transforming mental health systems by improving the way that care is accessed, measured and delivered.Our health platform enables mental health providers and organizations to implement consistent evidence-based measurement into their practice. Since launching in 2016, the platform has been deployed across thousands of mental health practices and organizations and expanding across Canada and the US.",
		"link": "/work-integrated-learning/green-space-health",
		"externalLink": "https://greenspacehealth.com/en-ca/company/careers/",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Circle Medical',
		"website": 'https://www.circlemedical.com/',
		"description": "Circle Medical is a pioneering healthcare technology firm with a compelling mission—to deliver high-quality, delightful primary care to every individual on the planet. Their innovative approach combines virtual and in-person primary care appointments, aiming to foster long-term health and happiness among customers. In our pursuit of a healthier world, Circle Medical strives to empower individuals with accessible and compassionate healthcare solutions that transcend boundaries.",
		"link": "/work-integrated-learning/circle-medical",
		"externalLink": "https://jobs.lever.co/circlemedical",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Orion Health',
		"website": 'https://orionhealth.com/ca/',
		"description": "At Orion Health, their vision is to reimagine the healthcare experience for all. They are dedicated to empowering individuals, extracting meaningful insights from data, and seamlessly unifying healthcare silos across the health ecosystem—both seamlessly and securely. Their mission is to enhance the efficiency of care delivery, ultimately advancing the overall well-being of everyone in the community. Orion Health’s solution captures vast amounts of health data available and provides the tool to support healthcare professionals and health insurers in making effective decisions.",
		"link": "/work-integrated-learning/orion-health",
		"externalLink": "https://orionhealth.com/ca/job-search/",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'Diaryz',
		"website": 'https://www.memoryz.co/',
		"description": "At Diaryz, their mission is to revolutionize caregiving by fostering a sense of community and breaking down caregiver stigma. They have created a vertical social network specifically tailored for unpaid caregivers, providing a dedicated space for support, understanding, and shared experiences. They also focus on building digital solutions for serving caregivers who are taking care of patients with dementia.",
		"link": "/work-integrated-learning/dairyz",
		"externalLink": "https://wellfound.com/company/memoryz/jobs",
	},
];

const HealthTechEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">HealthTech Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
								Transforming healthcare through innovative health tech solutions, fostering wellness, accessibility, and personalized care for a healthier and brighter future. These are the Canadian based employers that are providing jobs in HealthTech industry:
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

export default HealthTechEmployers;