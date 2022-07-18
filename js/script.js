import {
  creatorP,
  creatorPregunta,
  labelCreater,
  random,
  radioButtonCreater,
  verificacion,
  Titulo,
  divCreate,
  ButtonCreater,
  puntuacion,
} from "./funciones.js";
import { categorias, tabla_puntuaciones } from "./preguntas.js";


/**
 * a continuacion encontramos un bloque de validaciones, con el proposito de evaluar los datos almacenados en la localStorage.
 */

let punt ="0";
if (
  localStorage.getItem("puntaje") === null ||
  localStorage.getItem("puntaje") >= 5000
) {
  localStorage.setItem("puntaje", punt);
}
if (localStorage.getItem("nombre") === null) {
  localStorage.setItem("nombre", "");
}
if (tabla_puntuaciones.length == 0) {
  puntuacion(tabla_puntuaciones);
}

let j = "0";
const numrandom = random(0, 4);
if (
  localStorage.getItem("nivel") === null ||
  localStorage.getItem("nivel") > 4
) {
  localStorage.setItem("nivel", j);
  puntuacion(tabla_puntuaciones);
  alert(
    "FELICITACIONESSSS!!! " +
      localStorage.getItem("nombre") +
      " Terminaste el juego con la puntuacion maxima, tu puntaje fue " +
      localStorage.getItem("score")
  );
}


let nivel = localStorage.getItem("nivel");
let preguntaaleatoria = categorias[nivel][numrandom];


/**
 * @function preguntas() la funcion preguntas tiene como proposito crear los elementos que veremos en el navegador,
 * como radiobuttons, labels, titulos y demas, a su vez llama las funciones que dan funcionamiento al juego.
 */
function preguntas() {

  const container = document.querySelector("body");

  var label = labelCreater(preguntaaleatoria[1]);
  var label1 = labelCreater(preguntaaleatoria[2]);
  var label2 = labelCreater(preguntaaleatoria[3]);
  var label3 = labelCreater(preguntaaleatoria[4]);

  const radiobuton = radioButtonCreater("a");
  radiobuton.addEventListener("click", () => {
    verificacion(radiobuton, preguntaaleatoria[5]);
  });
  const radiobuton1 = radioButtonCreater("b");
  radiobuton1.addEventListener("click", () => {
    verificacion(radiobuton1, preguntaaleatoria[5]);
  });
  const radiobuton2 = radioButtonCreater("c");
  radiobuton2.addEventListener("click", () => {
    verificacion(radiobuton2, preguntaaleatoria[5]);
  });
  const radiobuton3 = radioButtonCreater("d");
  radiobuton3.addEventListener("click", () => {
    verificacion(radiobuton3, preguntaaleatoria[5]);
  });

  const p = creatorP(radiobuton, label);
  const p1 = creatorP(radiobuton1, label1);
  const p2 = creatorP(radiobuton2, label2);
  const p3 = creatorP(radiobuton3, label3);

  let titulo = Titulo();
  const pregunta = creatorPregunta(preguntaaleatoria[0]);

  const respuestas = divCreate();
  respuestas.append(pregunta, p, p1, p2, p3);

  const body = divCreate();
  body.append(titulo, respuestas);

  container.append(body);
}

/**
 * @function menu() la funcion menu tiene como proposito darnos la opcion de ver el puntaje y de iniciar el juego ademas de solicitar nuestro nombre.
 */
function menu() {
  const container = document.querySelector("body");

  const inputnombre = document.createElement("input");
  inputnombre.type = "text";

  let labelingresoNombre = labelCreater("Ingrese su nombre");

  let pNombre=creatorP(labelingresoNombre,inputnombre)

  let startButton = ButtonCreater("Iniciar juego");
  startButton.addEventListener("click", () => {
    localStorage.setItem("nombre", inputnombre.value);
    preguntas();
  });

  let puntajes = ButtonCreater("puntajes");
  puntajes.addEventListener("click", () => {
    alert(tabla_puntuaciones);
  });

  const menu = divCreate();
  menu.append(pNombre,startButton, puntajes);
  container.append(menu);
}

if (localStorage.getItem("nivel") == 0 || localStorage.getItem("nivel") > 4) {
  menu();
} else {
  preguntas();
}
