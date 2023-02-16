import React from "react";
import style from "./AboutUs.module.css";
import foto from "../../img/foto.jpg"

const AboutUs = () => {
	return (
		<section id={style.sobremi}>
			<div className={style["contenedor-foto"]}>
				<img src={foto} alt="holis" />
			</div>
			<div className={style.sobremi}>
				<p className={style["titulo-seccion"]}>About us</p>
				<h2>
					Hi We are <span>TechSiteMasters</span>
				</h2>
				<h3>FullStacks Developers</h3>
				<p>
					Our team of fullstack web developers are proficient in key
					technologies like HTML, CSS, and JavaScript, working with databases
					like PostgresSQL and MongoDB. We use frameworks like ReactJS, Redux, Express,
					NodeJS, Bootstrap and Material UI, fix compatibility issues, and use testing
					tools like Jest and Mocha. In addition, we focus on the
					usability, accessibility and security of your website. We also
					specialize in SEO to improve search engine positioning and digital
					marketing to achieve a greater online presence. We have graphic
					designers, video editors and content specialists to make your site
					attractive, original and relevant to your audience. In short, our team
					of fullstack web developers offer end-to-end, customized solutions to
					help your business achieve its online goals.
				</p>
				{/*  <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam a
            beatae natus.
        </p> */}
				{/* <a href="#">Download CV</a> */}
			</div>
		</section>
	);
};

export default AboutUs;
