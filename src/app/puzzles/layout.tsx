// Root layout for submission of puzzles
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './../globals.css'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jingle Bells and Spooky Spells',
  description: "Companion webapp for enROOT 2023's Halloween and Christmas themed escape rooms",
}

export default function PuzzleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}