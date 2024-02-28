//Tomando los Inputs
let nombreInput = document.getElementById("nombre");
let cedulaInput = document.getElementById("cedula");
let municipioInput = document.getElementById("municipio");
let edadInput = document.getElementById("edad");

//Tomando el form
let form = document.getElementById("form");

//Agregando el Listener

form.addEventListener('submit', e =>{
  e.preventDefault();

  //Toma los datos enviados del form
  const datos = new FormData(e.target)

  //Convierte en un objeto
  const datosAtleta = Object.fromEntries(datos.entries());


  //Base de datos donde se guardaran todos los atletas
  let bD = [];

  //Sentencia if para ver si existe la lista con los atletas

  //if (localStorage.getItem("list") === null) {
  
  // read bd in localStorage
  bD = JSON.parse(localStorage.getItem("list"))
  // push datosAtleta to bd
  bD.push(datosAtleta);
  // save in bd
  localStorage.setItem("list", JSON.stringify(bD));

  // show bd
  console.log(JSON.parse(localStorage.getItem("list")) )

  /*} else {
    agregar();
  }



  function agregar() {
    bD.push(datosAtleta);
    let bDActualizada = localStorage.setItem("list", JSON.stringify(bD));
    console.log(bDActualizada);
  }*/

  nombreInput.value = "";
  cedulaInput.value = "";
  municipioInput.value = "";
  edadInput.value = "";

})
