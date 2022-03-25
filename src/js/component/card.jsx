import React from "react";

const Card = () => {
	let style1 = {
		// display: "fixed",
		// maxWidth: "700px",
		// justifyContent: "center",
		// alignItems: "center",
		width: "16.75rem",
		// alignItems: "10px",
		margin: "0px 10px 0px 5px",
		// display: "inline-block",
	};

	return (
		<div className="card-group" style={style1}>
			<div className="card">
				<img
					className="card-img-top"
					src="https://picsum.photos/200/200"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
