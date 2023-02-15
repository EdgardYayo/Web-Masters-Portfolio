import React from "react";
import style from "./Skills.module.css";

const Skills = () => {

	return (
		<div className={style["contenedor-skills"]} id={style.skills}>
			<h3>SKILLS</h3>
			<div className={style.skill}>
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
			</div>
		</div>
	);
};

export default Skills;
