import React from "react";
import style from "./landing.module.css";

const Landing = () => {
	return (
		<section id="inicio">
			<div className={style.contenido}>
				<header>
					<div className={style.contenido_header}>
						<h1>/TM/</h1>
						<nav id="nav" className="">
							<ul id="links">
								<li>
									<a
										href="#inicio"
										className="seleccionado"
										onclick="seleccionar(this)"
									>
										START
									</a>
								</li>
								<li>
									<a href="#sobremi" onclick="seleccionar(this)">
										ABOUT US
									</a>
								</li>
								<li>
									<a href="#servicios" onclick="seleccionar(this)">
										SERVICES
									</a>
								</li>
								<li>
									<a href="#portfolio" onclick="seleccionar(this)">
										PORTFOLIO
									</a>
								</li>
								<li>
									<a href="#contacto" onclick="seleccionar(this)">
										CONTACT
									</a>
								</li>
							</ul>
						</nav>

						{/*  Icono del menu responsive */}

						<div id="icono-nav" onclick="responsiveMenu()">
							<i className="fa-solid fa-bars"></i>
						</div>

						<div className="redes">
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
				<div className="presentacion">
					<p className="bienvenida">Welcome</p>
					<h2>
						We are a <span>Team Of FullStack Developers</span>, TECHMASTERS
					</h2>
					<p className="descripcion">
						"Your partners for a powerful online presence"
					</p>
					<a href="#portfolio">Go to Portfolio</a>
				</div>
			</div>
		</section>
	);
};

export default Landing;