//funcion filter
export function filtrar(tipoSelec,pokeInfo){
  return pokeInfo.filter(poke => poke.type.includes(tipoSelec));
  }
//  export function buscadorPokemon(){
//    let ingresarDato = document.querySelector('#pokeName').value;
//    let guardarInfo;
//     if(isNaN(ingresarDato)){
//       guardarInfo = pokeInfo.filter((poke) => poke.name == ingresarDato);
//     } 
//     else{
//       guardarInfo = pokeInfo.filter((poke) => parseInt(poke.num) == parseInt(ingresarDato));
//     }
//  }