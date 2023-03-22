import axios from "axios";
import { ListPokemonInterface } from "./interfaces/ListPokemon";
import { PokemonInterface } from "./interfaces/Pokemon";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const api = {
  Get: {
    ListPokemon: async function (limit: number, offset: number) {
      return instance
        .get(`pokemon?limit=${limit}&offset=${offset}`)
        .then(({ data }: { data: ListPokemonInterface }) => {
          return data;
        });
    },
    PokemonByName: async function (name: string) {
      return instance
        .get(`pokemon/${name}`)
        .then(({ data }: { data: PokemonInterface }) => {
          return data;
        });
    },
  },
};
