// --------  DOM object model

let domcume = {
  html: {
    head: { meta: "src" },
    body: {
      div: { class: "titulo", content: "Hola" },
      h1: { class: "ejemplo", content: "Algo de contenido" },
    },
  },
};

// --------  Objeto consola

// console.log("Hola");

// --------  Data types

let variable = "texto";
let number = 45 + 54;
let boolean = false;

variable = "Nuevo texto";

// const

// -- Array

// let coleccion = [654, "hola", false, [654, "hola2", false]];

// -- Object

// let div = {
//   height: "5465px",
//   innerHTML: "ejemplo",
//   botton: "ejemplo2",
//   sayHola: function () {
//     return "hola";
//   },
//   sayAdios: function adios() {
//     return "Adios";
//   },
// };

// let nuevaFuncion = div.sayHola();

// console.log(nuevaFuncion);
// console.log(nuevaFuncion());

//  --------  Ejecutar una funcion dentro de un objeto

// console.log(div.sayHola());
// console.log(div.sayHola());
// console.log(div.sayAdios());

//  --------  Acceder a un valor dentro de un Array

// let ejemplo2 = [654, "hola", false, [654, "hola2", false]];
// console.log(ejemplo2[3][0]);

// --------  Modificacion del html

let undiv = document.querySelector(".ejemplo");
console.log(undiv);
undiv.innerText = "Adiooos";
// undiv.style.height = "300px";

// --------  Functions

// function mostrarEnConsola() {
//   console.log("hello");
//   return "Resultado";
// }

// console.log(mostrarEnConsola());

// -- Ejemplo de parameters/arguments

// function obtenerInfoUsuario(numeroDelUsuario, textoDeUsuario) {
//   let usuario = {
//     numero: numeroDelUsuario,
//     texto: textoDeUsuario,
//   };

//   usuario.numero = usuario.numero + 100;
//   let emailGenerado = [numeroDelUsuario, textoDeUsuario].join("@") + ".com";
//   console.log(emailGenerado);

//   return usuario;
// }

// console.log(obtenerInfoUsuario(546, "Estudiante"));
// console.log(obtenerInfoUsuario(547, "Profesor"));
// console.log(obtenerInfoUsuario(548, "Enfermera"));

// -- Ejemplo de inheritance

// ejemplo = {
//   variable: "texto1,texto2,texto3",
//   prototype: {'Un objeto que pasa todos los metodos a la variable 'ejemplo''},
// };

// console.log({ ejemplo3 });

// -- Ejemplo usando JavaScript methods

// let ejemplo = "texto1,texto2,texto3";
// console.log(ejemplo);
// console.log(ejemplo.split(","));

// let ejemplo4 = ["a", "b"];

// console.log(ejemplo4.join("xxxx"));
// console.log(["a", "c"].join("xxxx"));

//---- Conditional statements
let texto = "hola";

function holaOAddios(saludo) {
  if (saludo === "Hola") {
    return "Es un Hola";
  } else if (saludo === "Adios") {
    return "Es un Adios";
  } else {
    return "Ni hola ni Adios";
  }
}

console.log(holaOAddios(texto));

//----- Truthy/Falsey

// function holaOAddios(saludo) {
//   if (saludo == "10") {
//     return "Es un Hola";
//   } else if (saludo === "Adios") {
//     return "Es un Adios";
//   } else {
//     return "Ni hola ni Adios";
//   }
// }

// console.log(holaOAddios(10));
//Hola
//------ Loop Statements

function numeroDeUsuarios() {
  let usuarios = ["byron", "leslie", "eddy"];
  let conteo = 0;

  for (let i = 0; i < usuarios.length; i++) {
    conteo += 1;
  }

  return conteo;
}

console.log(numeroDeUsuarios());
