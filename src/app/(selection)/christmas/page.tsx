import Image from 'next/image'
import Link from 'next/link'

export default function ChristmasSelection() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src="/christmas/christmas-elfs-animate.svg"
          alt="Christmas elfs"
          width={750}
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
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-600 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/12-days">
              12 Days of Christmas
            </Link>
        </button>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-600 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/christmas-modelling">
              Christmas Modelling
            </Link>
        </button>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-600 text-gray-50 font-semibold shadow-lg p-2">
            <Link href="/puzzles/passage-decoding">
            Passage Decoding
            </Link>
        </button>
      </div>
    </main>
  )
}
