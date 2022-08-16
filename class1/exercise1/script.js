let images = [
  { description: "NoPE", link: "../resources/img4.jpg" },
  { description: "Elliot", link: "../resources/img0.jpg" },
  { description: "Cute", link: "../resources/img1.jpg" },
  { description: "NOPE", link: "../resources/img4.jpg" },
  { description: "NOPE", link: "../resources/img4.jpg" },
  { description: "Elliot", link: "../resources/img2.jpg" },
  { description: "Cute", link: "../resources/img3.jpg" },
  { description: "NOPE", link: "../resources/img4.jpg" },
  { description: "Elliot", link: "../resources/img5.jpg" },
  { description: "Cute", link: "../resources/img6.jpg" },
  { description: "Elliot", link: "../resources/img7.jpg" },
  { description: "Cute", link: "../resources/img8.jpg" },
  { description: "Nope", link: "../resources/img4.jpg" },
];

let elliotArray = [];
let cuteArray = [];

// NOTA: Para acceder a las propiedades dentro del array
// tienen que usar un mix de lo que vimos acerca de
// acceder a data dentro de arrays y objetos
// Ejemplo: images[0].description nos devuelve "NoPE"

// ----- PARTE 1

// - Acceder a el texto de los <h1> con DOM methods
// - Tomar ese texto del elemento <h1> y usar javascript methods
// para remover el character "*" que se encuentra dañando los titulos (M*r.R*obo*t y Cu*t*e*)
// - Una vez que tengan una variable con el texto arreglado (M*r.R*obo*t --> Mr.Robot)
// anadir ese nuevo texto arreglado como el nuevo texto del <h1>

/////////// Tu codigo aqui

// console.log("%c Byron ", "background: #222; color: #bada55");

// let correccion = document.querySelector(".robot").textContent;
// console.log(correccion);

// var extraer = correccion.substr(0, 1);
// var extraer2 = correccion.substr(2, 1);
// var extraer3 = correccion.substr(3, 1);

// let resultado = extraer + extraer2 + extraer3;

// console.log(resultado);

// let undiv2 = document.getElementsByTagName("h1")[1].textContent;
// console.log(undiv2);

// console.log("%c Leslie ", "background: #222; color: #bada55");

let undiv = document.getElementsByClassName("robot")[0].textContent;
let arrayDeStrings = undiv.split("*");
let resultadoFinal = arrayDeStrings.join("");

document.getElementsByClassName("robot")[0].textContent = resultadoFinal;

document.getElementsByTagName("h1")[1].textContent = document
  .getElementsByTagName("h1")[1]
  .textContent.split("*")
  .join("");

////////////////////////////////

// ----- PARTE 2

// - Crear un loop que itere (valla atravez de) el array images
// - Usar un if statement que coloque los links de las imagenes
// en el array correspondiente (ya creado "elliotArray o cuteArray")

/////////// Tu codigo aqui

console.log(images[5]);
console.log(images[5].description);

function prueba(termino) {
  for (let i = 0; i < termino.length; i++) {
    if (termino[i].description === "Elliot") {
      elliotArray.push(termino[i]);
    } else if (termino[i].description === "Cute") {
      cuteArray.push(termino[i]);
    } else {
      console.log("imagen no deseada");
    }
  }
}

prueba(images);

////////////////////////////////

///////////////////Setup - No Tocar/////////////////////////////////
// Codigo que agarra elliotArray y cuteArray para crear los <img> elements

const boxTop = document.getElementById("top");
const boxBottom = document.getElementById("bottom");

for (let i = 0; i < elliotArray.length; i++) {
  const image = document.createElement("img");
  image.src = elliotArray[i].link;
  boxTop.appendChild(image);
}

for (let i = 0; i < cuteArray.length; i++) {
  const image = document.createElement("img");
  image.src = cuteArray[i].link;
  boxBottom.appendChild(image);
}
