import { Pokemons, IPokemon, IPokemonDetail } from '@/types/PokemonData';
import typeToColorMapper from '@/src/utils/typeToColorMapper';
import { NextResponse, NextRequest } from 'next/server';

const fetchDetailedDataOfThePokemon = async (name: string): IPokemonDetail => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: IPokemonDetail = await response.json();

  return data;
};

export async function GET(request: Request) {
  const query = new URL(request.url).search;

  const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon${query}`);
  const data = await responseData.json();

  const pokemonListData = data.results;

  for (let index = 0; index < pokemonListData.length; index++) {
    const element = pokemonListData[index];

    const detailedData = await fetchDetailedDataOfThePokemon(
      pokemonListData[index].name
    );
    pokemonListData[index].image = detailedData?.sprites?.front_default || '';
    pokemonListData[index].background =
      typeToColorMapper(detailedData.types[0].type.name) || '';
  }

  return NextResponse.json({ results: pokemonListData, count: data.count });
}
