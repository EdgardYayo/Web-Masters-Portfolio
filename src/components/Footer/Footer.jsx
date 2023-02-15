import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
	return (
		<footer>
			<p>All rights reserved - 2023</p>
			<div className={style.redes}>
				<a href="#">
					<i className="fa-brands fa-youtube"></i>
				</a>
				<a href="#">
					<i className="fa-brands fa-facebook"></i>
				</a>
				<a href="#">
					<i className="fa-brands fa-instagram-square"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
