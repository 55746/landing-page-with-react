import React from "react";

const Footer = () => {
	let style1 = {
		position: "inline-block",
		bottom: "0",
		height: "78px",
		width: "100%",
		color: "black",
	};
	let style2 = {
		// position: "",
		paddingTop: "50px",
		marginLeft: "636px",
		// bottom: "10px",
		// textDecorationColor: "whitesmoke",
		// textAlign: "center",
		// position: "absolute",
		// justifyContent: "center",
	};
	return (
		<div>
			<div className="footer bg-dark" style={style1}>
				<div className=" text-white" style={style2}>
					copywrite @ your website 2022
				</div>
			</div>
		</div>
	);
};
export default Footer;
