import React from "react";

const Services = () => {
	return (
		<section id="servicios">
			<h3 class="titulo-seccion">OUR SERVICES</h3>
			<div class="fila">
				<div class="servicio">
					<span class="icono">
						{" "}
						<i class="fa-solid fa-code"></i>
					</span>
					<h4>Website Design</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Creation of visually attractive and functional websites.</p>
				</div>
				<div class="servicio">
					<span class="icono">
						<i class="fa-solid fa-file-code"></i>
					</span>
					<h4>Mobile apps</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Development of intuitive and efficient mobile applications.</p>
				</div>
				<div class="servicio">
					<span class="icono">
						<i class="fa-solid fa-arrow-trend-up"></i>
					</span>
					<h4>SEO positioning</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Improved visibility and search engine positioning.</p>
				</div>
			</div>
			<div class="fila">
				<div class="servicio">
					<span class="icono">
						<i class="fa-solid fa-database"></i>
					</span>
					<h4>Site Hosting</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Secure and reliable hosting of your website.</p>
				</div>
				<div class="servicio">
					<span class="icono">
						<i class="fa-solid fa-palette"></i>
					</span>
					<h4>Graphic designer</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Creation of attractive and functional designs for brands.</p>
				</div>
				<div class="servicio">
					<span class="icono">
						<i class="fa-solid fa-person-circle-question"></i>
					</span>
					<h4>External consultant</h4>
					<hr />
					<ul class="servicios-tag">
						<li>Web</li>
						<li>Graphic</li>
						<li>SEO</li>
					</ul>
					<p>Expert advice to optimize your business.</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
