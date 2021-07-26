import { ordenaNombre , verRegion } from '../src/data.js';

const pokemonMock = {
    pokemon: [
        {
        "num": "001",
        "name": "pikachu",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
        "size": {
          "height": "0.71 m",
          "weight": "6.9 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2"
        },
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
        "quick-move": [
          {
            "name": "vine whip",
            "type": "grass",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "sludge bomb",
            "type": "poison",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.3"
          },
          {
            "name": "seed bomb",
            "type": "grass",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.1"
          },
          {
            "name": "power whip",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "2.6"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "bulbasaur candy",
          "next-evolution": [{
            "num": "002",
            "name": "ivysaur",
            "candy-cost": "25",
            "next-evolution": [{
              "num": "003",
              "name": "venusaur",
              "candy-cost": "100"
            }]
          }]
        }
      },
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
        "size": {
          "height": "0.99 m",
          "weight": "13.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.07",
          "base-capture-rate": "0.1"
        },
        "spawn-chance": "0.042",
        "stats": {
          "base-attack": "151",
          "base-defense": "143",
          "base-stamina": "155",
          "max-cp": "1699",
          "max-hp": "134"
        },
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
        "quick-move": [
          {
            "name": "razor leaf",
            "type": "grass",
            "base-damage": "13",
            "energy": "7",
            "move-duration-seg": "1"
          },
          {
            "name": "vine whip",
            "type": "grass",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }
        ],
        "special-attack": [
          {
            "name": "sludge bomb",
            "type": "poison",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.3"
          },
          {
            "name": "solar beam",
            "type": "grass",
            "base-damage": "180",
            "energy": "-100",
            "move-duration-seg": "4.9"
          },
          {
            "name": "power whip",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "2.6"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "bulbasaur candy",
          "next-evolution": [{
            "num": "003",
            "name": "venusaur",
            "candy-cost": "100"
          }],
          "prev-evolution": [{
            "num": "001",
            "name": "bulbasaur",
            "candy-cost": "25"
          }]
        }
      },
      {
        "num": "003",
        "name": "abra",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
        "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
        "size": {
          "height": "2.01 m",
          "weight": "100.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.05",
          "base-capture-rate": "0.05"
        },
        "spawn-chance": "0.017",
        "stats": {
          "base-attack": "198",
          "base-defense": "189",
          "base-stamina": "190",
          "max-cp": "2720",
          "max-hp": "162"
        },
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
        "quick-move": [
          {
            "name": "razor leaf",
            "type": "grass",
            "base-damage": "13",
            "energy": "7",
            "move-duration-seg": "1"
          },
          {
            "name": "vine whip",
            "type": "grass",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }
        ],
        "special-attack": [
          {
            "name": "sludge bomb",
            "type": "poison",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.3"
          },
          {
            "name": "petal blizzard",
            "type": "grass",
            "base-damage": "110",
            "energy": "-100",
            "move-duration-seg": "2.6"
          },
          {
            "name": "solar beam",
            "type": "grass",
            "base-damage": "180",
            "energy": "-100",
            "move-duration-seg": "4.9"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "bulbasaur candy",
          "prev-evolution": [{
            "num": "002",
            "name": "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [{
              "num": "001",
              "name": "bulbasaur",
              "candy-cost": "25"
            }]
          }]
        }
      },
      {
        "num": "041",
        "name": "zubat",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
        "img": "https://www.serebii.net/pokemongo/pokemon/041.png",
        "size": {
          "height": "0.79 m",
          "weight": "7.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "poison",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.2",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "6.52",
        "stats": {
          "base-attack": "83",
          "base-defense": "73",
          "base-stamina": "120",
          "max-cp": "667",
          "max-hp": "106"
        },
        "resistant": [
          "grass",
          "fighting",
          "poison",
          "bug",
          "fairy"
        ],
        "weaknesses": [
          "electric",
          "ice",
          "psychic",
          "rock"
        ],
        "quick-move": [
          {
            "name": "quick attack",
            "type": "normal",
            "base-damage": "8",
            "energy": "10",
            "move-duration-seg": "0.8"
          },
          {
            "name": "bite",
            "type": "dark",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "poison fang",
            "type": "poison",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "1.7"
          },
          {
            "name": "air cutter",
            "type": "flying",
            "base-damage": "60",
            "energy": "-50",
            "move-duration-seg": "2.7"
          },
          {
            "name": "swift",
            "type": "normal",
            "base-damage": "60",
            "energy": "-50",
            "move-duration-seg": "2.8"
          },
          {
            "name": "sludge bomb",
            "type": "poison",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.3"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "zubat candy",
          "next-evolution": [{
            "num": "042",
            "name": "golbat",
            "candy-cost": "50",
            "next-evolution": [{
              "num": "169",
              "name": "crobat",
              "candy-cost": "100"
            }]
          }]
        }
      },
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
        "size": {
          "height": "0.61 m",
          "weight": "8.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "encounter": {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2"
        },
        "spawn-chance": "0.253",
        "stats": {
          "base-attack": "116",
          "base-defense": "93",
          "base-stamina": "118",
          "max-cp": "980",
          "max-hp": "105"
        },
        "resistant": [
          "fire",
          "grass",
          "ice",
          "bug",
          "steel"
        ],
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "flame charge",
            "type": "fire",
            "base-damage": "70",
            "energy": "-33",
            "move-duration-seg": "3.8"
          },
          {
            "name": "flame burst",
            "type": "fire",
            "base-damage": "70",
            "energy": "-50",
            "move-duration-seg": "2.6"
          },
          {
            "name": "flamethrower",
            "type": "fire",
            "base-damage": "70",
            "energy": "-50",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "charmander candy",
          "next-evolution": [{
            "num": "005",
            "name": "charmeleon",
            "candy-cost": "25",
            "next-evolution": [{
              "num": "006",
              "name": "charizard",
              "candy-cost": "100"
            }]
          }]
        }
      },
      {
        "num": "152",
        "name": "chikorita",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "about": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
        "img": "https://www.serebii.net/pokemongo/pokemon/152.png",
        "size": {
          "height": "0.89 m",
          "weight": "6.4 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass"
        ],
        "encounter": {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2"
        },
        "spawn-chance": null,
        "stats": {
          "base-attack": "92",
          "base-defense": "122",
          "base-stamina": "128",
          "max-cp": "935",
          "max-hp": "113"
        },
        "resistant": [
          "water",
          "electric",
          "grass",
          "ground"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "poison",
          "flying"
        ],
        "quick-move": [
          {
            "name": "vine whip",
            "type": "grass",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "energy ball",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "3.9"
          },
          {
            "name": "grass knot",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "2.6"
          },
          {
            "name": "body slam",
            "type": "normal",
            "base-damage": "50",
            "energy": "-33",
            "move-duration-seg": "1.9"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "chikorita candy",
          "next-evolution": [{
            "num": "153",
            "name": "bayleef",
            "candy-cost": "25",
            "next-evolution": [{
              "num": "154",
              "name": "meganium",
              "candy-cost": "100"
            }]
          }]
        }
      },
      {
        "num": "005",
        "name": "charmeleon",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
        "size": {
          "height": "1.09 m",
          "weight": "19.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "encounter": {
          "base-flee-rate": "0.07",
          "base-capture-rate": "0.1"
        },
        "spawn-chance": "0.012",
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        },
        "resistant": [
          "fire",
          "grass",
          "ice",
          "bug",
          "steel"
        ],
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "fire fang",
            "type": "fire",
            "base-damage": "11",
            "energy": "8",
            "move-duration-seg": "0.9"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "fire punch",
            "type": "fire",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.2"
          },
          {
            "name": "flame burst",
            "type": "fire",
            "base-damage": "70",
            "energy": "-50",
            "move-duration-seg": "2.6"
          },
          {
            "name": "flamethrower",
            "type": "fire",
            "base-damage": "70",
            "energy": "-50",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "charmander candy",
          "next-evolution": [{
            "num": "006",
            "name": "charizard",
            "candy-cost": "100"
          }],
          "prev-evolution": [{
            "num": "004",
            "name": "charmander",
            "candy-cost": "25"
          }]
        }
      },
]};

// TEST ORDENR POR NOMBRE
describe('ordenaNombre', () => {

    it('Es una funcion', () => {
        expect(typeof ordenaNombre).toBe('function');
    });

    it('Ordenar de A-Z', () => {
        const ordenarAZ = ordenaNombre ('ascendente' , pokemonMock.pokemon);
        expect(ordenarAZ[0].name).toBe('abra');
    });

    it('Ordenar de Z-A', () => {
        const ordenarZA = ordenaNombre ('descendente' , pokemonMock.pokemon);
        expect(ordenarZA[0].name).toBe('zubat');
    });

})

// TEST PARA REGION

describe('verRegion', () => {

    it('Es una funcion', () => {
        expect(typeof verRegion).toBe('function');
    });

    it('Region kanto', () => {
        const regionKanto = verRegion ('kanto' , pokemonMock.pokemon);
        expect(regionKanto[0].generation.name).toBe('kanto');
    });

    it('Region johto', () => {
        const regionJohto = verRegion ('johto' , pokemonMock.pokemon);
        expect(regionJohto[0].generation.name).toBe('johto');
    });

})
