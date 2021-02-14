/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<>
			<div className="bg-gray-100 text-black dark:bg-gray-900 min-h-screen">
				<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
				<div className="max-w-4xl mx-auto w-full p-4">
					<main className="dark:text-white dark:bg-gray-900">{children}</main>
					<Footer />
				</div>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
