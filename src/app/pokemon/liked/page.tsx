'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '../../../components/card/Card';
import { useLikedPokemons } from './../../../context/LikedPokemonContext';

export default function LikedPokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const { likedPokemons } = useLikedPokemons();

  useEffect(() => {
    async function populateData() {
      let mergedPokemonList = [...pokemonList];
      for (let index = 0; index < likedPokemons.length; index++) {
        const element = likedPokemons[index];
        const response = await fetch(`/api/pokemon/${element}`);
        const data = await response.json();
        let result = {
          name: '',
          image: ''
        };

        result.image = data.sprites?.front_default;
        result.name = data.name;

        mergedPokemonList = [...mergedPokemonList, result];
      }

      setPokemonList(mergedPokemonList);
    }

    populateData();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-7">
        <h1 className="uppercase font-bold text-3xl">Liked Pokemon</h1>

        <Button>
          <Link href={'/'}>Back</Link>
        </Button>
      </div>
      {pokemonList && pokemonList.length > 0 ? (
        <Card items={pokemonList} />
      ) : (
        'You havent added any liked Pokemon yet'
      )}
    </>
  );
}
