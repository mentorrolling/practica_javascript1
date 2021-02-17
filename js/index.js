//variables de los datos de la card

let nombreCompleto = prompt("Ingrese su nombre y apellido");
let edad = prompt("Ingrese su edad");
let actividad = prompt("¿Qué te gusta hacer?");
let deporte = prompt("¿Practicas algun deporte?");

// //div de la card
let card = document.getElementById("container__card");
cardContent = document.getElementById("card__input");

let datos = document.createElement("div");
let datosUsuario = `<p>Nombre: ${nombreCompleto}</p>
<p>Edad: ${edad}</p> 
<p>Actividad: ${actividad}</p>
<p>Deporte: ${deporte}</p>
`;
//acoplar datos al card
datos.innerHTML = datosUsuario;
cardContent.append(datos);
