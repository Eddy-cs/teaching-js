let images = [
  { description: "Elliot", likes: 10, link: "../../../resources/img0.jpg" },
  { description: "4544ASD", likes: 11, link: "../../../resources/img4.jpg" },
  { description: "Cute", likes: 7, link: "../../../resources/img1.jpg" },
  { description: "Elliot", likes: 21, link: "../../../resources/img2.jpg" },
  { description: "Cute", likes: 9, link: "../../../resources/img3.jpg" },
  { description: "678xxx", likes: 46, link: "../../../resources/img4.jpg" },
  { description: "Elliot", likes: 3, link: "../../../resources/img5.jpg" },
  { description: "Cute", likes: 24, link: "../../../resources/img6.jpg" },
  { description: "Elliot", likes: 11, link: "../../../resources/img7.jpg" },
  { description: "Cute", likes: 3, link: "../../../resources/img8.jpg" },
  { description: "Nope", likes: 15, link: "../../../resources/img4.jpg" },
];

let elliotArray = [];
let cuteArray = [];
let otherArray = [];

// -Nuestras ImagenFinal ahora contienen la propiedad like
// y esta vez queremos mostrar en el html solamente aquellas
// que tienen mas de 5 likes

// ----- PARTE 1

// - Usando un conditional statement (un if statement) colocar
// respectivamente en el array ya creado (elliotArrat o cuteArray)
// solamente las ImagenFinal que correspondan en su descripcion y ademas
// tengan una cantidad de "likes" mayor a 5

// Nota: Googlear y y usar el operador && para comparar 2 cosas la mismo tiempo
// dentro del if statement

/////////// Tu codigo aqui

// 1. Obtener texto Mr.Robot (innecesario)

let mostrarElliot = document.querySelector(".robot").textContent.split(" ")[1];
console.log(mostrarElliot);

// 2. Obtener description y cantidad de likes

let descripcionDeImagen = images[0].description;
console.log(descripcionDeImagen);

let cantidadDeLikes = images[0].likes;
console.log(cantidadDeLikes);

// 4. contar likes

function conteoLikes(numeroDeLikes) {
  if (numeroDeLikes > 5) {
    return "si";
  } else {
    return "no";
  }
}

console.log(conteoLikes(cantidadDeLikes));

// 5. Mostrar Imagenes en pagina

// elliotArray.push(images[0]);

// 4. Crear Conditional Statement

function resultado(condiciones) {
  for (let i = 0; i < condiciones.length; i++) {
    if (condiciones[i].description === "Elliot" && condiciones[i].likes > 5) {
      elliotArray.push(images[i]);
    } else if (
      condiciones[i].description === "Cute" &&
      condiciones[i].likes > 5
    ) {
      cuteArray.push(images[i]);
    } else {
      otherArray.push(images[i]);
    }
  }
}

resultado(images);

////////////////////////////////

// ----- PARTE 2

// - Analizar y comprender en el codigo que crea los <img> elements
// para las ImagenFinal Mr.robot y Cute que se muestran con el html (codigo de abajo)
// - Crear un nuevo array para poner las ImagenFinal que no pertenecen a
// ninguna categoria (como eliotArray y cuteArray)
// - Crear un loop que realize la misma logica que las
// otras categorias para añadir estas otras ImagenFinal
// - Añadir logica al if statement creado anteriormente para que incluya
// las ImagenFinal que no son ni Cute ni Elliot a nuevo array creado

// Este codigo crea los <img> elements
// para el div con id "top"  ImagenFinal Favorite MR.robot)

const boxTop = document.getElementById("top");

for (let i = 0; i < elliotArray.length; i++) {
  const image = document.createElement("img");
  image.src = elliotArray[i].link;
  boxTop.appendChild(image);
}

// Este codigo crea los <img> elements
// para el div con id "middle"  ImagenFinal Favorite Cute)

const boxMiddle = document.getElementById("middle");
for (let i = 0; i < cuteArray.length; i++) {
  const image = document.createElement("img");
  image.src = cuteArray[i].link;
  boxMiddle.appendChild(image);
}

/////////// Tu codigo aqui

// Este codigo crea los <img> elements
// para el div con id "botttom"  ImagenFinal Otras)

const boxBottom = document.getElementById("bottom");
for (let i = 0; i < otherArray.length; i++) {
  const image = document.createElement("img");
  image.src = otherArray[i].link;
  boxBottom.appendChild(image);
}
////////////////////////////////
