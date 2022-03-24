import React from "react";

const Footer = () => {
	return (
		<div>
			<div
				className="footer bg-dark"
				style={{
					position: "inline-block",
					bottom: "0",
					height: "70px",
					width: "100%",
					color: "black",
				}}>
				<div
					className=" text-white"
					style={{
						position: "fixed",
						marginLeft: "636px",
						bottom: "10px",
						// textDecorationColor: "whitesmoke",
						// textAlign: "center",
						// position: "absolute",
						// justifyContent: "center",
					}}>
					copywrite @ your website 2022
				</div>
			</div>
		</div>
	);
};
export default Footer;
