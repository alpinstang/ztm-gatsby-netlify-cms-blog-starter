import React from "react";
import { Link, graphql } from "gatsby";
import BlogCard from "../components/blogCard.component";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BloglistTemplate = ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const files = data.allMdx.edges;

	const filteredPosts = files.filter(
		({ node }) => node.frontmatter.template === "post"
	);

	let renderedPosts;

	if (filteredPosts.length === 0) {
		renderedPosts = <p>No posts available</p>;
	} else {
		renderedPosts = filteredPosts.map(({ node }) => (
			<BlogCard key={node.id} {...node} />
		));
	}

	return (
		<Layout>
			<SEO title="Blog" />
			<article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mb-8">
				<h2>Blog Page</h2>
				<p>
					This is where you will find all the blogs. The blogs will be displayed
					from latest to oldest. This is page {currentPage} out of {numPages}{" "}
					pages.
				</p>
			</article>
			<section className="flex flex-wrap bg-gray-100 dark:bg-gray-800 p-2 md:p-4 rounded-sm">
				{renderedPosts}
			</section>
			<section className="flex justify-center">
				<div className="m-4">
					{pageContext.currentPage > 1 ? (
						<Link
							to={currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`}>
							Prev
						</Link>
					) : (
						<p className="text-transparent">Prev</p>
					)}
				</div>
				<div className="m-4">
					<p>{currentPage}</p>
				</div>
				<div className="m-4">
					{currentPage < numPages ? (
						<Link to={`/blog/${pageContext.currentPage + 1}`}>Next</Link>
					) : (
						<p className="text-transparent">Next</p>
					)}
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
