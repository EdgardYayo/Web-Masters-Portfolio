import React from "react";

const Contact = () => {
	return (
		<section id="contacto">
			<h3 class="titulo-seccion">contact us now</h3>
			<div class="contenedor-form">
				<form action="">
					<div class="fila mitad">
						<input
							type="text"
							placeholder="Nombre Completo *"
							class="input-mitad"
						/>
						<input
							type="email"
							placeholder="Dirección de Email"
							class="input-mitad"
						/>
					</div>
					<div class="fila">
						<input type="text" placeholder="Tema..." class="input-full" />
					</div>
					<div class="fila">
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Tu Mensaje..."
							class="input-full"
						></textarea>
					</div>

					<input type="submit" value="Enviar Mensaje" class="btn-enviar" />
				</form>
			</div>
		</section>
	);
};

export default Contact;
