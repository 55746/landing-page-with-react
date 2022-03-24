import React from "react";

const Jumbo = () => {
	return (
		<div
			className="jumbotron"
			style={{
				borderRadius: "10px",
				background: "lightGray",
				marginTop: "0px",
				marginLeft: "200px",
				marginRight: "200px",
			}}>
			<h1 className="display-4" style={{ marginLeft: "50px" }}>
				<strong>A Warm Welcome!</strong>
			</h1>
			<p className="lead" style={{ marginLeft: "50px" }}>
				TLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				sed elit aliquam dolor rutrum facilisis id eu nibh. Morbi
				posuere magna ac dui hendrerit ullamcorper.
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="#"
					role="button"
					style={{ margin: "0px 50px 65px 50px" }}>
					Call to action!
				</a>
			</p>
		</div>
	);
};
export default Jumbo;
