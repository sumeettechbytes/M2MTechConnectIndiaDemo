import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ContactUsForm from '../../components/contact/ContactUsForm';

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Have any questions? Let us know and we will get in touch!"
      />
      <Layout>
        <BreadcrumbOne 
          title="Contact Us"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Contact Us"
        />
        <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="pre-title">Need Help?</span>
                  <h3 className="title">Get In Touch With Us</h3>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              <div className="col-lg-6">
                <div className="contact-info pr--70 pr_lg--0 pr_md--0 pr_sm--0">
                  <div className="row g-5">
                    <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 phone">
                        <div className="inner">
                          <div className="icon">
                            <i className="icon-Headphone"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Call Us On</h6>
                            <p><a href="tel: +1-604-351-4512">+1-604-351-4512</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 email">
                        <div className="inner">
                          <div className="icon">
                            <i className="icon-mail-open-line"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Email Us</h6>
                            <p><a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <ContactUsForm formStyle="rnt-contact-form rwt-dynamic-form row" />
              </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-04-01.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-02-08.png"} alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src={process.env.PUBLIC_URL+"/images/shapes/shape-15.png"} alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default ContactUs;