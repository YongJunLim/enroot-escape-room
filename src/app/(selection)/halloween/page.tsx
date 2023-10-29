import Image from 'next/image'
import Link from 'next/link'

export default function HalloweenSelection() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src="/halloween/evil-ghost-animate.svg"
          alt="Ghosts"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          Select Puzzle:
        </h1>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/4-thinkers">
              Ghosts of the 4 Thinkers
            </Link>
        </button>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/pumpkin-sequence">
              Pumpkin Sequence
            </Link>
        </button>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/north-light">
              Let the North Light Guide the Way
            </Link>
        </button>
      </div>
    </main>
  )
}
