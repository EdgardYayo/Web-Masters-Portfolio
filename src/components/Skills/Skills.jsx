import React from "react";
import style from "./Skills.module.css";
import { SiTailwindcss, SiRedux, SiTypescript, SiExpress, SiPostgresql, SiJavascript, SiAdobephotoshop, SiAdobeaftereffects } from 'react-icons/si';
import { DiMongodb, DiHtml5, DiCss3,DiSass, DiTrello } from "react-icons/di"
import { FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa"
import { FiFigma } from "react-icons/fi"

const Skills = () => {

	return (
		<div className={style["contenedor-skills"]} id={style.skills}>
			<h3>SKILLS</h3>
			<div className={style.ico_container}>
			<FaReact id={style.ico}/>
			<SiJavascript id={style.ico}/>
			<DiHtml5 id={style.ico}/>
			<DiCss3 id={style.ico}/>
			<DiSass id={style.ico}/>
			<SiTailwindcss id={style.ico}/>
			<SiRedux id={style.ico}/>
			<DiMongodb id={style.ico}/>
			<SiTypescript id={style.ico}/>
			<SiExpress id={style.ico}/>
			<FaNodeJs id={style.ico}/>
			<SiPostgresql id={style.ico}/>	
			<FiFigma id={style.ico}/>	
			<SiAdobephotoshop id={style.ico}/>
			<SiAdobeaftereffects id={style.ico}/>
			<FaGitAlt id={style.ico}/>
			<DiTrello id={style.ico}/>	
			</div>
		</div>
	);
};

export default Skills;















{/* <div className={style.skill}>
				<div className={style.info}>
					<p>
						<span className={style.lista}> </span>Html & Css
					</p>
					<span className={style.porcentaje}>95%</span>
				</div>

				<div className={style.barra}>
					<div className={style["barra-progreso1"]} id={style.html}></div>
				</div>
			</div>
			<div className={style.skill}>
				<div className={style.info}>
					<p>
						<span className={style.lista}> </span>Javascript
					</p>
					<span className={style.porcentaje}>90%</span>
				</div>

				<div className={style.barra}>
					<div className={style["barra-progreso2"]} id={style.js}></div>
				</div>
			</div>
			<div className={style.skill}>
				<div className={style.info}>
					<p>
						<span className={style.lista}> </span>Databases
					</p>
					<span className={style.porcentaje}>90%</span>
				</div>

				<div className={style.barra}>
					<div className={style["barra-progreso3"]} id={style.bd}></div>
				</div>
			</div>
			<div className={style.skill}>
				<div className={style.info}>
					<p>
						<span className={style.lista}> </span>Photoshop
					</p>
					<span className={style.porcentaje}>85%</span>
				</div>

				<div className={style.barra}>
					<div className={style["barra-progreso4"]} id={style.ps}></div>
				</div>
			</div> */}