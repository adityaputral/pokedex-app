'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { IPokemonDetail } from '@/types/PokemonData';
import Link from 'next/link';

export default function PokemonDetail() {
  const params = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail>([]);

  useEffect(() => {
    async function populateData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
      );
      const data = await response.json();

      setPokemonDetail(data);
    }

    populateData();
  }, []);

  return (
    <>
      <Link href={'/'}>Back</Link>
      <h1>Pokemon Detail Page</h1>
      <section>
        <strong>Name</strong> : <p>{pokemonDetail.name || '-'}</p>
        <strong>Height</strong> : <p>{pokemonDetail.height || '-'}</p>
        <strong>Weight</strong> : <p>{pokemonDetail.weight || '-'}</p>
        <strong>Types</strong> :{' '}
        <p>
          {pokemonDetail.types && pokemonDetail.types.length > 0
            ? pokemonDetail.types.map(
                (
                  type: {
                    type: {
                      name: string;
                    };
                  },
                  i: number
                ) => (
                  <>
                    <p>{type.type.name}</p>
                  </>
                )
              )
            : '-'}
        </p>
        <strong>Stats</strong> :{' '}
        <p>
          {pokemonDetail.stats && pokemonDetail.stats.length > 0
            ? pokemonDetail.stats.map(
                (
                  stat: {
                    base_stat: number;
                    stat: {
                      name: string;
                    };
                  },
                  i: number
                ) => (
                  <>
                    <p>{stat.base_stat}</p>
                    <p>{stat.stat.name}</p>
                  </>
                )
              )
            : '-'}
        </p>
      </section>
    </>
  );
}
