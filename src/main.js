import data from './data/pokemon/pokemon.js';
import{ example}from './data.js';

//eslint-disable-next-line no-console
console.log(example, data);
const buttonpokedex = document.getElementById("pokedex");
buttonpokedex.addEventListener("click" , function(){
    document.getElementById("data").innerHTML=data.pokemon.map(example).join(" ")
})
//funcion filter
function filtrar(tipo){
    const look = data.pokemon.filter(poke => poke.type.includes(tipo));
    console.log(look)
  }
  filtrar("grass");
const buttonfiltrador =document.getElementById("filtrador");
buttonfiltrador.addEventListener("click", function(){
    console.log("soyunboton");
})
