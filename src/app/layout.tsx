'use client';

import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { LikedPokemonProvider } from './../context/LikedPokemonContext';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Pokedex',
//   description: ''
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto p-4`}>
        <div className="flex justify-between items-center mb-10">
          <Link href={'/'}>
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <LikedPokemonProvider>{children}</LikedPokemonProvider>
      </body>
    </html>
  );
}
