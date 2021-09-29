import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(query);
	const { defaultTitle, defaultDescription } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
	};

	return (
		<Helmet title={seo.title}>
			<meta name='description' content={seo.description} />
			{seo.title && <meta property='og:title' content={seo.title} />}
			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}
			<meta name='twitter:card' content='summary_large_image' />
			{seo.title && <meta name='twitter:title' content={seo.title} />}
			{seo.description && (
				<meta name='twitter:description' content={seo.description} />
			)}
		</Helmet>
	);
};

const query = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
			}
		}
	}
`;

export default SEO;
