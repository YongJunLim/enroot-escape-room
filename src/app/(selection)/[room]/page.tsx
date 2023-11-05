// Main home page
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Button from '../../../components/button'
import type { Puzzle } from '../../puzzles/puzzle'
import _puzzleDetails from '../../puzzles/puzzleDetails.json'
const puzzleDetails: Puzzle[] = _puzzleDetails as Puzzle[]
const rooms: string[] = [...new Set(
  puzzleDetails.flatMap(
    (puzzle) => puzzle.category.toLowerCase()
  )
)]

export default function puzzleSelection({ params }: { params: { room: string } }) {
  const { room } = params
  if (!rooms.includes(room)) {
    notFound();
  }
  const room_puzzles: Puzzle[] = puzzleDetails.filter((puzzle) => puzzle.category.toLowerCase() === room)
  const room_image = <Image
    src={room_puzzles[0].illustration}
    alt={room_puzzles[0].illustrationAlt}
    height={600}
    width={600}
  />
  const puzzleButtons = room_puzzles.slice(1).map(puzzle =>
    <div>
      <Button
        category={puzzle.category}
        buttonLink={`/puzzles/${puzzle.urlPath}`}
        buttonName={puzzle.name}
      />
    </div>
  );
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>{room_image}</div>
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
          Select {room_puzzles[0].category} Puzzle:
        </h1>
      </div>
      {puzzleButtons}
    </main>
  )
}
