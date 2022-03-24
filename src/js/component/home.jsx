import React from "react";
import Nav from "./nav.jsx";
import Jumbo from "./jumbo.jsx";
//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<Jumbo />
			<div
				style={{
					justifyContent: "center",
					display: "flex",
					marginRight: "200px",
					marginLeft: "200px",
					// textAlign: "center",
					// display: "inline-block",
					// width: "18rem",
				}}>
				<div
					className="card"
					style={{
						display: "flex",
						margin: "0px 10px 25px 0px",
						justifyContent: "center",
						// display: "inline-block",
						// width: "18rem",
						// padding: "10px",
					}}>
					<img
						className="card-img-top"
						src="https://picsum.photos/200/200"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="#"
							className="btn btn-primary"
							style={{
								justifyContent: "center",
								display: "flex",
								margin: " 0px 45px 0px 45px",
							}}>
							{" "}
							Find out more!
						</a>
					</div>
				</div>{" "}
				<div
					className="card"
					style={{
						display: "flex",
						margin: "0px 10px 25px 10px",
						justifyContent: "center",
						// display: "inline-block",
						// width: "18rem",
						// padding: "10px",
					}}>
					<img
						className="card-img-top"
						src="https://picsum.photos/200/200?random=1"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="#"
							className="btn btn-primary"
							style={{
								justifyContent: "center",
								display: "flex",
								margin: " 0px 45px 0px 45px",
							}}>
							{" "}
							Find out more!
						</a>
					</div>
				</div>{" "}
				<div
					className="card"
					style={{
						margin: "0px 10px 25px 10px",
						display: "flex",
						justifyContent: "center",
						// display: "inline-block",
						// width: "18rem",
						// padding: "10px",
					}}>
					<img
						className="card-img-top"
						src="https://picsum.photos/200/200?random=2"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="#"
							className="btn btn-primary"
							style={{
								justifyContent: "center",
								display: "flex",
								margin: " 0px 45px 0px 45px",
							}}>
							{" "}
							Find out more!
						</a>
					</div>
				</div>{" "}
				<div
					className="card"
					style={{
						margin: "0px 0px 25px 10px",
						display: "flex",
						justifyContent: "center",
						// display: "inline-block",
						// width: "18rem",
						// padding: "10px",
					}}>
					<img
						className="card-img-top"
						src="https://picsum.photos/200/200?random=3"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="#"
							className="btn btn-primary"
							style={{
								justifyContent: "center",
								display: "flex",
								margin: " 0px 45px 0px 45px",
							}}>
							Find out more!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
