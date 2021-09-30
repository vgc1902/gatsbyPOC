import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
	Box,
	Container,
	Flex,
	Heading,
	Spacer,
	Button,
} from "@chakra-ui/react";
import SEO from "./components/seo";

export default function Blog() {
	const data = useStaticQuery(graphql`
		{
			allWpPost {
				edges {
					node {
						id
						title
						uri
					}
				}
			}
		}
	`);
	const { allWpPost } = data;

	return (
		<Container maxW='4xl' py='6'>
			<SEO />
			<Flex align='center'>
				<Box>
					<Heading size='md'>AudioC0re</Heading>
				</Box>
				<Spacer />
				<Box>
					<Link to='/'>
						<Button colorScheme='purple' mr='4'>
							Home
						</Button>
					</Link>
					<Link to='/blog'>
						<Button colorScheme='purple' mr='4'>
							Blog
						</Button>
					</Link>
					<Link to='/about'>
						<Button colorScheme='purple' mr='4'>
							About
						</Button>
					</Link>
					<Link to='/contact'>
						<Button colorScheme='purple'>Contact</Button>
					</Link>
				</Box>
			</Flex>
			<Box my='6'>
				<Heading size='lg'>Blog</Heading>
			</Box>
			<Box>
				{allWpPost.edges.map(({ node: post }) => (
					<Link to={post.uri} key={post.id}>
						{post.title}
					</Link>
				))}
			</Box>
		</Container>
	);
}
