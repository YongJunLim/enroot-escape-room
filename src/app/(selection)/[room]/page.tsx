// Main home page
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Button from '../../../components/Button'
import type { Puzzle } from '../../puzzles/puzzle'
import _puzzle_details from '../../puzzles/puzzle_details.json'
const puzzle_details: Puzzle[] = _puzzle_details as Puzzle[]
const rooms: string[] = [...new Set(
  puzzle_details.flatMap(
    (puzzle) => puzzle.category.toLowerCase()
  )
)]

export default function Home({ params }: { params: { room: string } }) {
  const { room } = params
  if (!rooms.includes(room)) {
    notFound();
  }
  const room_puzzles: Puzzle[] = puzzle_details.filter((puzzle) => puzzle.category.toLowerCase() === room)
  const room_image = <Image
    src={room_puzzles[0].illustration}
    alt={room_puzzles[0].illustration_alt}
    height={600}
    width={600}
  />
  const puzzle_buttons = room_puzzles.slice(1).map(puzzle =>
    <div>
      <Button
        category={puzzle.category}
        button_link={puzzle.url_path}
        button_name={puzzle.name}
      />
    </div>
  );
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>{room_image}</div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          Select {room_puzzles[0].category} Puzzle:
        </h1>
      </div>
      {puzzle_buttons}
    </main>
  )
}
