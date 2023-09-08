'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CircularProgress, {
  CircularProgressProps
} from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IPokemonDetail } from './../../../types/PokemonData';
import Link from 'next/link';
import { useLikedPokemons } from './../../../context/LikedPokemonContext';

import ElementIcon from '@/src/components/element-icon/ElementIcon';

export default function PokemonDetail() {
  const params = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail | any>({});

  const { likedPokemons, likePokemon, unlikePokemon } = useLikedPokemons();

  useEffect(() => {
    async function populateData() {
      const response = await fetch(`/api/pokemon/${params.pokemonName}`);
      const data = await response.json();

      setPokemonDetail(data);
    }

    populateData();
  }, []);

  const toggleLikedPokemon = (pokemonName: string) => {
    likedPokemons.includes(pokemonName)
      ? unlikePokemon(pokemonName)
      : likePokemon(pokemonName);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-7">
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-3xl">
            {pokemonDetail.name || '-'}
          </h1>

          <IconButton
            aria-label="like and unlike"
            onClick={() => toggleLikedPokemon(pokemonDetail.name)}
          >
            {likedPokemons.includes(pokemonDetail.name) ? (
              <FavoriteIcon className="text-red" />
            ) : (
              <FavoriteBorderIcon></FavoriteBorderIcon>
            )}
          </IconButton>
        </div>
        <Button>
          <Link href={'/'}>Back</Link>
        </Button>
      </div>

      <section>
        <div className="flex justify-between items-center mb-7">
          {pokemonDetail.sprites?.front_default && (
            <Image
              src={pokemonDetail.sprites?.front_default || ''}
              width={300}
              height={300}
              alt="Picture of the author"
            />
          )}

          <div className="">
            <label>
              <strong>Height</strong>
            </label>
            :<p>{pokemonDetail.height || '-'} cm</p>
            <strong>Weight</strong> : <p>{pokemonDetail.weight || '-'} kg</p>
            <strong>Types</strong> :{' '}
            <p className="capitalize color-white">
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
                      <span key={i}>
                        <ElementIcon type={type.type?.name}></ElementIcon>
                        {type.type.name}
                      </span>
                    )
                  )
                : '-'}
            </p>
            <strong>Stats</strong> :{' '}
            <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
              {pokemonDetail.stats && pokemonDetail.stats.length > 0
                ? pokemonDetail.stats.map(
                    (
                      stat: {
                        base_stat: number | string;
                        stat: {
                          name: string;
                        };
                      },
                      i: number
                    ) => (
                      <Grid item xs={4} sm={3} key={i}>
                        <Box
                          sx={{
                            position: 'relative',
                            display: 'inline-flex'
                          }}
                        >
                          <CircularProgress
                            variant="determinate"
                            value={+stat.base_stat}
                          />
                          <Box
                            sx={{
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              position: 'absolute',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography
                              variant="caption"
                              component="div"
                              className="capitalize"
                            >
                              {stat.base_stat}
                            </Typography>
                          </Box>
                        </Box>
                        <p className="uppercase">{stat.stat.name}</p>
                      </Grid>
                    )
                  )
                : '-'}
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
}
