import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ( { title, description } ) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{ title } | Mind To Machine Connect</title>
				{/* <meta name="robots" content="noindex, follow" /> */}
				{ description && <meta name="description" content={ description } /> }
			</Helmet>
		</>
	)
}
SEO.propTypes = {
	title: PropTypes.string
};

export default SEO;