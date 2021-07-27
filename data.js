//funcion filter
export function filtrar(tipoSelec, pokeInfo) {
  const filtrarTipo = pokeInfo.filter((poke) => poke.type.includes(tipoSelec));
  return filtrarTipo;
}
export function verRegion(region, pokeInfo) {
  const datoP = pokeInfo.filter((pokemon) => pokemon.generation.name == region);
  return datoP;
}

export function ordenaNombre(ab, pokeInfo) {
  let ordenarN = [];
  if (ab == "ascendente") {
    ordenarN = pokeInfo.sort((asc, desc) => {
      let actual = asc.name.toUpperCase();
      let siguiente = desc.name.toUpperCase();
      if (actual > siguiente) {
        return 1;
      }
      if (actual < siguiente) {
        return -1;
      }
      return 0;
    });
  } else if (ab == "descendente") {
    ordenarN = pokeInfo.sort((asc, desc) => {
      let actual = asc.name.toUpperCase();
      let siguiente = desc.name.toUpperCase();
      if (actual < siguiente) {
        return 1;
      }
      if (actual > siguiente) {
        return -1;
      }
      return 0;
    });
  }
  return ordenarN;
}
