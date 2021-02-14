import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeToggle from "./themeToggle";

import React from "react";

const Header = ({ siteTitle }) => (
	<header className="mb-1 bg-rebeccapurple border-b dark:border-gray-500 dark:bg-purple-900">
		<nav>
			<div className="max-w-4xl mx-auto flex items-center h-20 w-full justify-between px-4">
				<Link className="pr-2 text-white" to={"/"}>
					<h1 className="inline-block mb-0">{siteTitle}</h1>
				</Link>

				<div className="flex items-center">
					<a href="https://www.gatsbyjs.com/">
						<button className="lg:block px-4 text-white">
							Gatsby Documentation
						</button>
					</a>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
