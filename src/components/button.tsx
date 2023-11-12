import Link from 'next/link'

interface ButtonProps {
  puzzleId?: number | undefined
  category: string,
  buttonLink: string,
  buttonName: string
}

export default function Button(props: ButtonProps) {
  let buttonColour: string = ""
  if (props.category === "Christmas") {
    buttonColour = "from-rose-500 to-red-600"
  } else if (props.category === "Halloween") {
    buttonColour = "from-amber-500 to-orange-500"
  }
  return (
    <button
      key={props.puzzleId ? props.puzzleId  : undefined}
      className={`w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r ${buttonColour} text-gray-50 font-semibold shadow-lg p-2`}>
      <Link href={props.buttonLink}>
        {props.buttonName}
      </Link>
    </button>
  )

}