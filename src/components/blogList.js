import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
// import blogCard from "./blogCard";

// delete after mdx files are added
const data = {
	allMdx: {
		totalCount: 2,
		edges: [
			{
				node: {
					id: "1c3f1c14-33a4-528a-af89-d9000b04f0b8",
					frontmatter: {
						title: "Pandas and Bananas",
						date: "2017-08-21",
					},
					slug: "/pandas-and-bananas/",
					excerpt:
						"Do Pandas eat bananas? Check out this short video that shows that yes! pandas do seem to really enjoy bananas!",
				},
			},
			{
				node: {
					id: "115f7b3c-8758-5c0c-9023-3d5451a657e9",
					frontmatter: {
						title: "Sweet Pandas Eating Sweets",
						date: "2017-08-10",
					},
					slug: "/sweet-pandas-eating-sweets/",
					excerpt:
						"Pandas are really sweet. Here's a video of a panda eating sweets.",
				},
			},
		],
	},
};

// temporary blog card component
const BlogCard = ({ node }) => {
	return (
		<article>
			<h3>{node.frontmatter.title}</h3>
			<p>{node.excerpt.substring(0, 100)}</p>
		</article>
	);
};

const blogList = () => {
	// uncomment after mdx files are added
	// const data = useStaticQuery(
	// 	graphql`
	// 		query MyQuery {
	// 			allMdx {
	// 				totalCount
	// 				edges {
	// 					node {
	// 						id
	// 						frontmatter {
	// 							title
	// 						}
	// 						slug
	// 						excerpt
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`
	// );

	let content;
	if (data.allMdx.totalCount === 0) {
		content = <p>No posts available</p>;
	} else {
		content = data.allMdx.edges.map(({ node }) => (
			<div key={node.id}>
				<Link to={node.slug}>
					<BlogCard node={node} />
				</Link>
			</div>
		));
	}

	return (
		<section>
			<h2>Blogs</h2>
			{content}
		</section>
	);
};

export default blogList;
