import React from "react";

const Card = () => {
	let style1 = {
		justifyContent: "center",
		display: "flex",
		marginRight: "200px",
		marginLeft: "200px",
		// textAlign: "center",
		// display: "inline-block",
		// width: "18rem",
	};
	let style2 = {
		display: "flex",
		margin: "0px 10px 25px 0px",
		justifyContent: "center",
		// display: "inline-block",
		// width: "18rem",
		// padding: "10px",
	};
	let style3 = {
		justifyContent: "center",
		display: "flex",
		margin: " 0px 45px 0px 45px",
	};
	let style4 = {
		display: "flex",
		margin: "0px 10px 25px 10px",
		justifyContent: "center",
		// display: "inline-block",
		// width: "18rem",
		// padding: "10px",
	};
	let style5 = {
		justifyContent: "center",
		display: "flex",
		margin: " 0px 45px 0px 45px",
	};
	let style6 = {
		margin: "0px 10px 25px 10px",
		display: "flex",
		justifyContent: "center",
		// display: "inline-block",
		// width: "18rem",
		// padding: "10px",
	};
	let style7 = {
		justifyContent: "center",
		display: "flex",
		margin: " 0px 45px 0px 45px",
	};
	let style8 = {
		margin: "0px 0px 25px 10px",
		display: "flex",
		justifyContent: "center",
		// display: "inline-block",
		// width: "18rem",
		// padding: "10px",
	};
	let style9 = {
		justifyContent: "center",
		display: "flex",
		margin: " 0px 45px 0px 45px",
	};
	return (
		<div style={style1}>
			<div className="card" style={style2}>
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
					<a href="#" className="btn btn-primary" style={style3}>
						{" "}
						Find out more!
					</a>
				</div>
			</div>{" "}
			<div className="card" style={style4}>
				<img
					className="card-img-top"
					src="https://picsum.photos/200/200?random=1"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary" style={style5}>
						{" "}
						Find out more!
					</a>
				</div>
			</div>{" "}
			<div className="card" style={style6}>
				<img
					className="card-img-top"
					src="https://picsum.photos/200/200?random=2"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary" style={style7}>
						{" "}
						Find out more!
					</a>
				</div>
			</div>{" "}
			<div className="card" style={style8}>
				<img
					className="card-img-top"
					src="https://picsum.photos/200/200?random=3"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary" style={style9}>
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
