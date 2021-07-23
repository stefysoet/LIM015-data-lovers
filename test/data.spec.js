// import { example, anotherExample } from '../src/data.js';

import { ordenaNombre } from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js';

describe('ordenaNombre', () => {

  it('Es una función', () => {
      expect(typeof ordenaNombre).toBe('function');
  });

  describe('ordenaNombre', () => {
    
    const output1 = [
      {
      "num": "001",
      "name": "bulbasaur",
      "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        }
      },
      {
          "num": "001",
          "name": "bulbasaur",
          "stats": {
              "base-attack": "118",
              "base-defense": "111",
              "base-stamina": "128",
              "max-cp": "1115",
              "max-hp": "113"
            }
          },
      {
          "num": "004",
          "name": "charmander",
          "stats": {
              "base-attack": "116",
              "base-defense": "93",
              "base-stamina": "118",
              "max-cp": "980",
              "max-hp": "105"
            },
          },
        {
        "num": "005",
        "name": "charmeleon",
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
        },
        {
        "num": "002",
        "name": "ivysaur",
        "stats": {
          "base-attack": "151",
          "base-defense": "143",
          "base-stamina": "155",
          "max-cp": "1699",
          "max-hp": "134"
          },
        },
      {
      "num": "003",
      "name": "venusaur",
      "stats": {
          "base-attack": "198",
          "base-defense": "189",
          "base-stamina": "190",
          "max-cp": "2720",
          "max-hp": "162"
        },
      },
    ];

    it('order A-Z', () => {
    expect(ordenaNombre(pokemons,"A-Z")).toStrictEqual(output1);
    });

  const output2 = [
    {
    "num": "003",
    "name": "venusaur",
    "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      },
    },
    {
        "num": "002",
        "name": "ivysaur",
        "stats": {
          "base-attack": "151",
          "base-defense": "143",
          "base-stamina": "155",
          "max-cp": "1699",
          "max-hp": "134"
        },
    },
    {
        "num": "005",
        "name": "charmeleon",
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
    },
    {
        "num": "004",
        "name": "charmander",
        "stats": {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
          },
    },
    {
        "num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }
    },
    {
        "num": "001",
        "name": "bulbasaur",
        "stats": {
            "base-attack": "118",
            "base-defense": "111",
            "base-stamina": "128",
            "max-cp": "1115",
            "max-hp": "113"
          }
    } 
];

    it('order Z-A', ()=> {
    expect(ordenaNombre(pokemons,"Z-A")).toStrictEqual(output2); 
    });
    });
});
