// const insertarImagen = document.getElementById("imagen");
// const image = document.createElement("img");
// insertarImagen.appendChild(image);

// fetch("../images/img0.jpg")
//   .then((response) => {
//     console.log(response);
//     return response.blob();
//   })
//   .then(console.log(blob));

function conteoDeLikes(numeroDeLikes) {
  (function (numeroDeLikes) {
    if (numeroDeLikes > 5) {
      return "si";
    } else {
      return "no";
    }
  })(numeroDeLikes);
}

console.log(conteoDeLikes(10));
