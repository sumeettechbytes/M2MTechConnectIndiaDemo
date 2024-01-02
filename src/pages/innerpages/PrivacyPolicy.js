import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const PrivacyPolicy = () => {

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website."
      />
      <Layout>
        <BreadcrumbOne 
          title="Privacy Policy"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Privacy Policy"
        />
        <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-12">
                <div>
                  <h3 className="title">Privacy Policy</h3>
                  <span><strong>Effective Date:</strong> May 1, 2023</span>
                  <p className="description mt-3">Thank you for visiting M2M Tech website. We are committed to maintaining the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
                  <h5>Information We Collect</h5>
                  <p className="description">When you visit our website, we may collect certain personal information, including but not limited to your name and email address, as provided voluntarily by you when you subscribe to our newsletter or fill out our contact form.</p>
                  <h5>How We Use Your Information</h5>
                  <p className="description">We use the information we collect for the following purposes:</p>
                  <ol>
                    <li><strong>Communication</strong>: We may use your name and email address to send you updates, newsletters, promotional materials, and other information about our services. You can opt-out of receiving these communications at any time by following the instructions provided in the emails or by contacting us directly.</li>
                    <li><strong>Responding to Inquiries</strong>: If you contact us through our website, we may use the provided information to respond to your inquiries, provide assistance, and address any issues you raise.</li>
                    <li><strong>Improving User Experience</strong>: We may use your information to improve our website's content, functionality, and user experience.</li>
                  </ol>
                  <h5>Disclosure of Your Information</h5>
                  <p className="description">We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent. However, we may share your information with trusted third parties who assist us in operating our website, conducting our business, or providing services to you. These third parties are required to keep your information confidential and secure.</p>
                  <h5>Data Security</h5>
                  <p className="description">We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                  <h5>Your Choices</h5>
                  <p className="description">You have the right to access, update, and correct the personal information you have provided to us. You can also choose to unsubscribe from our communications at any time by following the instructions in the emails or contacting us directly.</p>
                  <h5>Changes to this Privacy Policy</h5>
                  <p className="description">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the effective date will be revised accordingly.</p>
                  <h5>Contact Us</h5>
                  <p className="description">If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at <a href="mailto:contact@m2mtechconnect.com">contact@m2mtechconnect.com</a>.</p>
                  <p className="description">By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PrivacyPolicy;