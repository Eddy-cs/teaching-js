// Abstraction
// Single Threaded (cajero)
// API

////////////////  Basic Javascript  ////////////////

//////// Constructor ////////

// class User {
//   constructor(email, nombre) {
//     this.email = email;
//     this.nombre = nombre;
//   }
// }

// let usuarioA = new User("byron@gmail.com", "Byron");
// let usuarioB = new User("Leslie@gmail.com", "Leslie");

// console.log(usuarioA);
// console.log(usuarioB);

//////// Anonymous functions ////////

// function hola() {
//   return "hola";
// }

// console.log(hola());

// (function (parameter) {
//   console.log(parameter);
// })("Hola anonimamente");

//////// Callback functions ////////
//Nota: (Una funcion dentro de otra funcion)

// -- Ejemplo regular

// function comoEstas(callbackF, name) {
//   console.log(callbackF() + name + " como estas?");
// }

// comoEstas(function () {
//   return "Hola ";
// }, "Leslie");

// -- Ejemplo con alert()

// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

////////////////  ES6  ////////////////

////////  Arrow funcitons  ////////

// () => "hola"

// (() => console.log("Hola"))();

// ((parameter) => console.log(parameter))("Hola anonimamente");

////////////////  Synchronous Javascript  ////////////////

// console.log("Esperando 1");
// console.log("Esperando 2");
// console.log("Esperando 3");
// console.log("Esperando 4");

////////////////  Asynchronous Javascript  ////////////////

//Note: Varios metodos funcionan de manera Asynchronous
// como fetch() json() blob() (return a promise)

// -- Ejemplo setTimeout()

// function vuelaElTiempo() {
//   console.log("vuela el tiempo");
// }

// console.log("Esperando 1");
// console.log("Esperando 2");

// setTimeout(vuelaElTiempo, 5000);

// console.log("Esperando 3");

// setTimeout(vuelaElTiempo, 7000);

// console.log("Esperando 4");

// -- Ejemplo setTimeout con anonymous callback arrow funcitons

// function vuelaElTiempo(tiempo) {
//   console.log("vuela el tiempo " + tiempo);
// }

// console.log("Esperando 1");
// console.log("Esperando 2");

// setTimeout(() => {
//   vuelaElTiempo("cinco segundos ya...");
// }, 5000);

// console.log("Esperando 3");

// setTimeout(() => {
//   vuelaElTiempo("siete segundos ya...");
// }, 7000);

// console.log("Esperando 4");

////////////////  Fetch  ////////////////

// Note: cuando usamos fetch (un promise) automaticamente en el
// .then recivimos el response como parametro en el callback
// -name response for convention

// fetch("../images/img0.jpg")
//   .then((response) => {
//     console.log(response);
//     return response.blob();
//   })
//   .then((response) => console.log(response));

////////////////  Promises ////////////////

// Note: los promises tienen 3 states (pending, resolve, reject)

// -- Fetch returns a promises

// function ffetch(link, object) {
//   if ("link y object usados conecta y responde nuestro request") {
//     resolve();
//   } else "link y object usados fallan en conectar";
//   {
//     reject();
//   }
// }

////////////////  HTTP Requests  ////////////////

//////////////// Fetch API endpoints  ////////////////

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

////////  Javascript topics with React  ////////

// -- Ternaary operator "? :"
// -- Higher Order Array Methods
