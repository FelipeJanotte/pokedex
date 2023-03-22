import { PokemonOnListInterface } from "./Pokemon";

export interface ListPokemonInterface {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<PokemonOnListInterface>
}