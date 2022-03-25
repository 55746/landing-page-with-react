import React from "react";

const Card = (props) => {
	let style1 = {
		justifyContent: "center",
		width: "16.88rem",
		margin: "0px 5px 0px 5px",
		// display: "fixed",
		// maxWidth: "700px",
		// alignItems: "center",
		// alignItems: "10px",
		// display: "inline-block",
	};
	return (
		<div className="card-group" style={style1}>
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt={props.alt}
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
