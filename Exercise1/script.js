let images = [
  { description: "NoPE", link: "./images/img4.jpg" },
  { description: "Elliot", link: "./images/img0.jpg" },
  { description: "Cute", link: "./images/img1.jpg" },
  { description: "NOPE", link: "./images/img4.jpg" },
  { description: "NOPE", link: "./images/img4.jpg" },
  { description: "Elliot", link: "./images/img2.jpg" },
  { description: "Cute", link: "./images/img3.jpg" },
  { description: "NOPE", link: "./images/img4.jpg" },
  { description: "Elliot", link: "./images/img5.jpg" },
  { description: "Cute", link: "./images/img6.jpg" },
  { description: "Elliot", link: "./images/img7.jpg" },
  { description: "Cute", link: "./images/img8.jpg" },
  { description: "Nope", link: "./images/img4.jpg" },
];

// NOTA: Para acceder a las propiedades dentro del array
// tienen que usar un mix de lo que vimos acerca de
// acceder a data dentro de arrays y objetos
// Ejemplo: images[0].description nos devuelve "NoPE"

// -----Parte 1

// - Acceder a el texto de los <h1> con DOM methods
// - Tomar ese texto del elemento <h1> y usar javascript methods
// para remover el character "*" que se encuentra dañando los titulos (M*r.R*obo*t y Cu*t*e*)
// - Una vez que tengan una variable con el texto arreglado (M*r.R*obo*t --> Mr.Robot)
// anadir ese nuevo texto arreglado como el nuevo texto del <h1>

// Su codigo aqui

//

// -----Parte 2

// - Crear un loop que itere (valla atravez de) el array images
// - Usar un if statement que coloque los links de las imagenes
// en el array correspondiente (ya creado "elliotArray o cuteArray")
// Pista: Buscar un methodo que anada data a un array

// NOTA: No olviden usar la consola para poder observar el resultado

let elliotArray = [];
let cuteArray = [];

// Su codigo aqui

//

///////////////////Setup - No Tocar/////////////////////////////////
// Codigo que agarra elliotArray y cuteArray para crear los <img> elements

const boxTop = document.getElementById("top");
const boxBottom = document.getElementById("bottom");

for (let i = 0; i < elliotArray.length; i++) {
  const image = document.createElement("img");
  image.src = elliotArray[i];
  boxTop.appendChild(image);
}

for (let i = 0; i < cuteArray.length; i++) {
  const image = document.createElement("img");
  image.src = cuteArray[i];
  boxBottom.appendChild(image);
}
