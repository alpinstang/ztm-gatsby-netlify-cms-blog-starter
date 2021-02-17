import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/postLink";

const IndexPage = ({
	data: {
		allMdx: { edges },
	},
}) => {
	const Posts = edges
		.filter((edge) => {
			if (edge.node.frontmatter.template === "post") {
				return !!edge.node.frontmatter.date;
			}
		}) // You can filter your posts based on some criteria
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return <div>{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
