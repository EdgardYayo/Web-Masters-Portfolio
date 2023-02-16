
import React, { useRef } from "react";
import style from "./landing.module.css";
// import { seleccionar, responsiveMenu } from "../../utilis/Scrips";

const Landing = () => {

	let anchorSt = useRef()
	let anchorAb = useRef()
	let anchorSv = useRef()
	let anchorPf = useRef()
	let anchorCtc = useRef()

	function handleScroll (ref){
		if(ref === anchorSt){
			window.scrollTo(0,0)
		} else if(ref === anchorAb){
			window.scrollTo(0,650)
		}  else if(ref === anchorSv){
			window.scrollTo(0,1400)
		}  else if(ref === anchorPf){
			window.scrollTo(0,2800)
		}  else if(ref === anchorCtc){
			window.scrollTo(0,3750)
		}
	}
	
	
	

	return (
		<section id={style.inicio}>
			<div className={style.contenido}>
				<header>
					<div className={style["contenido-header"]}>
						<h1>TSM</h1>
						<nav id={style.nav}>
							<ul id={style.links}>
								<li>
									<button
										className={style.seleccionado}
										id="start"
										ref={anchorSt}
										onClick={() => handleScroll(anchorSt)}
									>
										START
									</button>
								</li>
								<li>
									<button
									className={style.seleccionado}
									id="about"
									ref={anchorAb}
									onClick={() => handleScroll(anchorAb)}
									>
										ABOUT US
									</button>
								</li>
								<li>
									<button 
									className={style.seleccionado}
									id="services"
									ref={anchorSv}
									onClick={() => handleScroll(anchorSv)}
									>
										SERVICES
									</button>
								</li>
								<li>
									<button
									className={style.seleccionado}
									 id="portfolio"
									ref={anchorPf}
									onClick={() => handleScroll(anchorPf)}

									>
										PORTFOLIO
									</button>
								</li>
								<li>
									<button
									className={style.seleccionado}
									id="contact"
									ref={anchorCtc}
									onClick={() => handleScroll(anchorCtc)}
									>
										CONTACT
									</button>
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
						We are a <span>Team Of FullStack Developers</span>, TECHSITEMASTERS
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
