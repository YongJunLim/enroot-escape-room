'use client'
 
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const params = useParams()
  console.log(params)
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <Image
        src="/halloween/zombies-animate.svg"
        alt="Zombies"
        width={500}
        height={500}
      />
    </main>
  )
}
