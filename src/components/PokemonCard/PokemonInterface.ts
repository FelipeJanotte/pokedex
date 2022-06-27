export interface PokemonInterface {
  name: string;
  types: PokemonType[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
