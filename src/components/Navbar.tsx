import React from 'react';

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navleft">
				<h3 className="nav-title">Hello World</h3>
			</div>
			<div className="navright">
				<button type="button" className="navbar-btn">
					Press me
				</button>
			</div>
		</div>
	);
}
