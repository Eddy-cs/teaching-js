let images = [
  { description: "Elliot", likes: 10, link: "../resources/img0.jpg" },
  { description: "4544ASD", likes: 11, link: "../resources/img4.jpg" },
  { description: "Cute", likes: 7, link: "../resources/img1.jpg" },
  { description: "Elliot", likes: 21, link: "../resources/img2.jpg" },
  { description: "Cute", likes: 9, link: "../resources/img3.jpg" },
  { description: "678xxx", likes: 46, link: "../resources/img4.jpg" },
  { description: "Elliot", likes: 3, link: "../resources/img5.jpg" },
  { description: "Cute", likes: 24, link: "../resources/img6.jpg" },
  { description: "Elliot", likes: 11, link: "../resources/img7.jpg" },
  { description: "Cute", likes: 3, link: "../resources/img8.jpg" },
  { description: "Nope", likes: 15, link: "../resources/img4.jpg" },
];

let elliotArray = [];
let cuteArray = [];

// -Nuestras imagenes ahora contienen la propiedad like
// y esta vez queremos mostrar en el html solamente aquellas
// que tienen mas de 5 likes

// ----- PARTE 1

// - Usando un conditional statement (un if statement) colocar
// respectivamente en el array ya creado (elliotArrat o cuteArray)
// solamente las imagenes que correspondan en su descripcion y ademas
// tengan una cantidad de "likes" mayor a 5

// Nota: Googlear y y usar el operador && para comparar 2 cosas la mismo tiempo
// dentro del if statement

/////////// Tu codigo aqui

////////////////////////////////

// ----- PARTE 2

// - Analizar y comprender en el codigo que crea los <img> elements
// para las imagenes Mr.robot y Cute que se muestran con el html (codigo de abajo)
// - Crear un nuevo array para poner las imagenes que no pertenecen a
// ninguna categoria (como eliotArray y cuteArray)
// - Crear un loop que realize la misma logica que las
// otras categorias para añadir estas otras imagenes
// - Añadir logica al if statement creado anteriormente para que incluya
// las imagenes que no son ni Cute ni Elliot a nuevo array creado

// Este codigo crea los <img> elements
// para el div con id "top" (imagenes Favorite MR.robot)

const boxTop = document.getElementById("top");

for (let i = 0; i < elliotArray.length; i++) {
  const image = document.createElement("img");
  image.src = elliotArray[i].link;
  boxTop.appendChild(image);
}

// Este codigo crea los <img> elements
// para el div con id "middle" (imagenes Favorite Cute)

const boxMiddle = document.getElementById("middle");
for (let i = 0; i < cuteArray.length; i++) {
  const image = document.createElement("img");
  image.src = cuteArray[i].link;
  boxMiddle.appendChild(image);
}

/////////// Tu codigo aqui

// Este codigo crea los <img> elements
// para el div con id "botttom" (imagenes Otras)

////////////////////////////////
