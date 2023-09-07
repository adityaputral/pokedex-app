import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PokemonContextType {
  likedPokemons: string[];
  likePokemon: (pokemon: string) => void;
  unlikePokemon: (pokemon: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const useLikedPokemons = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};

export const LikedPokemonProvider = ({ children }: { children: ReactNode }) => {
  const [likedPokemons, setLikedPokemons] = useState<string[]>([]);

  const likePokemon = (pokemon: string) => {
    setLikedPokemons([...likedPokemons, pokemon]);
  };

  const unlikePokemon = (pokemon: string) => {
    const filteredPokemon = likedPokemons.filter(
      (likedPokemon: string) => likedPokemon !== pokemon
    );

    console.log(filteredPokemon);

    setLikedPokemons(filteredPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{ likedPokemons, likePokemon, unlikePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
