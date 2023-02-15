import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
	return (
		<section id={style.contacto}>
			<h3 className={style["titulo-seccion"]}>contact us now</h3>
			<div className={style["contenedor-form"]}>
				<form action="">
					<div className={style.fila.mitad}>
						<input
							type="text"
							placeholder="Nombre Completo *"
							className={style["input-mitad"]}
						/>
						<input
							type="email"
							placeholder="Dirección de Email"
							className={style["input-mitad"]}
						/>
					</div>
					<div className={style.fila}>
						<input type="text" placeholder="Tema..." className={style["input-full"]} />
					</div>
					<div className={style.fila}>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Tu Mensaje..."
							className={style["input-full"]}
						></textarea>
					</div>

					<input type="submit" value="Enviar Mensaje" className={style["btn-enviar"]} />
				</form>
			</div>
		</section>
	);
};

export default Contact;
