import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mx-auto">
			<h1>Hello People</h1>
			<p>
				Welcome to your new Gatsby site, ready for the future. We set up the
				tools you need to get started,{" "}
				<i>
					now go build something <b>great</b>.
				</i>
			</p>
		</article>
		<div className="mt-12 mb-4 w-64 mx-auto">
			<Image />
		</div>
		<article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mx-auto">
			<h2>Typography</h2>
			<p>
				Why are we using the{" "}
				<a href="https://tailwindcss-typography.netlify.app/">
					tailwindcss-typography
				</a>{" "}
				<code>plugin</code>:
			</p>
			<ol>
				<li>We want everything to look good out of the box.</li>
				<li>
					Really just the first reason, that's the whole point of the plugin.
				</li>
				<li>
					Here's a third pretend reason though a list with three items looks
					more realistic than a list with two items.
				</li>
			</ol>
			<p>This article is using it right now. here's the code block:</p>
			<pre style={{ whiteSpace: "pre-wrap" }}>
				&lt;article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl
				dark:prose-light mx-auto"&gt; ... &lt;/article&gt;
			</pre>
			<p>
				Pretty cool stuff right? well now let's just finish out this
				introduction with a quote. Probably by someone famous.
			</p>
			<blockquote>
				<p>
					Typography is pretty important if you don't want your stuff to look
					like trash. Make it good then it won't be bad.
				</p>
			</blockquote>
			<p>
				Cat ipsum dolor sit amet, terrorize the hundred-and-twenty-pound
				rottweiler and steal his bed, not sorry where is it? i saw that bird i
				need to bring it home to mommy squirrel! . Hit you unexpectedly i vomit
				in the bed in the middle of the night find something else more
				interesting playing with balls of wool.
			</p>
			<Link to="/page-2/">Go to page 2</Link> <br />
			<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
		</article>
	</Layout>
);

export default IndexPage;
