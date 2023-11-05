'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import Button from '../../../components/Button'
import type { Puzzle } from '../puzzle'
import _puzzle_details from '../puzzle_details.json'
const puzzle_details: Puzzle[] = _puzzle_details as Puzzle[]

export default function Puzzle_Page({ params }: { params: { puzzle: string } }) {
  const { puzzle } = params
  const selected_puzzle: Puzzle = puzzle_details.filter(
    (puzzle_detail) => puzzle_detail.url_path === puzzle
  )[0]
  if (!selected_puzzle) {
    notFound();
  }
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <Image
        src={selected_puzzle.illustration}
        alt={selected_puzzle.illustration_alt}
        width={500}
        height={500}
      />
    </main>
  )
}
