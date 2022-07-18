/**
 *@param {Integer} min rango minimo en el que se generra el numero.
 *@param {Integer} min rango minimo en el que se generara el numero.
 *
 *@function random(min,max)esta funcion tiene como proposito generar un numero aleatorio,
 *el permite que se seleccione unapregunta al azar del bloque de preguntas
 *de la categoria en que se encuentre el participante.
 *@return {Integer} Retorna un numero entero aleatorio.
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *@function siguientenivel() esta funcion tiene como proposito Evaluar si el participante ha elegido la respuesta correcta,
 *comparando el valor de la respuesta correcta con el Id del boton elegido.
 */

export function siguientenivel() {
  let cont = parseInt(localStorage.getItem("puntaje")) + 1000;
  let j = parseInt(localStorage.getItem("nivel")) + 1;
  localStorage.setItem("puntaje", cont);
  localStorage.setItem("nivel", j);
  localStorage.setItem("score", localStorage.getItem("puntaje"));
  alert(
    `CORRECTOOOO!!! su puntaje es de ${localStorage.getItem("puntaje")} ptos`
  );
}
/**
 * @function reinicio() esta funcion tiene como proposito reiniciar los niveles y los puntages del jugador al escoger una opcion erronea.
 */

export function reinicio() {
  alert(
    ":( Lo siento " +
      localStorage.getItem("nombre") +
      "Mejor suerte para la proxima, tu puntaje fue " +
      localStorage.getItem("puntaje")
  );
  localStorage.setItem("score", localStorage.getItem("puntaje"));
  localStorage.setItem("nivel", "0");
  localStorage.setItem("puntaje", "0");
}

/**
 *
 * @param {array} array Recibe la posicion de la respuesta, en el arreglo de la pregunta seleccionada.
 * @returns retorna una etiqueta de tipo label con el enunciado de la respuesta seleccionada.
 * @function labelCreater(array) esta funcion tiene como proposito crear una etiqueta de tipo label con el enunciado de una respuesta.
 */

export function labelCreater(array) {
  let label = document.createElement("label");
  label.textContent = array;
  label.className = "labels";
  return label;
}

/**
 *
 * @param {text} text recibe un texto, el cual corresponde al Id que va a tener este radiobutton mediante el cual se evaluara si es o no correcta la respuesta en su lugar.
 * @returns retorna un radiobuton con un id para ser evaluado
 * @function radioButtonCreater(text) esta funcion tiene como proposito crear un radiobutton mediante el cual se evalua si es correcto o no la seleccion de la respuesta en su posicion.
 */

export function radioButtonCreater(text) {
  let button = document.createElement("input");
  button.className = "radiob";
  button.type = "radio";
  button.checked = false;
  button.id = text;
  return button;
}

/**
 *
 * @param {text} text recibe un texto, el cual corresponde al Id que va a tener este radiobutton mediante el cual se evaluara si es o no correcta la respuesta en su lugar.
 * @returns retorna un radiobuton con un id para ser evaluado
 * @function buttonCreater(text) esta funcion tiene como proposito crear un radiobutton mediante el cual se evalua si es correcto o no la seleccion de la respuesta en su posicion.
 */
export function ButtonCreater(text) {
  let button = document.createElement("button");
  button.className = "button";
  button.innerText = text;
  return button;
}

/**
 *
 * @param {*} button Recibe una etiqueta de tipo radiobutton con sus caracteristicas.
 * @param {array} array  Recibe una posicion de arreglo de preguntas en la cual se encuentra la letra correspondiente a la respuesta correcta.
 * @function verificaton() esta funcion tiene como proposito verificar que el id del radiobutton coincida
 * con la letra ubicada en la posicion del arreglo que se para en el parametro array con el fin de que coincidan o no para definir si es o no correcta la seleccion.
 */

export function verificacion(button, array) {
  if (button.checked) {
    if (array === button.id) {
      siguientenivel();
    } else {
      reinicio();
    }
    location.reload(false);
  }
}

/**
 *
 * @returns esta funcion retorna una etiqueta h1 con un texto que hace de titulo.
 * @function Titulo() esta funcion tiene como proposito crear una etiqueta de tipo h1 para generar un titulo.
 */

export function Titulo() {
  let titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.textContent = "BIENVENIDO AL JUEGO DEL SABER";
  return titulo;
}

/**
 *
 * @param {*} button  Recibe una etiqueta de tipo radiobutton con sus caracteristicas.
 * @param {*} label Recibe una etiqueta de tipo label.
 * @returns recibe un contenedor de tipo P que contiene un radiobutton y un label que corresponden a las respuestas de las preguntas formuladas
 */

export function creatorP(button, label) {
  const p = document.createElement("p");
  p.className = "p";
  p.append(button, label);
  return p;
}

/**
 *
 * @param {*} array recibe una posicion de un arreglo, el cual es equivalente a la pregunta a generar.
 * @returns retorna una etiqueta de tipo h2 que contiene el texto de la pregunta.
 * @function creatorPregunta(array) esta funcion tiene como proposito crear una etiqueta de tipo h2 para generar una pregunta.
 */
export function creatorPregunta(array) {
  const pregunta = document.createElement("h2");
  pregunta.className = "pregunta";
  pregunta.textContent = array;
  return pregunta;
}
/**
 * @function divCreate() esta funcion tiene como proposito crear un contenedor de tipo div.
 * @returns esta funcion Retorna un contenedor de tipo div.
 */

export function divCreate() {
  let body = document.createElement("div");
  body.className = "div";
  return body;
}

/**
 * @function puntuacion() esta funcion tiene como proposito almacenar en un arreglo la puntuacion del jugador y su nombre.
 * @param {*} array arreglo en el cual se almacenara el nombre y el puntaje total del jugador
 * @returns  retorna el arreglo ya lleno con los datos del jugador de la ultima ronda
 */

export function puntuacion(array) {
  array.push(localStorage.getItem("nombre"), localStorage.getItem("score"));
  return array;
}
