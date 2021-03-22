//* A blog card component should contain the following information

//* Blog teaser image full width of the card
//* Blog heading
//* Blog publish date
//* Blog teaser text
//* Blog Author avatar
//* Blog Author name
//* Blog tags
//* All of the described parts may or may not be also single components as well. Depends on how we can reuse them.

import React from "react";
import { Link } from "gatsby";
import Image from "./image.component";

const BlogCardComponent = (props) => {
	const {
		slug,
		excerpt,
		frontmatter,
		// altTeaserImageDesc,
		// authorAvatarUrl,
	} = props;

	let tags = [];

	if (frontmatter.tags) {
		tags = frontmatter.tags.split(",");
	}

	return (
		<div className="container w-full md:w-1/3 border-2 m-2 p-2  bg-white dark:bg-gray-900 border-gray-500">
			{/* image here */}

			{tags.map((blogtag, index) => {
				return (
					<span
						className="text-sm m-2 p-1.5 bg-rebeccapurple border-b dark:border-gray-500 text-white dark:bg-purple-900"
						key={index}>
						{blogtag.charAt(0).toUpperCase() + blogtag.slice(1)}
					</span>
				);
			})}

			<h2 className="text-xl font-bold m-2">{frontmatter.title}</h2>
			<span className="m-2 font-light">{frontmatter.date}</span>
			<p className="m-2">{excerpt}</p>
			<Link to={slug} className="m-2">
				Read more
			</Link>
			<p className="m-2 text-sm font-thin">About the author:</p>
			<div className=" flex flex-row items-center m-2">
				<Image imageName={frontmatter.teaserImage} />
				<p className="font-medium">{frontmatter.author}</p>
			</div>
		</div>
	);
};

export default BlogCardComponent;
