import React from "react";
import Nav from "./nav.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
//include images into your bundle
//create your first component
const Home = (props) => {
	let obj = {
		// width: "60%",
		// margin: "center",
		justifyContent: "center",

		// marginLeft: "181px",
	};
	return (
		<div>
			<Nav />
			<Jumbo />
			<div className="card-group" style={obj}>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;

// src title Description. needs props
