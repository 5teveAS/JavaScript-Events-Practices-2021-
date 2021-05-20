// console.log('Funciona Correctamente');

//querySelector, los querys funcionan muy parecidos a ccs, si es una clase se llama con un punto, si un id con un #
const heading = document.querySelector('.header__texto h2'); // retorna 0 o un elementos 
//en firefox developer, podemos ver muchas opciones para aplicar al objeto heading como la de acontinuacion →
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
// Tambien se puede ver la .classList que permite eliminar o agregar clases.
console.log(heading);
// console.log(heading);


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //este query te mandara todos los que concuerden con este selector 
//Otra forma de hacerlo →//const enlaces = document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo Texto para Enlace'; //este query te mandara todos los que concuerden con este selector 
//console.log(enlaces);
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase'); //Agregar nuevas clases
enlaces[0].classList.remove('navegacion__enlace');
//enlaces[0].href = 'http://google.com';

//getElementById

// const heading2  = document.getElementById('heading');//con get element sin embargo ya no se utiliza tanto es las nuevas versiones.
// console.log(heading2);

//Vamos a crear html con javaScript, por ejemplo cuando ej facebook se publica un nuevo estado, el profe dice que utiliza algo igual o similar a la siguiente funcion.

//Generar un nuevo enlace con javAsCRIPT

const nuevoEnlace = document.createElement('A') //en javaScript mas bien se recomienda hacerlo con mayusculas .

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace');

//<a href="nosotros.html" class ="nuevo-enlace">Nosotros</a> //asi es como se veria lo que hicimos arriba pero en html
console.log(nuevoEnlace);

//Agregarlo al documento.
// const navegacion = document.querySelector('.navegacion'); //Selecciona la primera, vemos que no selecciona la segunda que es la de footer de la pagina. Es porque querySelector selecciona el primero que ve.
// navegacion.appendChild(nuevoEnlace);  //funcion que nos permite agregar una variable y asignarla a otro lugar.

//Eventos

// console.log(1);

// // window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML esten listos.
// //     console.log(2);

// // }); // load, lo que hace es esperar a que la ventana esta lista. Window, es lo que se conoce como el objeto global, es todo el documento, window es un nivel mas alto que document
// window.addEventListener('load', imprimir); // load, lo que hace es esperar a que la ventana esta lista. Window, es lo que se conoce como el objeto global, es todo el documento, window es un nivel mas alto que document

// window.onload = function() { //Esta es otra fomra de hacerlo.
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // El DOMContentLoaded solamente espera a que se descargue el HTML, pero a diferencia del load este tampoco espera el CSS o las imagenes. Y por eso es mas rapido que los de arriba. Normalmenmte este es mas utilizado porque no siempre hay que modificar el CSS y por eso no hace falta esperar mas.
//     console.log(4);
// })

// console.log(5);

// function imprimir () {
//     console.log(2);
// }

// window.onscroll = function() { //aqui tambien podriamos agregar como parametro "evento" como en las linea de abajo, siempre que ocurre un evento y nos daria informacion util.
//     console.log('Scrolling...'); //Se va a ejecutar cada ves que se le da scroll a la pagina.
// }




//Seleccionar elementos y asociarles un evento.
// const btnEnviar = document.querySelector('.boton--primario') //recordar que este selecciona maximo un elemento.
// btnEnviar.addEventListener('click', function(evento) { //este evento se pasa en automatico hacia el "colback" o le escuche, cuando registramos una funcion con addEventListener
//     console.log(evento); //evento.target nos dice a que elemento dimos click
//     evento.preventDefault(); //no lo va a enviar, que es la accion por default de un submit, que es llevarnos a otra pagina, y dandonos el error de que actualiza la actual
//     //IMPORTANTE ESTE CODIGO DE PREVENTDEFAULT Y ES USADO PARA VALIDAR LOS CAMPOS DE DEL FORMULARIO.
//     //Validar un Formulario




//     console.log('Enviando Formulario...');
// });


//Eventos de los inputs y los TextArea

const datos = {  //esto va a ser un objeto global
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre'); //si queremos comprobar el id, simplemente lo escribimos en la consola y solito se marca.
const email = document.querySelector('#email'); //si queremos comprobar el id, simplemente lo escribimos en la consola y solito se marca.
const mensaje = document.querySelector('#mensaje'); //si queremos comprobar el id, simplemente lo escribimos en la consola y solito se marca.
const formulario = document.querySelector('.formulario'); 
// nombre.addEventListener('change', function() {
//     console.log('escribiendo...');
// })
nombre.addEventListener('input', leerTexto); //esta es una validacion mas en tiempo real y se ejecuta cada ves que se escribe en nombre.

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

//Evento de Submit
//Con este codigo de aqui y el de arriba que parecen ser lo mismo, solo uno va a funcionar y va a funcionar el de arriba.
//Pero por buenas practicas es mejor hacer este de submit, si vas a escuchar por un clic como el de arriba puede ser cualquier elemento hasta un texto
//Aqui hiba la variable de arriba formulario.
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    

    //Validar el formulario

    //Con dystructuring extraemos los valores del objeto "datos", que te permite extraer los elementos de un arreglo pero tambien crear las variables todo en  un mismo paso;
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email ==='' || mensaje==='' ) {
       // console.log('Todos los campos son obligatorios');
      // mostrarError('Todos los campos son obligatorios'); 
      mostrarAlerta('Todos los campos son obligatorios', true); 
       return; // Corta la ejecucion del codigo; no se imprime nada fuera del if;
    }
    // console.log(nombre);
    // console.log(email); 
    // console.log(mensaje); 
    //Enviar el formulario
   // mostrarMensaje('Mensaje enviado correctamente');
   mostrarAlerta('Mensaje enviado correctamente');    
    //console.log('Enviando Formulario');
}); //Siempre es obligatorio que en los formularios este el input o el button de Submit


function leerTexto(e) { //NOTA → ESTE CODIGO LO PODEMOS UTILIZAR EN TODOS NUESTROS FORMULARIOS
  // console.log('escribiendo...');
  //console.log(e.target.value);

  datos[e.target.id] = e.target.value; //rellenar el objeto con los datos del formulario. Tambien IMPORTANTE, que el id sea el mismo nombre del objeto datos


  //console.log(e.target);

//   console.log(datos);
}

//Modo refactoring → que es resumir el codigo una ves este completado y funcionando.
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild( alerta ); 
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

//Sin refactoring →
// //muestra que se envio el mensaje correctamente
// function mostrarMensaje(mensaje) {
//     // console.log(mensaje);
//    // const alerta = document.createElement('P');
//     //alerta.textContent = mensaje;
//     // alerta.classList.add('correcto');
//     // formulario.appendChild( alerta ); //Para que lo agregue al HTML

//     // Que desaparezca despues de 5 segundos

// }

// //muestra un error en pantalla
// function mostrarError(mensaje) {
//     // console.log(mensaje);
//    // const error = document.createElement('P');
//     //error.textContent = mensaje;
//     // error.classList.add('error');

//     // formulario.appendChild( error ); //Para que lo agregue al HTML

//     // Que desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }

