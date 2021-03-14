import React, { useEffect } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
	useEffect(() => {
		document.addEventListener(`scroll`, () => {
			document.documentElement.dataset.scroll = window.scrollY.toString();
		});
	}, []);

	return (
		<div className="main">
			<Navbar />
			{/* Meta */}
			<div className="container">
				<main>{children}</main>
			</div>
		</div>
	);
}
