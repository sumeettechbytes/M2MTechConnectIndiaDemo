import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../../../../common/Layout';
import BreadcrumbOne from '../../../../common/breadcrumb/BreadcrumbOne';
import SEO from '../../../../common/SEO';

const PostData = [
    {
        "id": 1,
        "slug": "graphic-designer",
        "title": "Graphic Designer",
        "image": "graphic-designer.webp",
        "tags": ["Graphic Designer"],
        "projectedJobs": '32,025.00',
        "medianSalary": "75,722.50",
        "educationNeeded": "Bachelor's",
        "description": "Graphic Designers with expertise in various design tools and techniques find opportunities in branding, advertising, publishing, and digital media.",
        "about": [
            "A graphic designer is a skilled professional who uses visual elements, typography, and layout techniques to create visually appealing and impactful designs for a variety of media. These designers play a crucial role in conveying messages, concepts, and information through their creative work, which can be seen in logos, advertisements, websites, brochures, packaging, and other forms of visual communication.",
            "One of the primary responsibilities of a graphic designer is to understand the needs and objectives of their clients or employers. They collaborate with clients or project stakeholders to gather requirements, identify target audiences, and understand the message the design should convey. By grasping the project's essence, graphic designers can create designs that align with the brand's identity and effectively communicate the desired message.",
            "Graphic designers possess a keen eye for aesthetics and a strong sense of composition and color theory. They combine images, illustrations, icons, and typography in visually harmonious ways, ensuring that the design captures attention and communicates the intended message clearly. Their ability to balance visual elements and whitespace creates designs that are visually engaging and easy to navigate.",
            "Moreover, graphic designers work with various design software and tools to bring their ideas to life. They use industry-standard software like Adobe Illustrator, Photoshop, and InDesign, as well as other specialized tools for animation or 3D design. Their technical proficiency allows them to execute complex design concepts and deliver high-quality visuals for both print and digital media.",
            "Graphic designers also consider the practical aspects of their designs, such as printing processes and file formats. They ensure that their designs are suitable for various media and platforms and meet the technical requirements for production. Being familiar with printing techniques, color profiles, and file preparation allows graphic designers to deliver designs that are ready for implementation with minimal hassle.",
        ],
        "mostImportantThings": [
            "Creativity and Design Skills: Graphic designers must possess a high level of creativity and artistic skills. They use their creativity to conceptualize unique and visually appealing designs that effectively communicate ideas and messages. Proficiency in design principles, composition, color theory, typography, and layout allows graphic designers to craft visually harmonious and impactful designs across various media.",
            "Technical Proficiency in Design Software: Graphic designers work with various design software and tools to bring their ideas to life. They are proficient in industry-standard software such as Adobe Illustrator, Photoshop, and InDesign, as well as other specialized tools for animation, 3D design, or web design. Technical expertise enables graphic designers to execute complex design concepts efficiently and deliver high-quality visuals for print and digital media.",
            "Understanding of Client Needs and Communication: Graphic designers must be adept at understanding the needs and objectives of their clients or employers. They collaborate closely with clients to gather requirements, comprehend target audiences, and grasp the message the design should convey. Strong communication skills allow graphic designers to articulate design concepts and rationale effectively, ensuring that the final design aligns with the client's vision and objectives.",
        ],
        "jobDuties": [
            "Consult with clients to establish the overall look, graphic elements and content of communications materials in order to meet their needs",
            "Determine the medium best suited to produce the desired visual effect and the most appropriate vehicle for communication",
            "Develop the graphic elements that meet the clients' objectives",
            "Prepare sketches, layouts and graphic elements of the subjects to be rendered using traditional tools, multimedia software and image processing, layout and design software",
            "Estimate cost of materials and time to complete graphic design",
            "Use existing photo and illustration banks and typography guides or hire an illustrator or photographer to produce images that meet clients' communications needs",
            "Establish guidelines for illustrators or photographers",
            "Coordinate all aspects of production for print, audio-visual or electronic materials, such as Web sites, CDs and interactive terminals",
            "Coordinate sub-contracting",
            "Work in a multidisciplinary environment",
            "Supervise other graphic designers or graphic arts technicians",
            "Consult with clients to determine the nature and content of illustrations in order to meet their communications needs",
            "Develop and produce realistic or representational sketches and final illustrations, by hand or using computer-assisted design (CAD) software, for printed materials such as books, magazines, packaging, greeting cards and stationery",
            "Assist in developing storyboards for electronic productions such as multimedia, interactive and digital products and television advertising and productions",
            "Produce 2-D and 3-D animated drawings or computer illustrations",
            "May adapt existing illustrations",
        ],
        "requirements": [
            "A university degree in visual arts with specialization in graphic design, commercial art, graphic communications or cartooning or completion of a college diploma program in graphic arts is required.",
            "Experience or training in multimedia design at a post-secondary, college or technical institution may be required.",
            "In addition to the arts, training in biology, engineering, architecture or a scientific field is usually required for medical, technical and scientific illustrators.",
            "Creative ability and artistic talent, as demonstrated by a portfolio of work, are required for graphic designers and illustrators.",
        ],
        "link": "/courses/design/potential-jobs/graphic-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/5703/ca",
    },
    {
        "id": 2,
        "slug": "animation-artist",
        "title": "Animation Artist",
        "image": "animation-artist.webp",
        "tags": ["Animation Artist"],
        "projectedJobs": '40,260.00',
        "medianSalary": "95,194.00",
        "educationNeeded": "Diploma",
        "description": "Animation Artists create captivating animated content and explainer videos for marketing campaigns, entertainment, e-learning, and more, using tools like Animaker.",
        "about": [
            "An animation artist, often referred to as an animator, is a highly skilled professional who brings life and movement to characters, objects, and environments through various artistic techniques. These artists use their creativity, technical expertise, and storytelling abilities to create captivating and visually appealing animations in a wide range of media, including films, television shows, video games, advertisements, and more.",
            "One of the core responsibilities of an animation artist is character design and development. They start by creating concept art and sketches to visualize the appearance and personality of the characters. Once the design is approved, they proceed to bring these characters to life by creating sequences of movements known as keyframes. These keyframes serve as the foundation for animating characters in motion and conveying emotions and expressions effectively.",
            "Animation artists work with different animation techniques, including traditional 2D animation, 3D computer-generated imagery (CGI), and stop-motion animation. In 2D animation, artists create drawings frame by frame to produce fluid movements. In 3D animation, they use specialized software to model characters and objects in a digital environment, animating them through a combination of keyframes and physics simulations. Stop-motion animation involves manipulating physical models or objects incrementally and capturing each frame to create the illusion of movement.",
            "Moreover, animation artists often collaborate with other professionals, such as directors, writers, and sound designers, to ensure that their animations align with the overall vision of the project. They receive feedback and incorporate changes to refine their work, working within specific production timelines and adhering to project requirements.",
            "An animation artist's expertise is not limited to creating characters. They also animate objects, backgrounds, special effects, and dynamic camera movements to enhance storytelling and create a visually immersive experience for the audience. Whether it's bringing fantastical creatures to life, depicting realistic action sequences, or crafting emotionally resonant scenes, animation artists play a vital role in creating memorable and impactful animations.",
        ],
        "mostImportantThings": [
            "Creativity and Artistic Skills: Animation artists are highly creative individuals with strong artistic skills. They possess the ability to bring characters, objects, and environments to life through drawings, illustrations, or computer-generated imagery. Their artistic talent enables them to convey emotions, movements, and storytelling elements effectively, capturing the imagination of audiences and making their animations engaging and visually appealing.",
            "Technical Proficiency in Animation Software: Animation artists must be proficient in using animation software and tools. Whether it's 2D animation software like Adobe Animate or Toon Boom Harmony, or 3D animation software like Autodesk Maya or Blender, they need to have a strong command over these tools to create smooth animations and special effects. Technical proficiency allows them to execute complex animations and work efficiently within production timelines.",
            "Collaboration and Adaptability: Animation is often a collaborative process, especially in larger animation projects like movies or TV shows. Animation artists need to be able to work well within a team, taking direction from directors, producers, and art directors, and effectively incorporating feedback into their work. They also need to be adaptable, as animation styles and techniques may vary depending on the project's requirements. Being open to learning and trying new approaches is crucial for animation artists to continuously improve their craft.",
        ],
        "jobDuties": [
            "Consult with clients to establish the overall look, graphic elements and content of communications materials in order to meet their needs",
            "Determine the medium best suited to produce the desired visual effect and the most appropriate vehicle for communication",
            "Develop the graphic elements that meet the clients' objectives",
            "Prepare sketches, layouts and graphic elements of the subjects to be rendered using traditional tools, multimedia software and image processing, layout and design software",
            "Estimate cost of materials and time to complete graphic design",
            "Use existing photo and illustration banks and typography guides or hire an illustrator or photographer to produce images that meet clients' communications needs",
            "Establish guidelines for illustrators or photographers",
            "Coordinate all aspects of production for print, audio-visual or electronic materials, such as Web sites, CDs and interactive terminals",
            "Coordinate sub-contracting",
            "Work in a multidisciplinary environment",
            "Supervise other graphic designers or graphic arts technicians",
            "Consult with clients to determine the nature and content of illustrations in order to meet their communications needs",
            "Develop and produce realistic or representational sketches and final illustrations, by hand or using computer-assisted design (CAD) software, for printed materials such as books, magazines, packaging, greeting cards and stationery",
            "Assist in developing storyboards for electronic productions such as multimedia, interactive and digital products and television advertising and productions",
            "Produce 2-D and 3-D animated drawings or computer illustrations",
            "May adapt existing illustrations",
        ],
        "requirements": [
            "A university degree in visual arts with specialization in graphic design, commercial art, graphic communications or cartooning or completion of a college diploma program in graphic arts is required.",
            "Experience or training in multimedia design at a post-secondary, college or technical institution may be required.",
            "In addition to the arts, training in biology, engineering, architecture or a scientific field is usually required for medical, technical and scientific illustrators.",
            "Creative ability and artistic talent, as demonstrated by a portfolio of work, are required for graphic designers and illustrators.",
        ],
        "link": "/courses/design/potential-jobs/animation-artist",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/5682/ca",
    },
    {
        "id": 3,
        "slug": "web-designer",
        "title": "Web Designer",
        "image": "web-designer.webp",
        "tags": ["Web Designer"],
        "projectedJobs": '39,600.00',
        "medianSalary": "110,000.00",
        "educationNeeded": "Bachelor's",
        "description": "Web Designers proficient in website creation and UX/UI design are in high demand across businesses of all sizes and industries.",
        "about": [
            "A web designer is a skilled professional responsible for creating the visual and interactive elements of websites. They play a critical role in the web development process, focusing on the aesthetics and user experience of a website. Web designers work closely with clients, stakeholders, and developers to bring the client's vision and brand identity to life through creative and functional web design.",
            "One of the primary responsibilities of a web designer is to design the layout and overall appearance of a website. This involves selecting color palettes, typography, and graphical elements to create a cohesive and visually appealing user interface. Web designers must consider factors such as the target audience, the website's purpose, and the client's branding guidelines when crafting the design. Their goal is to create an intuitive and engaging user interface that enhances the overall user experience.",
            "In addition to visual design, web designers also focus on usability and user experience (UX). They ensure that the website is easy to navigate, with clear and intuitive navigation menus and call-to-action buttons. Web designers strive to create responsive layouts that adapt to different screen sizes, ensuring that the website looks and functions seamlessly on desktops, tablets, and smartphones. By considering the user's journey and interactions with the website, they aim to create a positive and memorable experience for visitors.",
            "Web designers are proficient in using various design tools and software, such as Adobe Photoshop, Illustrator, Sketch, or Figma. These tools enable them to create mockups and prototypes, allowing clients and stakeholders to visualize the final design before development. Effective communication skills are essential for web designers, as they need to understand client requirements, interpret feedback, and collaborate with developers to ensure the design is accurately implemented.",
            "As technology and design trends evolve, web designers must continually update their skills and stay informed about the latest design practices and tools. They should be adaptable and open to learning new techniques and approaches to deliver modern and innovative web designs. Ultimately, a web designer's ability to balance creativity, technical proficiency, and user-centric design principles contributes to the creation of visually appealing, user-friendly, and impactful websites that leave a positive impression on visitors and help businesses thrive in the competitive online landscape.",
        ],
        "mostImportantThings": [
            "Visual Design and Creativity: Web designers must have a keen eye for visual design and a strong sense of creativity. They are responsible for creating the overall look and feel of a website, including its layout, color scheme, typography, and graphical elements. A well-designed website should be visually appealing, engaging, and consistent with the brand's identity. Web designers use their creative skills to craft unique and user-friendly interfaces that leave a lasting impression on visitors.",
            "User Experience (UX) and Usability: Web designers prioritize user experience and usability when designing websites. They need to understand how users interact with websites and ensure that the design caters to their needs and preferences. This involves creating intuitive navigation, clear call-to-action buttons, and responsive layouts that work seamlessly on various devices. A positive user experience is essential for retaining visitors, increasing engagement, and achieving the website's goals, whether it's informing, selling products, or promoting a brand.",
            "Technical Proficiency and Adaptability: While web designers focus on the visual aspects of a website, they need to be proficient in using various design tools and software, such as Adobe Photoshop, Sketch, or Figma. They should have a good understanding of front-end web technologies like HTML, CSS, and JavaScript, which allows them to collaborate effectively with web developers. Web designers should also keep up with the latest design trends, tools, and best practices to stay relevant and adaptable in the ever-changing digital landscape.",
        ],
        "jobDuties": [
            "Establish design guidelines, standards and optimal design practices",
            "Maintain the appearance of Web sites by applying content standards",
            "Designing visual imagery for Web sites and ensuring that it is consistent with the organization image",
            "Integrate features and functionalities into Web sites",
            "Create and optimize content for the Web site using a variety of graphics, database, animation and other software",
            "Test and improve the design of a Web site",
            "May lead and coordinate multidisciplinary teams to develop Web site graphics, content, capacity and interactivity",
        ],
        "requirements": [
            "A bachelor's degree in computer science or graphic design or completion or a college program in computer science, graphic arts, or Web design is required.",
            "Experience as a graphic designer is usually required.",
        ],
        "link": "/courses/design/potential-jobs/web-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/17898/ca",
    },
    {
        "id": 4,
        "slug": "ux-ui-designer",
        "title": "UX/UI Designer",
        "image": "graphic-designer.webp",
        "tags": ["UX/UI Designer"],
        "projectedJobs": '32,025.00',
        "medianSalary": "75,722.50",
        "educationNeeded": "Diploma",
        "description": "UX/UI Designers focus on creating user-friendly and visually appealing digital products, ensuring an enhanced user experience.",
        "about": [
            "A UI/UX designer, also known as a User Interface/User Experience designer, is a professional who focuses on creating intuitive and visually appealing digital experiences for users. These designers play a crucial role in the development of websites, mobile apps, and other digital products, ensuring that the user interface (UI) is aesthetically pleasing and easy to navigate, while the user experience (UX) is enjoyable, efficient, and user-centric.",
            "One of the primary responsibilities of a UI/UX designer is to create user interfaces that are visually engaging and align with the brand's identity. They design layouts, color schemes, typography, and iconography to create a cohesive and attractive digital presence. UI designers work closely with graphic designers and developers to ensure that their designs are implemented effectively and consistently across different devices and platforms.",
            "UX design is equally important, focusing on the overall user experience and usability of a digital product. UX designers conduct user research to understand the needs, preferences, and pain points of the target audience. They use this insight to develop user personas, user flows, and wireframes that map out the user journey and interactions with the product. UX designers prioritize user needs and behaviors, aiming to create a seamless and enjoyable experience for users.",
            "UI/UX designers often collaborate with cross-functional teams, including product managers, developers, and marketing professionals. They work together to align design goals with business objectives and technical constraints, ensuring that the final product meets both user expectations and business requirements.",
            "Moreover, UI/UX designers conduct usability testing and gather feedback to iterate and improve their designs continuously. They analyze user behavior and engagement metrics to make data-driven decisions that optimize the user experience further. This iterative approach allows them to create products that evolve and adapt to the changing needs of users and the market.",
        ],
        "mostImportantThings": [
            "User-Centric Approach: A UI/UX designer puts the user at the center of the design process. Understanding the needs, preferences, and behaviors of the target audience is essential to creating an intuitive and enjoyable user experience. By conducting user research, gathering feedback, and analyzing user behavior, UI/UX designers ensure that the final product meets user expectations and provides a seamless and engaging experience.",
            "Design and Technical Skills: UI/UX designers must possess a strong combination of design and technical skills. They need proficiency in graphic design tools, such as Adobe XD, Sketch, or Figma, to create visually appealing and interactive user interfaces. Additionally, they should understand front-end development principles and limitations to collaborate effectively with developers and ensure the feasibility of their designs. The ability to bridge the gap between design and development helps create smooth and efficient implementation processes.",
            "Collaboration and Communication: UI/UX designers work collaboratively with cross-functional teams, including product managers, developers, and stakeholders. Effective communication skills are crucial to convey design ideas, rationale, and user insights to team members. Collaboration ensures that design decisions align with business goals, technical constraints, and user needs. Moreover, UI/UX designers actively seek and incorporate feedback, embracing an iterative approach to refine and improve their designs continually.",
        ],
        "jobDuties": [
            "Consult with clients to establish the overall look, graphic elements and content of communications materials in order to meet their needs",
            "Determine the medium best suited to produce the desired visual effect and the most appropriate vehicle for communication",
            "Develop the graphic elements that meet the clients' objectives",
            "Prepare sketches, layouts and graphic elements of the subjects to be rendered using traditional tools, multimedia software and image processing, layout and design software",
            "Estimate cost of materials and time to complete graphic design",
            "Use existing photo and illustration banks and typography guides or hire an illustrator or photographer to produce images that meet clients' communications needs",
            "Establish guidelines for illustrators or photographers",
            "Coordinate all aspects of production for print, audio-visual or electronic materials, such as Web sites, CDs and interactive terminals",
            "Coordinate sub-contracting",
            "Work in a multidisciplinary environment",
            "Supervise other graphic designers or graphic arts technicians",
            "Consult with clients to determine the nature and content of illustrations in order to meet their communications needs",
            "Develop and produce realistic or representational sketches and final illustrations, by hand or using computer-assisted design (CAD) software, for printed materials such as books, magazines, packaging, greeting cards and stationery",
            "Assist in developing storyboards for electronic productions such as multimedia, interactive and digital products and television advertising and productions",
            "Produce 2-D and 3-D animated drawings or computer illustrations",
            "May adapt existing illustrations",
        ],
        "requirements": [
            "A university degree in visual arts with specialization in graphic design, commercial art, graphic communications or cartooning or completion of a college diploma program in graphic arts is required.",
            "Experience or training in multimedia design at a post-secondary, college or technical institution may be required.",
            "In addition to the arts, training in biology, engineering, architecture or a scientific field is usually required for medical, technical and scientific illustrators.",
            "Creative ability and artistic talent, as demonstrated by a portfolio of work, are required for graphic designers and illustrators.",
        ],
        "link": "/courses/design/potential-jobs/ux-ui-designer",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/26533/ca",
    },
    {
        "id": 5,
        "slug": "visual-content-creator",
        "title": "Visual Content Creator",
        "image": "graphic-designer.webp",
        "tags": ["Visual Content Creator"],
        "projectedJobs": '35,892.50',
        "medianSalary": "84,140.00",
        "educationNeeded": "Diploma",
        "description": "Visual Content Creators curate engaging visual content for social media, digital marketing, and brand communication, playing a crucial role in online presence.",
        "about": [
            "A visual content creator is a skilled professional responsible for producing visually appealing and engaging content for various digital platforms. These creators use their creativity, design expertise, and technical skills to craft a wide range of visual assets, such as images, illustrations, graphics, videos, animations, and infographics, that effectively communicate ideas and messages to the target audience.",
            "One of the primary responsibilities of a visual content creator is to conceptualize and design content that aligns with the brand's identity and objectives. They work closely with marketing teams, content strategists, and clients to understand the content's purpose, target audience, and key messages. Based on this information, they develop creative concepts and visual elements that resonate with the audience and support the overall content strategy.",
            "Visual content creators often collaborate with graphic designers, videographers, photographers, and other creative professionals to bring their ideas to life. They may also work with copywriters and content writers to ensure that visuals complement and enhance the written content effectively. Collaboration allows them to create cohesive and visually engaging content that tells a compelling story.",
            "Moreover, visual content creators need to be proficient in using a variety of creative tools and software. They may work with graphic design software like Adobe Photoshop and Illustrator for creating static visuals, video editing software like Adobe Premiere Pro or Final Cut Pro for video content, or animation tools like After Effects for motion graphics. Their technical skills enable them to produce high-quality visuals that meet the requirements of different digital platforms.",
            "Visual content creators also play a crucial role in adapting content for various platforms and mediums. Whether it's social media, websites, blogs, email marketing, or presentations, they understand the unique requirements and constraints of each platform and tailor their content accordingly. Adapting content for different platforms ensures that the visuals are optimized for maximum engagement and impact.",
        ],
        "mostImportantThings": [
            "Creativity and Visual Design Skills: Visual content creators must possess a high level of creativity and strong visual design skills. They are responsible for conceptualizing and creating visually compelling content, such as images, illustrations, graphics, and videos, that effectively communicate ideas and messages. A keen eye for aesthetics, color theory, composition, and typography allows them to craft visually engaging and impactful content.",
            "Proficiency in Creative Tools: Visual content creators should be proficient in using various creative tools and software. These may include graphic design software like Adobe Photoshop, Illustrator, or Canva for creating graphics and illustrations, video editing software like Adobe Premiere Pro or Final Cut Pro for video content, and other tools for animation, photography, or 3D modeling. Their technical skills enable them to bring their creative ideas to life and produce professional-quality visual content.",
            "Adaptability and Multi-Platform Knowledge: Visual content creators need to be adaptable and versatile in creating content for different platforms and mediums. Whether it's social media, websites, blogs, presentations, or marketing materials, they should understand the specific requirements and constraints of each platform and tailor their content accordingly. Staying updated with the latest design trends and digital marketing practices allows them to create content that resonates with their target audience and maximizes its impact.",
        ],
        "jobDuties": [
            "Consult with clients to establish the overall look, graphic elements and content of communications materials in order to meet their needs",
            "Determine the medium best suited to produce the desired visual effect and the most appropriate vehicle for communication",
            "Develop the graphic elements that meet the clients' objectives",
            "Prepare sketches, layouts and graphic elements of the subjects to be rendered using traditional tools, multimedia software and image processing, layout and design software",
            "Estimate cost of materials and time to complete graphic design",
            "Use existing photo and illustration banks and typography guides or hire an illustrator or photographer to produce images that meet clients' communications needs",
            "Establish guidelines for illustrators or photographers",
            "Coordinate all aspects of production for print, audio-visual or electronic materials, such as Web sites, CDs and interactive terminals",
            "Coordinate sub-contracting",
            "Work in a multidisciplinary environment",
            "Supervise other graphic designers or graphic arts technicians",
            "Consult with clients to determine the nature and content of illustrations in order to meet their communications needs",
            "Develop and produce realistic or representational sketches and final illustrations, by hand or using computer-assisted design (CAD) software, for printed materials such as books, magazines, packaging, greeting cards and stationery",
            "Assist in developing storyboards for electronic productions such as multimedia, interactive and digital products and television advertising and productions",
            "Produce 2-D and 3-D animated drawings or computer illustrations",
            "May adapt existing illustrations",
        ],
        "requirements": [
            "A university degree in visual arts with specialization in graphic design, commercial art, graphic communications or cartooning or completion of a college diploma program in graphic arts is required.",
            "Experience or training in multimedia design at a post-secondary, college or technical institution may be required.",
            "In addition to the arts, training in biology, engineering, architecture or a scientific field is usually required for medical, technical and scientific illustrators.",
            "Creative ability and artistic talent, as demonstrated by a portfolio of work, are required for graphic designers and illustrators.",
        ],
        "link": "/courses/design/potential-jobs/visual-content-creator",
        "externalLink": "https://www.jobbank.gc.ca/marketreport/jobs/296542/ca",
    },
]

const CoursesDesignPotentialJobsDetails = () => {
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
                                            <img className="radius-small w-100 mb--30" src={`${process.env.PUBLIC_URL}/images/design/potential-jobs-details/${data.image}`} alt="Blog Thumb" />
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

export default CoursesDesignPotentialJobsDetails;