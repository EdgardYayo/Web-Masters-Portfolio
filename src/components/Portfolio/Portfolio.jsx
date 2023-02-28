import React from "react";
import style from "./Portfolio.module.css";
import proyecto1 from "../../img/travel-app.png"
import proyecto2 from "../../img/cabrera-p.png"
import proyecto3 from "../../img/health-ed.png"
import proyecto4 from "../../img/pi-jonas.png"
import proyecto5 from "../../img/tabla-periodica.png"
import proyecto6 from "../../img/online-nature.png"
import proyecto7 from "../../img/pf-ed.png"
import proyecto8 from "../../img/danny-port.png"
import proyecto9 from "../../img/videogames_jose.png"


const Portfolio = () => {
	return (
		<section id={style.portfolio}>
			<h3 className={style["titulo-seccion"]}>Our projects</h3>
			<div className={style.fila}>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://app-travell.vercel.app">
						<img src={proyecto1} alt="" />
					</a>
					<div className={style.info}>
						<h4>Travell</h4>
						<p>Price: $400- $800</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://cabrera-pourrieux-asoc.vercel.app">
						<img src={proyecto2} alt="" />
					</a>
					<div className={style.info}>
						<h4>Cabrera-Pourrieux</h4>
						<p>Price: $100 - $400</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://healthy-page.vercel.app/index.html">
						<img src={proyecto3} alt="" />
					</a>
					<div className={style.info}>
						<h4>Healthy facts</h4>
						<p>Price: $50- $200</p>
					</div>
				</div>
			{/* </div> */}
			{/* <div className={style.fila}> */}
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://pokemon-frontend-cyan.vercel.app">
						<img src={proyecto4} alt="" />
					</a>
					<div className={style.info}>
						<h4>Pokemon App</h4>
						<p>Price: $400 - $800</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://ghoul-js-periodic-table.vercel.app">
						<img src={proyecto5} alt="" />
					</a>
					<div className={style.info}>
						<h4>Tabla periodica</h4>
						<p>Price: $70- $100</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://online-nature-pf-front-git-main-ezeluiten.vercel.app">
						<img src={proyecto6} alt="" />
					</a>
					<div className={style.info}>
						<h4>Online Nature</h4>
						<p>Price: $600 - $1200</p>
					</div>
				</div>
			{/* </div> */}
			{/* <div className={style.fila}> */}
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://shop-line-front.vercel.app">
						<img src={proyecto7} alt="" />
					</a>
					<div className={style.info}>
						<h4>ShopLine</h4>
						<p>Price: $600 - $1200</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://daniela-pourrieux.netlify.app">
						<img src={proyecto8} alt="" />
					</a>
					<div className={style.info}>
						<h4>Portafolio Danny</h4>
						<p>Price: $100 - $300</p>
					</div>
				</div>
				<div className={style.proyecto}>
					<div className={style.overlay}></div>
					<a href="https://pi-frontend.vercel.app">
						<img src={proyecto9} alt="" />
					</a>
					<div className={style.info}>
						<h4>Level Down</h4>
						<p>Price: $400 - $800</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
