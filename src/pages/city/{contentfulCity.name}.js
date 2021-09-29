import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
	query ($id: String) {
		contentfulCity(id: { eq: $id }) {
			name
			description
			image {
				gatsbyImageData
			}
			location {
				lat
				lon
			}
		}
	}
`;

export default function City({ data }) {
	const imgSrc = getImage(data.contentfulCity.image);
	return (
		<div>
			<GatsbyImage image={imgSrc} alt={data.contentfulCity.name} />
			<h1>{data.contentfulCity.name}</h1>
			<h2>{data.contentfulCity.description}</h2>
			<h3>{`${data.contentfulCity.location.lat} - ${data.contentfulCity.location.lon}`}</h3>
		</div>
	);
}
