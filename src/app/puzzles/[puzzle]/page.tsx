'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Button from '../../../components/button'
import type { Puzzle } from '../puzzle'
import _puzzleDetails from '../puzzleDetails.json'
const puzzleDetails: Puzzle[] = _puzzleDetails as Puzzle[]

export default function puzzlePage({ params }: { params: { puzzle: string } }) {
  const { puzzle } = params
  const selected_puzzle: Puzzle = puzzleDetails.filter(
    (puzzleDetail) => puzzleDetail.urlPath === puzzle
  )[0]
  if (!selected_puzzle) {
    notFound();
  }
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src={selected_puzzle.illustration}
          alt={selected_puzzle.illustrationAlt}
          width={500}
          height={500}
        />
      </div>
      <div>
        <p className="text-xs font-light text-gray-500">
          <Link
            href="https://storyset.com"
            prefetch={false}
          >
            Illustrations by Storyset
          </Link>
        </p>
      </div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          {selected_puzzle.name}
        </h1>
      </div>
      <div>
      </div>
    </main>
  )
}
