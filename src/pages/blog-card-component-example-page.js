import React from "react";
import BlogCardComponent from "../components/blog-card-component";
import { graphql } from "gatsby";

export const query = graphql`
	{
		imageSharp {
			fluid {
				base64
				tracedSVG
				srcWebp
				srcSetWebp
				originalImg
				originalName
			}
		}
	}
`;

//! Ok, so, i got it to query the data, but i have no idea what it needs to pass to the component.
//https://www.gatsbyjs.com/plugins/gatsby-image/
//https://www.gatsbyjs.com/docs/glossary/graphql/#reach-skip-nav
//https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/
//https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/

const BlogCardExample = ({ data }) => (
	<div>
		<h1 className="m-2 text-xl">This is an example page</h1>
		{console.log(JSON.stringify(data, null, 4))}
		<div className="flex flex-row">
			<BlogCardComponent
				altTeaserImageDesc="A preview of our blog post"
				blogHeading="This is an astronaut"
				publishDate="02/02/2021"
				teaserText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitua... `}
				authorName="John Johnny"
				blogTags={["Astronaut", "Night"]}
			/>
		</div>
	</div>
);

export default BlogCardExample;
