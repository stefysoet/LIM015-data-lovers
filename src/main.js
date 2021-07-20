import { filtrar } from "./data.js";
import data from "./data/pokemon/pokemon.js";
const pokeInfo = data.pokemon;

function buscarPokemon(pokeInfo) {
  const mostrarPokemon = document.querySelector("#info");
  //console.log(pokeInfo);
  for (let i = 0; i < pokeInfo.length; i++) {
    const pokeImage = pokeInfo[i].img;
    const pokeNombre = pokeInfo[i].name;
    const pokeNumero = pokeInfo[i].num;
    const pokeTipo = pokeInfo[i].type;

    let contenedorPadre = document.createElement("div");
    contenedorPadre.classList.add("cardpokemon");
    //Hijo del contenedor principal
    let numero = document.createElement("p");
    numero.classList.add("pokemonnumero");
    numero.textContent = "#" + pokeNumero;
    contenedorPadre.appendChild(numero);

    let aRef = document.createElement("a");

    let imagen = document.createElement("img");
    imagen.classList.add("pokemonimagen");
    imagen.src = pokeImage;
    aRef.appendChild(imagen);
    aRef.href = "#" + pokeInfo[i].num;
    contenedorPadre.appendChild(aRef);

    let nombre = document.createElement("p");
    nombre.classList.add("pokemonnombre");
    nombre.textContent = pokeNombre;
    contenedorPadre.appendChild(nombre);

    let tipo = document.createElement("p");
    tipo.classList.add("pokemontipo");
    tipo.textContent = pokeTipo.join(" ");
    contenedorPadre.appendChild(tipo);

    let seccionModal = document.createElement("section");
    seccionModal.id = pokeInfo[i].num;
    seccionModal.classList.add("modalDialog");

    let seccionContenido = document.createElement("section");
    let etiquetaA = document.createElement("a");
    etiquetaA.classList.add("close");
    etiquetaA.href = "#close";
    etiquetaA.textContent = "X";
    seccionContenido.appendChild(etiquetaA);
    seccionModal.appendChild(seccionContenido);
    let nombreP = document.createElement("h3");
    nombreP.textContent = pokeInfo[i].name;
    let imagenP = document.createElement("img");
    imagenP.textContent = pokeInfo[i].img;
    let resumen = document.createElement("p");
    resumen.textContent = pokeInfo[i].about;
    seccionContenido.appendChild(nombreP);
    seccionContenido.appendChild(imagenP);
    seccionContenido.appendChild(resumen);
    contenedorPadre.appendChild(seccionModal);

    // let verMas = document.createElement("a");
    // verMas.classList.add("masInfo");
    // verMas.textContent = "Ver más";

    // verMas.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   fichaTecnica(pokeInfo[i]);
    // });

    // nombre.appendChild(verMas);
    mostrarPokemon.appendChild(contenedorPadre);
  }
}
// const todosPokemon = pokeInfo.map(pokemon => {
//     return pokemon;
// });
// const tipoTodo = document.querySelector('#todos');
// tipoTodo.addEventListener("click", tipoTodo(todosPokemon));
// //function todosPokemon(pokeInfo => pokemon.map(buscarPokemon));

buscarPokemon(pokeInfo);

const filtro = document.querySelector("#tipo");
filtro.addEventListener("change", (event) => {
  const tipoSelec = event.target.value;
  const resultado = filtrar(tipoSelec, pokeInfo);
  limpiarPokemon();
  buscarPokemon(resultado);
});
//limpiar
function limpiarPokemon() {
  document.querySelector("#info").innerHTML = "";
}

//Probando busqueda
// let pokemon = document.getElementById('pokeName');
// const botonSearch = document.querySelector('#searchPokemon');

// function insertPokemon(){
//    //console.log(pokeInfo);
//     //console.log("Presionaste buscar");
//     const pokeBusqueda = pokeInfo.filter(search => search.name.toLowerCase() == pokemon.value.trim().toLowerCase() || parseInt(search.num) == parseInt(pokemon.value.trim()));
//     //console.log(pokeBusqueda);
//     limpiarPokemon();
//     buscarPokemon(pokeBusqueda);

// }
// botonSearch.addEventListener('click',insertPokemon);
//botonSearch.addEventListener('touchstart',insertPokemon); //para dispositivos moviles

function buscadorPokemon() {
  let ingresarDato = document.querySelector("#pokeName").value;
  let guardarInfo;
  if (isNaN(ingresarDato)) {
    guardarInfo = pokeInfo.filter((poke) => poke.name.includes(ingresarDato));
  } else {
    guardarInfo = pokeInfo.filter(
      (poke) => parseInt(poke.num) == parseInt(ingresarDato)
    );
  }
  limpiarPokemon();
  buscarPokemon(guardarInfo);
}

document.querySelector("#searchPokemon").addEventListener("click", function () {
  buscadorPokemon();
});

// function fichaTecnica(pokeInfo) {
//   document.querySelector("#info").style.display = "none";
//   document.querySelector("#contenedorFicha").style.display = "block";
//   // limpiarPokemon("#contenedorFicha");
//   //console.log(pokeInfo);
//   const fichaPoke = document.querySelector("#contenedorFicha");
//   const quickMove = pokeInfo["quick-move"].map((movimiento) => {
//     return `<ul><li>${movimiento.name}</li>
//     <li>${movimiento["type"]}</li>
//     <li>${movimiento["base-damage"]}</li>
//     <li>${movimiento["energy"]}</li>
//     <li>${movimiento["move-duration-seg"]}</li>
//     </ul>`;
//   });
//   console.log(quickMove);
//   const specialAttack = pokeInfo["special-attack"].map((attack) => {
//     return `<ul><li>${attack.name}</li>
//     <li>${attack["type"]}</li>
//     <li>${attack["base-damage"]}</li>
//     <li>${attack["energy"]}</li>
//     <li>${attack["move-duration-seg"]}</li>
//     </ul>`;
//   });
//   fichaPoke.innerHTML = `<section class="fichaP">
//   <p id="nombreF">${pokeInfo.name}</p>
//   <p id="imgn"><img src="${pokeInfo.img}"></p>
//   <p id="resumen">"${pokeInfo.about}"</p>
//   <p>"${pokeInfo.resistant}"</p>
//   <p>"${pokeInfo.weaknesses}"</p>
//   <p>"${quickMove.join()}"</p>
//   <p>"${specialAttack.join()}"</p>
//   </section>`;
// }
