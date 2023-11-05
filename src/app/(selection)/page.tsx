// Main home page
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src="/escape-room-animate.svg"
          alt="Escape room"
          width={750}
          height={500}
        />
      </div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          Select Escape Room:
        </h1>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-600 text-gray-50 font-semibold shadow-lg">
            <Link href="/christmas">
              Christmas
            </Link>
        </button>
      </div>
      <div className="">
        <button
          className="w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-gray-50 font-semibold shadow-lg">
            <Link href="/halloween">
              Halloween
            </Link>
        </button>
      </div>
    </main>
  )
}
