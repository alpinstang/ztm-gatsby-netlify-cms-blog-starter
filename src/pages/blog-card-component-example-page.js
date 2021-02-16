import React from "react";
import BlogCardComponent from "../components/blog-card-component";

const BlogCardExample = () => (
	<div>
		<h1 className="m-2 text-xl">This is an example page</h1>
		<div className="flex flex-row">
			<BlogCardComponent
				teaserImageUrl="https://images.robertharding.com/preview/RF/MI/HORIZONTAL/1174-4517.jpg"
				altTeaserImageDesc="A preview of our blog post"
				blogHeading="This is Dubai, a city"
				publishDate="02/02/2021"
				teaserText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitua... `}
				authorAvatarUrl="https://c.tadst.com/gfx/750x500/authors-day-fun.jpg"
				authorName="John Johnny"
				blogTags={["Dubai", "Night"]}
			/>
			<BlogCardComponent
				teaserImageUrl="https://images.robertharding.com/preview/RF/MI/HORIZONTAL/1174-4517.jpg"
				altTeaserImageDesc="A preview of our blog post"
				blogHeading="This is Dubai, a city"
				publishDate="02/02/2021"
				teaserText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitua... `}
				authorAvatarUrl="https://c.tadst.com/gfx/750x500/authors-day-fun.jpg"
				authorName="John Johnny"
				blogTags={["Dubai", "Night"]}
			/>
			<BlogCardComponent
				teaserImageUrl="https://images.robertharding.com/preview/RF/MI/HORIZONTAL/1174-4517.jpg"
				altTeaserImageDesc="A preview of our blog post"
				blogHeading="This is Dubai, a city"
				publishDate="02/02/2021"
				teaserText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitua... `}
				authorAvatarUrl="https://c.tadst.com/gfx/750x500/authors-day-fun.jpg"
				authorName="John Johnny"
				blogTags={["Dubai", "Night"]}
			/>
		</div>
	</div>
);

export default BlogCardExample;
