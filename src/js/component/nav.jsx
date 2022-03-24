import React from "react";

const Nav = () => {
	return (
		// <div style={{ textDecorationColor: "white" }}>
		<nav className="navbar navbar-expand-lg navbar-white bg-dark">
			<a
				className="navbar-brand text-white"
				style={{ marginLeft: "200px" }}
				href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse"
				id="navbarNav"
				style={{ marginLeft: "760px" }}>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link text-white" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled text-white" href="#">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
		// </div>
	);
};

export default Nav;
