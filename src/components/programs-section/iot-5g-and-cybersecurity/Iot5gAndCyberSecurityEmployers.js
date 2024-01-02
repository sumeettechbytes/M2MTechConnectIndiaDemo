import React from 'react';
import { Element } from 'react-scroll';

const items = [
	{
		"id": 1,
		"image": "Terramera_Logo.png",
		"title": 'DNS Networks',
		"website": 'https://dnsnetworks.com/',
		"description": "DNSNetworks is an IT firm that prioritizes cybersecurity in its comprehensive range of digital transformation services. Dedicated to securing digital environments, the company focuses on delivering robust solutions to ensure the safety and integrity of business operations. As a trusted IT partner, DNSNetworks is committed to providing cybersecurity measures that safeguard against evolving threats, enhancing the overall security posture of organizations.",
		"link": "/work-integrated-learning/dns-networks",
		"externalLink": "https://dnsnetworks.com/careers",
	},
	{
		"id": 2,
		"image": "Terramera_Logo.png",
		"title": 'Guaraná Technologies',
		"website": 'https://guarana-technologies.com/',
		"description": "Founded in 2011, Guaraná Technologies stands out as a leading mobile app development agency in Canada, with offices in Montreal and Toronto. While the agency excels in crafting native iOS and Android applications, it has developed a strong focus on IoT (Internet of Things) technologies. Building over 40 apps annually, Guaraná Technologies' skilled team of engineers and app developers showcase expertise in emerging technologies such as IoT, Swift, Kotlin, React Native, Beacons, Apple Pay, Apple Watch and tablets, underscoring their commitment to innovation in the IoT space.",
		"link": "/work-integrated-learning/guarana-technologies",
		"externalLink": "https://guarana-technologies.com/careers",
	},
	{
		"id": 3,
		"image": "Terramera_Logo.png",
		"title": 'Vumetric Cybersecurity',
		"website": 'https://www.vumetric.com',
		"description": "Vumetric Cybersecurity specializes in cybersecurity services, providing penetration testing, IT security audits, and tailored solutions. With a focus on cybersecurity best practices, the company has a global reach, delivering services across five continents. Serving Fortune 1000 companies, SMEs, and government agencies, Vumetric places a strong emphasis on identifying and prioritizing vulnerabilities and risks of current times.",
		"link": "/work-integrated-learning/vumetric-cybersecurity",
		"externalLink": "https://www.vumetric.com/careers/",
	},
	{
		"id": 4,
		"image": "Terramera_Logo.png",
		"title": 'Macadamian',
		"website": 'https://www.emids.com/',
		"description": "Macadamian is a leading healthcare-based service company, specializing in IoT solutions and operating at the intersection of design, engineering, and domain expertise. With a passionate team of problem solvers, Macadamian collaborates closely with customers to innovate in ways that positively impact the future of health. The company moves nimbly, leveraging technology and insights to provide trusted advice and amplify results, with a steadfast focus on creating transformative outcomes for patients, providers, and partners.",
		"link": "/work-integrated-learning/macadamian",
		"externalLink": "https://www.emids.com/careers/",
	},
	{
		"id": 5,
		"image": "Terramera_Logo.png",
		"title": 'Trenser',
		"website": 'https://www.trenser.com/',
		"description": "Trenser, a global software services firm, is dedicated to meeting the software product development needs of technology companies globally. With a focus on innovation, Trenser excels in providing cutting-edge solutions with expertise in the Internet of Things (IoT) domain. The company's commitment to quality and client satisfaction makes it a reliable partner for technology firms seeking robust software solutions in our interconnected world.",
		"link": "/work-integrated-learning/terramera",
		"externalLink": "https://www.trenser.com/company/careers/",
	},
];

const Iot5gAndCyberSecurityEmployers = () => {
	return (
		<Element
			name="what-we-do-one"
			className="edu-about-area about-style-1 edu-section-gap bg-color-white"
		>
			<div className="container">
				<div className="col-lg-12 pre-section-title text-center">
					<span className="color-primary pretitle">Employer Profiles</span>
					<h3 className="title">IoT, 5G & CyberSecurity Employers</h3>
				</div>
				<div className="row g-5 align-items-center">
					<div className="col-lg-12">
						<div className="inner">
							<p className="employer-description">
								Empowering a secure and connected future through the seamless integration of IoT and 5G technologies, fortified by robust cybersecurity measures. These are the Canadian based employers that are providing jobs in IoT, 5G & CyberSecurity industry:
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

export default Iot5gAndCyberSecurityEmployers;