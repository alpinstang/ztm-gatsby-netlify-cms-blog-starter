import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeToggle from "./themeToggle";

import React from "react";

const Header = ({ siteTitle }) => (
	<header className="mb-8 bg-rebeccapurple border-b dark:border-gray-500 dark:bg-purple-900">
		<nav>
			<div className="text-white no-underline max-w-4xl mx-auto flex items-center h-20 w-full justify-between px-4">
				<Link className="no-underline sm:text-xs" to={"/"}>
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold	mb-0 pr-2 always-white">
						{siteTitle}
					</h1>
				</Link>

				<div className="flex items-center">
					<div className="ml-4">
						<ThemeToggle />
					</div>
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
