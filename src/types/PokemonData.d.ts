export interface IPokemon {
  name: string;
  url: string;
  img: string;
}

export type Pokemons = IPokemon[];

export interface IPokemonDetail {
  name: string;
  species: {
    name: string;
  };
  moves: {
    move: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number | string;
    effort: number | string;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: Record<string, string | null>;
}
