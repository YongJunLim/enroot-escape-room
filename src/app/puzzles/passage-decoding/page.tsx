import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <Image
        src="/christmas/gingerbread-man-cookies-animate.svg"
        alt="Gingerbread men"
        width={500}
        height={500}
      />
    </main>
  )
}
