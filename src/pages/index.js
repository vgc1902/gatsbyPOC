import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Container, Flex, Grid, Heading, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Tag } from "@chakra-ui/tag";
import SEO from "./components/seo";

export const query = graphql`
	query {
		allContentfulCity {
			edges {
				node {
					name
					description
					location {
						lat
						lon
					}
					image {
						fluid {
							src
						}
						gatsbyImageData
					}
					gatsbyPath(filePath: "/city/{contentfulCity.name}")
				}
			}
		}
		headphones: contentfulAsset(title: { eq: "Home Headphones" }) {
			gatsbyImageData
			title
		}
	}
`;

export default function Home({ data }) {
	const cities = data.allContentfulCity.edges;
	const imgSrc = getImage(data.headphones);
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
			<Flex justify='center'>
				<Box my={6}>
					<GatsbyImage
						image={imgSrc}
						alt={data.headphones.title}
						style={{ borderRadius: "10px" }}
					/>
				</Box>
			</Flex>
			<Grid templateColumns='repeat(3, 1fr)' gap={4}>
				{cities.map(({ node: city }) => (
					<Link to={city.gatsbyPath}>
						<Box
							h='40'
							p='2'
							backgroundImage={`url(${city.image.fluid.src})`}
							backgroundSize='cover'
							backgroundRepeat='no-repeat'
							borderRadius='lg'>
							<Tag size='lg' variant='solid' colorScheme='purple'>
								{city.name}
							</Tag>
						</Box>
					</Link>
				))}
			</Grid>
		</Container>
	);
}
