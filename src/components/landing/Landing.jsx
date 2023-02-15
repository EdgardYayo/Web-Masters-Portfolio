import React from "react";
import style from "./Landing.module.css";
// import { seleccionar, responsiveMenu } from "../../utilis/Scrips";

const Landing = () => {
	return (
		<section id={style.inicio}>
			<div className={style.contenido}>
				<header>
					<div className={style["contenido-header"]}>
						<h1>/TM/</h1>
						<nav id={style.nav}>
							<ul id={style.links}>
								<li>
									<a
										href="/Landing"
										className={style.seleccionado}
										
									>
										START
									</a>
								</li>
								<li>
									<a href="/AboutUs">
										ABOUT US
									</a>
								</li>
								<li>
									<a href="/Services">
										SERVICES
									</a>
								</li>
								<li>
									<a href="/Portfolio">
										PORTFOLIO
									</a>
								</li>
								<li>
									<a href="/Contact" >
										CONTACT
									</a>
								</li>
							</ul>
						</nav>

						{/*  Icono del menu responsive */}

						<div id={style["icono-nav"]} >
							<i className="fa-solid fa-bars"></i>
						</div>

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
					</div>
				</header>
				<div className={style.presentacion}>
					<p className={style.bienvenida}>Welcome</p>
					<h2>
						We are a <span>Team Of FullStack Developers</span>, TECHMASTERS
					</h2>
					<p className={style.descripcion}>
						"Your partners for a powerful online presence"
					</p>
					<a href="#portfolio">Go to Portfolio</a>
				</div>
			</div>
		</section>
	);
};

export default Landing;
