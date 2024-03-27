interface Regions {
  regionName: string;
  regionPokedexNumber: number;
}

interface Pokemon {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  types: string[];
  regions: Regions[];
}

export type { Pokemon as PokemonInterface };
