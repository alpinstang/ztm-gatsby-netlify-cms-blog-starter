import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<section class="flex-1 lg:mb-0 lg:min-h-0 lg:min-w-0">
			<div class="flex flex-col lg:flex-row h-full w-full">
				<div class="lg:pb-0 w-1/3 lg:max-w-sm flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
					<div class="dark:bg-gray-800 bg-gray-100 w-full min-h-0 min-w-0 mb-4 p-4  h-full">
						<article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mx-auto">
							<h4>About the Authors</h4>
							<p>
								We are a small team of driven individuals with the common goal
								of excellent web application development experiences.
							</p>
						</article>
					</div>
					<div class="dark:bg-gray-800 bg-gray-100 w-full p-4 h-auto">
						<article className="flex flex-col prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mx-auto">
							<ul>
								<li>
									<Link to="/">Go back to the homepage</Link>
								</li>
								<li>
									<Link to="/admin">Netlify CMS</Link>
								</li>
							</ul>
						</article>
					</div>
				</div>
				<div class="h-full w-2/3 lg:flex-1 px-3">
					<div class="w-full">
						<div class="dark:bg-gray-800 bg-gray-100 w-full p-4">
							<article className="flex flex-col prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-light mx-auto">
								<h1>Hi from the second page</h1>
								<h3>Welcome to page 2</h3>
								<p>
									Fight an alligator and win sleep over your phone and make cute
									snoring noises yet i heard this rumor where the humans are our
									owners, pfft, what do they know?!. Groom yourself 4 hours -
									checked, have your beauty sleep 18 hours - checked...
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default SecondPage;
