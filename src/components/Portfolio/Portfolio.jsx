import React from "react";
import style from "./Portfolio.module.css";
import proyecto1 from "../../img/proyecto1.jpg"
import proyecto2 from "../../img/proyecto2.jpg"
import proyecto3 from "../../img/proyecto3.jpg"
import proyecto4 from "../../img/proyecto4.jpg"
import proyecto5 from "../../img/proyecto5.jpg"
import proyecto6 from "../../img/proyecto6.jpg"
import proyecto7 from "../../img/proyecto7.jpg"
import proyecto8 from "../../img/proyecto8.jpg"
import proyecto9 from "../../img/proyecto9.jpg"

const Portfolio = () => {
	return (
		<section id={style.portfolio}>
			<h3 className={style["titulo-seccion"]}>Our projects</h3>
			<div className={style.fila}>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto1} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto2} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto3} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
			</div>
			<div className={style.fila}>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto4} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto5} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto6} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
			</div>
			<div className={style.fila}>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto7} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto8} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<img src={proyecto9} alt="" />
					<div className={style.info}>
						<h4>Project Description</h4>
						<p>Web design</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
