import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-4 p-8">
      <div>
        <Image
          src="/christmas/santa-claus-sleigh-animate.svg"
          alt="Santa riding his sleigh"
          width={750}
          height={500}
        />
      </div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          Christmas Modelling
        </h1>
      </div>
    </main>
  )
}
