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
import Image from "./image";

const BlogCardComponent = (props) => {
	const {
		teaserImageFluid,
		altTeaserImageDesc,
		blogHeading,
		publishDate,
		teaserText,
		authorAvatarUrl,
		authorName,
		blogTags,
	} = props;

	return (
		<div className="container w-1/4 border-4 m-2">
			<Image className="h-3" />
			{blogTags.map((blogtag, index) => {
				return (
					<span className="text-sm m-1 p-0.5 bg-red-300" key={index}>
						{blogtag}
					</span>
				);
			})}

			<h2 className="text-xl m-1">{blogHeading}</h2>
			<span className="m-1">{publishDate}</span>
			<p className="m-1">
				{teaserText}
				<a href="#">Read more</a>
			</p>
			<p className="m-1 text-sm">About the author:</p>
			<div className=" flex flex-row items-center justify-around m-1">
				<Image />
				<p>{authorName}</p>
			</div>
		</div>
	);
};

export default BlogCardComponent;
