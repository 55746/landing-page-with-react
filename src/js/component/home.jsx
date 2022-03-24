import React from "react";
import Nav from "./nav.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<Jumbo />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
