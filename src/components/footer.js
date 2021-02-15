import React from "react";

const Footer = () => {
	return (
		<div className="mb-4">
			<hr className="mt-12 mb-8" />
			<footer className="prose dark:prose-light mx-auto text-center">
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
				<br />
				<div className="w-5 inline-block align-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
						/>
					</svg>
				</div>{" "}
				Modernized by the <a href="https://zerotomastery.io/">ZTM</a> 2021
				Frosty February Hackathon Team
			</footer>
		</div>
	);
};

export default Footer;
