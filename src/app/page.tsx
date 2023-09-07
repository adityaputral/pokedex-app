'use client';

import { useState, useEffect } from 'react';
import { Pokemons, IPokemon, IPokemonDetail } from '@/types/PokemonData';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Card from '../components/card/Card';
import Pagination from '../components/pagination/Pagination';
import typeToColorMapper from '@/src/utils/typeToColorMapper';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemons>([]);

  const fetchDetailedDataOfThePokemon = async (
    name: string
  ): IPokemonDetail => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: IPokemonDetail = await response.json();

    return data;
  };

  async function populateData(query: string = '') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?${query}`);
    const data = await response.json();

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

    setPokemonList(pokemonListData);
  }

  useEffect(() => {
    populateData();
  }, []);

  async function changeCurrentActivePage(pageNumber: number): Promise<void> {
    populateData(`offset=${pageNumber}`);
  }

  return (
    <>
      <div className="mb-10">
        <Button>
          <Link href={'/pokemon/liked'}>See My Liked Pokemon</Link>
        </Button>
      </div>

      <section>
        <div className="mb-10">
          {pokemonList && pokemonList.length > 0 ? (
            <Card items={pokemonList} />
          ) : (
            'No pokemon available'
          )}
        </div>

        <div className="flex items-center justify-center">
          <Pagination
            currentActivePageNumberChanged={changeCurrentActivePage}
          />
        </div>
      </section>
    </>
  );
}
