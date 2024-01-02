import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../../../../common/Layout';
import BreadcrumbOne from '../../../../common/breadcrumb/BreadcrumbOne';
import SEO from '../../../../common/SEO';

const PostData = [
    {
        "id": 1,
        "slug": "ai-programmer",
        "title": "Artificial Intelligence Programmer",
        "image": "ai-programmer.webp",
        "tags": ["Artificial Intelligence Programmer"],
        "projectedJobs": '51,920.00',
        "medianSalary": "129,734.00",
        "educationNeeded": "Bachelor's",
        "description": "An AI programmer is a specialized software developer who designs, develops, and implements algorithms and models for artificial intelligence systems, enabling machines to exhibit intelligent behaviors and perform tasks that typically require human intelligence.",
        "about": [
            "An AI (Artificial Intelligence) programmer is a specialized software developer who focuses on creating and implementing algorithms and models that enable machines to exhibit intelligent behaviors and perform tasks typically requiring human intelligence. AI programming is at the forefront of technological advancements, revolutionizing various industries, from healthcare and finance to gaming and autonomous vehicles.",
            "AI programmers utilize their expertise in programming languages, such as Python, Java, or C++, to develop AI systems that can learn from data, reason, make decisions, and adapt to changing environments. They work with machine learning algorithms, natural language processing, computer vision, and other AI techniques to create intelligent software and applications.",
            "One of the primary tasks of an AI programmer is to design and train machine learning models. They collect and preprocess data, select appropriate algorithms, and fine-tune the models to achieve the desired performance. These models are then deployed in real-world applications to recognize patterns, predict outcomes, or optimize processes based on the data they've been trained on.",
            "AI programmers must have a solid understanding of mathematics and statistics, as these disciplines underpin many AI algorithms. They employ mathematical concepts such as linear algebra, calculus, and probability to build and optimize AI models effectively. Additionally, AI programmers need to possess strong problem-solving skills to identify AI-related challenges and find efficient solutions.",
            "Ethics and accountability are critical considerations for AI programmers. They must ensure that the AI systems they create align with ethical guidelines and legal regulations. This involves addressing issues of bias, privacy, and fairness in AI decision-making to avoid unintended consequences that may negatively impact users or society at large.",
            "Continuous learning is essential for AI programmers, as the field of AI is rapidly evolving. Staying up-to-date with the latest AI research, trends, and emerging technologies allows them to leverage cutting-edge tools and techniques in their work. Additionally, AI programmers often collaborate with researchers and domain experts to gain insights and domain knowledge, enabling them to build more effective and context-aware AI solutions.",
        ],
        "mostImportantThings": [
            "Strong Programming Skills: AI programmers need to have a solid foundation in programming languages, such as Python, Java, or C++, to implement AI algorithms and models. They must be proficient in data manipulation, handling complex data structures, and implementing AI-related libraries and frameworks. Strong coding skills enable AI programmers to efficiently develop, optimize, and maintain AI systems.",
            "Deep Understanding of AI Algorithms and Techniques: AI programmers must possess a deep understanding of various AI algorithms and techniques, such as machine learning, natural language processing, computer vision, and reinforcement learning. They should know how to select the right algorithms for specific tasks, tune hyperparameters, and interpret the results to ensure the AI models deliver accurate and meaningful outcomes. A comprehensive knowledge of mathematics and statistics is essential for developing and optimizing AI algorithms effectively.",
            "Problem-Solving and Creative Thinking: AI programmers encounter complex challenges while developing AI solutions. They must be strong problem solvers with the ability to think critically and creatively. AI programming often involves exploring new approaches, experimenting with different models, and iteratively improving the system's performance. The capacity to analyze AI-related issues, identify optimal solutions, and adapt to changing requirements is crucial for success in this field.",
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
        "link": "/courses/machine-learning/potential-jobs/ai-programmer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227159/ca",
    },
    {
        "id": 2,
        "slug": "ai-consultant",
        "title": "Artificial Intelligence Consultant",
        "image": "ai-programmer.webp",
        "tags": ["AI Consultant"],
        "projectedJobs": '55,000.00',
        "medianSalary": "135,388.00",
        "educationNeeded": "Bachelor's",
        "description": "As an AI Consultant, you'll work with businesses to assess their needs, identify AI opportunities, and implement machine learning solutions. Your expertise will drive organizations towards AI-driven innovation and growth.",
        "about": [
            "An AI consultant is a specialized professional who provides expert guidance and strategic advice to businesses and organizations seeking to harness the power of artificial intelligence and machine learning. As the field of AI continues to rapidly evolve, businesses are increasingly recognizing its potential to optimize processes, improve decision-making, and drive innovation. AI consultants serve as trusted advisors, helping clients navigate the complexities of AI implementation and tailoring solutions to meet their specific needs and objectives.",
            "The primary role of an AI consultant is to assess a client's business processes, challenges, and goals to identify areas where AI can provide the most significant impact. They work closely with clients to understand their data infrastructure, data availability, and data quality, which are crucial factors for successful AI projects. Armed with this information, AI consultants then design AI strategies and solutions that align with the client's business objectives.",
            "To be effective, AI consultants must possess a deep understanding of AI technologies, algorithms, and industry best practices. They keep abreast of the latest advancements and emerging trends in AI, enabling them to recommend cutting-edge solutions that leverage the full potential of AI technologies. Moreover, they should have expertise in selecting and implementing suitable AI frameworks and tools, ensuring that the chosen approach aligns with the client's technical capabilities and long-term vision.",
            "Communication skills are fundamental for AI consultants as they must convey complex technical concepts in a clear and concise manner to non-technical stakeholders. They facilitate knowledge transfer, educating clients about the benefits of AI, potential risks, and the importance of data ethics and privacy. Additionally, AI consultants collaborate with clients' teams to ensure seamless integration and adoption of AI solutions.",
            "Furthermore, AI consultants play a critical role in evaluating the success of AI projects. They measure key performance indicators (KPIs) and assess the impact of AI on business outcomes. Continuous monitoring and refinement of AI solutions are necessary to ensure that they remain relevant and effective as business requirements and data evolve.",
        ],
        "mostImportantThings": [
            "Domain Knowledge and Expertise: An AI consultant needs to have deep domain knowledge and expertise in artificial intelligence and machine learning. They should be well-versed in various AI algorithms, technologies, and frameworks. Additionally, they must understand the specific challenges and opportunities within the industries they serve. This domain knowledge enables them to provide tailored AI solutions that address the unique needs and requirements of their clients.",
            "Analytical and Problem-Solving Skills: AI consultants must possess strong analytical and problem-solving skills to assess clients' business processes, data, and objectives. They should be able to identify areas where AI can add value, such as improving efficiency, enhancing decision-making, or optimizing operations. Analyzing complex data sets and identifying patterns and trends are crucial for designing effective AI strategies that deliver measurable results.",
            "Communication and Collaboration: Effective communication is paramount for AI consultants as they interact with clients and stakeholders with varying levels of technical understanding. They need to articulate complex AI concepts in a clear and accessible manner, ensuring that clients grasp the benefits and implications of AI solutions. Collaboration is also essential, as AI consultants often work with interdisciplinary teams, including data scientists, developers, and business leaders. The ability to collaborate and bridge the gap between technical and non-technical stakeholders ensures the successful implementation and adoption of AI projects.",
        ],
        "jobDuties": [
            "Implement cutting-edge techniques and tools in machine learning, deep learning and artificial intelligence to make data analysis more efficient",
            "Perform large-scale experimentation to identify hidden relationships between variables in large datasets",
            "Create advanced machine learning algorithms such as regression, simulation, scenario analysis, modeling, clustering, decision trees and , neural networks",
            "Prepare and extract data using programming language",
            "Implement new statistical, machine learning, or other mathematical methodologies to solve specific business problems",
            "Visualize data in a way that allows a business to quickly draw conclusions and make decisions",
            "Develop artificial intelligence models and algorithms and implement them to meet the needs of the organization",
            "Coordinate research and analysis activities using unstructured and structured data and use programming to clean and organize data",
        ],
        "requirements": [
            "A bachelor's degree in statistics, mathematics, computer science, computer systems engineering or a related discipline or completion of a college program in computer science is usually required.",
            "A master's or doctoral degree in machine learning, data science, or a related quantitative field is usually required.",
            "Experience in programming is usually required.",
            "Experience in statistical modelling or machine learning is usually required.",
        ],
        "link": "/courses/machine-learning/potential-jobs/ai-consultant",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/24508/ca",
    },
    {
        "id": 3,
        "slug": "data-scientist",
        "title": "Data Scientist",
        "image": "data-scientist.webp",
        "tags": ["Data Scientist"],
        "projectedJobs": '50,776.00',
        "medianSalary": "124,102.00",
        "educationNeeded": "Bachelor's",
        "description": "Data Scientists use advanced analytics technologies, including machine learning and predictive modelling, to support the identification of trends, scrape information from unstructured data sources and provide automated recommendations. They are employed by consulting firms, universities, banks and information technology departments in the private and public sectors.",
        "about": [
            "A Data Scientist is a skilled professional who combines expertise in mathematics, statistics, programming, and domain knowledge to extract valuable insights and solve intricate problems using data. In today's data-driven world, organizations across industries rely on Data Scientists to make informed decisions, drive innovation, and gain a competitive edge.",
            "At the core of their role, Data Scientists are responsible for collecting, cleaning, and preprocessing data from various sources. This involves extracting relevant information, ensuring data quality, and preparing it for analysis. They employ exploratory Data Analysis techniques to uncover patterns, relationships, and anomalies within the data, gaining a deep understanding of its characteristics and limitations.",
            "Data Scientists employ a range of statistical methods, machine learning algorithms, and predictive modeling techniques to build robust models. By leveraging these models, they can make data-driven predictions, generate insights, and address complex business challenges. Feature engineering is a critical step in the model-building process, where Data Scientists identify and transform relevant variables that capture the essential aspects of the problem.",
            "Model evaluation is a crucial aspect of a Data Scientist's work. They assess the performance of models using appropriate metrics and validation techniques to ensure their accuracy, reliability, and generalizability. Effective communication skills play a vital role as Data Scientists need to present their findings and insights to both technical and non-technical stakeholders. They employ data visualization techniques to effectively communicate complex information, enabling stakeholders to grasp the key takeaways and make informed decisions.",
            "Data Scientists collaborate closely with cross-functional teams, including domain experts, software engineers, and business stakeholders. By working together, they ensure that the insights derived from Data Analysis align with business objectives and can be integrated into practical solutions. Furthermore, Data Scientists stay updated with the latest advancements in the field, continuously learning and honing their skills to stay at the forefront of data science innovation.",
        ],
        "mostImportantThings": [
            "Problem Understanding and Formulation: One of the most critical tasks of a Data Scientist is understanding the problem at hand and formulating it in a way that can be addressed using data and analytical methods. This involves actively engaging with stakeholders to gain a deep understanding of their needs, challenges, and goals. By clarifying the problem and defining the key objectives, you can ensure that your Data Analysis efforts are focused and aligned with the desired outcomes.",
            "Data Exploration and Preparation: Thoroughly exploring and preparing your data is crucial for accurate and reliable analyses. This includes assessing data quality, identifying and handling missing values or outliers, and performing appropriate data transformations and feature engineering. By investing time in data exploration and preprocessing, you can lay a strong foundation for subsequent modeling and analysis steps, minimizing potential biases and errors.",
            "Model Selection and Evaluation: Choosing the right modeling techniques and evaluating their performance effectively are essential components of data science. Consider various algorithms and approaches based on the problem requirements, data characteristics, and desired outcomes. Carefully evaluate and validate models using appropriate evaluation metrics, cross-validation, or holdout sets to ensure their effectiveness and generalizability. Regularly iterate and refine your models to improve their performance and address any limitations.",
        ],
        "jobDuties": [
            "Implement cutting-edge techniques and tools in machine learning, deep learning and artificial intelligence to make Data Analysis more efficient.",
            "Perform large-scale experimentation to identify hidden relationships between variables in large datasets",
            "Create advanced machine learning algorithms such as regression, simulation, scenario analysis, modeling, clustering, decision trees and , neural networks",
            "Prepare and extract data using programming language",
            "Implement new statistical, machine learning, or other mathematical methodologies to solve specific business problems",
            "Visualize data in a way that allows a business to quickly draw conclusions and make decisions",
            "Coordinate research and analysis activities using unstructured and structured data and use programming to clean and organize data",
        ],
        "requirements": [
            "A bachelor's degree in statistics, mathematics, computer science, computer systems engineering or a related discipline or completion of a college program in computer science is usually required.",
            "A master's or doctoral degree in machine learning, data science, or a related quantitative field is usually required.",
            "Experience in programming is usually required.",
            "Experience in statistical modelling or machine learning is usually required.",
        ],
        "link": "/courses/machine-learning/potential-jobs/data-scientist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/227147/ca",
    },
    {
        "id": 4,
        "slug": "data-engineer-ml-focus",
        "title": "Data Engineer (ML Focus)",
        "image": "data-engineer.webp",
        "tags": ["Data Engineer"],
        "projectedJobs": '64,988.00',
        "medianSalary": "158,664.00",
        "educationNeeded": "Bachelor's",
        "description": 'Data Engineers with machine learning knowledge play a crucial role in designing and optimizing data pipelines to support machine learning workflows. Your work ensures efficient data handling and model deployment.',
        "about": [
            "A data engineer is a specialized professional who designs, builds, and maintains the systems and infrastructure required for efficient and reliable data processing and analysis. Their primary focus is on the architecture and integration of data pipelines that enable organizations to collect, store, and process large volumes of data from various sources. Data engineers play a crucial role in creating a solid foundation for data-driven decision-making and advanced analytics.",
            "One of the core responsibilities of a data engineer is to design and implement data pipelines. They work with a wide range of data, including structured, semi-structured, and unstructured data, and transform it into a structured format suitable for storage and analysis. This involves the selection of appropriate data storage technologies, such as databases, data lakes, or data warehouses, and the creation of efficient data processing workflows.",
            "Data engineers are proficient in programming and scripting languages, such as Python, Java, or Scala, as well as big data processing frameworks like Apache Hadoop or Apache Spark. These skills enable them to develop scalable and distributed data processing systems that can handle vast amounts of data with speed and efficiency.",
            "Moreover, data engineers are responsible for data governance and security. They implement measures to ensure data quality, integrity, and compliance with data regulations. Data engineers work closely with data scientists and analysts to understand data requirements and optimize data pipelines to support advanced analytics and machine learning applications.",
            "Data engineering is a continuously evolving field, and data engineers must keep up with the latest technologies and best practices. They explore new tools and methodologies to improve data processing performance and explore opportunities to automate and streamline data workflows.",
        ],
        "mostImportantThings": [
            "Data Pipeline Design and Implementation: Data engineers are experts in designing and implementing data pipelines that facilitate the efficient and reliable flow of data within an organization. They work with various data sources and formats, transforming and processing the data to make it usable for analytics and other applications. Data pipeline design involves selecting appropriate data storage technologies and data processing frameworks to ensure scalability, high performance, and fault tolerance.",
            "Programming and Big Data Tools Proficiency: Data engineers are proficient in programming and scripting languages, such as Python, Java, or Scala, which are essential for developing data processing applications. They also have expertise in big data processing frameworks like Apache Hadoop and Apache Spark, allowing them to handle large-scale data processing and analysis. Their proficiency in these tools enables them to build robust and scalable data processing systems that can handle massive volumes of data efficiently.",
            "Data Governance and Security: Data engineers play a crucial role in ensuring data governance and security within an organization. They implement measures to maintain data quality, integrity, and consistency, and enforce data access controls to protect sensitive information. Data engineers work closely with data privacy and compliance teams to adhere to data regulations and best practices, ensuring that data is handled responsibly and in compliance with relevant laws.",
        ],
        "jobDuties": [
            "Implement cutting-edge techniques and tools in machine learning, deep learning and artificial intelligence to make Data Analysis more efficient.",
            "Perform large-scale experimentation to identify hidden relationships between variables in large datasets",
            "Create advanced machine learning algorithms such as regression, simulation, scenario analysis, modeling, clustering, decision trees and , neural networks",
            "Prepare and extract data using programming language",
            "Implement new statistical, machine learning, or other mathematical methodologies to solve specific business problems",
            "Visualize data in a way that allows a business to quickly draw conclusions and make decisions",
            "Develop artificial intelligence models and algorithms and implement them to meet the needs of the organization",
            "Coordinate research and analysis activities using unstructured and structured data and use programming to clean and organize data",
        ],
        "requirements": [
            "A bachelor's degree in statistics, mathematics, computer science, computer systems engineering or a related discipline or completion of a college program in computer science is usually required.",
            "A master's or doctoral degree in machine learning, data science, or a related quantitative field is usually required.",
            "Experience in programming is usually required.",
            "Experience in statistical modelling or machine learning is usually required.",
        ],
        "link": "/courses/machine-learning/potential-jobs/data-engineer-ml-focus",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/24510/ca",
    },
    {
        "id": 5,
        "slug": "machine-learning-engineer",
        "title": "Machine Learning Engineer",
        "image": "data-engineer.webp",
        "tags": ["Machine Learning Engineer"],
        "projectedJobs": '65,600.00',
        "medianSalary": "130,200.00",
        "educationNeeded": "Bachelor's",
        "description": "As a Machine Learning Engineer, you'll design and deploy machine learning models, algorithms, and systems to solve complex business problems. Your skills will find applications in diverse domains like finance, healthcare, e-commerce, and more.",
        "about": [
            "A machine learning engineer is a professional who specializes in designing, developing, and implementing machine learning models and systems. These engineers play a pivotal role in bridging the gap between data science and software engineering, focusing on building robust and scalable machine learning solutions that can analyze and interpret vast amounts of data to make predictions, classifications, or decisions.",
            "One of the primary responsibilities of a machine learning engineer is to work with data scientists and analysts to understand the problem at hand and select appropriate machine learning algorithms. They then gather and preprocess the relevant data, transforming it into a format suitable for training and testing machine learning models. Python, often coupled with libraries like NumPy, Pandas, and Scikit-learn, is a common choice for implementing these tasks due to its extensive data manipulation and machine learning capabilities.",
            "Machine learning engineers are also skilled in model selection, tuning, and optimization. They experiment with various algorithms, hyperparameters, and techniques to find the best-performing model for the specific problem. Additionally, they focus on ensuring that the chosen model is scalable and can handle large datasets efficiently.",
            "Furthermore, machine learning engineers are responsible for deploying and maintaining machine learning models in production environments. They work closely with DevOps teams to integrate models into applications, set up APIs, and ensure the models' continuous performance and accuracy. Cloud platforms like AWS, Azure, and GCP are often used to deploy and manage machine learning solutions at scale.",
            "Machine learning engineers also possess a strong understanding of software engineering principles. They write clean, maintainable, and efficient code to create robust machine learning pipelines and systems. Version control, code documentation, and collaboration with cross-functional teams are integral parts of their work to ensure seamless integration and collaboration throughout the development process.",
        ],
        "mostImportantThings": [
            "Proficiency in Machine Learning Algorithms and Techniques: Machine learning engineers must have a deep understanding of various machine learning algorithms, techniques, and methodologies. They should be well-versed in supervised and unsupervised learning, deep learning, reinforcement learning, and other specialized areas. A solid grasp of the underlying mathematical concepts and statistical principles is crucial for selecting the right algorithms and optimizing their performance.",
            "Software Engineering and Coding Skills: Strong software engineering skills are essential for machine learning engineers. They need to write efficient, scalable, and maintainable code to develop machine learning models, pipelines, and systems. Proficiency in programming languages like Python and knowledge of libraries like TensorFlow, PyTorch, or Scikit-learn enable them to implement complex machine learning solutions and integrate them into applications.",
            "Deployment and Productionization: Machine learning engineers are responsible for taking machine learning models from the research and development phase to production environments. This involves deploying models, setting up APIs, and ensuring their performance, scalability, and reliability in real-world applications. Knowledge of containerization tools like Docker and cloud platforms like AWS or Azure is essential for successful model deployment and management.",
        ],
        "jobDuties": [
            "Creating analytical models, such as customer segmentation, experience impact analysis, and test and control designs to evaluate business decisions and opportunities",
            "Developing data mining, machine learning, statistical and graph basing algorithms designed to analyze massive data sets for business insights",
            "Supporting the further development of advanced analytical methods by extracting and mining vast amounts of data from multiple sources to provide actionable insights for solving business problems",
            "Applying advanced statistical and computational methodologies to provide actionable insights and identifying strategic opportunities",
            "Data acquisition, feature engineering, training, validation, deployment",
            "Providing applied science technical advice and analytic support to the management of external pilot projects that develop new systems, algorithms, and technical approaches",
        ],
        "requirements": [
            "Bachelor's degree in computer science, computer engineering or related discipline or equivalent training and experience.",
        ],
        "link": "/courses/machine-learning/potential-jobs/machine-learning-engineer",
        "externalLink": "https://lmi.technationcanada.ca/en-ca/job-title-heatmap?categoryId=5a24fce23d3bd3547a2eda85&jobId=609f70e90d90ea5802d0aa32",
    },
]

const CoursesMachineLearningPotentialJobsDetails = () => {
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
                                            <img className="radius-small w-100 mb--30" src={`${process.env.PUBLIC_URL}/images/machine-learning/potential-jobs-details/${data.image}`} alt="Blog Thumb" />
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

export default CoursesMachineLearningPotentialJobsDetails;