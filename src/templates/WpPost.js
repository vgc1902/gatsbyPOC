import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import { Container, Heading, Text, Link } from "@chakra-ui/react";

const WpPost = ({ data }) => {
	const { wpPost } = data;
	return (
		<Container maxW='xl'>
			<Heading as='h1'>{wpPost.title}</Heading>
			<Text as='div' mt='4' mb='10'>
				<div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
			</Text>
			<Link as={GatsbyLink} to='/blog'>
				Back to blog
			</Link>
		</Container>
	);
};

export const query = graphql`
	query PostById($id: String) {
		wpPost(id: { eq: $id }) {
			__typename
			id
			uri
			title
			content
		}
	}
`;

export default WpPost;
