import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 auto-rows-min justify-items-center items-center gap-2 p-8">
      <div>
        <Image
          src="/christmas/friends-singing-christmas-carol-animate.svg"
          alt="Friends singing a Christmas carol"
          width={750}
          height={500}
        />
      </div>
      <div>
        <h1 className={`mb-4 text-3xl font-bold`}>
          12 Days of Christmas
        </h1>
      </div>
      <div className="grid grid-cols-4 justify-items-stretch gap-3">
        <input
          className="w-14 h-14 rounded-md flex items-center justify-center bg-gray-100 text-gray-950 font-bold shadow-inner" 
          type="text"
          value=""
          maxLength={1}
        />
        <input
          className="w-14 h-14 rounded-md flex items-center justify-center bg-gray-100 text-gray-950 font-bold shadow-inner" 
          type="text"
          value=""
          maxLength={1}
        />
        <input
          className="w-14 h-14 rounded-md flex items-center justify-center bg-gray-100 text-gray-950 font-bold shadow-inner" 
          type="text"
          value=""
          maxLength={1}
        />
        <input
          className="w-14 h-14 rounded-md flex items-center justify-center bg-gray-100 text-gray-950 font-bold shadow-inner" 
          type="text"
          value=""
          maxLength={1}
        />
      </div>
    </main>
  )
}
