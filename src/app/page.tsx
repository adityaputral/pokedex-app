'use client';

import { useState, useEffect } from 'react';
import { Pokemons, IPokemon } from '@/types/PokemonData';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Card from '../components/card/Card';

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
      <div className="mb-10">
        <Button>
          <Link href={'/pokemon/liked'}>See My Liked Pokemon</Link>
        </Button>
      </div>

      <section>
        {pokemonList && pokemonList.length > 0 ? (
          <Card items={pokemonList} />
        ) : (
          'No pokemon available'
        )}
      </section>
    </>
  );
}
