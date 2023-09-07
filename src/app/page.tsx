'use client';

import { useState, useEffect } from 'react';
import { Pokemons, IPokemon } from '@/types/PokemonData';
import Link from 'next/link';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemons>([]);

  useEffect(() => {
    async function populateData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();

      setPokemonList(data.results);
    }

    populateData();
  }, []);

  return (
    <>
      <h1>Pokemon Listing</h1>

      <Link href={'/pokemon/liked'}>See My Liked Pokemon</Link>

      <section>
        {pokemonList && pokemonList.length > 0
          ? pokemonList.map((pokemon: IPokemon, i: number) => (
              <>
                <Link href={`/pokemon/${pokemon.name}`} key={i}>
                  {pokemon.name}
                </Link>
                <br />
              </>
            ))
          : 'No pokemon available'}
      </section>
    </>
  );
}
