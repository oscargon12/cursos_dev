function recogerDatos(evento) {
	// preventDefault previene que se envíe el formulario
	evento.preventDefault();

	var nombre = document.querySelector("#nombre").value;
	//El document.query selector me sirve para ubicar el id o parte del documento que requiera
	var fecha = document.querySelector("#fecha").value;
	var edad = 2020 - fecha;
	var bienvenida = document.querySelector("#bienvenida");
	var mensajeEdad;
	var mensaje;

	if (edad > 30) {
		mensajeEdad = "¡Abuelo!";
	}
	else if (edad < 30){
		mensajeEdad = "¡Jovenzuelo!"
	}
	else {
		mensajeEdad = "¡Imposible!"
	}


	mensaje = "<p>Hola, " + nombre + ", tienes " + edad + " años, " + mensajeEdad + "</p>";

	bienvenida.innerHTML = mensaje;
	//console.log("Hola, " + nombre + ", tienes " + edad + " años");
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogerDatos);