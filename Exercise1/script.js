let images = [
  { description: "NoPE", link: "img4.jpg" },
  { description: "Elliot", link: "img0.jpg" },
  { description: "Cute", link: "img1.jpg" },
  { description: "NOPE", link: "img4.jpg" },
  { description: "NOPE", link: "img4.jpg" },
  { description: "Elliot", link: "img2.jpg" },
  { description: "Cute", link: "img3.jpg" },
  { description: "NOPE", link: "img4.jpg" },
  { description: "Elliot", link: "img5.jpg" },
  { description: "Cute", link: "img6.jpg" },
  { description: "Elliot", link: "img7.jpg" },
  { description: "Cute", link: "img8.jpg" },
  { description: "Nope", link: "img4.jpg" },
];

// NOTA: Para acceder a las propiedades dentro del array
// tienen que usar un mix de lo que vimos acerca de
// acceder a data dentro de arrays y objetos
// Ejemplo: images[0].description nos devuelve "NoPE"

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
