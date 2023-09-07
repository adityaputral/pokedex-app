import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  const pathName = new URL(request.url).pathname;
  const pathNameArr = pathName.split('/');
  const pokemonName = pathNameArr[pathNameArr.length - 1];
  console.log(pokemonName);

  const responseData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await responseData.json();

  return NextResponse.json(data);
}
