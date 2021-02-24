import React from "react";
import { Link, graphql } from "gatsby";
import PostLink from "../components/postLink";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BloglistTemplate = ({ data, pageContext }) => {
	const files = data.allMdx.edges;

	const filteredPosts = files.filter(
		({ node }) => node.frontmatter.template === "post"
	);

	let renderedPosts;

	if (filteredPosts.length === 0) {
		renderedPosts = <p>No posts available</p>;
	} else {
		renderedPosts = filteredPosts.map(({ node }) => (
			<PostLink key={node.id} post={node} />
		));
		console.log(renderedPosts);
	}

	return (
		<Layout>
			<SEO title="Blog" />
			<article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mb-8">
				<h2>Blog Page</h2>
				<p>
					This is where you will find all the blogs. The blogs will be displayed
					from latest to oldest. This is page {pageContext.currentPage} out of{" "}
					{pageContext.numPages} pages.
				</p>
			</article>
			<section className="flex flex-wrap dark:bg-gray-800 p-4 rounded-sm">
				{renderedPosts}
			</section>
			<section className="flex justify-center">
				<div className="m-4">
					<Link to={`/blog/${pageContext.currentPage - 1}`}>Prev</Link>
				</div>
				<div className="m-4">
					<Link to={`/blog/${pageContext.currentPage + 1}`}>Next</Link>
				</div>
			</section>
		</Layout>
	);
};

export const bloglistQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					slug
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						template
					}
				}
			}
		}
	}
`;

export default BloglistTemplate;
