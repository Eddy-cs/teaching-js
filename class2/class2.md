# Basic JavaScript

## Anonymous functions

- Function declaration:

```javascript
function hola() {
  return "hola";
}
```

- Function invocation:

```javascript
console.log(hola());
```

- Anonymous function:

```javascript
(function (parameter) {
  console.log(parameter);
})("Hola anonimamente");
```

## Constructor

```javascript
class User {
  constructor(email, nombre) {
    this.email = email;
    this.nombre = nombre;
  }
}
```

- Instance:

```javascript
let usuarioA = new User("byron@gmail.com", "Byron");
let usuarioB = new User("Leslie@gmail.com", "Leslie");
```

- Output:

```javascript
console.log(usuarioA);
console.log(usuarioB);
```

## Callback functions

> Note: A function inside another function

- Example with a regular function:

```javascript
function comoEstas(callbackF, name) {
  console.log(callbackF() + name + " como estas?");
}
```

```javascript
comoEstas(function () {
  return "Hola ";
}, "Leslie");
```

- Example with an alert function:

```javascript
function greeting(name) {
  alert("Hello " + name);
}
```

```javascript
function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}
```

```javascript
processUserInput(greeting);
```

# ES6

## Arrow functions

- Syntax:

```javascript
() => "hola";
```

- Example:

```javascript
(() => console.log("Hola"))();
```

```javascript
((parameter) => console.log(parameter))("Hola anonimamente");
```

# Synchronous Javascript

- Output:

```javascript
console.log("Esperando 1");
console.log("Esperando 2");
console.log("Esperando 3");
console.log("Esperando 4");
```

# Asynchronous Javascript

> Note: Many methods work Asynchronously like fetch() json() blob() (return a promise)

## setTimeout()

- Example:

```javascript
function vuelaElTiempo() {
  console.log("vuela el tiempo");
}
```

```javascript
console.log("Esperando 1");
console.log("Esperando 2");
```

```javascript
setTimeout(vuelaElTiempo, 5000);
```

```javascript
console.log("Esperando 3");
```

```javascript
setTimeout(vuelaElTiempo, 7000);
```

```javascript
console.log("Esperando 4");
```

- Output:

```javascript
Esperando 1
Esperando 2
Esperando 3
Esperando 4
vuela el tiempo
vuela el tiempo
```

## setTimeout() with anonymous callback arrow functions

- Example:

```javascript
function vuelaElTiempo(tiempo) {
  console.log("vuela el tiempo " + tiempo);
}
```

```javascript
console.log("Esperando 1");
console.log("Esperando 2");
```

```javascript
setTimeout(() => {
  vuelaElTiempo("cinco segundos ya...");
}, 5000);
```

```javascript
console.log("Esperando 3");
```

```javascript
setTimeout(() => {
  vuelaElTiempo("siete segundos ya...");
}, 7000);
```

```javascript
console.log("Esperando 4");
```

- Output:

```javascript
Esperando 1
Esperando 2
Esperando 3
Esperando 4
vuela el tiempo cinco segundos ya...
vuela el tiempo siete segundos ya...
```

# Fetch

> Note: When we use fetch (a promise) automatically in the
> .then we receive the response as a parameter in the callback
> -name response for convention

- Example:

```javascript
fetch("../images/img0.jpg")
  .then((response) => {
    console.log(response);
    return response.blob();
  })
  .then((response) => console.log(response));
```

# Fetch API endpoints

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```javascript
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
```
