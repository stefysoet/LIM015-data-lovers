import {filtrar} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokeInfo = data.pokemon;

function buscarPokemon(pokeInfo){
    const mostrarPokemon= document.querySelector('#info');
    //console.log(pokeInfo);
    for (let i=0; i<pokeInfo.length; i++){
        const pokeImage= pokeInfo[i].img;
        const pokeNombre= pokeInfo[i].name;
        const pokeNumero= pokeInfo[i].num;
        const pokeTipo= pokeInfo[i].type;
        let mostrarTipo;
        
            for (let j=0; j<pokeTipo.length; j++){
             mostrarTipo=pokeTipo[j];
         }

        let contenedorPadre = document.createElement('div');
            contenedorPadre.classList.add("cardpokemon")
        //Hijo del contenedor principal
            let numero = document.createElement('p');
            numero.classList.add("pokemonnumero")
        numero.textContent = '#'+ pokeNumero;
        contenedorPadre.appendChild(numero);
        
        let imagen = document.createElement('img');
            imagen.classList.add("pokemonimagen")
        imagen.src = pokeImage;
        contenedorPadre.appendChild(imagen);

        let nombre = document.createElement('p');
            nombre.classList.add("pokemonnombre")
        nombre.textContent = pokeNombre;
        contenedorPadre.appendChild(nombre);

        let tipo = document.createElement('p');
            tipo.classList.add("pokemontipo")
        tipo.textContent = mostrarTipo;
        contenedorPadre.appendChild(tipo);

        mostrarPokemon.appendChild(contenedorPadre);
    }
}
buscarPokemon(pokeInfo);

const filtro = document.querySelector('#tipo');
filtro.addEventListener("change", (event) => {
    const tipoSelec = event.target.value;
    const resultado = filtrar(tipoSelec,pokeInfo);
    limpiarPokemon();
    buscarPokemon(resultado);
} )
//limpiar 
function limpiarPokemon(){
    document.querySelector('#info').innerHTML="";

}