import React from "react";
import { graphql, Link } from "gatsby";
import { defaultComponents, FormiumForm } from "@formium/react";
import { formium } from "../lib/formium";
import {
	Container,
	Box,
	Flex,
	Spacer,
	Input,
	Textarea as ChakraTextarea,
	Button,
	FormControl,
	FormLabel,
	FormHelperText,
	Heading,
} from "@chakra-ui/react";
import SEO from "./components/seo";

function TextInput(props) {
	const { id, label, description, ...rest } = props;
	return (
		<FormControl id={id}>
			<FormLabel>{label}</FormLabel>
			<Input {...rest} />
			<FormHelperText>{description}</FormHelperText>
		</FormControl>
	);
}
function Textarea(props) {
	const { id, label, description, ...rest } = props;
	return (
		<FormControl id={id}>
			<FormLabel>{label}</FormLabel>
			<ChakraTextarea {...rest} />
			<FormHelperText>{description}</FormHelperText>
		</FormControl>
	);
}

function SubmitButton(props) {
	return <Button type='submit' colorScheme='purple' {...props} />;
}

const MyComponents = {
	...defaultComponents,
	TextInput,
	Textarea,
	SubmitButton,
};

const AudioCoreForm = ({ data }) => {
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
				<Heading size='lg'>Contact us</Heading>
			</Box>
			<FormiumForm
				data={data.formiumForm}
				components={MyComponents}
				onSubmit={async (values) => {
					await formium.submitForm("contact-us", values);
					alert("Success");
				}}
			/>
		</Container>
	);
};

export const query = graphql`
	{
		formiumForm(slug: { eq: "contact-us" }) {
			id
			createAt
			name
			projectId
			schema
			slug
			updateAt
			version
		}
	}
`;

export default AudioCoreForm;
