export interface PokedexInterface {
  count: number;
  next: null;
  previous: null;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}
