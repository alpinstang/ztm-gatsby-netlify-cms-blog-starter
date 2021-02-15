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
				Modernized by the <a href="https://zerotomastery.io/">ZTM</a> 2021 Frost
				February Hackathon Team
			</footer>
		</div>
	);
};

export default Footer;
