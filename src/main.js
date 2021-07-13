import data from './data/pokemon/pokemon.js';
import{ example}from './data.js';

//asignar valores para iniciar
// const pokeCard= document.querySelector('');
// const pokeName= document.querySelector('');
// const pokeImg= document.querySelector('');
// const pokeId= document.querySelector('');
// const pokeTypes= document.querySelector('');

//eslint-disable-next-line no-console
console.log(example, data);
const buttonpokedex = document.getElementById("pokedex");
buttonpokedex.addEventListener("click" , function(){
    document.getElementById("data").innerHTML=data.pokemon.map(example).join(" ")
})
//funcion filter
// function filtrar(tipo){
//     const look = data.pokemon.filter(poke => poke.type.includes(tipo));
//     console.log(look)
//   }
//   filtrar("grass");
// const buttonfiltrador =document.getElementById("filtrador");
// buttonfiltrador.addEventListener("click", function(){
//     console.log("soyunboton");
// })
// llamando al tipo
const selectElement = document.querySelector('.tipo');
selectElement.addEventListener()