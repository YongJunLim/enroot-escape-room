// Main home page
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'

export default function Home() {
  return (
    <main className="grid h-5/6 grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src="/escape-room-animate.svg"
          alt="Escape room"
          width={750}
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
          Select Escape Room:
        </h1>
      </div>
      <div>
        <Button
          category="Christmas"
          buttonLink="/christmas"
          buttonName="Christmas"
        />
      </div>
      <div>
        <Button
          category="Halloween"
          buttonLink="/halloween"
          buttonName="Halloween"
        />
      </div>
    </main>
  )
}
