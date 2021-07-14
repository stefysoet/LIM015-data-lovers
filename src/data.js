//funcion filter
export function filtrar(tipoSelec,pokeInfo){
  return pokeInfo.filter(poke => poke.type.includes(tipoSelec));
  }
