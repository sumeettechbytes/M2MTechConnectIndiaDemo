import React from 'react';
import CoursesSectionTitle from './CoursesSectionTitle';

const CoursesDescription = () => {
    return (
        <>
            <div className="courses-description-content style-variation3 blog-main-content justify-content-center row g-5">
                <div className="col-lg-12 mt-0">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Overview"
                    />
                </div>
                
                <blockquote className="blockquote-style-1">“ Our upskilling programs focusses on gaining hands-on Emerging Tech skills in Data Science (Data Analysis, Data Visualization, Machine Learning, Deep Learning, Artificial Intelligence) which is sought after by Employers in Digital Technology sectors, CleanTech, Advanced Manufacturing, Business Intelligence, Finance and Healthcare sectors. ”
                    <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
                </blockquote>
            
                <div className="col-lg-12 mt-60">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Curriculum"
                    />
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-Board"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Programming Languages and Tools</em></h6>
                        <p className="feature-description">Participants will develop proficiency in programming languages commonly used in Data Science such as Python. They will also gain experience in utilizing popular Data Science libraries and frameworks including <strong>NumPy, Pandas, Bokeh, scikit-learn, TensorFlow and Keras</strong>.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-search-line"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Data Analysis and Manipulation</em></h6>
                        <p className="feature-description">Participants will gain proficiency in working with large datasets, cleaning and preprocessing data, handling missing values and transforming data into suitable formats for analysis.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-file-list-2-line"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Machine Learning Algorithms</em></h6>
                        <p className="feature-description">Participants will learn various Machine Learning algorithms, including both supervised and unsupervised techniques. They will understand the concepts behind algorithms such as linear regression, logistic regression, decision trees, random forests and clustering algorithms.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-Setting"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Deep Learning and Neural Networks</em></h6>
                        <p className="feature-description">Participants will delve into the field of deep learning, specifically focusing on neural networks. They will learn about different types of neural networks, such as feedforward neural networks, convolutional neural networks (CNNs) and recurrent neural networks (RNNs). Participants will also gain hands-on experience in building and training neural network models.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-Mind"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Predictive Modeling</em></h6>
                        <p className="feature-description">Participants will acquire skills in developing predictive models using statistical techniques and Machine Learning algorithms. They will learn about model evaluation, feature selection, model optimization and handling overfitting and underfitting issues.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-Class"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Data Visualization</em></h6>
                        <p className="feature-description">Participants will learn how to effectively visualize and communicate data insights using various data visualization libraries and tools. They will gain proficiency in creating visually appealing and informative charts, graphs and dashboards to convey data-driven narratives.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-presentation"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Experimental Design and Evaluation</em></h6>
                        <p className="feature-description">Participants will learn how to design experiments and perform rigorous evaluation of Data Science models. They will gain an understanding of cross-validation, model validation techniques and metrics for model evaluation.</p>
                    </div>
                </div>
                <div className="our-feature">
                    <div className="icon">
                        <i className="icon-file-list-3-line"></i>
                    </div>
                    <div className="feature-content">
                        <h6 className="feature-title"><em>Data Ethics and Privacy</em></h6>
                        <p className="feature-description">Participants will be educated on ethical considerations in Data Science, including privacy concerns, data security and responsible data handling practices. They will learn about regulations and best practices to ensure compliance and ethical decision-making in their work.</p>
                    </div>
                </div>
                
                <div className="row course-description-desktop-content">
                    <p className="col-12 order-1 mt--20">
                        These technical skills are aligned with based on our employer consultations and the current market demand in the Data Science field. By mastering these skills, participants will be well-equipped to tackle real-world data challenges and contribute effectively to the industry.
                    </p>
                    <ul className="col-12 gallery gallery-column-2 mt--20 order-2">
                        <li><img className="w-100" src="/images/courses/courses-gallery-01.webp" alt="boy studying on computer" /></li>
                        <li><img className="w-100" src="/images/courses/courses-gallery-03.webp" alt="girl studying on laptop" /></li>
                    </ul>
                </div>
                <div className="row course-description-mobile-content">
                    <p className="col-12 order-2 mt--20">
                        These technical skills are aligned with based on our employer consultations and the current market demand in the Data Science field. By mastering these skills, participants will be well-equipped to tackle real-world data challenges and contribute effectively to the industry.
                    </p>
                    <img className="col-12 order-3 w-100 mt--20" src="/images/courses/courses-gallery-01.webp" alt="boy studying on computer" />
                    <img className="col-12 order-1 w-100 mt--20" src="/images/courses/courses-gallery-03.webp" alt="girl studying on laptop" />
                </div>
            </div>
            <div className="courses-description-why-join-us-section row g-5 mt-80">
                <div className="col-lg-12">
                    <CoursesSectionTitle 
                        classes = "text-center"
                        title = "Why Join Us"
                    />
                </div>
                <p>
                    We are democratizing Data Science skills to be accessible to everyone. Whether you're a beginner or have some experience in the field, our program is designed to provide you with the necessary skills and knowledge to excel in the world of data science. The best part? There are no prerequisites required!
                </p>

                <div className="col-lg-6 col-12 d-flex align-items-center">
                    <img src="/images/courses/undraw_Online_learning_re_qw08.webp" alt="girl studying on laptop illustration"></img>
                </div>
                <div className="col-lg-6 col-12">
                    <h5>
                        Key Features:
                    </h5>
                    <ol>
                        <li>
                            <strong>No Coding Required</strong>: We understand that not everyone may have a strong coding background or an interest in coding. That's why we offer courses in No-code/Low code platform that allows you to perform Data Science tasks using a drag-and-drop interface. No coding experience necessary!
                        </li>
                        <li>
                            <strong>Hands-on Experience</strong>: Our bootcamp focuses on practical, hands-on learning. You'll have the opportunity to work on real-world datasets, solve complex problems and gain valuable experience in applying data science techniques.
                        </li>
                        <li>
                            <strong>No-code/Low code ML Courses</strong>: Our curriculum includes a range of No-code/Low code ML-based courses, specifically designed for those who prefer a code-free approach to data science. You'll learn how to manipulate datasets, perform data preprocessing, build machine learning models and deploy them using No-code/Low code ML's intuitive interface.
                        </li>
                        <li>
                            <strong>Comprehensive Learning Materials</strong>: We provide comprehensive learning materials, including video tutorials, step-by-step guides and interactive exercises. These resources are designed to support your learning journey and ensure you have a solid understanding of the concepts and techniques covered.
                        </li>
                        <li>
                            <strong>Expert Instructors</strong>: Our bootcamp is led by experienced data science professionals who are passionate about teaching and mentoring. There is Technical help and support throughout the course, answer your questions and provide valuable insights from their industry experience.
                        </li>
                    </ol>
                </div>
                <p className="pt-4">
                    Whether you're looking to upskill for your current job, explore a new career path, or simply expand your knowledge in Data Science, our bootcamp offers a welcoming and inclusive learning environment.
                </p>
                <p>
                    Don't let coding prerequisites hold you back from pursuing your passion for Data Science. Join our Data Science Program today and unlock the world of possibilities that Data Science has to offer!
                </p>
                <div className="footer-note mt-60">
                    <p>
                        <strong>Note:</strong> While our No-code/Low code ML-based courses cater to individuals who prefer a code-free approach, we also offer coding-focused courses for those interested in learning programming languages such as Python. We believe in providing diverse learning opportunities to suit different learning preferences and career goals.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CoursesDescription;