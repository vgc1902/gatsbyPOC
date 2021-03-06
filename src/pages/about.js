import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Link } from "gatsby";
import SEO from "./components/seo";

export default function About() {
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
				<Heading size='lg'>About</Heading>
			</Box>
		</Container>
	);
}
