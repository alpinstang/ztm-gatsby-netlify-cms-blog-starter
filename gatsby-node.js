/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create a node for each md/mdx file
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value: `${value}`,
		});
	}
};

const path = require("path");

// create a page based on each md/mdx node
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}

	// Create blog post pages.
	const posts = result.data.allMdx.edges;

	posts.forEach(({ node }, index) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/page.template.js`),
			context: { id: node.id },
		});
	});
};
