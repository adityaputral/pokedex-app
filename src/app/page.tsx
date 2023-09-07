'use client';

import { useState, useEffect } from 'react';
import { Pokemons, IPokemon, IPokemonDetail } from '@/types/PokemonData';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '../components/card/Card';
import Pagination from '../components/pagination/Pagination';
import { LikedPokemonProvider } from './../context/LikedPokemonContext';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemons>([]);
  const [totalPage, setTotalPage] = useState<number>(1);

  const limit = 20;

  async function populateData(query: string = '') {
    const response = await fetch(`/api/pokemon?${query}`);
    const data = await response.json();

    const pokemonListData = data.results;

    setPokemonList(pokemonListData);
    setTotalPage(Math.floor(data.count / 20));
  }

  useEffect(() => {
    populateData();
  }, []);

  async function changeCurrentActivePage(pageNumber: number): Promise<void> {
    populateData(`offset=${pageNumber > 1 ? limit * (pageNumber - 1) + 1 : 1}`);
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
            count={totalPage}
          />
        </div>
      </section>
    </>
  );
}
