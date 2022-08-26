# Basic JavaScript

## Variables

Variable is a container for a value that can be used through out your code.

In JavaScript, you can create a variable using `let` or `var` keyword.

```javascript
let texto = "texto";
let numero = 45 + 54;
let boolean = false;
```

## Types of Data

JavaScript provides different types of data.

### Array

An Array is a special variable, which can hold more than one value at a time.

```javascript
let ejemplo = [654, "hola", false, [654, "hola2", false]];
```

### Object

An Object is a collection of related data.

```javascript
let div = {
  height: "5465px",
  innerHTML: "ejemplo",
  botton: "ejemplo2",
  sayHola: function () {
    return "hola";
  },
  sayAdios: function adios() {
    return "Adios";
  },
};
```

## Console

The Console is the easiest way to check your JavaScript code. You can use `console.log` method to print out a message.

```javascript
console.log("Hola");
```

## Executing a function in an object

```javascript
let nuevaFuncion = div.sayHola();
console.log(nuevaFuncion);
console.log(nuevaFuncion());
```

## Accessing a value in an Array

```javascript
let ejemplo2 = [654, "hola", false, [654, "hola2", false]];
console.log(ejemplo2[3][0]);
```

## Modifying the HTML

```javascript
let undiv = document.querySelector(".ejemplo");
console.log(undiv);
undiv.innerText = "Adiooos";
undiv.style.height = "300px";
```

## Functions

Function is a set of statements that perform a task or calculate a value.

```javascript
function mostrarEnConsola() {
  console.log("hello");
  return "Resultado";
}

console.log(mostrarEnConsola());
```

## Parameters and Arguments

Parameters are variables listed as a part of the function definition.
Arguments are the values received by the function when you call it.

```javascript
function obtenerInfoUsuario(numeroDelUsuario, textoDeUsuario) {
  let usuario = {
    numero: numeroDelUsuario,
    texto: textoDeUsuario,
  };

  usuario.numero = usuario.numero + 100;
  let emailGenerado = [numeroDelUsuario, textoDeUsuario].join("@") + ".com";
  console.log(emailGenerado);

  return usuario;
}

console.log(obtenerInfoUsuario(546, "Estudiante"));
console.log(obtenerInfoUsuario(547, "Profesor"));
console.log(obtenerInfoUsuario(548, "Enfermera"));
```

## Inheritance

Inheritance is the concept of one object getting access to the properties and methods of another object.

```javascript
ejemplo = {
  variable: "texto1,texto2,texto3",
  prototype: {'Un objeto que pasa todos los metodos a la variable 'ejemplo''},
};

console.log({ ejemplo3 });
```

## Truthy and Falsy

```javascript
function holaOAddios(saludo) {
  if (saludo == "10") {
    return "Es un Hola";
  } else if (saludo === "Adios") {
    return "Es un Adios";
  } else {
    return "Ni hola ni Adios";
  }
}

console.log(holaOAddios(10));
```

## Loops

A loop is used for executing a block of statements repeatedly until a given condition returns false.

```javascript
function numeroDeUsuarios() {
  let usuarios = ["byron", "leslie", "eddy"];
  let conteo = 0;

  for (let i = 0; i < usuarios.length; i++) {
    conteo += 1;
  }

  return conteo;
}

console.log(numeroDeUsuarios());
```
