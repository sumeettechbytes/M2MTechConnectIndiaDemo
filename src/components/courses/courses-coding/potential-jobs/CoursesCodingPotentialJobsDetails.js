import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../../../../common/Layout';
import BreadcrumbOne from '../../../../common/breadcrumb/BreadcrumbOne';
import SEO from '../../../../common/SEO';

const PostData = [
    {
        "id": 1,
        "slug": "software-developer",
        "title": "Software Developer",
        "image": "software-developer.webp",
        "tags": ["Software Developer"],
        "projectedJobs": '51,920.00',
        "medianSalary": "129,734.00",
        "educationNeeded": "Bachelor's",
        "description": "As a Python Software Developer, you'll design, build, and maintain software applications using Python. You'll collaborate with cross-functional teams to develop innovative solutions that drive business growth.",
        "about": [
            "A software developer is a highly skilled and specialized professional responsible for creating, designing, testing, and maintaining software applications, systems, and programs. They are at the forefront of modern technology, utilizing their expertise in various programming languages, frameworks, and tools to turn ideas into functional and efficient software solutions. Software developers can work across a wide range of industries, from finance and healthcare to entertainment and e-commerce, making their role crucial in the advancement of technology in today's world.",
            "The development process begins with understanding user requirements and the problem to be solved. Software developers work closely with stakeholders, such as clients or project managers, to gather and analyze these requirements. They then translate these needs into a detailed technical design, outlining the structure and functionality of the software. This planning stage is essential to ensure the software aligns with the end-users' expectations and business goals.",
            "Once the design is complete, developers begin writing the code, implementing algorithms, and integrating different software components. Attention to detail is crucial at this stage, as even minor errors can lead to significant issues later on. Throughout the coding process, developers use best practices, adhere to coding standards, and ensure that the software is scalable, maintainable, and robust.",
            "After writing the code, software developers perform rigorous testing to identify and rectify any bugs or vulnerabilities. They use various testing techniques, such as unit testing, integration testing, and user acceptance testing, to verify the software's functionality and performance under different scenarios.",
            "Software development is not just a one-time task; it involves continuous improvement and maintenance. As technology evolves and user requirements change, developers must update, enhance, and optimize the software to keep it relevant and efficient. This maintenance phase ensures that the software remains secure, reliable, and compatible with the latest technologies and operating systems.",
        ],
        "mostImportantThings": [
            "Programming Proficiency: Software developers must possess strong programming skills and be proficient in various programming languages, frameworks, and technologies. They should have a deep understanding of algorithms, data structures, and software design principles. Proficiency in languages such as Python, Java, C++, or JavaScript allows developers to write efficient and maintainable code for a wide range of applications.",
            "Problem-Solving Skills: Software development involves tackling complex problems and finding innovative solutions. A successful software developer needs to be a skilled problem solver, capable of breaking down large challenges into smaller, manageable tasks. They should have a logical and systematic approach to problem-solving and be persistent in finding solutions. Effective debugging and troubleshooting skills are also essential for identifying and resolving issues in the code.",
            "Continuous Learning and Adaptability: The field of software development is constantly evolving, with new technologies and best practices emerging regularly. Being a successful software developer requires a commitment to continuous learning and staying up-to-date with the latest advancements. They should be adaptable and open to learning new programming languages, tools, and methodologies. Embracing change and being able to quickly adapt to different project requirements are crucial traits for a software developer to thrive in a dynamic and fast-paced industry.",
        ],
        "jobDuties": [
            "Design, write, read, test, and correct code for new software",
            "Analyze information to recommend and plan the installation of new systems or modifications of an existing system",
            "Evaluate simple interrelationships between programs such as whether a contemplated change in one part of a program would cause unwanted results in a related part",
            "Program animation software to predefined specifications for interactive video games, Internet and mobile applications",
            "Write, modify, integrate and test software code for e-commerce, Internet and mobile applications",
            "Develop, implement, modify and maintain gameplay features that integrate effectively into existing software",
            "Write documentation for new and updated software",
        ],
        "requirements": [
            "A bachelor's degree in computer science or software engineering or in another discipline with a significant programming component or completion of a college program in computer science or related field is usually required.",
            "Progression to software engineer is possible with experience.",
        ],
        "link": "/courses/coding/potential-jobs/software-developer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22548/ca",
    },
    {
        "id": 2,
        "slug": "web-developer",
        "title": "Web Developer",
        "image": "web-developer.webp",
        "tags": ["Web Developer"],
        "projectedJobs": '31,500.00',
        "medianSalary": "87,500.00",
        "educationNeeded": "Bachelor's",
        "description": "Web Developers proficient in Python use frameworks like Django and Flask to create robust and dynamic web applications. Your skills will be in demand as businesses increasingly shift to online platforms.",
        "about": [
            "A Python web developer is a professional who specializes in using the Python programming language to develop web applications and websites. Python is a versatile and powerful language with a strong ecosystem of libraries and frameworks, making it a popular choice for web development. Python web developers combine their programming skills with an understanding of web technologies to create dynamic, responsive, and efficient web solutions.",
            "One of the primary responsibilities of a Python web developer is to use Python to build the back-end logic of web applications. They work with web frameworks like Django, Flask, or FastAPI to streamline the development process and handle common web development tasks, such as URL routing, request handling, and database management. These frameworks provide essential features and abstractions, allowing developers to focus on creating application-specific functionalities.",
            "Python web developers also work with front-end technologies, including HTML, CSS, and JavaScript, to create the user interface and enhance the user experience. They collaborate with web designers and front-end developers to ensure a seamless integration of the back-end functionality with the user interface.",
            "Database management is a critical aspect of web development, and Python web developers are well-versed in working with databases. They use SQL-based databases like MySQL, PostgreSQL, or SQLite, as well as NoSQL databases like MongoDB, to store and retrieve data for web applications. By efficiently managing data, Python web developers enable applications to deliver content and respond to user interactions effectively.",
            "Moreover, Python web developers often integrate web applications with external services and APIs (Application Programming Interfaces). This allows them to leverage the functionality of other web services, such as payment gateways, social media platforms, or third-party data providers, to enhance their applications' capabilities and provide additional value to users.",
        ],
        "mostImportantThings": [
            "Proficiency in Python Programming: As a Python web developer, a deep understanding of Python programming language is crucial. Python is widely used for web development due to its simplicity, readability, and versatility. Developers should be proficient in core Python concepts, data structures, and libraries to build efficient and scalable web applications. Additionally, knowledge of frameworks like Django or Flask is essential for rapidly developing web projects and handling common web development tasks.",
            "Web Development Technologies: Python web developers should have a solid grasp of front-end web technologies such as HTML, CSS, and JavaScript. Understanding how to create responsive and visually appealing user interfaces is vital for providing a positive user experience. Moreover, knowledge of web development tools, version control systems, and deployment processes is necessary to manage and deliver web projects effectively.",
            "Database Management and API Integration: Web applications often require database management to store and retrieve data. Python web developers should be skilled in working with databases, both SQL-based (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB). Additionally, integrating web applications with external APIs (Application Programming Interfaces) allows developers to leverage external services and functionalities in their projects, enhancing the application's capabilities and user experience.",
        ],
        "jobDuties": [
            "Develop, write, modify, integrate and test Web site related code and Web application interfaces",
            "Conduct tests and analyze data to monitor quality, security, user interface experiences and to identify areas for improvement",
            "Develop and implement procedures for ongoing Web site revision",
            "Monitor and maintain Web site functionality",
            "May participate in Web site architecture and design in collaboration with designers or clients",
            "May research and evaluate a variety of interactive media software products",
        ],
        "requirements": [
            "A bachelor's degree, usually in computer science, computer programming, Web development or software engineering or completion of a college program in computer science or related field is usually required.",
            "Experience as a computer programmer is usually required.",
        ],
        "link": "/courses/coding/potential-jobs/web-developer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17892/ca",
    },
    {
        "id": 3,
        "slug": "data-analyst-scientist",
        "title": "Data Analyst/Scientist",
        "image": "data-scientist.webp",
        "tags": ["Data Analyst/Scientist"],
        "projectedJobs": '40,390.00',
        "medianSalary": "98,717.50",
        "educationNeeded": "Bachelor's",
        "description": "Python is a staple in the world of data analysis and data science. As a Data Analyst/Scientist, you'll use Python to process and analyze vast datasets, extract insights, and drive data-driven decision-making.",
        "about": [
            "A Python data analyst/scientist is a professional who utilizes the Python programming language to extract, analyze, and interpret data, providing valuable insights and driving data-informed decision-making. These professionals play a crucial role in various industries by analyzing large datasets, identifying trends, patterns, and correlations, and developing predictive models to solve complex problems and optimize business processes.",
            "One of the primary responsibilities of a Python data analyst/scientist is data wrangling and preparation. They work with diverse and often unstructured data, cleaning and transforming it into a usable format for analysis. Python's extensive libraries, such as Pandas and NumPy, are instrumental in managing and manipulating data efficiently, enabling analysts to process and organize data effectively.",
            "Python data analysts/scientists leverage a variety of data analysis and statistical libraries to gain insights from data. Tools like Matplotlib and Seaborn are used for data visualization, allowing analysts to create informative and visually appealing charts and graphs that highlight trends and patterns in the data. Additionally, Python's integration with machine learning libraries, such as Scikit-learn and TensorFlow, empowers data scientists to build and train predictive models for various applications, such as forecasting, recommendation systems, and anomaly detection.",
            "Furthermore, Python data analysts/scientists use their domain knowledge to formulate relevant research questions and hypotheses. They design and execute experiments, perform statistical analysis, and interpret results to draw meaningful conclusions from the data. Their ability to present complex technical findings in a clear and actionable manner is crucial for effectively communicating insights to non-technical stakeholders.",
            "Python data analysts/scientists often collaborate with cross-functional teams, including business analysts, engineers, and domain experts. By working closely with these teams, they understand the business context and domain-specific requirements, aligning data analysis with organizational goals and objectives.",
        ],
        "mostImportantThings": [
            "Proficiency in Python and Data Manipulation: Python data analysts/scientists must be highly proficient in Python programming and its data manipulation libraries, such as Pandas and NumPy. These libraries are essential for efficiently cleaning, transforming, and analyzing large datasets. Mastery of Python allows data analysts/scientists to perform complex data manipulations and calculations, making it easier to draw valuable insights from the data.",
            "Data Visualization and Communication: Data visualization is a critical aspect of data analysis and communication. Python data analysts/scientists should be skilled in using data visualization libraries like Matplotlib, Seaborn, and Plotly to create insightful charts, graphs, and visualizations that communicate complex data findings effectively. Strong data visualization skills help data analysts/scientists present their results in a clear and visually appealing manner, making it easier for stakeholders and non-technical audiences to understand the insights derived from the data.",
            "Statistical Analysis and Machine Learning: Data analysts/scientists use Python's vast array of statistical libraries, such as SciPy and StatsModels, to perform various statistical analyses and hypothesis testing. Understanding statistical concepts is crucial for drawing meaningful conclusions and making data-driven decisions. Additionally, knowledge of machine learning libraries like Scikit-learn and TensorFlow enables data scientists to build predictive models and implement machine learning algorithms to solve real-world problems and make data-driven predictions.",
        ],
        "jobDuties": [
            "Collect and document user requirements",
            "Design and develop database architecture for information systems projects",
            "Design, construct, modify, integrate, implement and test data models and database management systems",
            "Conduct research and provide advice to other informatics professionals regarding the selection, application and implementation of database management tools",
            "Operate database management systems to analyze data and perform data mining analysis",
            "May lead, coordinate or supervise other workers in this group",
            "Develop and implement data administration policy, standards and models",
            "Research and document data requirements, data collection and administration policy, data access rules and security",
            "Develop policies and procedures for network and/or Internet database access and usage and for the backup and recovery of data",
            "Conduct research and provide advice to other information systems professionals regarding the collection, availability, security and suitability of data",
            "Write scripts related to stored procedures and triggers",
            "May lead and coordinate teams of data administrators in the development and implementation of data policies, standards and models",
        ],
        "requirements": [
            "A bachelor's degree or college program, usually in computer science, computer engineering, or mathematics is usually required.",
            "Computer programming and related experience is usually required.",
        ],
        "link": "/courses/coding/potential-jobs/data-analyst-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17882/ca",
    },
    {
        "id": 4,
        "slug": "it-specialist",
        "title": "IT Specialist",
        "image": "it-specialist.webp",
        "tags": ["IT Specialist"],
        "projectedJobs": '43,750.00',
        "medianSalary": "107,695.00",
        "educationNeeded": "Bachelor's",
        "description": "IT Specialists with Python skills are valuable assets in managing and automating various IT processes. Your ability to write efficient Python scripts will enhance the productivity of IT operations.",
        "about": [
            "An IT specialist, also known as an information technology specialist, is a skilled professional who provides technical expertise and support to organizations in managing their IT infrastructure and systems. IT specialists play a critical role in ensuring the efficient operation, security, and optimization of an organization's technology assets, including hardware, software, networks, and databases.",
            "One of the primary responsibilities of an IT specialist is to troubleshoot and resolve technical issues that arise within the organization. They are adept at diagnosing problems, conducting root cause analysis, and implementing solutions to restore functionality and minimize downtime. Whether it's fixing hardware malfunctions, resolving software glitches, or addressing network connectivity problems, IT specialists are the go-to experts for resolving a wide range of technical challenges.",
            "IT specialists also play a key role in the setup and maintenance of an organization's IT infrastructure. They configure and install hardware and software, ensuring that systems are up-to-date and running smoothly. Additionally, they are responsible for managing data backups, ensuring data integrity, and implementing security measures to safeguard against cyber threats and data breaches.",
            "Moreover, IT specialists provide technical support and assistance to end-users and employees. They respond to IT-related queries, offer guidance on using software and applications, and help troubleshoot user-related issues. Good communication and customer service skills are essential for effectively engaging with users and providing clear and understandable instructions and solutions.",
            "Furthermore, IT specialists stay up-to-date with the latest trends and advancements in technology. They continuously learn and acquire new skills to keep pace with the rapidly evolving IT landscape. This knowledge allows them to recommend and implement innovative solutions, streamline processes, and enhance the organization's overall IT capabilities.",
        ],
        "mostImportantThings": [
            "Technical Expertise: IT specialists must have a strong foundation in technical knowledge and skills related to information technology. This includes proficiency in operating systems, networking, hardware, software, databases, and cybersecurity. They should be up-to-date with the latest industry trends and advancements to effectively troubleshoot issues, implement solutions, and optimize IT systems.",
            "Problem-Solving and Analytical Skills: IT specialists are often responsible for identifying and resolving technical problems that arise within an organization. Strong problem-solving and analytical skills are essential for diagnosing issues, conducting root cause analysis, and devising effective solutions. They must be able to think critically and quickly respond to various IT-related challenges to ensure the smooth operation of systems and services.",
            "Communication and Customer Service: Effective communication is vital for IT specialists, as they often interact with both technical and non-technical individuals. They must be able to explain complex technical concepts in a clear and understandable manner to end-users and clients. Additionally, good customer service skills are crucial when providing support and assistance to users, ensuring that their IT needs are met promptly and efficiently.",
        ],
        "jobDuties": [
            "Design, develop, test, implement and oversee IT systems",
            "Collect and analyze data to identify areas for improvement within an organization's IT infrastructure",
            "Review existing IT systems and internal processes",
            "Develop, implement and apply policies and procedures throughout the software development life cycle to maximize the efficiency, effectiveness and overall quality of software products and information systems, and to ensure that all systems and processes meet organization standards and user requirements",
            "Develop quality assurance procedures and tests for the development and improvement of new and existing systems",
            "Identify, analyze and document discrepancies and ensure that appropriate adjustments are made",
            "Perform preventive maintenance tasks on computer systems",
        ],
        "requirements": [
            "A bachelor's degree in computer science, computer systems engineering, software engineering, business administration or a related discipline or completion of a college program in computer science is usually required.",
            "Experience as a computer programmer is usually required.",
            "A professional certification such as Certified Information Systems Auditor (CISA), Certified Internal Auditor (CIA) or another related information technology (IT) designation may be required by some employers.",
        ],
        "link": "/courses/coding/potential-jobs/it-specialist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/296631/ca",
    },
    {
        "id": 5,
        "slug": "business-analyst",
        "title": "Business Analyst",
        "image": "it-specialist.webp",
        "tags": ["Business Analyst"],
        "projectedJobs": '43,750.00',
        "medianSalary": "107,695.00",
        "educationNeeded": "Bachelor's",
        "description": "Python skills are sought after in the realm of Business Analysis. Your coding expertise will aid in data analysis, modeling, and scenario planning to support business strategies.",
        "about": [
            "A Python Business Analyst is a professional who combines business acumen with technical skills in Python programming to analyze and interpret data, providing valuable insights to support business decision-making. This role bridges the gap between business objectives and data-driven solutions, utilizing Python's capabilities to extract, manipulate, and visualize data for various business purposes.",
            "One of the primary responsibilities of a Python Business Analyst is to gather and analyze data from different sources, such as databases, spreadsheets, or APIs. They use Python's data manipulation libraries, like Pandas, to clean and transform the data into a usable format for analysis. By harnessing Python's capabilities, they can efficiently process large datasets and prepare them for further examination.",
            "Python Business Analysts employ data visualization libraries, such as Matplotlib and Seaborn, to create insightful charts and graphs that present complex data findings in a clear and visual manner. Effective data visualization is crucial for communicating results and recommendations to stakeholders and decision-makers, making it easier for non-technical audiences to understand the implications of the data analysis.",
            "Moreover, Python Business Analysts utilize statistical analysis libraries like NumPy and SciPy to derive meaningful insights from data. They conduct hypothesis testing, regression analysis, and other statistical techniques to uncover patterns, trends, and correlations that can guide business strategies and improve performance.",
            "Python's integration with machine learning libraries, such as Scikit-learn and TensorFlow, empowers Python Business Analysts to develop predictive models that forecast trends, predict customer behavior, or optimize business processes. Machine learning algorithms play a significant role in extracting valuable patterns and making data-driven predictions that support strategic decision-making.",
            "In addition to technical skills, Python Business Analysts need strong communication and collaboration abilities. They work closely with business stakeholders, understanding their needs and objectives, and translate them into data-driven solutions. The ability to present findings and insights to non-technical audiences in a business context is crucial for gaining buy-in and driving organizational change.",
        ],
        "mostImportantThings": [
            "Python Programming Skills: As a Python Business Analyst, proficiency in the Python programming language is essential. Python is a versatile and powerful language for data analysis, manipulation, and visualization. Being well-versed in Python allows the analyst to efficiently extract, clean, and process data from various sources, enabling them to perform in-depth data analysis and derive valuable insights.",
            "Data Analysis and Visualization: Data analysis is at the core of a Python Business Analyst's role. They must have strong analytical skills and the ability to interpret and draw meaningful conclusions from data. Python Business Analysts leverage data manipulation libraries like Pandas and data visualization libraries like Matplotlib and Seaborn to present complex data findings in clear and insightful visualizations. Effective data visualization is crucial for conveying findings to stakeholders and facilitating data-driven decision-making.",
            "Business Acumen and Communication: Python Business Analysts act as a bridge between technical insights and business objectives. They need a solid understanding of business processes, goals, and requirements to align data analysis with organizational needs. Strong communication and presentation skills are vital for conveying complex technical concepts to non-technical stakeholders in a business context. Being able to translate data insights into actionable recommendations helps drive strategic decisions and improvements across the organization.",
        ],
        "jobDuties": [
            "Confer with clients to identify and document requirements",
            "Analyze information systems processes, and propose customized solutions to improve performance and efficiency",
            "Design, develop, integrate, test and implement information systems business solutions",
            "Provide advice on information systems strategy, policy, management, security and service delivery",
            "Act as a liaison between the business units, technology teams and support teams",
            "Conduct tests to ensure the reliability, accuracy, and functionality of system changes and enhancements",
        ],
        "requirements": [
            "A bachelor's degree in computer science, business administration, information systems or a related discipline or completion of a college program in computer science is usually required.",
            "Certification or training provided by software vendors may be required by some employers.",
        ],
        "link": "/courses/coding/potential-jobs/business-analyst",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22507/ca",
    },
    {
        "id": 6,
        "slug": "research-assistant",
        "title": "Research Assistant",
        "image": "research-assistant.webp",
        "tags": ["Research Assistant"],
        "projectedJobs": '22,750.00',
        "medianSalary": "79,082.50",
        "educationNeeded": "Uni Student",
        "description": "Python programming is widely used in research and academia. As a Research Assistant, you can support research projects, analyze data, and develop computational models.",
        "about": [
            "A Python research assistant is a skilled professional who supports research projects across various disciplines using the Python programming language. Python is a popular choice for research tasks due to its versatility, extensive libraries, and ease of use. Research assistants proficient in Python utilize their technical expertise to aid researchers in data analysis, modeling, simulations, and other computational tasks that are crucial to the research process.",
            "One of the primary responsibilities of a Python research assistant is data manipulation and analysis. They work with large datasets, using Python's data manipulation libraries like Pandas and NumPy to clean, preprocess, and organize data for analysis. Python research assistants are skilled in statistical analysis, hypothesis testing, and data visualization with libraries like Matplotlib and Seaborn, allowing them to derive valuable insights and patterns from the research data.",
            "Python research assistants often collaborate closely with researchers, data scientists, or domain experts in academia, industry, or research institutions. They contribute to the design of research experiments, aid in data collection and preparation, and provide technical support in developing and implementing computational models and simulations.",
            "Moreover, Python research assistants play a significant role in automating repetitive research tasks and developing custom tools to streamline the research workflow. They may build Python scripts or applications to process data, run simulations, or perform specific analyses, saving valuable time and resources for researchers.",
            "Python's integration with machine learning and artificial intelligence libraries also allows research assistants to apply predictive modeling and data-driven approaches to research problems. By using libraries like Scikit-learn or TensorFlow, Python research assistants can implement machine learning algorithms to make predictions, classify data, or uncover patterns in complex datasets.",
        ],
        "mostImportantThings": [
            "Python Programming Skills: As a Python research assistant, strong proficiency in the Python programming language is fundamental. Python is widely used in research and data analysis due to its ease of use, extensive libraries, and robust data processing capabilities. Being skilled in Python allows the research assistant to efficiently process and analyze data, implement algorithms, and develop custom tools for research tasks.",
            "Data Manipulation and Analysis: Python research assistants must have a solid understanding of data manipulation and analysis techniques. They use Python's data manipulation libraries, such as Pandas, NumPy, and SciPy, to clean, transform, and analyze data. Proficiency in statistical analysis, hypothesis testing, and visualization with libraries like Matplotlib and Seaborn enables them to derive meaningful insights from research data.",
            "Research Methodology and Collaboration: Strong research skills and understanding of research methodologies are essential for a Python research assistant. They should be able to contribute to the design of research experiments, data collection procedures, and data interpretation. Additionally, collaboration and communication skills are crucial, as research assistants often work with researchers, data scientists, or domain experts. The ability to effectively communicate research findings and insights is vital for contributing to research publications and reports.",
        ],
        "jobDuties": [
            "Organize reference materials, visual aids and other materials as required by university professors or college teachers for lectures",
            "Conduct seminars, discussion groups and laboratory sessions to supplement lectures",
            "Assist in the preparation and administration of examinations",
            "Grade examinations, term papers and laboratory reports",
            "Conduct literature reviews, surveys, laboratory experiments and other research for use in scholarly publications",
            "Compile research results and assist professors in the analysis of results and the preparation of journal articles or papers",
        ],
        "requirements": [
            "Enrolment in, or completion of, a university or college program is required.",
        ],
        "link": "/courses/coding/potential-jobs/research-assistant",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/22846/ca",
    },
 ]

const CoursesCodingPotentialJobsDetails = () => {
    const { id } = useParams();
    const blogId = PostData.filter(blog => blog.slug === id)[0].id;
    const dataItem = PostData.filter(blog => blog.id === blogId);
    const data = dataItem[0];
    return (
        <>
            <SEO title={ data.title } />
            <Layout>
                <BreadcrumbOne 
                    title={ data.title }
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl={ data.title }
                />
                <div className="edu-blog-details-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="blog-details-1 style-variation3">

                                    <div className="content-blog-top">
                                        <div className="thumbnail block-alignwide">
                                            <img className="radius-small w-100 mb--30" src={`${process.env.PUBLIC_URL}/images/coding/potential-jobs-details/${data.image}`} alt="Blog Thumb" />
                                        </div>
                                    </div>

                                    <div className="blog-main-content">
                                        <h4 className="title">What is { data.title }?</h4>
                                        {
                                            data.about.map((el, key) => 
                                                <p key={key}>{ el }</p>
                                            )
                                        }
                                        <blockquote className="blockquote-style-1">“ {data.description}”
                                            <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
                                        </blockquote>

                                        <div className="row">
                                            <h5 className="col-12 title">The most important things to consider</h5>
                                            <div className="col-8">
                                                {
                                                    data.mostImportantThings.map((el, key) =>
                                                        <p key={key}>{ el }</p>
                                                    )
                                                }
                                            </div>
                                            <div className="col-1"></div>
                                            <ul className="col-3 list-style-2 pl-4 ml-4 align-self-center">
                                                <li className="mt-0">Salary Low: <strong>${data.projectedJobs}</strong></li>
                                                <li>Salary High: <strong>${data.medianSalary}</strong></li>
                                                <li>Education Needed: <strong>{data.educationNeeded}</strong></li>
                                            </ul>
                                        </div>
                                        <ul className="gallery gallery-column-2 mt--20 d-none d-md-flex">
                                            <li><img className="w-100" src="/images/courses/undraw_confirmation_re_b6q5.svg" alt="Gallery Images" /></li>
                                            <li><img className="w-100" src="/images/courses/undraw_playlist_re_1oed.svg" alt="Gallery Images" /></li>
                                        </ul>
                                        <img className="w-100 d-block d-md-none mb--20" src="/images/courses/undraw_confirmation_re_b6q5.svg" alt="Gallery Images" />
                                        <h4 className="title">Job Duties</h4>
                                        <ul>
                                            {
                                                data.jobDuties.map((el, key) => 
                                                    <li key={key}>{ el }</li>
                                                )
                                            }
                                        </ul>
                                        <h4 className="title">Employment Requirements</h4>
                                        <ul>
                                            {
                                                data.requirements.map((el, key) => 
                                                    <li key={key}>{ el }</li>
                                                )
                                            }
                                        </ul>

                                    </div>

                                    <div className="blog-tag-and-share mt--50">
                                        { data.tags && data.tags.length > 0 &&
                                            <div className="blog-tag">
                                                <div className="tag-list bg-shade">
                                                    {
                                                        data.tags.map( ( tag, i ) => {
                                                            return (
                                                                <Link key={ i } to={data.link}>
                                                                    { tag }
                                                                </Link>
                                                            )
                                                        } )
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-start mt-4">
                                        <a className="edu-btn btn-bg-alt mt-3" href={ data.externalLink }>Current Jobs<i className="icon-arrow-right-line-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CoursesCodingPotentialJobsDetails;