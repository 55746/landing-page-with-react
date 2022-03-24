import React from "react";

const Jumbo = () => {
	let style1 = {
		borderRadius: "10px",
		background: "lightGray",
		marginTop: "0px",
		marginLeft: "200px",
		marginRight: "200px",
	};
	let style2 = { marginLeft: "50px" };
	let style3 = { marginLeft: "50px" };
	let style4 = { margin: "0px 50px 65px 50px" };
	return (
		<div className="jumbotron" style={style1}>
			<h1 className="display-4" style={style2}>
				<strong>A Warm Welcome!</strong>
			</h1>
			<p className="lead" style={style3}>
				TLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				sed elit aliquam dolor rutrum facilisis id eu nibh. Morbi
				posuere magna ac dui hendrerit ullamcorper.
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="#"
					role="button"
					style={style4}>
					Call to action!
				</a>
			</p>
		</div>
	);
};
export default Jumbo;
