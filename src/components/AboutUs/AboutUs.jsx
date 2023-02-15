import React from "react";
import style from "./AboutUs.module.css"

const AboutUs = () => {
	return (
		<section id={style.sobremi}>
			<div className={style["contenedor-foto"]}>
				<img src="" alt="holis" />
			</div>
			<div className={style.sobremi}>
				<p className={style["titulo-seccion"]}>About us</p>
				<h2>
					Hi We are <span>TechMasters</span>
				</h2>
				<h3>FullStacks Developers</h3>
				<p>
					Our team of fullstack web developers are proficient in key
					technologies like HTML, CSS, and JavaScript, working with databases
					like MySQL, Oracle, and MongoDB. We use frameworks like AngularJS,
					React, Amber, and EmberJS, fix compatibility issues, and use testing
					tools like Webpack, Jasmine, and Karma. In addition, we focus on the
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
				<a href="#">Download CV</a>
			</div>
		</section>
	);
};

export default AboutUs;
