import React from "react";
import Nav from "./Navbar.jsx";
import Jumbo from "./Jumbofile.jsx";
import Footer from "./Footerfile.jsx";
import Card from "./Cardfile.jsx";
//include images into your bundle
//create your first component
const Home = () => {
	let obj = {
		justifyContent: "center",
		// width: "60%",
		// margin: "center",
		// marginLeft: "181px",
	};
	return (
		<div>
			<Nav />
			<div className="container">
				<Jumbo description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				<div className="card-group" style={obj}>
					<Card
						imageUrl="https://picsum.photos/200/200"
						alt="Random Image"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						// title="Landing Page with React"
					/>
					<Card
						imageUrl="https://picsum.photos/200/200?random=1"
						alt="Random Image"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						// title="Landing Page with React"
					/>
					<Card
						imageUrl="https://picsum.photos/200/200?random=2"
						alt="Random Image"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						// title="Landing Page with React"
					/>
					<Card
						imageUrl="https://picsum.photos/200/200?random=3"
						alt="Random Image"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						// title="Landing Page with React"
					/>
				</div>
			</div>
			<Footer description="copywrite @ your website 2022" />
		</div>
	);
};

export default Home;

// src title Description. needs props
