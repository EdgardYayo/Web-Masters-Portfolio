import React, { useRef } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef()

	const sendEmail = (e) => {
		emailjs
		  .sendForm(
			"service_3t7s8jm",
			"template_vq1ic9b",
			form.current,
			"6RqoMuPPa1F5RqTPI"
		  )
		  .then(
			(result) => {
			  console.log(result.text);
			},
			(error) => {
			  console.log(error.text);
			}
		  );
		  alert("se envio tu mensaje")
		  e.target.reset();
		  }

	return (
		<section id={style.contacto}>
			<h3 className={style["titulo-seccion"]}>contact us now</h3>
			<div className={style["contenedor-form"]}>
				<form ref={form} onSubmit={sendEmail}>
					<div className={style.formNameEmail}>
						<div className={style.txtArea1}>
						<input
							type="text"
							placeholder="Nombre Completo *"
							name="name"
						/>
						</div>
						<div className={style.txtArea}>
						<input
							type="email"
							placeholder="Dirección de Email"
							name="email"
						/>
						</div>
					</div>
					<div className={style.fila}>
						<input type="text" placeholder="Tema..." className={style["input-full"]} name="tema"/>
					</div>
					<div className={style.fila}>
						<textarea
							name="message"
							id=""
							cols="30"
							rows="10"
							placeholder="Tu Mensaje..."
							className={style["input-full"]}
						></textarea>
					</div>

					<input type="submit" value="Enviar Mensaje" className={style.btnSubmit}/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
