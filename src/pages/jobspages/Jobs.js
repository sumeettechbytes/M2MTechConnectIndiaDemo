import React from 'react';
import SEO from '../../common/SEO';
import JobsContent from '../../components/Jobs/JobsContent';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const Jobs = () => {
	return (
		<>
			<SEO
      title="Jobs"
      description="We believe in providing diverse learning opportunities to suit different learning preferences and career goals."
      />
      <Layout>
        <BreadcrumbOne 
          title="Jobs"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Jobs"
        />
        <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <JobsContent />
          </div>
        </div>
      </Layout>
		</>
    )
}
export default Jobs;