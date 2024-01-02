import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const EventData = [
    {
        "id": 1,
        "title": "Innovation & Technological Entrepreneurship Team",
        "image": "event-01.jpg",
        "startDate": "28th Dec 2022",
        "startTime": "08:00 AM",
        "endDate": "Same Day",
        "endTime": "11:00 AM",
        "location": "Alpaca Way Anaheim, CA 92805",
        "shortLocation": "Alpaca Way",
        "going": "140+"
    },
    {
        "id": 2,
        "title": "Virtual Spring Part-time Jobs Fair for Student",
        "image": "event-02.jpg",
        "startDate": "30th Oct 2022",
        "startTime": "10:00 AM",
        "endDate": "Same Day",
        "endTime": "12:00 PM",
        "location": "Ritter Avenue Detroit, MI 48226",
        "shortLocation": "Ritter Avenue",
        "going": "150+"
    },
    {
        "id": 3,
        "title": "Explorations of Regional Chief Executive Network",
        "image": "event-03.jpg",
        "startDate": "18th Sep 2022",
        "startTime": "05:00 PM",
        "endDate": "Same Day",
        "endTime": "07:00 PM",
        "location": "Stout Street York, PA 17401",
        "shortLocation": "Stout Street",
        "going": "220+"
    },
    {
        "id": 4,
        "title": "Street Performance: Call for Artist",
        "image": "event-04.jpg",
        "startDate": "15th Dec 2022",
        "startTime": "07:00 PM",
        "endDate": "Same Day",
        "endTime": "09:00 PM",
        "location": "Elsie Drive Scranton, SD 58653",
        "shortLocation": "Elsie Drive",
        "going": "180+"
    },
    {
        "id": 5,
        "title": "Consumer Food Safety Education Conference",
        "image": "event-05.jpg",
        "startDate": "20th Nov 2022",
        "startTime": "09:00 AM",
        "endDate": "Same Day",
        "endTime": "10:00 AM",
        "location": "Adams Avenue Chevy, MD 20815",
        "shortLocation": "Adams Avenue",
        "going": "160+"
    },
    {
        "id": 6,
        "title": "Workout routine and Longevity Meetup",
        "image": "event-06.jpg",
        "startDate": "15th Dec 2022",
        "startTime": "11:00 AM",
        "endDate": "Same Day",
        "endTime": "01:00 PM",
        "location": "Mulberry Street Houston, TX 77060",
        "shortLocation": "Mulberry Street",
        "going": "230+"
    },
    {
        "id": 7,
        "title": "Write A Novel Outline From Scratch",
        "image": "event-07.jpg",
        "startDate": "18th Nov 2022",
        "startTime": "09:00 AM",
        "endDate": "Same Day",
        "endTime": "01:00 AM",
        "location": "College Street Atlanta, GA, 30303",
        "shortLocation": "College Street",
        "going": "190+"
    },
    {
        "id": 8,
        "title": "Cyber Bullying Awareness Webinar",
        "image": "event-08.jpg",
        "startDate": "10th Dec 2022",
        "startTime": "02:00 PM",
        "endDate": "Same Day",
        "endTime": "03:00 PM",
        "location": "Swick Hill Street Corner, NC 28217",
        "shortLocation": "Hill Street",
        "going": "210+"
    },
    {
        "id": 9,
        "title": "Mastering The Art Of Communication Skill",
        "image": "event-09.jpg",
        "startDate": "19th Dec 2022",
        "startTime": "11:00 AM",
        "endDate": "Same Day",
        "endTime": "02:00 PM",
        "location": "Aspen Court Boston, MA 02115",
        "shortLocation": "Aspen Court",
        "going": "130+"
    }
]

const EventDetails = () => {
    // const { id } = useParams();
    // const eventId = parseInt(id, 10);
    // const data = EventData.filter(event => event.id === eventId);
    const eventItem = EventData[0];
    return (
        <>
            <SEO title={ eventItem.title } />
            <Layout>
                <BreadcrumbOne 
                    title="Project Details"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Project Details"
                />
                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/project-details/course-39.webp`} alt="Event Thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h3 className="title">{ eventItem.title }</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                                    <ul className="column-gallery gallery-column-2">
                                        <li><img src="/images/project-details/purchase-guide-01-2.jpg" alt="Gallery Images" /></li>
                                        <li><img src="/images/project-details/privacy-policy-2.webp" alt="Gallery Images" /></li>
                                    </ul>
                                    <h4>Four major elements that we offer:</h4>
                                    <ul className="list-style-1 mb--20">
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Struggling to sell one multi-million dollar home currently on the market</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> The point of using Lorem Ipsum is that it has a normal distribution of letters.</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="eduvibe-sidebar">
                                    <div className="eduvibe-widget eduvibe-widget-details">
                                        <h5 className="title">Event Detail</h5>
                                        <div className="widget-content">
                                            <ul>
                                                { eventItem.startDate && <li><span><i className="icon-calendar-2-line"></i> Start Date</span><span>{ eventItem.startDate }</span></li> }
                                                { eventItem.startTime && <li><span><i className="icon-time-line"></i> Start Time</span><span>{ eventItem.startTime }</span></li> }
                                                { eventItem.endDate && <li><span><i className="icon-calendar-2-line"></i> End Date</span><span>{ eventItem.endDate }</span></li> }
                                                { eventItem.endTime && <li><span><i className="icon-time-line"></i> End Time</span><span>{ eventItem.endTime }</span></li> }
                                                { eventItem.going && <li><span><i className="icon-user-line"></i> Ongoing</span><span>{ eventItem.going }</span></li> }
                                                { eventItem.shortLocation && <li><span><i className="icon-map-pin-line"></i> Location</span><span>{ eventItem.shortLocation }</span></li> }
                                            </ul>

                                            <div className="read-more-btn mt--45">
                                                <Link className="edu-btn btn-bg-alt w-100 text-center" to="#">Price: $79.00</Link>
                                            </div>

                                            <div className="read-more-btn mt--15">
                                                <Link className="edu-btn w-100 text-center" to="#">Book Your Seat Now</Link>
                                            </div>

                                            <div className="read-more-btn mt--30 text-center">
                                                <div className="eduvibe-post-share">
                                                    <span>Share: </span>
                                                    <a className="linkedin" href="/"><i className="icon-linkedin"></i></a>
                                                    <a className="facebook" href="/"><i className="icon-Fb"></i></a>
                                                    <a className="twitter" href="/"><i className="icon-Twitter"></i></a>
                                                    <a className="youtube" href="/"><i className="icon-youtube"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="event-widget event-widget-details mt--40">
                                        <h5 className="title">Map</h5>
                                        <div className="widget-content">
                                            <div className="google-map">
                                                <div className="eduvibe-google-map">
                                                    <iframe className="radius-small w-100" title="Google Map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" height="290" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                                </div>
                                            </div>
                                        </div>
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
export default EventDetails;