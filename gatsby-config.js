require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "GatsbyPOC",
		description: "This is the #100daysofgatsby challenge",
	},
	plugins: [
		"@chakra-ui/gatsby-plugin",
		"gatsby-plugin-preact",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "GatsbyPOC",
				short_name: "GatsbyPOC",
				description: "This is the #100daysgatsbycode challenge",
				lang: "en",
				start_url: "/",
				display: "standalone",
				background_color: "#fff",
				theme_color: "#fff",
				icon: "src/images/icon.png",
				icons: [
					{
						src: "src/images/icon.png",
						sizes: "196x196",
						type: "image/png",
						purpose: "any maskable",
					},
				],
				cache_busting_mode: "none",
			},
		},
		{
			resolve: "gatsby-plugin-offline",
			options: {
				precachePages: ["/contact", "city/*"],
				workboxConfig: {
					globPatterns: ["**/images*"],
				},
			},
		},
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: process.env.WP_ENDPOINT,
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: "gatsby-source-formium",
			options: {
				projectId: process.env.GATSBY_FORMIUM_PROJECTID,
				accessToken: process.env.FORMIUM_ACCESS_TOKEN,
			},
		},
	],
};
